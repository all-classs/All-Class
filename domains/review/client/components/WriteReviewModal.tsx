'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Modal, InteractiveStarRating, type ModalRef } from '@/components/common';
import { Button } from '@/components/ui';
import { useWriteReviewForm, useReviewSubmit } from '../hooks';
import type { WriteReviewModalProps, WriteReviewModalRef } from '../../shared/types/components';
import styles from '../../styles/WriteReviewModal.module.css';

const WriteReviewModal = forwardRef<WriteReviewModalRef, WriteReviewModalProps>(
  ({ lectureId, lectureName, onClose }, ref) => {
    const modalRef = useRef<ModalRef>(null);

    const {
      title,
      content,
      rating,
      setTitle,
      setContent,
      setRating,
      resetForm,
      validateForm,
      getFormData,
    } = useWriteReviewForm();

    const { submitReview, isSubmitting } = useReviewSubmit({
      lectureId,
      lectureName,
      onSuccess: () => {
        handleClose();
        modalRef.current?.close();
      },
    });

    useImperativeHandle(ref, () => ({
      open: () => {
        modalRef.current?.open();
      },
      close: () => {
        modalRef.current?.close();
      },
    }));

    const handleClose = () => {
      resetForm();
      onClose?.();
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const validation = validateForm();
      if (!validation.isValid) {
        alert(validation.message);
        return;
      }

      const formData = getFormData();
      await submitReview(formData);
    };

    return (
      <Modal ref={modalRef} title="리뷰 작성" size="medium" onClose={handleClose}>
        <form className={styles.reviewForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="review-title" className={styles.label}>
              제목
            </label>
            <input
              id="review-title"
              type="text"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="리뷰 제목을 입력하세요"
              required
              maxLength={100}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>별점</label>
            <InteractiveStarRating rating={rating} onRatingChange={setRating} size="large" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="review-content" className={styles.label}>
              내용
            </label>
            <textarea
              id="review-content"
              className={styles.textarea}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="수강 후기를 자세히 작성해주세요"
              required
              rows={6}
              maxLength={1000}
            />
            <div className={styles.charCount}>{content.length}/1000</div>
          </div>

          <div className={styles.buttonGroup}>
            <Button variant="secondary" onClick={handleClose} type="button">
              초기화
            </Button>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? '작성 중...' : '작성완료'}
            </Button>
          </div>
        </form>
      </Modal>
    );
  }
);

WriteReviewModal.displayName = 'WriteReviewModal';

export default WriteReviewModal;
