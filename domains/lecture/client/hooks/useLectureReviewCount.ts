import { useQuery } from '@tanstack/react-query';
import { getLectureRating } from '@/api/lecture';

interface UseLectureReviewCountParams {
  lectureId: number;
  universityName: string;
}

export function useLectureReviewCount({ lectureId, universityName }: UseLectureReviewCountParams) {
  return useQuery({
    queryKey: ['lecture-rating', lectureId, universityName],
    queryFn: () => getLectureRating(lectureId, universityName),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    retry: 2,
    select: (data) => ({
      success: data.success,
      reviewCount: data.reviewCount,
      message: data.message,
    }),
  });
}
