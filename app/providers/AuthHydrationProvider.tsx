import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { hydrateAuthState } from '@/utils/authHydration';

interface AuthHydrationProviderProps {
  children: React.ReactNode;
}

export default async function AuthHydrationProvider({ children }: AuthHydrationProviderProps) {
  const queryClient = new QueryClient();

  await hydrateAuthState(queryClient);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
