import { SORT_OPTIONS } from '@/constants';
import type { SortOption } from '../types/review';

export function getSortParams(sortOption: SortOption) {
  const sortConfig = SORT_OPTIONS.find((option) => option.value === sortOption);
  return sortConfig?.apiParams || {};
}
