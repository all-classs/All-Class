export interface Lecture {
  lectureId: number;
  lectureName: string;
  department: string;
  university: string;
  lectureType: string;
  averageStarLating: number;
  professor: string;
  opened: boolean;
  icon: string;
}

export interface StaticLectureData {
  lectureId: number;
  lectureName: string;
  department: string;
  university: string;
  lectureType: string;
  professor: string;
  opened: boolean;
  icon: string;
}

export interface DynamicLectureData {
  lectureId: number;
  averageStarLating: number;
}

export type LectureList = Lecture[];

export interface LectureResponse {
  status: number;
  message: string;
  data: LectureList | null;
}

export interface LectureResult {
  success: boolean;
  lectures?: LectureList;
  message?: string;
}
