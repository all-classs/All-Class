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

export type LectureList = Lecture[];

export interface LectureResponse {
  status: number;
  message: string;
  data: LectureList | null;
}
