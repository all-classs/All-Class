import { ERROR_MESSAGES, HTTP_STATUS } from '@/constants';
import { LectureInfoResponse, LectureInfoResult } from '@/domains/lecture';
import { ClassData } from '@/domains/mypage';

export async function getLectureInfo(
  universityName: string,
  lectureId: string
): Promise<LectureInfoResult> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/class?university=${universityName}&lectureId=${lectureId}`,
      {
        cache: 'force-cache',
      }
    );

    const data: LectureInfoResponse = await response.json();

    if (data.status === HTTP_STATUS.OK && data.data) {
      return {
        success: true,
        lectureInfo: data.data,
      };
    }

    if (data.status === HTTP_STATUS.UNAUTHORIZED) {
      return {
        success: false,
        message: ERROR_MESSAGES.LECUTRE_INFO_FETCH_FAILED,
      };
    }

    return {
      success: false,
      message: data.message,
    };
  } catch {
    return {
      success: false,
      message: ERROR_MESSAGES.LECUTRE_INFO_FETCH_UNKNOWN_ERROR,
    };
  }
}

export async function getMyLectures(userNumber: number): Promise<ClassData[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/class/me?userNumber=${userNumber}`,
      {
        cache: 'force-cache',
      }
    );

    const data = await response.json();

    if (data.status === 200) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching classes:', error);

    return [];
  }
}
