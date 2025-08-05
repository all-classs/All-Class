import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
import {
  ReviewResponse,
  ReviewResult,
  PostReviewRequest,
  PostReviewResponse,
  PostReviewResult,
} from '@/domains/review';

interface GetReviewListParams {
  lectureId: string;
  lowness?: boolean;
  likes?: boolean;
  recent?: boolean;
}

export async function getReviewList({
  lectureId,
  lowness,
  likes,
  recent,
}: GetReviewListParams): Promise<ReviewResult> {
  try {
    const params = new URLSearchParams({ lectureId });

    if (lowness) params.append('lowness', 'true');
    if (likes) params.append('likes', 'true');
    if (recent) params.append('recent', 'true');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review?${params.toString()}`, {
      cache: 'no-store',
    });

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
        message: data.message || ERROR_MESSAGES.REVIEW_FETCH_EMPTY,
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
