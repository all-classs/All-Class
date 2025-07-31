import { useQuery } from '@tanstack/react-query';
import { getReviewList } from '@/api/review';

interface UseReviewListParams {
  lectureId: string;
}

export function useReviewList({ lectureId }: UseReviewListParams) {
  return useQuery({
    queryKey: ['reviews', lectureId],
    queryFn: () => getReviewList(lectureId),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    retry: 2,
  });
}
