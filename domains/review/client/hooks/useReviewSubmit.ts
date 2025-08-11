'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '@/domains/auth';
import { usePostReview } from './usePostReview';
import { usePatchReview } from './usePatchReview';
import { getUserNumber, getLectureName } from '../../shared/utils';
import { UI_MESSAGES } from '@/constants';
import type { ReviewSubmitData, UseReviewSubmitProps } from '../../shared/types/components';

export function useReviewSubmit({
  postId,
  lectureId,
  lectureName,
  mode = 'create',
  onSuccess,
}: UseReviewSubmitProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const postReviewMutation = usePostReview(lectureId || '');
  const patchReviewMutation = usePatchReview(lectureId || '');

  const reviewMutation = mode === 'edit' ? patchReviewMutation : postReviewMutation;

  const submitReview = async (data: ReviewSubmitData) => {
    if (!user) {
      alert(UI_MESSAGES.AUTH.LOGIN_REQUIRED);
      return;
    }

    try {
      const userNumber = getUserNumber(user);
      if (userNumber === null) {
        alert('사용자 번호를 확인할 수 없습니다.');
        return;
      }

      let payload;

      if (mode === 'edit' && postId) {
        payload = {
          postId,
          lectureName: '',
          userNumber,
          starLating: data.rating,
          postTitle: data.title,
          postContent: data.content,
        };
      } else {
        const lectureNameResult = await getLectureName({
          lectureName,
          lectureId: lectureId || '',
          pathname,
        });

        if (!lectureNameResult.success) {
          alert(lectureNameResult.message);
          return;
        }

        payload = {
          lectureName: lectureNameResult.lectureName!,
          userNumber,
          starLating: data.rating,
          postTitle: data.title,
          postContent: data.content,
        };
      }

      reviewMutation.mutate(payload, {
        onSuccess: (result) => {
          if (result.success) {
            const successMessage =
              mode === 'edit'
                ? '리뷰가 성공적으로 수정되었습니다.'
                : UI_MESSAGES.REVIEW.POST_SUCCESS;
            alert(successMessage);
            try {
              const pathSegments = pathname.split('/');
              const universityName = decodeURIComponent(pathSegments[1] || '');
              const action = mode === 'edit' ? 'review_updated' : 'review_added';
              fetch('/api/revalidate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  action,
                  universityName,
                  lectureId,
                  userNumber,
                }),
              }).catch(() => {});
            } catch (error) {
              console.error('리뷰 작성/수정 태그 재검증 실패', error);
            }
            onSuccess?.();
          } else {
            const errorMessage =
              mode === 'edit' ? '리뷰 수정에 실패했습니다.' : UI_MESSAGES.REVIEW.POST_FAILED;
            alert(result.message || errorMessage);
          }
        },
        onError: (error) => {
          const errorMessage =
            mode === 'edit' ? '리뷰 수정에 실패했습니다.' : UI_MESSAGES.REVIEW.POST_FAILED;
          alert(error.message || errorMessage);
        },
      });
    } catch (error) {
      alert(UI_MESSAGES.REVIEW.LECTURE_INFO_MISSING);
    }
  };

  return {
    submitReview,
    isSubmitting: reviewMutation.isPending,
  };
}
