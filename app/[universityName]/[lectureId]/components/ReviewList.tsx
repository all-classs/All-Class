import { ReviewResult } from '../lib';
import { ReviewCard } from '@/components/common';
import { User } from 'lucide-react';
import styles from './styles/ReviewList.module.css';

export default async function ReviewList({ reviewResult }: { reviewResult: ReviewResult }) {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewTitle}>수강 후기</h2>
        <span className={styles.reviewCount}>
          {reviewResult.success && reviewResult.reviews ? reviewResult.reviews.length : 0}개의 후기
        </span>
      </div>

      {reviewResult.success && reviewResult.reviews ? (
        <div className={styles.reviewList}>
          {reviewResult.reviews.map((review) => (
            <ReviewCard key={review.postId} review={review} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <User size={48} />
          </div>
          <h3 className={styles.emptyTitle}>아직 수강 후기가 없어요</h3>
          <p className={styles.emptyMessage}>{reviewResult.message} 첫 번째 리뷰를 작성해주세요!</p>
        </div>
      )}
    </div>
  );
}
