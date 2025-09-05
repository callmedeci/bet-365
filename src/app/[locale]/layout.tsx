import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from '@/components/Provider';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bet365 Clone ',
  description:
    'A simplified sports betting experience inspired by Bet365. Browse live matches, check odds in real-time, filter by category, and switch between English and Persian with ease.',
  keywords: [
    'sports betting',
    'live odds',
    'football',
    'tennis',
    'basketball',
    'multi-language',
  ],
  openGraph: {
    title: 'Bet365 Clone',
    description:
      'Experience a clean and responsive sports betting interface. Follow live matches, filter by sport, and enjoy a bilingual English/Persian platform.',
    url: 'https://SHOULD_CHANGE.com',
    siteName: 'Bet365 Clone',
    locale: 'en_US',
    type: 'website',
  },
};

type RootLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang='en' dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NextIntlClientProvider>
            <section className='flex min-h-dvh flex-col bg-gray-50'>
              <Header />
              <main className='flex-1'>{children}</main>
              <Footer />
            </section>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
