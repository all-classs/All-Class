'use client';

import styles from './University.module.css';
import { useDropdown } from '@/hooks';
import UniversityList from './UniversityList';

export default function DropdownUniversityList() {
  const {
    isDropdownOpen,
    dropdownRef,
    handleDropdownOpen,
    handleDropdownMouseLeave,
    handleDropdownMouseEnter,
  } = useDropdown();

  return (
    <div className={styles.centerDropdown} ref={dropdownRef} onMouseEnter={handleDropdownOpen}>
      <button className={styles.dropdownTrigger}>대학교 선택</button>
      <div
        className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}
        onMouseLeave={handleDropdownMouseLeave}
        onMouseEnter={handleDropdownMouseEnter}
      >
        <UniversityList />
      </div>
    </div>
  );
}
