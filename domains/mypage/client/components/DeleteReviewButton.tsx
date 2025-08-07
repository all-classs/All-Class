'use client';

import { deleteReview } from '@/lib';
import { revalidateReviewsPage, revalidateLecturesPage } from '@/app/mypage/actions';
import type { ReviewCardProps } from '../../shared/types';
import styles from '../../styles/ReviewCard.module.css';

export function DeleteReviewButton({ review, userNumber }: ReviewCardProps) {
  const handleDelete = async () => {
    if (confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      try {
        await deleteReview({
          postId: review.postId,
          userNumber,
        });

        await Promise.all([revalidateReviewsPage(), revalidateLecturesPage()]);
      } catch (error) {
        alert('리뷰 삭제에 실패했습니다.');
      }
    }
  };

  return (
    <button type="button" onClick={handleDelete} className={styles.deleteButton}>
      삭제
    </button>
  );
}
