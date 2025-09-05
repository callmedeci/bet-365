import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './constant';
import { Category } from './types';
import { RootStore } from '@/lib/rootStore';

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<Category>) {
      state.selectedCategory = action.payload;
    },
  },
});
export default matchSlice.reducer;

export const { setSelectedCategory } = matchSlice.actions;

//Selectors
export const selectAllMatches = (state: RootStore) => state.matches.matches;
export const selectSelectedCategory = (state: RootStore) =>
  state.matches.selectedCategory;

export const selectMatchesByCategory = (state: RootStore) => {
  const { matches, selectedCategory } = state.matches;
  if (selectedCategory === 'All') return matches;
  return matches.filter((match) => match.category === selectedCategory);
};
