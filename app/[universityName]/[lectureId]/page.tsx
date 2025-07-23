import { Lecture } from '@/types';
import { LectureInfo, LectureInfoSkeleton } from '@/domains/lecture';
import { ReviewList, ReviewCardListSkeleton } from '@/domains/review';
import { getLectureInfo } from '@/api/lecture';
import { getReviewList } from '@/api/review';
import { Suspense } from 'react';
import styles from '@/styles/global.module.css';

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
        <ReviewListWrapper lectureId={lectureId} />
      </Suspense>
    </div>
  );
}
