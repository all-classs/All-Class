'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchReview } from '@/lib/review';
import { invalidateReviewCache } from '@/utils';
import type { PostReviewRequest, PostReviewResult } from '../../shared/types/api';

export function usePatchReview(lectureId: string) {
  const queryClient = useQueryClient();

  return useMutation<PostReviewResult, Error, PostReviewRequest>({
    mutationFn: patchReview,
    onSuccess: () => {
      invalidateReviewCache(queryClient, lectureId);
    },
  });
}
