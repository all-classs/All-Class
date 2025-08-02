'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import styles from './InteractiveStarRating.module.css';

interface InteractiveStarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export default function InteractiveStarRating({
  rating,
  onRatingChange,
  size = 'medium',
  disabled = false,
}: InteractiveStarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (star: number) => {
    if (!disabled) {
      setHoverRating(star);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverRating(0);
    }
  };

  const handleClick = (star: number) => {
    if (!disabled) {
      onRatingChange(star);
    }
  };

  const displayRating = hoverRating || rating;

  return (
    <div className={`${styles.container} ${styles[size]}`} onMouseLeave={handleMouseLeave}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`${styles.starButton} ${disabled ? styles.disabled : ''}`}
            onMouseEnter={() => handleMouseEnter(star)}
            onClick={() => handleClick(star)}
            disabled={disabled}
          >
            <Star
              size={size === 'small' ? 20 : size === 'medium' ? 28 : 32}
              className={`${styles.star} ${star <= displayRating ? styles.filled : styles.empty}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
