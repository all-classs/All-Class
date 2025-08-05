import type { SortOption } from './review';

export interface WriteReviewModalProps {
  lectureId: string;
  lectureName?: string;
  onClose?: () => void;
}

export interface WriteReviewModalRef {
  open: () => void;
  close: () => void;
}

export interface ReviewSortSelectorProps {
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export interface ReviewFormData {
  title: string;
  content: string;
  rating: number;
}

export interface ReviewSubmitData {
  title: string;
  content: string;
  rating: number;
}

export interface UseReviewListParams {
  lectureId: string;
  sortOption?: SortOption;
}

export interface UseReviewSubmitProps {
  lectureId: string;
  lectureName?: string;
  onSuccess?: () => void;
}
