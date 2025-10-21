"use client";
import { useEffect, useState } from "react";

export default function PopUp() {
  const [showPopup, setShowPopup] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [allowPlay, setAllowPlay] = useState(false);

  const videoId = "RrFkEv5ysIM";

  useEffect(() => {
    setShowPopup(true);

    const timer = setTimeout(() => {
      setShowCloseButton(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-sm bg-black rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]">
            {showCloseButton && (
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
              >
                ✕
              </button>
            )}

            {!allowPlay && (
              <button
                onClick={() => setAllowPlay(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-semibold"
              >
                🔊 Tap to Play with Sound
              </button>
            )}

            {allowPlay ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&modestbranding=1&rel=0`}
                title="YouTube Shorts player"
                allow="autoplay; encrypted-media"
                className="w-full h-full rounded-2xl"
              ></iframe>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&rel=0`}
                title="YouTube Shorts preview"
                allow="autoplay; encrypted-media"
                className="w-full h-full rounded-2xl"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
