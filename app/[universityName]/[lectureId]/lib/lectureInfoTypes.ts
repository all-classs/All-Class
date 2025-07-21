export interface LectureInfo {
  lectureId: number;
  lectureName: string;
  averageStarLating: number;
  totalStarLating: number;
  reviewCount: number;
  department: string;
  university: string;
  lectureType: string;
  professor: string;
  introduction: string;
  profileImage: string;
  classNumber: number;
  icon: string;
  important: number;
  difficulty: number;
  funny: number;
}

export type LectureInfoList = LectureInfo;

export interface LectureInfoResponse {
  status: number;
  message: string;
  data: LectureInfoList | null;
}

export interface LectureInfoResult {
  success: boolean;
  lectureInfo?: LectureInfoList;
  message?: string;
}
