import type { MyReviewData } from './api';

export interface LectureWithReviewStatus {
  semester: string;
  classNumber: number;
  lectureName: string;
  professorName: string;
  completionYear: string;
  completionType: string;
  hasReview: boolean;
  review: MyReviewData | null;
}

export interface ReviewActionButtonProps {
  lecture: LectureWithReviewStatus;
}

export interface ReviewCardProps {
  review: MyReviewData;
  userNumber: number;
}

export interface ReviewStatsProps {
  reviews: MyReviewData[];
}
