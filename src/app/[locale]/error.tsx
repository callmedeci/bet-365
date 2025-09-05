'use client';

import { AlertCircle } from 'lucide-react';

function RootError() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <div className='mb-6 flex justify-center'>
          <AlertCircle className='h-16 w-16 text-red-500' />
        </div>
        <h1 className='mb-4 text-3xl font-bold text-gray-900'>
          Something went wrong!
        </h1>
        <p className='mx-auto mb-8 max-w-md text-gray-600'>
          We encountered an unexpected error. Please try refreshing the page or
          contact support if the problem persists.
        </p>
      </div>
    </div>
  );
}

export default RootError;
