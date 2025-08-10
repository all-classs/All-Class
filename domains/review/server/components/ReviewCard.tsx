import { memo } from 'react';
import { Review } from '../../shared/types/review';
import { StarRating } from '@/components/common';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import profileImage from '@/public/assets/default-profile/profile.png';
import { ReviewCardModal } from '../../client/components';
import styles from '../../styles/ReviewCard.module.css';
import { LikeReview } from '../../client/components';

interface ReviewCardProps {
  review: Review;
}

export default memo(function ReviewCard({ review }: ReviewCardProps) {
  return (
    <ReviewCardModal review={review}>
      <div className={styles.reviewCard} data-test="review-item" data-review-id={review.postId}>
        <div className={styles.cardHeader}>
          <div className={styles.userInfo}>
            <div className={styles.profileImage}>
              <Image
                src={profileImage}
                alt="프로필 이미지"
                width={40}
                height={40}
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.userDetails}>
              <span className={styles.username}>{review.user.username}</span>
              <div className={styles.reviewMeta}>
                <Calendar size={12} className={styles.metaIcon} />
                <span className={styles.date}>{review.createDate}</span>
              </div>
            </div>
          </div>
          <div className={styles.ratingSection}>
            <StarRating rating={review.starLating} size="medium" showRatingText={false} />
            <span className={styles.ratingText}>{review.starLating}</span>
          </div>
        </div>

        <div className={styles.cardBody}>
          <h3 className={styles.reviewTitle} data-test="review-title">{review.postTitle}</h3>
          <p className={styles.reviewContent} data-test="review-content">{review.postContent}</p>
        </div>

        <div className={styles.cardFooter}>
          <LikeReview review={review} />
        </div>
      </div>
    </ReviewCardModal>
  );
});
