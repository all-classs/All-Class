import ReviewCardSkeleton from './ReviewCardSkeleton';
import styles from '../styles/ReviewCardListSkeleton.module.css';

interface ReviewCardListSkeletonProps {
  count?: number;
}

export default function ReviewCardListSkeleton({ count = 9 }: ReviewCardListSkeletonProps) {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewTitleSkeleton} />
        <div className={styles.reviewCountSkeleton} />
      </div>
      <div className={styles.reviewList}>
        {Array.from({ length: count }).map((_, index) => (
          <ReviewCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
