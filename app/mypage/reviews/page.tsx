import { Suspense } from 'react';
import { DashboardLayout } from '@/components/layout';
import { LoadingSpinner } from '@/components/common/loading/LoadingSpinner';
import { MyReviewListServer } from '@/domains/mypage/server/components/MyReviewListServer';

export default function ReviewsPage() {
  return (
    <DashboardLayout title="리뷰관리" subtitle="내가 작성한 리뷰를 관리하세요">
      <Suspense fallback={<LoadingSpinner text="리뷰 목록을 불러오는 중..." />}>
        <MyReviewListServer />
      </Suspense>
    </DashboardLayout>
  );
}
