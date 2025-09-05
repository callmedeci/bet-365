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
    <div className='rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md'>
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <Clock className='h-4 w-4' />
          <span>
            {formatDate(match.startAtISO)} {formatTime(match.startAtISO)}
          </span>
        </div>
        <span className='rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700'>
          {match.category}
        </span>
      </div>

      <div className='mb-4'>
        <div className='text-center'>
          <div className='mb-1 font-medium text-gray-900'>{match.home}</div>
          <div className='mb-1 text-sm text-gray-500'>{t('vs')}</div>
          <div className='font-medium text-gray-900'>{match.away}</div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        <button className='rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-center transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50'>
          <div className='mb-1 text-xs text-gray-600'>{t('home')}</div>
          <div className='font-semibold text-gray-900'>{match.odds.home}</div>
        </button>

        {match.odds.draw && (
          <button className='rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-center transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50'>
            <div className='mb-1 text-xs text-gray-600'>{t('draw')}</div>
            <div className='font-semibold text-gray-900'>{match.odds.draw}</div>
          </button>
        )}

        <button
          className={`rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-center transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50 ${
            !match.odds.draw ? 'col-span-1' : ''
          }`}
        >
          <div className='mb-1 text-xs text-gray-600'>{t('away')}</div>
          <div className='font-semibold text-gray-900'>{match.odds.away}</div>
        </button>
      </div>
    </div>
  );
}

export default MatchCard;
