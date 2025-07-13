import { useState, useEffect, useRef, useCallback } from 'react';

const DROPDOWN_CLOSE_DELAY_MS = 500;

export function useDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleDropdownClose = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleDropdownOpen = useCallback(() => {
    clearCloseTimer();
    setIsDropdownOpen(true);
  }, [clearCloseTimer]);

  const handleDropdownMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      handleDropdownClose();
    }, DROPDOWN_CLOSE_DELAY_MS);
  }, [handleDropdownClose]);

  const handleDropdownMouseEnter = useCallback(() => {
    clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        handleDropdownClose();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen, handleDropdownClose]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  return {
    isDropdownOpen,
    dropdownRef,
    handleDropdownOpen,
    handleDropdownClose,
    handleDropdownMouseLeave,
    handleDropdownMouseEnter,
  };
}
