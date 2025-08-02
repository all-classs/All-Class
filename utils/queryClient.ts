import { QueryClient } from '@tanstack/react-query';
import { CACHE_TIME } from '@/constants';

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: CACHE_TIME.STALE_TIME,
        gcTime: CACHE_TIME.GC_TIME,
        refetchOnWindowFocus: false,
        retry: 2,
      },
    },
  });
}
