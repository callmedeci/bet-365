export type Match = {
  id: string;
  home: string;
  away: string;
  startAtISO: string;
  odds: { home: number; draw?: number; away: number };
  category: 'Football' | 'Tennis' | 'Basketball';
};

export type Category = 'All' | 'Football' | 'Tennis' | 'Basketball';

export type MatchesState = {
  matches: Match[];
  selectedCategory: Category;
};
