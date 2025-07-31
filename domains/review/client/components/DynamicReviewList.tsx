'use client';

import { ReviewCard, ReviewCardListSkeleton } from '@/domains/review';
import { User } from 'lucide-react';
import styles from '../../styles/ReviewList.module.css';
import { useReviewList } from '../hooks';
import { Button } from '@/components/ui';

interface DynamicReviewListProps {
  lectureId: string;
}

export default function DynamicReviewList({ lectureId }: DynamicReviewListProps) {
  const { data: reviewResult, isLoading, error } = useReviewList({ lectureId });

  const handleWriteReviewClick = () => {
    console.log('리뷰 작성 모달 예정 중');
  };

  if (isLoading) {
    return <ReviewCardListSkeleton count={6} />;
  }

  if (error || !reviewResult?.success) {
    return (
      <div className={styles.reviewContainer}>
        <div className={styles.reviewHeader}>
          <h2 className={styles.reviewTitle}>수강 후기</h2>
          <div className={styles.reviewActions}>
            <span className={styles.reviewCount}>0개의 후기</span>
            <Button variant="primary" onClick={handleWriteReviewClick}>
              리뷰작성
            </Button>
          </div>
        </div>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <User size={48} />
          </div>
          <h3 className={styles.emptyTitle}>수강 후기를 불러오는데 실패했습니다</h3>
          <p className={styles.emptyMessage}>
            {reviewResult?.message || '네트워크 오류가 발생했습니다.'} 첫 번째 리뷰를 작성해보세요!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewTitle}>수강 후기</h2>
        <div className={styles.reviewActions}>
          <Button variant="primary" onClick={handleWriteReviewClick}>
            리뷰작성
          </Button>
        </div>
      </div>
      <div className={styles.reviewList}>
        {reviewResult.reviews?.map((review) => (
          <ReviewCard key={review.postId} review={review} />
        ))}
      </div>
    </div>
  );
}
