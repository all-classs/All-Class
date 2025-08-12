import type { QueryClient } from '@tanstack/react-query';

export function invalidateReviewCache(queryClient: QueryClient, lectureId?: string) {
  if (lectureId) {
    queryClient.invalidateQueries({
      queryKey: ['reviews', lectureId],
      exact: false,
    });
  }

  queryClient.invalidateQueries({
    queryKey: ['reviews'],
    exact: false,
  });

  queryClient.invalidateQueries({
    queryKey: ['lecture-rating'],
    exact: false,
  });

  queryClient.invalidateQueries({
    queryKey: ['my-reviews'],
    exact: false,
  });

  queryClient.invalidateQueries({
    queryKey: ['my-lectures'],
    exact: false,
  });
}
