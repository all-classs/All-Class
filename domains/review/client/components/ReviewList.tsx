'use client';

import { ReviewCard, ReviewCardListSkeleton } from '@/domains/review';
import { User } from 'lucide-react';
import type { Review } from '../../shared/types/review';
import styles from '../../styles/ReviewList.module.css';
import { UI_MESSAGES } from '@/constants/message';

interface ReviewListProps {
  reviews?: Review[];
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
}

export default function ReviewList({ reviews, isLoading, isFetching, error }: ReviewListProps) {
  if (isLoading) {
    return <ReviewCardListSkeleton count={6} />;
  }

  if (error) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <User size={48} />
        </div>
        <h3 className={styles.emptyTitle}>{UI_MESSAGES.REVIEW.FETCH_FAILED}</h3>
        <p className={styles.emptyMessage}>{UI_MESSAGES.REVIEW.NETWORK_ERROR}</p>
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className={styles.emptyState} data-test="empty-state">
        <div className={styles.emptyIcon}>
          <User size={48} />
        </div>
        <h3 className={styles.emptyTitle}>{UI_MESSAGES.REVIEW.NO_REVIEW}</h3>
        <p className={styles.emptyMessage}>{UI_MESSAGES.REVIEW.WRITE_REVIEW}</p>
      </div>
    );
  }

  return (
    <div className={styles.reviewList} data-test="review-list">
      <div className={`${styles.reviewListContent} ${isFetching ? styles.fetching : ''}`}>
        {reviews.map((review) => (
          <ReviewCard key={review.postId} review={review} />
        ))}
      </div>
    </div>
  );
}
