import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
import { PostReviewRequest, PostReviewResponse, PostReviewResult } from '@/domains/review';

export async function postReview(request: PostReviewRequest): Promise<PostReviewResult> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data: PostReviewResponse = await response.json();
    console.log(data);

    if (data.status === HTTP_STATUS.OK) {
      return {
        success: true,
      };
    }

    if (data.status === HTTP_STATUS.UNAUTHORIZED) {
      return {
        success: false,
        message: data.message || ERROR_MESSAGES.REVIEW_POST_UNAUTHORIZED,
      };
    }

    if (data.status === HTTP_STATUS.FORBIDDEN) {
      return {
        success: false,
        message: data.message || ERROR_MESSAGES.REVIEW_POST_FORBIDDEN,
      };
    }

    return {
      success: false,
      message: data.message || ERROR_MESSAGES.REVIEW_POST_FAILED,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.REVIEW_POST_UNKNOWN_ERROR,
    };
  }
}
