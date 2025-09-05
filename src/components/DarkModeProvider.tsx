'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
} from 'react';

type DarkModeContextType = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  toggleDark: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useLocalStorage<boolean>(false, 'isDarkMode');

  function toggleDark() {
    setIsDark((dark) => !dark);
  }

  useEffect(
    function () {
      if (isDark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    },
    [isDark],
  );

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) throw new Error('useTheme used outside ThemeProvider');

  return context;
}

export default DarkModeProvider;
