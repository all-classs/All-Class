import { ReviewCardListSkeleton } from '@/domains/review';
import { LectureInfoSkeleton } from '@/domains/lecture';
import { LectureInfoServer } from '@/domains/lecture/server/components/LectureInfoServer';
import { ReviewListServer } from '@/domains/review/server/components/ReviewListServer';
import { Suspense } from 'react';
import styles from '@/styles/global.module.css';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { createQueryClient, prefetchLectureRating, prefetchAllSortOptions } from '@/utils';

export default async function LectureDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ universityName: string; lectureId: string }>;
  searchParams: Promise<{ opened?: string }>;
}) {
  const { universityName, lectureId } = await params;

  const { opened } = await searchParams;
  const lectureData = opened ? { opened: opened === 'true' } : undefined;

  const queryClient = createQueryClient();

  await Promise.allSettled([
    prefetchLectureRating(queryClient, parseInt(lectureId), universityName),
    prefetchAllSortOptions(queryClient, lectureId),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className={styles.paddingContainer}>
        <Suspense fallback={<LectureInfoSkeleton />}>
          <LectureInfoServer
            universityName={universityName}
            lectureId={lectureId}
            lectureData={lectureData}
          />
        </Suspense>
        <Suspense fallback={<ReviewCardListSkeleton count={6} />}>
          <ReviewListServer lectureId={lectureId} universityName={universityName} />
        </Suspense>
      </main>
    </HydrationBoundary>
  );
}
