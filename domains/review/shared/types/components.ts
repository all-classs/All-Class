import type { SortOption } from './review';

export interface ReviewInitialData {
  title: string;
  content: string;
  rating: number;
}

export interface WriteReviewModalProps {
  postId?: string;
  lectureId?: string;
  lectureName?: string;
  onClose?: () => void;
  onSuccess?: () => void;
  mode?: 'create' | 'edit';
  initialData?: ReviewInitialData;
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
  postId?: string;
  lectureId?: string;
  lectureName?: string;
  mode?: 'create' | 'edit';
  onSuccess?: () => void;
}
