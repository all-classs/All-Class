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

  const handleMouseEnter = (star: number, event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const isHalf = x < width / 2;
      const newRating = isHalf ? star - 0.5 : star;
      setHoverRating(newRating);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverRating(0);
    }
  };

  const handleClick = (star: number, event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const isHalf = x < width / 2;
      const newRating = isHalf ? star - 0.5 : star;
      onRatingChange(newRating);
    }
  };

  const displayRating = hoverRating || rating;

  return (
    <div className={`${styles.container} ${styles[size]}`} onMouseLeave={handleMouseLeave}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="var(--star-color)" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`${styles.starButton} ${disabled ? styles.disabled : ''}`}
            onMouseEnter={(event) => handleMouseEnter(star, event)}
            onClick={(event) => handleClick(star, event)}
            disabled={disabled}
          >
            <Star
              size={size === 'small' ? 20 : size === 'medium' ? 28 : 32}
              className={`${styles.star} ${star <= displayRating ? styles.filled : star - 0.5 === displayRating ? styles.halfFilled : styles.empty}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
