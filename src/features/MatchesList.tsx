'use client';

import { useTranslations } from 'next-intl';
import MatchCard from './MatchCard';
import { useSelector } from 'react-redux';
import { selectMatchesByCategory } from './matchSlice';

function MatchesList() {
  const t = useTranslations('Matches');
  const matches = useSelector(selectMatchesByCategory);

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold text-gray-900'>{t('title')}</h2>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default MatchesList;
