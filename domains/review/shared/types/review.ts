export interface Review {
  postId: number;
  postTitle: string;
  postContent: string;
  starLating: number;
  likes: number;
  createDate: string;
  user: {
    userNumber: number;
    username: string;
    profile: string;
  };
}

export type ReviewList = Review[];

export interface ReviewResponse {
  status: number;
  message: string;
  data: ReviewList | null;
}

export interface ReviewResult {
  success: boolean;
  reviews?: ReviewList;
  message?: string;
}

export type SortOption = 'rating_desc' | 'rating_asc' | 'likes_desc' | 'latest';
