'use client';

import rootStore from '@/lib/rootStore';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={rootStore}>{children}</Provider>;
}
