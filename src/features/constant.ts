import { Match, MatchesState } from './types';

export const initialMatches: Match[] = [
  {
    id: 'm1',
    home: 'Manchester United',
    away: 'Liverpool',
    startAtISO: '2025-01-20T18:30:00.000Z',
    odds: { home: 1.85, draw: 3.2, away: 4.1 },
    category: 'Football',
  },
  {
    id: 'm2',
    home: 'Real Madrid',
    away: 'Barcelona',
    startAtISO: '2025-01-20T20:00:00.000Z',
    odds: { home: 2.1, draw: 3.4, away: 3.2 },
    category: 'Football',
  },
  {
    id: 'm3',
    home: 'Novak Djokovic',
    away: 'Rafael Nadal',
    startAtISO: '2025-01-20T16:00:00.000Z',
    odds: { home: 1.65, away: 2.25 },
    category: 'Tennis',
  },
  {
    id: 'm4',
    home: 'Lakers',
    away: 'Warriors',
    startAtISO: '2025-01-20T21:30:00.000Z',
    odds: { home: 1.95, away: 1.85 },
    category: 'Basketball',
  },
  {
    id: 'm5',
    home: 'Chelsea',
    away: 'Arsenal',
    startAtISO: '2025-01-21T15:00:00.000Z',
    odds: { home: 2.4, draw: 3.1, away: 2.9 },
    category: 'Football',
  },
  {
    id: 'm6',
    home: 'Serena Williams',
    away: 'Venus Williams',
    startAtISO: '2025-01-21T14:00:00.000Z',
    odds: { home: 1.45, away: 2.75 },
    category: 'Tennis',
  },
];

export const initialState: MatchesState = {
  matches: initialMatches,
  selectedCategory: 'All',
};
