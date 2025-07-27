import { useQuery } from '@tanstack/react-query';
import { getLectureRating } from '@/api/lecture';

interface UseLectureRatingParams {
  lectureId: number;
  universityName: string;
}

export function useLectureRating({ lectureId, universityName }: UseLectureRatingParams) {
  return useQuery({
    queryKey: ['lecture-rating', lectureId, universityName],
    queryFn: () => getLectureRating(lectureId, universityName),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    retry: 2,
  });
}
