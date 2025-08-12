'use client';

import { useState, memo, useCallback, useMemo } from 'react';
import { Star } from 'lucide-react';
import styles from './InteractiveStarRating.module.css';

interface InteractiveStarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const InteractiveStarRating = memo(function InteractiveStarRating({
  rating,
  onRatingChange,
  size = 'medium',
  disabled = false,
}: InteractiveStarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const calculateRatingFromEvent = useCallback(
    (star: number, event: React.MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const isHalf = x < width / 2;
      return isHalf ? star - 0.5 : star;
    },
    []
  );

  const handleMouseEnter = useCallback(
    (star: number, event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        const newRating = calculateRatingFromEvent(star, event);
        setHoverRating(newRating);
      }
    },
    [disabled, calculateRatingFromEvent]
  );

  const handleMouseLeave = useCallback(() => {
    if (!disabled) {
      setHoverRating(0);
    }
  }, [disabled]);

  const handleClick = useCallback(
    (star: number, event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        const newRating = calculateRatingFromEvent(star, event);
        onRatingChange(newRating);
      }
    },
    [disabled, onRatingChange, calculateRatingFromEvent]
  );

  const displayRating = hoverRating || rating;

  const starSize = useMemo(() => {
    return size === 'small' ? 20 : size === 'medium' ? 28 : 32;
  }, [size]);

  const stars = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div
      className={`${styles.container} ${styles[size]}`}
      onMouseLeave={handleMouseLeave}
      data-test="star-rating"
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="var(--star-color)" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.stars}>
        {stars.map((star) => (
          <button
            key={star}
            type="button"
            className={`${styles.starButton} ${disabled ? styles.disabled : ''}`}
            onMouseEnter={(event) => handleMouseEnter(star, event)}
            onClick={(event) => handleClick(star, event)}
            disabled={disabled}
            data-test={`star-${star}`}
          >
            <Star
              size={starSize}
              className={`${styles.star} ${star <= displayRating ? styles.filled : star - 0.5 === displayRating ? styles.halfFilled : styles.empty}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
});

export default InteractiveStarRating;
