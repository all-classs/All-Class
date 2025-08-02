import { useQuery } from '@tanstack/react-query';
import { getLectureRating } from '@/api/lecture';
import { CACHE_TIME } from '@/constants';

interface UseLectureRatingParams {
  lectureId: number;
  universityName: string;
}

export function useLectureRating({ lectureId, universityName }: UseLectureRatingParams) {
  return useQuery({
    queryKey: ['lecture-rating', lectureId, universityName],
    queryFn: () => getLectureRating(lectureId, universityName),
    staleTime: CACHE_TIME.STALE_TIME,
    gcTime: CACHE_TIME.GC_TIME,
    refetchOnWindowFocus: false,
    retry: 2,
  });
}
