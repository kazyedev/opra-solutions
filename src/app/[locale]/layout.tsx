import "./globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';


export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <NextIntlClientProvider>
        {children}
        </NextIntlClientProvider>
    </html>
  );
}