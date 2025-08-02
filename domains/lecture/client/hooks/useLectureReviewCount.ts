import { useQuery } from '@tanstack/react-query';
import { getLectureRating } from '@/api/lecture';
import { CACHE_TIME } from '@/constants';

interface UseLectureReviewCountParams {
  lectureId: number;
  universityName: string;
}

export function useLectureReviewCount({ lectureId, universityName }: UseLectureReviewCountParams) {
  return useQuery({
    queryKey: ['lecture-rating', lectureId, universityName],
    queryFn: () => getLectureRating(lectureId, universityName),
    staleTime: CACHE_TIME.STALE_TIME,
    gcTime: CACHE_TIME.GC_TIME,
    refetchOnWindowFocus: false,
    retry: 2,
    select: (data) => ({
      success: data.success,
      reviewCount: data.reviewCount,
      message: data.message,
    }),
  });
}
