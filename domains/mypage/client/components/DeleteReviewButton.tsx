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

        try {
          await fetch('/api/revalidate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'review_deleted',
              universityName: review.lecture.university,
              lectureId: String(review.lecture.lectureId),
              userNumber,
            }),
          });
        } catch (error) {
          console.error('리뷰 삭제 태그 재검증 실패', error);
        }
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
