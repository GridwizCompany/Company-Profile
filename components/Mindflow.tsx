"use client";

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

type Role = "assistant" | "user";

type Message = {
  id: string;
  role: Role;
  content: string;
  timestamp: string;
};

type MinflowProps = {
  onOpen?: () => void;
  onClose?: () => void;
};

const STORAGE_KEY = "Minflow:session";
const MAX_MESSAGES = 20;

const suggestedQuestions = [
  "Apa layanan utama Gridwiz?",
  "Di mana kantor Gridwiz berada?",
  "Bagaimana cara menghubungi Gridwiz?",
];

const fallbackResponse =
  "Maaf, Minflow sedang mengalami kendala teknis saat menghubungi basis pengetahuan Gridwiz. Silakan coba lagi dalam beberapa saat atau hubungi tim kami melalui WhatsApp maupun email.";

const formatTimestamp = (date: Date) =>
  date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

export default function Minflow({ onOpen, onClose }: MinflowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasUnread, setHasUnread] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const isFirstLoad = messages.length === 0;

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return;
    }
    try {
      const parsed: Message[] = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setMessages(parsed.slice(-MAX_MESSAGES));
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages.slice(-MAX_MESSAGES))
    );
  }, [messages]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusableSelectors = [
      "button",
      "[href]",
      "textarea",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!panelRef.current) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const timer = setTimeout(() => textareaRef.current?.focus(), 60);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const toggleOpen = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setHasUnread(false);
        onOpen?.();
      } else {
        onClose?.();
      }
      return next;
    });
  };

  const handleClose = useCallback(() => {
    if (!isOpen) {
      return;
    }
    setIsOpen(false);
    onClose?.();
  }, [isOpen, onClose]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInput(value);
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      const maxHeight = 24 * 4;
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  };

  const appendMessage = useCallback((message: Omit<Message, "id">) => {
    setMessages((prev) => [
      ...prev.slice(-(MAX_MESSAGES - 1)),
      { ...message, id: crypto.randomUUID() },
    ]);
  }, []);

  const stopStreaming = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setIsStreaming(false);
    setIsTyping(false);
  };

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isStreaming) {
        return;
      }

      const trimmed = content.trim();
      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
        timestamp: formatTimestamp(new Date()),
      };

      setMessages((prev) => [
        ...prev.slice(-(MAX_MESSAGES - 1)),
        userMessage,
      ]);
      setInput("");

      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.value = "";
          textareaRef.current.style.height = "auto";
        }
      });

      setIsStreaming(true);
      setIsTyping(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const response = await fetch("/api/minflow", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              ...messages.map(({ role, content: messageContent }) => ({
                role,
                content: messageContent,
              })),
              { role: "user", content: trimmed },
            ],
          }),
          signal: controller.signal,
        });

        const data = await response.json().catch(() => ({}));
        const assistantContent =
          typeof data?.message === "string" ? data.message.trim() : "";

        appendMessage({
          role: "assistant",
          content: assistantContent || fallbackResponse,
          timestamp: formatTimestamp(new Date()),
        });

        if (!isOpen) {
          setHasUnread(true);
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          appendMessage({
            role: "assistant",
            content: fallbackResponse,
            timestamp: formatTimestamp(new Date()),
          });
          if (!isOpen) {
            setHasUnread(true);
          }
        }
      } finally {
        abortControllerRef.current = null;
        setIsStreaming(false);
        setIsTyping(false);
      }
    },
    [appendMessage, isOpen, isStreaming, messages]
  );

  const handleSubmit = useCallback(
    async (event?: FormEvent) => {
      event?.preventDefault();
      const currentInput = input.trim();
      if (!currentInput || isStreaming) {
        return;
      }
      await sendMessage(currentInput);
    },
    [input, isStreaming, sendMessage]
  );

  const handleTextareaKeyDown = (
    event: ReactKeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSubmit();
    }
  };

  const handleSuggestionClick = (question: string) => {
    if (isStreaming) {
      return;
    }
    void sendMessage(question);
  };

  const conversation = useMemo(() => messages, [messages]);

  return (
    <>
      <button
        type="button"
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 shadow-lg shadow-sky-500/30 transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 focus-visible:ring-offset-slate-950 sm:bottom-6 sm:right-6"
        aria-label={isOpen ? "Tutup Minflow chat" : "Buka Minflow chat"}
      >
        <svg
          aria-hidden="true"
          className="h-7 w-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M7 8h10M7 12h6" />
          <path d="M4 4h16v12H6l-2 4Z" />
        </svg>
        {!isOpen && hasUnread && (
          <span className="absolute right-2 top-2 inline-flex h-3 w-3 rounded-full bg-rose-400 shadow" />
        )}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Minflow conversation panel"
          className="fixed inset-0 z-40 flex items-end justify-end bg-transparent"
        >
          <div
            className="absolute inset-0"
            aria-hidden="true"
            onClick={handleClose}
          />
          <div
            ref={panelRef}
            className="relative bottom-4 right-4 w-full max-w-sm overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950 text-slate-100 shadow-[0_40px_120px_-40px_rgba(56,189,248,0.55)] ring-1 ring-slate-800/70 transition sm:bottom-6 sm:right-6 sm:max-w-sm md:w-[420px]"
          >
            <header className="flex items-center justify-between border-b border-slate-800/60 bg-slate-900/80 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-lg font-semibold text-white">
                  M
                  <span className="absolute -right-1 -bottom-1 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-white/90" />
                  </span>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Minflow</p>
                  <p className="text-xs text-slate-400">Selalu siap membantu</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isStreaming && (
                  <button
                    type="button"
                    onClick={stopStreaming}
                    className="rounded-full border border-slate-700/60 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-rose-400/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    Stop
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full p-2 text-slate-400 transition hover:bg-slate-800/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  aria-label="Tutup panel Minflow"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 6 18 18M6 18 18 6" />
                  </svg>
                </button>
              </div>
            </header>

            <div className="flex flex-col">
              <div
                ref={scrollRef}
                onCopy={(event) => event.preventDefault()}
                className="h-[320px] overflow-y-auto bg-slate-950/80 px-6 py-6 text-sm text-slate-200"
              >
                {conversation.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-5 flex flex-col ${
                      message.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <span
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 leading-relaxed ${
                        message.role === "user"
                          ? "bg-sky-500/80 text-white shadow-[0_10px_30px_-20px_rgba(56,189,248,0.8)]"
                          : "bg-slate-800/80 text-slate-100 border border-slate-700/70"
                      }`}
                    >
                      {message.content}
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      {message.timestamp}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="mb-5 flex items-center gap-2">
                    <span className="flex h-8 w-12 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70">
                      <span className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-sky-300 [animation-delay:-200ms]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-sky-300 [animation-delay:-100ms]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-sky-300" />
                      </span>
                    </span>
                    <span className="text-xs text-slate-400">
                      Minflow sedang mengetik...
                    </span>
                  </div>
                )}

                {isFirstLoad && (
                  <div className="mt-4 space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Suggested Questions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() => handleSuggestionClick(question)}
                          className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-sky-400/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-t border-slate-800/60 bg-slate-950/90 px-6 py-4"
              >
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-3 focus-within:border-sky-500/50 focus-within:ring-1 focus-within:ring-sky-400/40">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleTextareaKeyDown}
                    placeholder="Tulis pesan Anda..."
                    rows={1}
                    className="max-h-32 w-full resize-none bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                    aria-label="Ketik pesan untuk Minflow"
                    disabled={isStreaming}
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                      Enter to send | Shift + Enter = newline
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700/60"
                      disabled={!input.trim() || isStreaming}
                    >
                      <span>Kirim</span>
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="m5 12 14-7-7 14-1.5-4.5L5 12Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
