import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
import { LectureInfoResult, LectureInfo } from '@/domains/lecture';
import { ClassData } from '@/domains/mypage';
import { apiGetWithTags } from '../apiClient';

export async function getLectureInfo(
  universityName: string,
  lectureId: string
): Promise<LectureInfoResult> {
  try {
    const response = await apiGetWithTags(
      '/class',
      { university: universityName, lectureId },
      [`lecture-info-${universityName}-${lectureId}`],
      'force-cache'
    );

    if (response.status === HTTP_STATUS.OK && response.data) {
      return {
        success: true,
        lectureInfo: response.data as LectureInfo,
      };
    }

    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
      return {
        success: false,
        message: ERROR_MESSAGES.LECUTRE_INFO_FETCH_FAILED,
      };
    }

    return {
      success: false,
      message: response.message || ERROR_MESSAGES.LECUTRE_INFO_FETCH_FAILED,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.LECUTRE_INFO_FETCH_UNKNOWN_ERROR,
    };
  }
}

export async function getMyLectures(userNumber: number): Promise<ClassData[]> {
  try {
    const response = await apiGetWithTags(
      '/class/me',
      { userNumber },
      [`my-lectures-${userNumber}`],
      'force-cache'
    );

    if (response.status === 200 && Array.isArray(response.data)) {
      return response.data;
    }

    return [];
  } catch (error) {
    return [];
  }
}
