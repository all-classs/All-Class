import { useQuery, keepPreviousData, useQueryClient } from '@tanstack/react-query';
import { getReviewList } from '@/lib/review';
import { CACHE_TIME } from '@/constants';
import { getSortParams } from '../../shared/utils';
import type { SortOption, ReviewResult } from '../../shared/types/review';

interface UseReviewListParams {
  lectureId: string;
  sortOption?: SortOption;
}

export function useReviewList({ lectureId, sortOption = 'rating_desc' }: UseReviewListParams) {
  const sortParams = getSortParams(sortOption);
  const queryClient = useQueryClient();

  const getInitialData = (): ReviewResult | undefined => {
    if (sortOption !== 'rating_desc') {
      const defaultData = queryClient.getQueryData<ReviewResult>([
        'reviews',
        lectureId,
        'rating_desc',
      ]);
      return defaultData;
    }
    return undefined;
  };

  return useQuery<ReviewResult>({
    queryKey: ['reviews', lectureId, sortOption],
    queryFn: () => getReviewList({ lectureId, ...sortParams }),
    staleTime: CACHE_TIME.STALE_TIME,
    gcTime: CACHE_TIME.GC_TIME,
    refetchOnWindowFocus: false,
    retry: 2,
    placeholderData: keepPreviousData,
    initialData: getInitialData,
  });
}
