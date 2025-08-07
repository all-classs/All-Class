import { ERROR_MESSAGES } from '@/constants';
import type { StaticLectureData } from '@/domains/lecture';
import { apiGetWithCache } from '../apiClient';

export interface StaticLectureResult {
  success: boolean;
  lectures?: StaticLectureData[];
  message?: string;
}

export async function getLectureListStatic(universityName: string): Promise<StaticLectureResult> {
  try {
    const response = await apiGetWithCache('/class', { university: universityName }, 'force-cache');

    if (response.status === 200 && Array.isArray(response.data)) {
      const staticLectures: StaticLectureData[] = response.data.map(
        (lecture: Record<string, unknown>) => ({
          lectureId: lecture.lectureId as number,
          lectureName: lecture.lectureName as string,
          department: lecture.department as string,
          university: lecture.university as string,
          lectureType: lecture.lectureType as string,
          professor: lecture.professor as string,
          opened: lecture.opened as boolean,
          icon: lecture.icon as string,
        })
      );

      return {
        success: true,
        lectures: staticLectures,
      };
    }

    return {
      success: false,
      message: response.message || ERROR_MESSAGES.LECTURE_FETCH_FAILED,
    };
  } catch (error) {
    return {
      success: false,
      message: ERROR_MESSAGES.LECTURE_FETCH_FAILED,
    };
  }
}
