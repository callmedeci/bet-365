'use client';

import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

function RootNotFound() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <div className='mb-4 text-6xl font-bold text-gray-300 dark:text-gray-600'>
          404
        </div>
        <h1 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
          Page Not Found
        </h1>
        <p className='mx-auto mb-8 max-w-md text-gray-600 dark:text-gray-400'>
          The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved, deleted, or you entered the wrong URL.
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-150 hover:bg-blue-700'
          >
            <Home className='h-4 w-4' />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-150 hover:border-gray-400 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-white'
          >
            <ArrowLeft className='h-4 w-4' />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RootNotFound;
