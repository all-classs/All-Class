import { HTTP_STATUS } from '@/constants';
import { apiRequest, apiGetWithTags } from '../apiClient';

export interface RatingResult {
  success: boolean;
  rating?: number;
  reviewCount?: number;
  message?: string;
}

export async function getLectureRating(
  lectureId: number,
  universityName: string
): Promise<RatingResult> {
  try {
    const data = await apiGetWithTags(
      '/class',
      { university: universityName, lectureId },
      [`lecture-info-${universityName}-${lectureId}`],
      'force-cache'
    );

    if (data.status === HTTP_STATUS.OK && data.data) {
      if (data.data.averageStarLating !== undefined) {
        return {
          success: true,
          rating: data.data.averageStarLating,
          reviewCount: data.data.reviewCount || 0,
        };
      }
    }

    return {
      success: false,
      message: '평점 데이터를 불러올 수 없습니다.',
    };
  } catch (error) {
    return {
      success: false,
      message: '평점 조회 중 오류가 발생했습니다.',
    };
  }
}
