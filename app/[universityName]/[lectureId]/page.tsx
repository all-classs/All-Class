import { ReviewCardListSkeleton, ReviewListServer } from '@/domains/review';
import { LectureInfoSkeleton, LectureInfoServer } from '@/domains/lecture';
import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { createQueryClient, prefetchLectureRating, prefetchAllSortOptions } from '@/utils';
import { universityNames } from '@/constants';
import { getLectureListStatic } from '@/lib';
import styles from '@/styles/global.module.css';

export async function generateStaticParams() {
  const allParams = await Promise.allSettled(
    universityNames.map(async (universityName) => {
      const lectures = await getLectureListStatic(universityName);
      return lectures.success && lectures.lectures
        ? lectures.lectures.map((lecture) => ({
            universityName: encodeURIComponent(universityName),
            lectureId: lecture.lectureId.toString(),
          }))
        : [];
    })
  );

  return allParams
    .filter((result) => result.status === 'fulfilled')
    .flatMap((result) => result.value);
}

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
