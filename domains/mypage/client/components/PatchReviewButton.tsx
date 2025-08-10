'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { WriteReviewModal, type WriteReviewModalRef } from '@/domains/review';
import { revalidateLecturesPage, revalidateReviewsPage } from '@/app/mypage/actions';
import type { ReviewCardProps } from '../../shared/types';
import styles from '../../styles/ReviewCard.module.css';

export function PatchReviewButton({ review, userNumber }: ReviewCardProps) {
  const [selectedReview, setSelectedReview] = useState<{
    id: string;
    name: string;
    initialData: {
      title: string;
      content: string;
      rating: number;
    };
  } | null>(null);
  const modalRef = useRef<WriteReviewModalRef>(null);

  const handleEditReview = () => {
    setSelectedReview({
      id: review.postId.toString(),
      name: review.lecture.lectureName,
      initialData: {
        title: review.postTitle,
        content: review.postContent,
        rating: review.starLating,
      },
    });
  };

  useEffect(() => {
    if (selectedReview && modalRef.current) {
      modalRef.current.open();
    }
  }, [selectedReview]);

  const handleModalClose = () => {
    setSelectedReview(null);
  };

  const handleEditSuccess = async () => {
    setSelectedReview(null);
    await Promise.all([revalidateLecturesPage(), revalidateReviewsPage()]);
  };

  return (
    <>
      <button className={styles.editButton} onClick={handleEditReview} data-test="my-review-edit">
        수정
      </button>

      {selectedReview &&
        typeof window !== 'undefined' &&
        createPortal(
          <WriteReviewModal
            ref={modalRef}
            lectureId={review.lecture.lectureId.toString()}
            lectureName={selectedReview.name}
            postId={selectedReview.id}
            mode="edit"
            initialData={selectedReview.initialData}
            onSuccess={handleEditSuccess}
            onClose={handleModalClose}
          />,
          document.body
        )}
    </>
  );
}
