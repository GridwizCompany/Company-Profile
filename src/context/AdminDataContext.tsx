"use client";

/**
 * AdminDataContext.tsx
 * React Context yang menyediakan data Events, News, Partners dari localStorage (via adminStore).
 * Halaman publik membaca dari context ini agar perubahan admin langsung terlihat.
 */

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { EventData } from "../lib/eventsData";
import { NewsData } from "../lib/newsData";
import { Partner } from "../lib/partnersData";
import {
  getEvents, saveEvent, deleteEvent, generateEventId,
  getNews, saveNews, deleteNews, generateNewsId,
  getPartners, savePartner, deletePartner, generatePartnerSlug,
} from "../lib/adminStore";

// ─── Types ──────────────────────────────────────────────────────────────────
interface AdminDataContextType {
  // Events
  events: EventData[];
  addEvent: (event: Omit<EventData, "id">) => void;
  updateEvent: (event: EventData) => void;
  removeEvent: (id: string) => void;

  // News
  news: NewsData[];
  addNews: (news: Omit<NewsData, "id">) => void;
  updateNews: (news: NewsData) => void;
  removeNews: (id: string) => void;

  // Partners
  partners: Partner[];
  addPartner: (partner: Omit<Partner, "slug">) => void;
  updatePartner: (partner: Partner) => void;
  removePartner: (slug: string) => void;

  // Refresh
  refresh: () => void;
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

// ─── Provider ───────────────────────────────────────────────────────────────
export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<EventData[]>([]);
  const [news, setNews] = useState<NewsData[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);

  const refresh = useCallback(() => {
    setEvents(getEvents());
    setNews(getNews());
    setPartners(getPartners());
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // ─── Events CRUD ──────────────────────────────────────────────────────────
  const addEvent = useCallback((event: Omit<EventData, "id">) => {
    const newEvent: EventData = { ...event, id: generateEventId() };
    saveEvent(newEvent);
    setEvents(getEvents());
  }, []);

  const updateEvent = useCallback((event: EventData) => {
    saveEvent(event);
    setEvents(getEvents());
  }, []);

  const removeEvent = useCallback((id: string) => {
    deleteEvent(id);
    setEvents(getEvents());
  }, []);

  // ─── News CRUD ────────────────────────────────────────────────────────────
  const addNews = useCallback((news: Omit<NewsData, "id">) => {
    const newNews: NewsData = { ...news, id: generateNewsId() };
    saveNews(newNews);
    setNews(getNews());
  }, []);

  const updateNews = useCallback((news: NewsData) => {
    saveNews(news);
    setNews(getNews());
  }, []);

  const removeNews = useCallback((id: string) => {
    deleteNews(id);
    setNews(getNews());
  }, []);

  // ─── Partners CRUD ────────────────────────────────────────────────────────
  const addPartner = useCallback((partner: Omit<Partner, "slug">) => {
    const slug = generatePartnerSlug(partner.name);
    const newPartner: Partner = { ...partner, slug };
    savePartner(newPartner);
    setPartners(getPartners());
  }, []);

  const updatePartner = useCallback((partner: Partner) => {
    savePartner(partner);
    setPartners(getPartners());
  }, []);

  const removePartner = useCallback((slug: string) => {
    deletePartner(slug);
    setPartners(getPartners());
  }, []);

  return (
    <AdminDataContext.Provider
      value={{
        events, addEvent, updateEvent, removeEvent,
        news, addNews, updateNews, removeNews,
        partners, addPartner, updatePartner, removePartner,
        refresh,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────
export function useAdminData() {
  const ctx = useContext(AdminDataContext);
  if (!ctx) throw new Error("useAdminData must be used inside AdminDataProvider");
  return ctx;
}
