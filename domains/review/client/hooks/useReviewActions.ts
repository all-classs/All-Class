'use client';

import { useRef, useState } from 'react';
import { useAuth, useLoginModal } from '@/domains/auth';
import { UI_MESSAGES } from '@/constants/message';
import type { WriteReviewModalRef } from '../../shared/types/components';
import type { SortOption } from '../../shared/types/review';

export function useReviewActions() {
  const [sortOption, setSortOption] = useState<SortOption>('rating_desc');
  const writeReviewModalRef = useRef<WriteReviewModalRef>(null);
  const { isLoggedIn } = useAuth();
  const { open: openLoginModal } = useLoginModal();

  const handleSortChange = (newSortOption: SortOption) => {
    setSortOption(newSortOption);
  };

  const handleWriteReviewClick = () => {
    if (!isLoggedIn) {
      const shouldLogin = confirm(UI_MESSAGES.CONFIRM.LOGIN_REQUIRED);
      if (shouldLogin) {
        openLoginModal();
      }
      return;
    }
    writeReviewModalRef.current?.open();
  };

  const openWriteReviewModal = () => {
    writeReviewModalRef.current?.open();
  };

  return {
    sortOption,
    writeReviewModalRef,
    handleSortChange,
    handleWriteReviewClick,
    openWriteReviewModal,
  };
}
