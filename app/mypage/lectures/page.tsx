import type { Metadata } from 'next';
import { Suspense } from 'react';
import { DashboardLayout } from '@/components/layout';
import { LoadingSpinner } from '@/components/common/loading/LoadingSpinner';
import { MyLectureListServer } from '@/domains/mypage/server/components/MyLectureListServer';

export const metadata: Metadata = {
  title: '수강한 강의',
  description: '내가 수강한 강의 목록을 확인하세요.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LecturesPage() {
  return (
    <DashboardLayout title="수업" subtitle="내가 수강한 강의 목록을 확인하세요">
      <Suspense fallback={<LoadingSpinner text="강의 목록을 불러오는 중..." />}>
        <MyLectureListServer />
      </Suspense>
    </DashboardLayout>
  );
}
