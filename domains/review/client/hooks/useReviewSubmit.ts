'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '@/domains/auth';
import { usePostReview } from './usePostReview';
import { getUserNumber, getLectureName } from '../../shared/utils';
import { UI_MESSAGES } from '@/constants';
import type { ReviewSubmitData, UseReviewSubmitProps } from '../../shared/types/components';

export function useReviewSubmit({ lectureId, lectureName, onSuccess }: UseReviewSubmitProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const postReviewMutation = usePostReview(lectureId);

  const submitReview = async (data: ReviewSubmitData) => {
    if (!user) {
      alert(UI_MESSAGES.AUTH.LOGIN_REQUIRED);
      return;
    }

    try {
      const lectureNameResult = await getLectureName({
        lectureName,
        lectureId,
        pathname,
      });

      if (!lectureNameResult.success) {
        alert(lectureNameResult.message);
        return;
      }

      const userNumber = getUserNumber(user);
      if (userNumber === null) {
        alert('사용자 번호를 확인할 수 없습니다.');
        return;
      }

      const payload = {
        lectureName: lectureNameResult.lectureName!,
        userNumber,
        starLating: data.rating,
        postTitle: data.title,
        postContent: data.content,
      };
      console.log(payload);

      postReviewMutation.mutate(payload, {
        onSuccess: (result) => {
          if (result.success) {
            alert(UI_MESSAGES.REVIEW.POST_SUCCESS);
            onSuccess?.();
          } else {
            alert(result.message || UI_MESSAGES.REVIEW.POST_FAILED);
          }
        },
        onError: (error) => {
          alert(error.message || UI_MESSAGES.REVIEW.POST_FAILED);
        },
      });
    } catch (error) {
      alert(UI_MESSAGES.REVIEW.LECTURE_INFO_MISSING);
    }
  };

  return {
    submitReview,
    isSubmitting: postReviewMutation.isPending,
  };
}
