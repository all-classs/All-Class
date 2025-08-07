'use client';

import { useState, useEffect } from 'react';
import { UI_MESSAGES } from '@/constants';
import type { ValidationResult, ReviewFormData } from '../../shared/types/components';

interface InitialData {
  title?: string;
  content?: string;
  rating?: number;
}

export function useWriteReviewForm(initialData?: InitialData) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [rating, setRating] = useState(initialData?.rating || 0);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
      setRating(initialData.rating || 0);
    }
  }, [initialData]);

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
