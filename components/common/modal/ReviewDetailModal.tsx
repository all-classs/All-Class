'use client';

import { Review } from '@/domains/review';
import { StarRating } from '@/components/common';
import { Heart, Calendar } from 'lucide-react';
import Image from 'next/image';
import { forwardRef, useImperativeHandle, useState, useRef } from 'react';
import Modal, { ModalRef } from './Modal';
import profileImage from '@/public/assets/default-profile/profile.png';
import styles from './ReviewDetailModal.module.css';
import { useLikeReviewAction } from '@/domains/review/client/hooks';

interface ReviewDetailModalProps {
  review?: Review | null;
  onClose?: () => void;
}

export interface ReviewDetailModalRef {
  open: (review: Review) => void;
  close: () => void;
}

const ReviewDetailModal = forwardRef<ReviewDetailModalRef, ReviewDetailModalProps>(
  ({ review: initialReview, onClose }, ref) => {
    const [review, setReview] = useState<Review | null>(initialReview || null);
    const modalRef = useRef<ModalRef>(null);

    useImperativeHandle(ref, () => ({
      open: (reviewData: Review) => {
        setReview(reviewData);
        modalRef.current?.open();
      },
      close: () => {
        modalRef.current?.close();
      },
    }));

    const handleClose = () => {
      setReview(null);
      onClose?.();
    };

    const { handleLikeClick, isLoggedIn } = useLikeReviewAction({
      review: review!,
      setReview,
    });

    return (
      <Modal ref={modalRef} title="수강 후기 상세" size="large" onClose={handleClose}>
        {review && (
          <div className={styles.reviewDetail}>
            <div className={styles.reviewHeader}>
              <div className={styles.userInfo}>
                <div className={styles.profileImage}>
                  <Image
                    src={profileImage}
                    alt="프로필 이미지"
                    width={48}
                    height={48}
                    className={styles.image}
                    priority
                    unoptimized
                  />
                </div>
                <div className={styles.userDetails}>
                  <span className={styles.username}>{review.user.username}</span>
                  <div className={styles.reviewMeta}>
                    <Calendar size={14} className={styles.metaIcon} />
                    <span className={styles.date}>{review.createDate}</span>
                  </div>
                </div>
              </div>
              <div className={styles.ratingSection}>
                <StarRating rating={review.starLating} size="large" showRatingText={true} />
              </div>
            </div>

            <div className={styles.reviewContent}>
              <h3 className={styles.reviewTitle}>{review.postTitle}</h3>
              <div className={styles.reviewText}>
                {review.postContent.split('\n').map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.reviewFooter}>
              <div className={styles.likesSection} onClick={handleLikeClick}>
                <Heart
                  size={18}
                  className={styles.likeIcon}
                  style={{ cursor: isLoggedIn ? 'pointer' : 'default' }}
                />
                <span className={styles.likeCount}>{review.likes}개의 좋아요</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
);

export default ReviewDetailModal;
