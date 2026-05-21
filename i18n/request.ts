import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export const locales = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh-CN';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();
  
  // First check cookie
  let locale = cookieStore.get('locale')?.value as Locale | undefined;
  
  // If no cookie, try to detect from Accept-Language header
  if (!locale) {
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage) {
      const browserLocales = acceptLanguage.split(',').map(l => l.split(';')[0].trim());
      for (const bl of browserLocales) {
        if (bl.startsWith('zh-TW') || bl.startsWith('zh-Hant')) {
          locale = 'zh-TW';
          break;
        }
        if (bl.startsWith('zh')) {
          locale = 'zh-CN';
          break;
        }
        if (bl.startsWith('ja')) {
          locale = 'ja';
          break;
        }
        if (bl.startsWith('ko')) {
          locale = 'ko';
          break;
        }
        if (bl.startsWith('en')) {
          locale = 'en';
          break;
        }
      }
    }
  }
  
  // Fallback to default
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
