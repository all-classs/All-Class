import { QueryClient } from '@tanstack/react-query';
import { getLectureRating } from '@/api/lecture';
import { getReviewList } from '@/api/review';
import type { StaticLectureData } from '@/domains/lecture';
import { CACHE_TIME } from '@/constants';

export async function prefetchLectureRating(
  queryClient: QueryClient,
  lectureId: number,
  universityName: string
): Promise<void> {
  await queryClient.prefetchQuery({
    queryKey: ['lecture-rating', lectureId, universityName],
    queryFn: () => getLectureRating(lectureId, universityName),
    staleTime: CACHE_TIME.STALE_TIME,
  });
}

export async function prefetchReviewList(
  queryClient: QueryClient,
  lectureId: string
): Promise<void> {
  await queryClient.prefetchQuery({
    queryKey: ['reviews', lectureId],
    queryFn: () => getReviewList(lectureId),
    staleTime: CACHE_TIME.STALE_TIME,
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
