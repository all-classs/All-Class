import { Suspense } from 'react';
import { headers } from 'next/headers';
import { DashboardLayout } from '@/components/layout';
import { LoadingSpinner } from '@/components/common/loading/LoadingSpinner';
import { getMyReview } from '@/lib';
import { ReviewList, ReviewStats } from '@/domains/mypage';

async function ReviewContent() {
  const headersList = await headers();
  const userNumber = headersList.get('x-user-number');
  const reviews = await getMyReview(Number(userNumber));

  return (
    <div>
      <ReviewStats reviews={reviews} />
      <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>내가 작성한 리뷰</h3>
      <ReviewList reviews={reviews} userNumber={Number(userNumber)} />
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <DashboardLayout title="리뷰관리" subtitle="내가 작성한 리뷰를 관리하세요">
      <Suspense fallback={<LoadingSpinner text="리뷰 목록을 불러오는 중..." />}>
        <ReviewContent />
      </Suspense>
    </DashboardLayout>
  );
}
