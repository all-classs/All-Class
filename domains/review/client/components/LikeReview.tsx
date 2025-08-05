'use client';

import { Heart } from 'lucide-react';
import styles from '../../styles/ReviewCard.module.css';
import { Review } from '../../shared/types/review';
import { useLikeReviewAction } from '../hooks';

export default function LikeReview({ review }: { review: Review }) {
  const { handleLikeClick, isLoggedIn } = useLikeReviewAction({ review });

  return (
    <div className={styles.likesSection} onClick={handleLikeClick}>
      <Heart
        size={16}
        className={styles.likeIcon}
        style={{ cursor: isLoggedIn ? 'pointer' : 'default' }}
      />
      <span className={styles.likeCount}>{review.likes}</span>
    </div>
  );
}
