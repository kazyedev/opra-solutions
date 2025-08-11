import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Cairo, Geist_Mono } from "next/font/google";
import Script from "next/script";

const cairo = Cairo({
  variable: "--font-geist-sans",
  subsets: ["latin", "arabic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Script id="theme-init" strategy="beforeInteractive">
        {`
          (function(){
            try {
              var stored = localStorage.getItem('theme');
              var root = document.documentElement.classList;
              if (stored === 'light') {
                root.remove('dark');
              } else if (stored === 'dark') {
                root.add('dark');
              } else {
                // default to dark when not set
                root.add('dark');
              }
            } catch (e) {}
          })();
        `}
      </Script>
      <body
        className={`${cairo.variable} ${geistMono.variable} antialiased font-sans min-h-screen flex flex-col bg-background`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}