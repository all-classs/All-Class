import type { LectureList, LectureResponse } from './lectureTypes';
import { HTTP_STATUS, ERROR_MESSAGES } from '@/constants';

export async function fetchLecture(universityName: string): Promise<LectureList> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/class?university=${universityName}`
  );

  const data: LectureResponse = await response.json();

  if (data.status === HTTP_STATUS.UNAUTHORIZED) {
    return [];
  }

  if (data.status !== HTTP_STATUS.OK) {
    throw new Error(ERROR_MESSAGES.LECTURE_FETCH_FAILED);
  }

  if (Array.isArray(data.data)) {
    return data.data;
  }

  return [];
}
