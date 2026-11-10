/**
 * adminStore.ts
 * Helper CRUD ke localStorage untuk entitas Events, News, Partners.
 * Data seed dari file .ts dipakai sebagai fallback jika localStorage kosong.
 */

import { EventData, eventsData as seedEvents } from "./eventsData";
import { NewsData, newsData as seedNews } from "./newsData";
import { Partner, partners as seedPartners } from "./partnersData";

// ─── Keys ──────────────────────────────────────────────────────────────────
const KEYS = {
  events: "admin_events",
  news: "admin_news",
  partners: "admin_partners_v3",
  auth: "admin_logged_in",
};

// ─── Auth ──────────────────────────────────────────────────────────────────
export const ADMIN_CREDENTIALS = { username: "admin", password: "gridwiz2026" };

export function adminLogin(username: string, password: string): boolean {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem(KEYS.auth, "true");
    if (typeof document !== "undefined") {
      document.cookie = "admin_logged_in=true; path=/; max-age=86400; SameSite=Lax";
    }
    return true;
  }
  return false;
}

export function adminLogout() {
  localStorage.removeItem(KEYS.auth);
  if (typeof document !== "undefined") {
    document.cookie = "admin_logged_in=; path=/; max-age=0; SameSite=Lax";
  }
}

export function isAdminLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  const fromLocal = localStorage.getItem(KEYS.auth) === "true";
  const fromCookie = typeof document !== "undefined" && document.cookie.includes("admin_logged_in=true");
  return fromLocal || fromCookie;
}

// ─── Generic helpers ───────────────────────────────────────────────────────
function getStore<T>(key: string, seed: T[]): T[] {
  if (typeof window === "undefined") return seed;
  const raw = localStorage.getItem(key);
  if (!raw) return seed;
  try {
    return JSON.parse(raw) as T[];
  } catch {
    return seed;
  }
}

function setStore<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ─── EVENTS ────────────────────────────────────────────────────────────────
export function getEvents(): EventData[] {
  return getStore<EventData>(KEYS.events, seedEvents);
}

export function saveEvent(event: EventData) {
  const list = getEvents();
  const idx = list.findIndex((e) => e.id === event.id);
  if (idx >= 0) {
    list[idx] = event;
  } else {
    list.push(event);
  }
  setStore(KEYS.events, list);
}

export function deleteEvent(id: string) {
  const list = getEvents().filter((e) => e.id !== id);
  setStore(KEYS.events, list);
}

export function generateEventId(): string {
  return `evt_${Date.now()}`;
}

// ─── NEWS ──────────────────────────────────────────────────────────────────
export function getNews(): NewsData[] {
  return getStore<NewsData>(KEYS.news, seedNews);
}

export function saveNews(news: NewsData) {
  const list = getNews();
  const idx = list.findIndex((n) => n.id === news.id);
  if (idx >= 0) {
    list[idx] = news;
  } else {
    list.push(news);
  }
  setStore(KEYS.news, list);
}

export function deleteNews(id: string) {
  const list = getNews().filter((n) => n.id !== id);
  setStore(KEYS.news, list);
}

export function generateNewsId(): string {
  return `news_${Date.now()}`;
}

// ─── PARTNERS ──────────────────────────────────────────────────────────────
export function getPartners(): Partner[] {
  return getStore<Partner>(KEYS.partners, seedPartners);
}

export function savePartner(partner: Partner) {
  const list = getPartners();
  const idx = list.findIndex((p) => p.slug === partner.slug);
  if (idx >= 0) {
    list[idx] = partner;
  } else {
    list.push(partner);
  }
  setStore(KEYS.partners, list);
}

export function deletePartner(slug: string) {
  const list = getPartners().filter((p) => p.slug !== slug);
  setStore(KEYS.partners, list);
}

export function generatePartnerSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + `-${Date.now()}`;
}

// ─── Reset to seed (opsional untuk dev) ───────────────────────────────────
export function resetToSeed() {
  localStorage.removeItem(KEYS.events);
  localStorage.removeItem(KEYS.news);
  localStorage.removeItem(KEYS.partners);
}
