'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likeReview } from '@/lib/review';
import type { LikeReviewParams, LikeReviewResult } from '../../shared/types/api';

export function useLikeReview() {
  const queryClient = useQueryClient();

  return useMutation<LikeReviewResult, Error, LikeReviewParams>({
    mutationFn: likeReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews'],
        exact: false,
      });
    },
  });
}
