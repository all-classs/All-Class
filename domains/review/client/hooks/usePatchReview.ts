'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchReview } from '@/api/review';
import type { PostReviewRequest, PostReviewResult } from '../../shared/types/api';

export function usePatchReview(lectureId: string) {
  const queryClient = useQueryClient();

  return useMutation<PostReviewResult, Error, PostReviewRequest>({
    mutationFn: patchReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews', lectureId],
        exact: false,
      });
      queryClient.invalidateQueries({ queryKey: ['lecture-rating'] });
      queryClient.invalidateQueries({ queryKey: ['my-reviews'] });
      queryClient.invalidateQueries({ queryKey: ['my-lectures'] });
    },
  });
}
