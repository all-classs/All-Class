import { useQuery } from '@tanstack/react-query';
import { getReviewList } from '@/api/review';
import { CACHE_TIME } from '@/constants';

interface UseReviewListParams {
  lectureId: string;
}

export function useReviewList({ lectureId }: UseReviewListParams) {
  return useQuery({
    queryKey: ['reviews', lectureId],
    queryFn: () => getReviewList(lectureId),
    staleTime: CACHE_TIME.STALE_TIME,
    gcTime: CACHE_TIME.GC_TIME,
    refetchOnWindowFocus: false,
    retry: 2,
  });
}
