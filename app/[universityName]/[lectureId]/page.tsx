import { Lecture } from '@/domains/lecture';
import { LectureInfoSkeleton } from '@/domains/lecture';
import { ReviewCardListSkeleton } from '@/domains/review';
import LectureInfo from './components/LectureInfo';
import ReviewList from './components/ReviewList';
import { getLectureInfo } from '@/api/lecture';
import { getReviewList } from '@/api/review';
import { Suspense } from 'react';
import styles from '@/styles/global.module.css';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { createQueryClient, prefetchLectureRating } from '@/utils';

export async function generateStaticParams() {
  return [];
}

async function LectureInfoWrapper({
  universityName,
  lectureId,
  lectureData,
}: {
  universityName: string;
  lectureId: string;
  lectureData?: Lecture;
}) {
  const lectureInfo = await getLectureInfo(universityName, lectureId);
  return <LectureInfo lectureInfo={lectureInfo} lectureData={lectureData} />;
}

async function ReviewListWrapper({ lectureId }: { lectureId: string }) {
  const reviewResult = await getReviewList(lectureId);
  return <ReviewList reviewResult={reviewResult} />;
}

export default async function LectureDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ universityName: string; lectureId: string }>;
  searchParams: Promise<{ lectureData?: string }>;
}) {
  const { universityName, lectureId } = await params;

  const { lectureData: encodedLectureData } = await searchParams;
  const lectureData = JSON.parse(decodeURIComponent(encodedLectureData || '{}'));

  const queryClient = createQueryClient();

  await prefetchLectureRating(queryClient, parseInt(lectureId), universityName);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.paddingContainer}>
        <Suspense fallback={<LectureInfoSkeleton />}>
          <LectureInfoWrapper
            universityName={universityName}
            lectureId={lectureId}
            lectureData={lectureData}
          />
        </Suspense>
        <Suspense fallback={<ReviewCardListSkeleton count={6} />}>
          <ReviewListWrapper lectureId={lectureId} />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
