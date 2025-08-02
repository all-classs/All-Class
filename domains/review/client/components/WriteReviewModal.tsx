'use client';

import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Modal, InteractiveStarRating, type ModalRef } from '@/components/common';
import { Button } from '@/components/ui';
import { UI_MESSAGES } from '@/constants';
import styles from './styles/WriteReviewModal.module.css';

interface WriteReviewModalProps {
  onClose?: () => void;
}

export interface WriteReviewModalRef {
  open: () => void;
  close: () => void;
}

const WriteReviewModal = forwardRef<WriteReviewModalRef, WriteReviewModalProps>(
  ({ onClose }, ref) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const modalRef = useRef<ModalRef>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        modalRef.current?.open();
      },
      close: () => {
        modalRef.current?.close();
      },
    }));

    const handleClose = () => {
      setTitle('');
      setContent('');
      setRating(0);
      onClose?.();
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!title.trim()) {
        alert(UI_MESSAGES.VALIDATION.TITLE_REQUIRED);
        return;
      }
      if (!content.trim()) {
        alert(UI_MESSAGES.VALIDATION.CONTENT_REQUIRED);
        return;
      }
      if (rating === 0) {
        alert(UI_MESSAGES.VALIDATION.RATING_REQUIRED);
        return;
      }

      handleClose();
      modalRef.current?.close();
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
            <Button variant="primary" type="submit">
              작성완료
            </Button>
          </div>
        </form>
      </Modal>
    );
  }
);

WriteReviewModal.displayName = 'WriteReviewModal';

export default WriteReviewModal;
