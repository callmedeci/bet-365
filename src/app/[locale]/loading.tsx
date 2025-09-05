function RootLoading() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
        <div className='lg:hidden'>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900'>
            <div className='mb-4 h-6 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
            <div className='space-y-2'>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className='h-10 animate-pulse rounded bg-gray-100 dark:bg-gray-800'
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className='lg:col-span-3'>
          <div className='space-y-6'>
            <div className='h-8 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className='rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900'
                >
                  <div className='mb-3 flex items-center justify-between'>
                    <div className='h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
                    <div className='h-5 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
                  </div>
                  <div className='mb-4'>
                    <div className='mx-auto mb-2 h-5 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
                    <div className='mx-auto mb-2 h-3 w-8 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
                    <div className='mx-auto h-5 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
                  </div>
                  <div className='grid grid-cols-3 gap-2'>
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className='h-12 animate-pulse rounded bg-gray-100 dark:bg-gray-800'
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='hidden lg:block'>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900'>
            <div className='mb-4 h-6 animate-pulse rounded bg-gray-200 dark:bg-gray-700'></div>
            <div className='space-y-2'>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className='h-10 animate-pulse rounded bg-gray-100 dark:bg-gray-800'
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLoading;
