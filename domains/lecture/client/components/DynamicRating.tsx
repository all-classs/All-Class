'use client';

import { StarRating } from '@/components/common';
import { useLectureRating } from '../hooks';

interface DynamicRatingProps {
  lectureId: number;
  universityName: string;
  size?: 'small' | 'medium' | 'large' | 'veryLarge';
  showRatingText?: boolean;
  fallbackRating?: number;
}

export default function DynamicRating({
  lectureId,
  universityName,
  size = 'large',
  showRatingText = false,
  fallbackRating = 0,
}: DynamicRatingProps) {
  const { data, isLoading, error } = useLectureRating({
    lectureId,
    universityName,
  });

  if (isLoading) {
    if (fallbackRating > 0) {
      return <StarRating rating={fallbackRating} size={size} showRatingText={showRatingText} />;
    }

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
    return <StarRating rating={fallbackRating} size={size} showRatingText={showRatingText} />;
  }

  return (
    <StarRating
      rating={data.rating || fallbackRating}
      size={size}
      showRatingText={showRatingText}
    />
  );
}
