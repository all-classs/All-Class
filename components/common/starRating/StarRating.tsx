import { memo, useMemo } from 'react';
import styles from './StarRating.module.css';

interface StarRatingProps {
  rating: number;
  showRatingText?: boolean;
  size?: 'small' | 'medium' | 'large' | 'veryLarge';
}

const StarRating = memo(function StarRating({
  rating,
  showRatingText = true,
  size = 'medium',
}: StarRatingProps) {
  const starData = useMemo(() => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return { fullStars, hasHalfStar, emptyStars };
  }, [rating]);

  const renderStars = useMemo(() => {
    const { fullStars, hasHalfStar, emptyStars } = starData;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className={`${styles.star} ${styles[size]}`}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={`${styles.halfStar} ${styles[size]}`}>
          ★
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={`${styles.emptyStar} ${styles[size]}`}>
          ☆
        </span>
      );
    }

    return stars;
  }, [starData, size]);

  if (rating === 0) {
    return <span className={styles.noRating}>평점 없음</span>;
  }

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.starRating}>{renderStars}</div>
      {showRatingText && (
        <span className={`${styles.ratingText} ${styles[size]}`}>{rating.toFixed(1)}</span>
      )}
    </div>
  );
});

export default StarRating;
