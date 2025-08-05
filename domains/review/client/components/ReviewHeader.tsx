'use client';

import { Button } from '@/components/ui';
import { useAuth, useLoginModal } from '@/domains/auth';
import { UI_MESSAGES } from '@/constants/message';
import { ReviewSortSelector } from '@/domains/review';
import type { SortOption } from '../../shared/types/review';
import styles from '../../styles/ReviewList.module.css';

interface ReviewHeaderProps {
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  onWriteReviewClick: () => void;
}

export default function ReviewHeader({
  sortOption,
  onSortChange,
  onWriteReviewClick,
}: ReviewHeaderProps) {
  const { isLoggedIn } = useAuth();
  const { open: openLoginModal } = useLoginModal();

  const handleWriteReviewClick = () => {
    if (!isLoggedIn) {
      const shouldLogin = confirm(UI_MESSAGES.CONFIRM.LOGIN_REQUIRED);
      if (shouldLogin) {
        openLoginModal();
      }
      return;
    }
    onWriteReviewClick();
  };

  return (
    <div className={styles.reviewHeader}>
      <div className={styles.reviewTitle}>
        <h2>수강 후기</h2>
      </div>
      <div className={styles.reviewControls}>
        <ReviewSortSelector selectedSort={sortOption} onSortChange={onSortChange} />
      </div>
      <div className={styles.reviewActions}>
        <Button variant="primary" onClick={handleWriteReviewClick}>
          리뷰작성
        </Button>
      </div>
    </div>
  );
}
