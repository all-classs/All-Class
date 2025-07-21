import { getLectureInfo, getLectureReviews } from './lib';
import styles from '@/styles/global.module.css';
import { Suspense } from 'react';
import { LectureInfo, LectureInfoSkeleton, ReviewList } from './components';
import { Lecture } from '../lib';
import { ReviewCardListSkeleton } from '@/components/common/card/skeleton';

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

async function ReviewCardWrapper({ lectureId }: { lectureId: string }) {
  const reviewResult = await getLectureReviews(lectureId);
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

  return (
    <div className={styles.paddingContainer}>
      <Suspense fallback={<LectureInfoSkeleton />}>
        <LectureInfoWrapper
          universityName={universityName}
          lectureId={lectureId}
          lectureData={lectureData}
        />
      </Suspense>
      <Suspense fallback={<ReviewCardListSkeleton count={6} />}>
        <ReviewCardWrapper lectureId={lectureId} />
      </Suspense>
    </div>
  );
}
