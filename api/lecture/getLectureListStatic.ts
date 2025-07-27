import { HTTP_STATUS, ERROR_MESSAGES } from '@/constants';
import type { LectureResponse, StaticLectureData } from '@/domains/lecture';

export interface StaticLectureResult {
  success: boolean;
  lectures?: StaticLectureData[];
  message?: string;
}

export async function getLectureListStatic(universityName: string): Promise<StaticLectureResult> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/class?university=${universityName}`,
      {
        cache: 'force-cache',
        next: {
          tags: [`lectures-${universityName}`],
        },
      }
    );

    const data: LectureResponse = await response.json();

    if (data.status === HTTP_STATUS.OK && Array.isArray(data.data)) {
      const staticLectures: StaticLectureData[] = data.data.map((lecture) => ({
        lectureId: lecture.lectureId,
        lectureName: lecture.lectureName,
        department: lecture.department,
        university: lecture.university,
        lectureType: lecture.lectureType,
        professor: lecture.professor,
        opened: lecture.opened,
        icon: lecture.icon,
      }));

      return {
        success: true,
        lectures: staticLectures,
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
