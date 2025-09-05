import { formatDate, formatTime } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Match } from './types';

type MatchCard = {
  match: Match;
};

function MatchCard({ match }: MatchCard) {
  const t = useTranslations('Matches');

  return (
    <div className='rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900'>
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
          <Clock className='h-4 w-4' />
          <span>
            {formatDate(match.startAtISO)} {formatTime(match.startAtISO)}
          </span>
        </div>
        <span className='rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300'>
          {match.category}
        </span>
      </div>

      <div className='mb-4'>
        <div className='text-center'>
          <div className='mb-1 font-medium text-gray-900 dark:text-white'>
            {match.home}
          </div>
          <div className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
            {t('vs')}
          </div>
          <div className='font-medium text-gray-900 dark:text-white'>
            {match.away}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        <button className='rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-center transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400 dark:hover:bg-blue-950'>
          <div className='mb-1 text-xs text-gray-600 dark:text-gray-300'>
            {t('home')}
          </div>
          <div className='font-semibold text-gray-900 dark:text-white'>
            {match.odds.home}
          </div>
        </button>

        {match.odds.draw && (
          <button className='rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-center transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400 dark:hover:bg-blue-950'>
            <div className='mb-1 text-xs text-gray-600 dark:text-gray-300'>
              {t('draw')}
            </div>
            <div className='font-semibold text-gray-900 dark:text-white'>
              {match.odds.draw}
            </div>
          </button>
        )}

        <button
          className={`rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-center transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400 dark:hover:bg-blue-950 ${
            !match.odds.draw ? 'col-span-1' : ''
          }`}
        >
          <div className='mb-1 text-xs text-gray-600 dark:text-gray-300'>
            {t('away')}
          </div>
          <div className='font-semibold text-gray-900 dark:text-white'>
            {match.odds.away}
          </div>
        </button>
      </div>
    </div>
  );
}

export default MatchCard;
