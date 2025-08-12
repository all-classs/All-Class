'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { WriteReviewModal, type WriteReviewModalRef } from '@/domains/review';
import { revalidateLecturesPage, revalidateReviewsPage } from '@/app/mypage/actions';
import { invalidateReviewCache } from '@/utils';
import type { ReviewActionButtonProps } from '../../shared/types';
import styles from '../../styles/LectureCard.module.css';

export function ReviewActionButton({ lecture }: ReviewActionButtonProps) {
  const queryClient = useQueryClient();
  const [selectedLecture, setSelectedLecture] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const modalRef = useRef<WriteReviewModalRef>(null);

  const handleWriteReview = () => {
    setSelectedLecture({
      id: lecture.classNumber.toString(),
      name: lecture.lectureName,
    });
  };

  useEffect(() => {
    if (selectedLecture && modalRef.current) {
      modalRef.current.open();
    }
  }, [selectedLecture]);

  const handleModalClose = () => {
    setSelectedLecture(null);
  };

  const handleReviewSubmitSuccess = async () => {
    setSelectedLecture(null);

    const lectureId = lecture.classNumber.toString();
    invalidateReviewCache(queryClient, lectureId);

    await Promise.all([revalidateLecturesPage(), revalidateReviewsPage()]);
  };

  if (lecture.hasReview) {
    return (
      <Link href={`/동서대학교/${lecture.classNumber}`} className={styles.linkButton}>
        <button className={`${styles.actionButton} ${styles.viewReviewButton}`}>
          강의 바로가기
        </button>
      </Link>
    );
  }

  return (
    <>
      <button
        className={`${styles.actionButton} ${styles.writeReviewButton}`}
        onClick={handleWriteReview}
      >
        리뷰 작성하기
      </button>

      {selectedLecture &&
        typeof window !== 'undefined' &&
        createPortal(
          <WriteReviewModal
            ref={modalRef}
            lectureId={selectedLecture.id}
            lectureName={selectedLecture.name}
            onClose={handleModalClose}
            onSuccess={handleReviewSubmitSuccess}
          />,
          document.body
        )}
    </>
  );
}
