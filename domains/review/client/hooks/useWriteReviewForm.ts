'use client';

import { useState } from 'react';
import { UI_MESSAGES } from '@/constants';
import type { ValidationResult, ReviewFormData } from '../../shared/types/components';

export function useWriteReviewForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const validateForm = (): ValidationResult => {
    if (!title.trim()) {
      return { isValid: false, message: UI_MESSAGES.VALIDATION.TITLE_REQUIRED };
    }
    if (!content.trim()) {
      return { isValid: false, message: UI_MESSAGES.VALIDATION.CONTENT_REQUIRED };
    }
    if (rating === 0) {
      return { isValid: false, message: UI_MESSAGES.VALIDATION.RATING_REQUIRED };
    }
    return { isValid: true };
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setRating(0);
  };

  const getFormData = (): ReviewFormData => ({
    title: title.trim(),
    content: content.trim(),
    rating,
  });

  return {
    title,
    content,
    rating,

    setTitle,
    setContent,
    setRating,
    resetForm,

    validateForm,
    getFormData,
  };
}
