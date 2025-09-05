import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

async function Footer() {
  const t = await getTranslations('Footer');

  const footerLinks = [
    { href: 'about', label: t('about') },
    { href: 'contact', label: t('contact') },
    { href: 'terms', label: t('terms') },
    { href: 'privacy', label: t('privacy') },
  ];

  return (
    <footer className='mt-12 border-t border-gray-200 bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-lg font-bold text-blue-600'>Bet365</h3>
            <p className='mt-1 text-sm text-gray-600'>
              © 2025 Bet365. All rights reserved.
            </p>
          </div>

          <nav className='flex flex-wrap justify-center gap-6 md:justify-end'>
            {footerLinks.map((link) => (
              <Link
                href={`/${link.href}`}
                key={link.href}
                className='text-sm text-gray-600 transition-colors duration-150 hover:text-blue-600'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
