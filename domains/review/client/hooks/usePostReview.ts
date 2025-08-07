'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postReview } from '@/lib/review';
import type { PostReviewRequest, PostReviewResult } from '../../shared/types/api';

export function usePostReview(lectureId: string) {
  const queryClient = useQueryClient();

  return useMutation<PostReviewResult, Error, PostReviewRequest>({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews', lectureId],
        exact: false,
      });
      queryClient.invalidateQueries({ queryKey: ['lecture-rating'] });
    },
  });
}
