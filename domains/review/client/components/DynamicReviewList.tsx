'use client';

import { WriteReviewModal } from '@/domains/review';
import ReviewHeader from './ReviewHeader';
import ReviewListComponent from './ReviewList';
import styles from '../../styles/ReviewList.module.css';
import { useReviewList, useReviewActions } from '../hooks';

interface DynamicReviewListProps {
  lectureId: string;
  lectureName?: string;
}

export default function DynamicReviewList({ lectureId, lectureName }: DynamicReviewListProps) {
  const { sortOption, writeReviewModalRef, handleSortChange, handleWriteReviewClick } =
    useReviewActions();
  const {
    data: reviewResult,
    isLoading,
    error,
    isFetching,
  } = useReviewList({ lectureId, sortOption });

  return (
    <div className={styles.reviewContainer}>
      <ReviewHeader
        sortOption={sortOption}
        onSortChange={handleSortChange}
        onWriteReviewClick={handleWriteReviewClick}
      />
      <ReviewListComponent
        reviews={reviewResult?.success ? reviewResult.reviews : undefined}
        isLoading={isLoading && !reviewResult}
        isFetching={isFetching}
        error={error}
      />
      <WriteReviewModal ref={writeReviewModalRef} lectureId={lectureId} lectureName={lectureName} />
    </div>
  );
}
