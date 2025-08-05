import { ReviewCardListSkeleton, DynamicReviewList } from '@/domains/review';
import { LectureInfoComponent as LectureInfo, LectureInfoSkeleton } from '@/domains/lecture';
import { getLectureInfo } from '@/api/lecture';
import { Suspense } from 'react';
import styles from '@/styles/global.module.css';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { createQueryClient, prefetchLectureRating, prefetchAllSortOptions } from '@/utils';

async function LectureInfoWrapper({
  universityName,
  lectureId,
  lectureData,
}: {
  universityName: string;
  lectureId: string;
  lectureData?: { opened: boolean };
}) {
  const lectureInfo = await getLectureInfo(universityName, lectureId);
  return (
    <LectureInfo
      lectureInfo={lectureInfo}
      lectureData={lectureData}
      lectureId={lectureId}
      universityName={universityName}
    />
  );
}

async function ReviewListWrapper({
  lectureId,
  universityName,
}: {
  lectureId: string;
  universityName: string;
}) {
  const lectureInfo = await getLectureInfo(universityName, lectureId);
  const lectureName = lectureInfo.success ? lectureInfo.lectureInfo?.lectureName : '';

  return <DynamicReviewList lectureId={lectureId} lectureName={lectureName} />;
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
          <LectureInfoWrapper
            universityName={universityName}
            lectureId={lectureId}
            lectureData={lectureData}
          />
        </Suspense>
        <Suspense fallback={<ReviewCardListSkeleton count={6} />}>
          <ReviewListWrapper lectureId={lectureId} universityName={universityName} />
        </Suspense>
      </main>
    </HydrationBoundary>
  );
}
