import { ReviewCard } from '@/domains/review';
import { User } from 'lucide-react';
import styles from '../styles/ReviewList.module.css';
import { ReviewResult } from '@/types';

interface ReviewListProps {
  reviewResult: ReviewResult;
}

export default function ReviewList({ reviewResult }: ReviewListProps) {
  if (!reviewResult.success) {
    return (
      <div className={styles.reviewContainer}>
        <div className={styles.reviewHeader}>
          <h2 className={styles.reviewTitle}>수강 후기</h2>
          <span className={styles.reviewCount}>0개의 후기</span>
        </div>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <User size={48} />
          </div>
          <h3 className={styles.emptyTitle}>수강 후기를 불러오는데 실패했습니다</h3>
          <p className={styles.emptyMessage}>
            {reviewResult.message || '알 수 없는 오류가 발생했습니다.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewTitle}>수강 후기</h2>
        <span className={styles.reviewCount}>
          {reviewResult.reviews ? reviewResult.reviews.length : 0}개의 후기
        </span>
      </div>

      {reviewResult.reviews && reviewResult.reviews.length > 0 ? (
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
          <p className={styles.emptyMessage}>
            {reviewResult.message || '리뷰가 없습니다.'} 첫 번째 리뷰를 작성해주세요!
          </p>
        </div>
      )}
    </div>
  );
}
