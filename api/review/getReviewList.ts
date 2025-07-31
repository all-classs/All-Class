import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
import { ReviewResponse, ReviewResult } from '@/domains/review';

export async function getReviewList(lectureId: string): Promise<ReviewResult> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/review?lectureId=${lectureId}`,
      {
        cache: 'no-store',
      }
    );

    const data: ReviewResponse = await response.json();

    if (data.status === HTTP_STATUS.OK && Array.isArray(data.data)) {
      return {
        success: true,
        reviews: data.data,
      };
    }

    if (data.status === HTTP_STATUS.ACCEPTED) {
      return {
        success: false,
        message: data.message || '수강 후기가 어디에도 없습니다.',
      };
    }

    return {
      success: false,
      message: data.message || ERROR_MESSAGES.REVIEW_FETCH_FAILED,
    };
  } catch {
    return {
      success: false,
      message: ERROR_MESSAGES.REVIEW_FETCH_UNKNOWN_ERROR,
    };
  }
}
