import { QueryClient } from '@tanstack/react-query';
import { getLectureRating } from '@/lib/lecture';
import { getReviewList } from '@/lib/review';
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
    queryKey: ['reviews', lectureId, 'rating_desc'],
    queryFn: () => getReviewList({ lectureId }),
    staleTime: CACHE_TIME.STALE_TIME,
  });
}

export async function prefetchAllSortOptions(
  queryClient: QueryClient,
  lectureId: string
): Promise<void> {
  const sortOptions = [
    { key: 'rating_desc', params: {} },
    { key: 'rating_asc', params: { lowness: true } },
    { key: 'likes_desc', params: { likes: true } },
    { key: 'latest', params: { recent: true } },
  ];

  await Promise.allSettled(
    sortOptions.map(({ key, params }) =>
      queryClient.prefetchQuery({
        queryKey: ['reviews', lectureId, key],
        queryFn: () => getReviewList({ lectureId, ...params }),
        staleTime: CACHE_TIME.STALE_TIME,
      })
    )
  );
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
