"use client";

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage harus digunakan di dalam LanguageProvider");
  }
  return context;
}
