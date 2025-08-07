import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
import { ReviewResult, PostReviewRequest, PostReviewResult } from '@/domains/review';
import { MyReviewData, DeleteReviewRequest, DeleteReviewResult } from '@/domains/mypage';
import { apiPost, apiPatch, apiDelete, apiGetWithCache } from '../apiClient';

export async function getReviewList({
  lectureId,
  lowness,
  likes,
  recent,
}: {
  lectureId: string;
  lowness?: boolean;
  likes?: boolean;
  recent?: boolean;
}): Promise<ReviewResult> {
  try {
    const params = {
      lectureId,
      ...(lowness && { lowness }),
      ...(likes && { likes }),
      ...(recent && { recent }),
    };

    const response = await apiGetWithCache('/review', params);

    if (response.status === HTTP_STATUS.OK && Array.isArray(response.data)) {
      return {
        success: true,
        reviews: response.data,
      };
    }

    if (response.status === HTTP_STATUS.ACCEPTED) {
      return {
        success: false,
        message: response.message || ERROR_MESSAGES.REVIEW_FETCH_EMPTY,
      };
    }

    return {
      success: false,
      message: response.message || ERROR_MESSAGES.REVIEW_FETCH_FAILED,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.REVIEW_FETCH_UNKNOWN_ERROR,
    };
  }
}

export async function postReview(request: PostReviewRequest): Promise<PostReviewResult> {
  try {
    const response = await apiPost('/review', request);

    if (response.status === HTTP_STATUS.OK) {
      return { success: true };
    }

    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
      return {
        success: false,
        message: response.message || ERROR_MESSAGES.REVIEW_POST_UNAUTHORIZED,
      };
    }

    if (response.status === HTTP_STATUS.FORBIDDEN) {
      return {
        success: false,
        message: response.message || ERROR_MESSAGES.REVIEW_POST_FORBIDDEN,
      };
    }

    return {
      success: false,
      message: response.message || ERROR_MESSAGES.REVIEW_POST_FAILED,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.REVIEW_POST_UNKNOWN_ERROR,
    };
  }
}

export async function patchReview(request: PostReviewRequest): Promise<PostReviewResult> {
  try {
    const response = await apiPatch('/review', request);

    if (response.status === HTTP_STATUS.OK) {
      return { success: true };
    }

    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
      return {
        success: false,
        message: response.message || ERROR_MESSAGES.REVIEW_PATCH_UNAUTHORIZED,
      };
    }

    if (response.status === HTTP_STATUS.FORBIDDEN) {
      return {
        success: false,
        message: response.message || ERROR_MESSAGES.REVIEW_PATCH_FORBIDDEN,
      };
    }

    return {
      success: false,
      message: response.message || ERROR_MESSAGES.REVIEW_PATCH_FAILED,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.REVIEW_PATCH_UNKNOWN_ERROR,
    };
  }
}

export async function deleteReview(request: DeleteReviewRequest): Promise<DeleteReviewResult> {
  try {
    const response = await apiDelete('/review', request);

    if (response.status === HTTP_STATUS.OK) {
      return { success: true };
    }

    return {
      success: false,
      message: response.message || ERROR_MESSAGES.REVIEW_DELETE_FAILED,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.REVIEW_DELETE_UNKNOWN_ERROR,
    };
  }
}

export async function getMyReview(userNumber: number): Promise<MyReviewData[]> {
  try {
    const response = await apiGetWithCache('/review/me', {
      userNumber: userNumber.toString(),
    });

    if (response.status === 200 && Array.isArray(response.data)) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.error('내 리뷰 조회 실패:', error);
    return [];
  }
}
