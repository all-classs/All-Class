import type { ReviewStatsProps } from '../../shared/types';
import styles from '../../styles/ReviewCard.module.css';

export function ReviewStats({ reviews }: ReviewStatsProps) {
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, review) => sum + review.starLating, 0) / reviews.length).toFixed(1)
      : 0;

  const totalLikes = reviews.reduce((sum, review) => sum + review.likes, 0);

  return (
    <div className={styles.statsRow}>
      <div className={styles.statCard}>
        <div className={styles.statNumber}>{reviews.length}</div>
        <div className={styles.statLabel}>작성한 리뷰</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNumber}>{avgRating}</div>
        <div className={styles.statLabel}>평균 별점</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statNumber}>{totalLikes}</div>
        <div className={styles.statLabel}>받은 좋아요</div>
      </div>
    </div>
  );
}
