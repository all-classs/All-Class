export interface Lecture {
  lectureId: string;
  lectureName: string;
  credit: number;
  professor: string;
  classification: string;
}

export type LectureList = Lecture[];

export interface LectureResponse {
  status: number;
  message: string;
  data: LectureList | null;
}
