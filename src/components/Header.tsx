'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { useDarkMode } from './DarkModeProvider';

function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleDark, isDark } = useDarkMode();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fa' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  const navItems = [
    { href: 'sports', label: t('nav.sports') },
    { href: 'live', label: t('nav.live') },
    { href: 'casino', label: t('nav.casino') },
  ];

  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold text-blue-600'>{t('logo')}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden space-x-8 md:flex'>
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className='px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-150 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className='flex items-center space-x-4'>
            <div className='flex items-center gap-2'>
              <button
                onClick={toggleDark}
                className='flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors duration-150 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              >
                {isDark ? (
                  <Moon className='h-4 w-4' />
                ) : (
                  <Sun className='h-4 w-4' />
                )}
              </button>
              <button
                onClick={toggleLanguage}
                className='flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-150 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                aria-label={t('language')}
              >
                <Globe className='h-4 w-4' />
                <span className='hidden sm:inline'>{locale.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 text-gray-700 transition-colors duration-150 hover:text-blue-600 md:hidden dark:text-gray-300 dark:hover:text-blue-400'
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='border-t border-gray-200 py-4 md:hidden dark:border-gray-700'>
            <nav className='flex flex-col space-y-2'>
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className='px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors duration-150 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
