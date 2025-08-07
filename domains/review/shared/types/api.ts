export interface PostReviewRequest {
  postId?: string;
  lectureName: string;
  userNumber: number;
  starLating: number;
  postTitle: string;
  postContent: string;
}

export interface PostReviewResponse {
  status: number;
  data: null;
  message: string;
}

export interface PostReviewResult {
  success: boolean;
  message?: string;
}

export interface GetReviewListParams {
  lectureId: string;
  lowness?: boolean;
  likes?: boolean;
  recent?: boolean;
}

export interface LikeReviewParams {
  userNumber: number;
  postId: number;
}

export interface LikeReviewResponse {
  status: number;
  data: {
    likes: number;
  } | null;
  message: string;
}

export interface LikeReviewResult {
  success: boolean;
  message?: string;
  data?: {
    likes: number;
  };
}

export interface GetLectureNameParams {
  lectureName?: string;
  lectureId: string;
  pathname: string;
}

export interface GetLectureNameResult {
  success: boolean;
  lectureName?: string;
  message?: string;
}
