import type { SortOption } from '@/domains/review/shared/types';

export const SORT_OPTIONS = [
  { value: 'rating_desc', label: '별점 높은순', apiParams: {} },
  { value: 'rating_asc', label: '별점 낮은순', apiParams: { lowness: true } },
  { value: 'likes_desc', label: '좋아요 많은순', apiParams: { likes: true } },
  { value: 'latest', label: '최신순', apiParams: { recent: true } },
] as const;

export const DEFAULT_SORT_OPTION: SortOption = 'rating_desc';
