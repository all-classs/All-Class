'use client';

import { StarRating } from '@/components/common';
import { useLectureRating } from '../hooks';

interface DynamicRatingProps {
  lectureId: number;
  universityName: string;
  size?: 'small' | 'medium' | 'large' | 'veryLarge';
}

export default function DynamicRating({
  lectureId,
  universityName,
  size = 'large',
}: DynamicRatingProps) {
  const { data, isLoading, error } = useLectureRating({
    lectureId,
    universityName,
  });

  if (isLoading) {
    return (
      <div
        style={{
          width: '80px',
          height: '24px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />
    );
  }

  if (error || !data?.success) {
    return <StarRating rating={0} size={size} />;
  }

  return <StarRating rating={data.rating || 0} size={size} />;
}
