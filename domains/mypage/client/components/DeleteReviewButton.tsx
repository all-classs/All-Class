'use client';

import { deleteReview } from '@/lib';
import { revalidateReviewsPage, revalidateLecturesPage } from '@/app/mypage/actions';
import { useQueryClient } from '@tanstack/react-query';
import { invalidateReviewCache } from '@/utils';
import type { ReviewCardProps } from '../../shared/types';
import styles from '../../styles/ReviewCard.module.css';

export function DeleteReviewButton({ review, userNumber }: ReviewCardProps) {
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    if (confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      try {
        await deleteReview({
          postId: review.postId,
          userNumber,
        });

        invalidateReviewCache(queryClient, String(review.lecture.lectureId));

        await Promise.all([revalidateReviewsPage(), revalidateLecturesPage()]);
      } catch (error) {
        alert('리뷰 삭제에 실패했습니다.');
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className={styles.deleteButton}
      data-test="my-review-delete"
    >
      삭제
    </button>
  );
}
