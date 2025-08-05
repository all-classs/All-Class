import { getLectureInfo } from '@/api/lecture';
import { ERROR_MESSAGES } from '@/constants';
import type { GetLectureNameParams, GetLectureNameResult } from '../types';

export async function getLectureName({
  lectureName,
  lectureId,
  pathname,
}: GetLectureNameParams): Promise<GetLectureNameResult> {
  if (lectureName) {
    return { success: true, lectureName };
  }

  try {
    const pathSegments = pathname.split('/');
    const universityName = pathSegments[1];

    if (!universityName) {
      return {
        success: false,
        message: ERROR_MESSAGES.LECUTRE_INFO_FETCH_FAILED,
      };
    }

    const lectureInfoResult = await getLectureInfo(universityName, lectureId);

    if (!lectureInfoResult.success || !lectureInfoResult.lectureInfo?.lectureName) {
      return {
        success: false,
        message: ERROR_MESSAGES.LECUTRE_INFO_FETCH_FAILED,
      };
    }

    return {
      success: true,
      lectureName: lectureInfoResult.lectureInfo.lectureName,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.LECUTRE_INFO_FETCH_FAILED,
    };
  }
}
