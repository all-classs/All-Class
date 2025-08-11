import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { hydrateAuthState } from '@/utils/authHydration';
import AppProviders from './AppProviders';

interface AuthHydrationProviderProps {
  children: React.ReactNode;
}

export default async function AuthHydrationProvider({ children }: AuthHydrationProviderProps) {
  const queryClient = new QueryClient();

  await hydrateAuthState(queryClient);

  return (
    <AppProviders>
      <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
    </AppProviders>
  );
}
