import { Suspense } from 'react';
import { DashboardLayout } from '@/components/layout';
import { LoadingSpinner } from '@/components/common/loading/LoadingSpinner';
import { headers } from 'next/headers';
import { getMyLectures, getMyReview } from '@/api';
import { LectureList, type LectureWithReviewStatus } from '@/domains/mypage';

async function fetchLectureData(userNumber: number): Promise<LectureWithReviewStatus[]> {
  const [lectures, reviews] = await Promise.all([
    getMyLectures(userNumber),
    getMyReview(userNumber),
  ]);

  return lectures.map((lecture) => {
    const matchingReview = reviews.find(
      (review) => review.lecture.lectureId === lecture.classNumber
    );

    return {
      ...lecture,
      hasReview: !!matchingReview,
      review: matchingReview || null,
    };
  });
}

async function LectureContent() {
  const headersList = await headers();
  const userNumber = headersList.get('x-user-number');
  const myLectures = await fetchLectureData(Number(userNumber));

  return <LectureList lectures={myLectures} />;
}

export default function LecturesPage() {
  return (
    <DashboardLayout title="수업" subtitle="내가 수강한 강의 목록을 확인하세요">
      <Suspense fallback={<LoadingSpinner text="강의 목록을 불러오는 중..." />}>
        <LectureContent />
      </Suspense>
    </DashboardLayout>
  );
}
