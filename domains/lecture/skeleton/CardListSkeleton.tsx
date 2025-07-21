import CardSkeleton from './CardSkeleton';
import styles from './CardListSkeleton.module.css';

interface CardListSkeletonProps {
  count?: number;
}

export default function CardListSkeleton({ count = 6 }: CardListSkeletonProps) {
  return (
    <div className={styles.lectureListContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
