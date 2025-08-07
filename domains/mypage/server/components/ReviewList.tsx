import { ReviewCard } from './ReviewCard';
import type { MyReviewData } from '../../shared/types';
import styles from '../../styles/ReviewCard.module.css';

interface ReviewListProps {
  reviews: MyReviewData[];
  userNumber: number;
}

export function ReviewList({ reviews, userNumber }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>작성한 리뷰가 없습니다.</p>
        <p className={styles.emptySubtext}>강의를 수강한 후 리뷰를 작성해보세요!</p>
      </div>
    );
  }

  return (
    <div className={styles.reviewGrid}>
      {reviews.map((review) => (
        <ReviewCard key={review.postId} review={review} userNumber={userNumber} />
      ))}
    </div>
  );
}
