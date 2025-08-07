import { headers } from 'next/headers';
import { getMyReview } from '@/lib';
import { ReviewList } from './ReviewList';
import { ReviewStats } from './ReviewStats';

export async function MyReviewListServer() {
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
