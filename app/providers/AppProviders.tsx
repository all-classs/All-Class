'use client';

import { ReactNode } from 'react';
import ReactQueryProvider from './ReactQueryProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
