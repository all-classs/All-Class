import type { LectureResponse, LectureResult } from './lectureTypes';
import { HTTP_STATUS, ERROR_MESSAGES } from '@/constants';

export async function fetchLecture(universityName: string): Promise<LectureResult> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/class?university=${universityName}`,
      {
        cache: 'force-cache',
      }
    );

    const data: LectureResponse = await response.json();

    if (data.status === HTTP_STATUS.OK && Array.isArray(data.data)) {
      return {
        success: true,
        lectures: data.data,
      };
    }

    if (data.status === HTTP_STATUS.UNAUTHORIZED) {
      return {
        success: false,
        message: data.message || '해당 학교의 강의가 존재하지 않습니다.',
      };
    }

    return {
      success: false,
      message: ERROR_MESSAGES.LECTURE_FETCH_FAILED,
    };
  } catch {
    return {
      success: false,
      message: ERROR_MESSAGES.LECUTRE_FETCH_UNKNOWN_ERROR,
    };
  }
}
