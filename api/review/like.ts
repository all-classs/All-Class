import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
import { LikeReviewParams, LikeReviewResponse, LikeReviewResult } from '@/domains/review';

export async function likeReview(params: LikeReviewParams): Promise<LikeReviewResult> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/like`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data: LikeReviewResponse = await response.json();

  if (data.status === HTTP_STATUS.OK) {
    return {
      success: true,
      message: data.message || ERROR_MESSAGES.REVIEW_LIKE_SUCCESS,
      data: data.data
        ? {
            likes: data.data.likes,
          }
        : undefined,
    };
  }

  if (data.status === HTTP_STATUS.ACCEPTED) {
    return {
      success: true,
      message: data.message || ERROR_MESSAGES.REVIEW_LIKE_CANCEL_SUCCESS,
      data: data.data
        ? {
            likes: data.data.likes,
          }
        : undefined,
    };
  }

  return {
    success: false,
    message: data.message || ERROR_MESSAGES.REVIEW_LIKE_UNKNOWN_ERROR,
  };
}
