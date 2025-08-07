export interface MyReviewData {
  postId: number;
  postTitle: string;
  postContent: string;

  starLating: number;
  likes: number;
  createDate: string;
  lecture: {
    lectureId: number;
    lectureName: string;
    starRating: {
      averageRating: number;
      totalRating: number;
      reviewCount: number;
    };
    department: string;
    university: string;
    professor: string;
    lectureType: string;
  };
}

export interface ClassData {
  semester: string;
  classNumber: number;
  lectureName: string;
  professorName: string;
  completionYear: string;
  completionType: string;
}

export interface DeleteReviewRequest {
  postId: number;
  userNumber: number;
}

export interface DeleteReviewResponse {
  status: number;
  data: null;
  message: string;
}

export interface DeleteReviewResult {
  success: boolean;
  message?: string;
}
