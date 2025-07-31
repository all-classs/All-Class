'use client';

import { useLectureReviewCount } from '../hooks';

interface DynamicReviewCountProps {
  lectureId: number;
  universityName: string;
  fallbackCount?: number;
}

export default function DynamicReviewCount({
  lectureId,
  universityName,
  fallbackCount = 0,
}: DynamicReviewCountProps) {
  const { data, isLoading, error } = useLectureReviewCount({
    lectureId,
    universityName,
  });

  if (isLoading) {
    if (fallbackCount > 0) {
      return <span>{fallbackCount}</span>;
    }

    return (
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          animation: 'pulse 1.5s ease-in-out infinite',
          display: 'inline-block',
        }}
      />
    );
  }

  if (error || !data?.success) {
    return <span>{fallbackCount}</span>;
  }

  return <span>{data.reviewCount || fallbackCount}</span>;
}
