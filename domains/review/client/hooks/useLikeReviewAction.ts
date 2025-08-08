'use client';

import { useAuth } from '@/domains/auth';
import { useLikeReview } from './useLikeReview';
import { Review } from '../../shared/types/review';
import { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';
import { getUserNumber } from '../../shared/utils';
import type { UserData } from '@/domains/auth';

interface UseLikeReviewActionParams {
  review: Review;
  onSuccess?: () => void;
  setReview?: Dispatch<SetStateAction<Review | null>>;
}

export function useLikeReviewAction({ review, onSuccess, setReview }: UseLikeReviewActionParams) {
  const { user, isLoggedIn } = useAuth();
  const { mutate: likeReview } = useLikeReview();
  const pathname = usePathname();

  const handleLikeClick = (event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    if (!isLoggedIn) {
      return;
    }

    likeReview(
      {
        postId: review.postId,
        userNumber: getUserNumber(user as UserData) ?? 0,
      },
      {
        onSuccess: () => {
          if (setReview) {
            setReview((prevReview) => {
              if (!prevReview) return prevReview;
              return {
                ...prevReview,
                likes: prevReview.likes > 0 ? 0 : 1,
              };
            });
          }

          try {
            const segments = pathname.split('/');
            const universityName = decodeURIComponent(segments[1] || '');
            const lectureId = segments[2];
            const userNumber = getUserNumber(user as UserData);
            if (lectureId && userNumber) {
              fetch('/api/revalidate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  action: 'review_updated',
                  universityName,
                  lectureId,
                  userNumber,
                }),
              }).catch(() => {});
            }
          } catch (error) {
            console.error('리뷰 좋아요 태그 재검증 실패', error);
          }

          onSuccess?.();
        },
      }
    );
  };

  return {
    handleLikeClick,
    isLoggedIn,
  };
}
