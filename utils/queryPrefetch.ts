import { QueryClient } from '@tanstack/react-query';
import { getLectureRating } from '@/api/lecture';
import type { StaticLectureData } from '@/domains/lecture';

export async function prefetchLectureRating(
  queryClient: QueryClient,
  lectureId: number,
  universityName: string
): Promise<void> {
  await queryClient.prefetchQuery({
    queryKey: ['lecture-rating', lectureId, universityName],
    queryFn: () => getLectureRating(lectureId, universityName),
    staleTime: 1000 * 60 * 5,
  });
}

export async function prefetchMultipleLectureRatings(
  queryClient: QueryClient,
  lectures: StaticLectureData[],
  universityName: string
): Promise<void> {
  await Promise.allSettled(
    lectures.map((lecture) => prefetchLectureRating(queryClient, lecture.lectureId, universityName))
  );
}
