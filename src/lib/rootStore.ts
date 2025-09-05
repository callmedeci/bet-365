import matchesReducer from '@/features/matchSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootStore = configureStore({
  reducer: {
    matches: matchesReducer,
  },
});

export default rootStore;

export type RootStore = ReturnType<typeof rootStore.getState>;
export type AppDispatch = ReturnType<typeof rootStore.dispatch>;
