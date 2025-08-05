'use client';

import { useAuth } from '@/domains/auth';
import { useLikeReview } from './useLikeReview';
import { Review } from '../../shared/types/review';
import { Dispatch, SetStateAction } from 'react';

interface UseLikeReviewActionParams {
  review: Review;
  onSuccess?: () => void;
  setReview?: Dispatch<SetStateAction<Review | null>>;
}

export function useLikeReviewAction({ review, onSuccess, setReview }: UseLikeReviewActionParams) {
  const { user, isLoggedIn } = useAuth();
  const { mutate: likeReview } = useLikeReview();

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
        userNumber: Number(user?.name),
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
