'use client';

import { Review } from '@/types';
import { ReviewDetailModal } from '@/domains/review';
import { useRef } from 'react';

interface ReviewCardModalProps {
  review: Review;
  children: React.ReactNode;
}

export default function ReviewCardModal({ review, children }: ReviewCardModalProps) {
  const modalRef = useRef<{ open: (review: Review) => void; close: () => void }>(null);

  const handleCardClick = () => {
    modalRef.current?.open(review);
  };

  return (
    <>
      <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      <ReviewDetailModal ref={modalRef} />
    </>
  );
}
