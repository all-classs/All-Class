import { Star, Calendar, Heart } from 'lucide-react';
import { DeleteReviewButton, PatchReviewButton } from '../../client/components';
import type { ReviewCardProps } from '../../shared/types';
import styles from '../../styles/ReviewCard.module.css';

export function ReviewCard({ review, userNumber }: ReviewCardProps) {
  return (
    <div className={styles.reviewCard} data-test="my-review-item" data-review-id={review.postId}>
      <div className={styles.lectureHeader}>
        <div className={styles.lectureInfo}>
          <h3 className={styles.lectureName}>{review.lecture.lectureName}</h3>
          <div className={styles.lectureDetails}>
            <span className={styles.professor}>{review.lecture.professor}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.lectureType}>{review.lecture.lectureType}</span>
          </div>
        </div>
        <div className={styles.avgRating}>
          <Star size={14} fill="currentColor" />
          <span>{review.lecture.starRating.averageRating.toFixed(1)}</span>
          <span className={styles.reviewCount}>({review.lecture.starRating.reviewCount}개)</span>
        </div>
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.reviewHeader}>
          <h4 className={styles.reviewTitle} data-test="my-review-title">
            {review.postTitle}
          </h4>
          <div className={styles.myRating}>
            <Star size={14} fill="currentColor" />
            <span>{review.starLating}</span>
          </div>
        </div>
        <p className={styles.reviewText} data-test="my-review-content">
          {review.postContent}
        </p>
      </div>

      <div className={styles.reviewFooter}>
        <div className={styles.reviewMeta}>
          <div className={styles.metaItem}>
            <Calendar size={14} />
            <span>{review.createDate}</span>
          </div>
          <div className={styles.metaItem}>
            <Heart size={14} />
            <span>{review.likes}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <PatchReviewButton review={review} userNumber={userNumber} />
          <DeleteReviewButton review={review} userNumber={userNumber} />
        </div>
      </div>
    </div>
  );
}
