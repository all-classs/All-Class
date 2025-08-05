'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SORT_OPTIONS } from '@/constants';
import type { SortOption } from '../../shared/types/review';
import styles from '../../styles/ReviewSortSelector.module.css';

interface ReviewSortSelectorProps {
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function ReviewSortSelector({
  selectedSort,
  onSortChange,
}: ReviewSortSelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedOption = SORT_OPTIONS.find((option) => option.value === selectedSort);

  const handleOptionClick = (sort: SortOption) => {
    onSortChange(sort);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.sortContainer}>
      <div className={styles.sortTabs}>
        {SORT_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={`${styles.sortTab} ${selectedSort === option.value ? styles.active : ''}`}
            onClick={() => onSortChange(option.value)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className={styles.sortSelector}>
        <button
          className={`${styles.sortButton} ${isDropdownOpen ? styles.open : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          type="button"
        >
          <span className={styles.sortLabel}>{selectedOption?.label || '별점 높은순'}</span>
          <ChevronDown
            size={16}
            className={`${styles.chevron} ${isDropdownOpen ? styles.rotated : ''}`}
          />
        </button>

        {isDropdownOpen && (
          <div className={styles.sortDropdown}>
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.value}
                className={`${styles.sortOption} ${selectedSort === option.value ? styles.active : ''}`}
                onClick={() => handleOptionClick(option.value)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
