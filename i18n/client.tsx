"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { locales, defaultLocale, type Locale } from './config';

// Import all messages statically
import zhCN from '@/messages/zh-CN.json';
import zhTW from '@/messages/zh-TW.json';
import en from '@/messages/en.json';
import ja from '@/messages/ja.json';
import ko from '@/messages/ko.json';

const messagesMap: Record<Locale, typeof zhCN> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en,
  'ja': ja,
  'ko': ko,
};

type Messages = typeof zhCN;

interface I18nContextType {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // Return key if not found
    }
  }
  
  return typeof current === 'string' ? current : path;
}

function getNestedRawValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  return current;
}

function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
  
  if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-Hant')) {
    return 'zh-TW';
  }
  if (browserLang.startsWith('zh')) {
    return 'zh-CN';
  }
  if (browserLang.startsWith('ja')) {
    return 'ja';
  }
  if (browserLang.startsWith('ko')) {
    return 'ko';
  }
  if (browserLang.startsWith('en')) {
    return 'en';
  }
  
  return defaultLocale;
}

function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('locale');
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }
  return null;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredLocale();
    const detected = stored || detectBrowserLocale();
    setLocaleState(detected);
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    // Update html lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  const messages = messagesMap[locale];

  const t = useCallback((key: string): string => {
    return getNestedValue(messages as unknown as Record<string, unknown>, key);
  }, [messages]);

  // Prevent hydration mismatch by returning default locale content on server
  const contextValue: I18nContextType = {
    locale: mounted ? locale : defaultLocale,
    messages: mounted ? messages : messagesMap[defaultLocale],
    setLocale,
    t,
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

export function useTranslations(namespace?: string) {
  const { messages } = useI18n();
  
  const t = useCallback((key: string): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNestedValue(messages as unknown as Record<string, unknown>, fullKey);
  }, [messages, namespace]);

  // Add raw method that returns any type (for arrays and objects)
  const raw = useCallback((key: string): unknown => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNestedRawValue(messages as unknown as Record<string, unknown>, fullKey);
  }, [messages, namespace]);

  // Return a function with a raw method attached
  const translator = useCallback((key: string): string => {
    return t(key);
  }, [t]) as ((key: string) => string) & { raw: (key: string) => unknown };

  translator.raw = raw;
  
  return translator;
}

export function useLocale() {
  const { locale } = useI18n();
  return locale;
}
