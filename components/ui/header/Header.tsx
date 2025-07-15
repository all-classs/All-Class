'use client';

import styles from './Header.module.css';
import { UniversityList, HamburgerMenu } from '@/components/ui';
import Link from 'next/link';
import { useDropdown } from '@/hooks';
import Image from 'next/image';

interface HeaderProps {
  showDropdown?: boolean;
}

export default function Header({ showDropdown = false }: HeaderProps) {
  const {
    isDropdownOpen,
    dropdownRef,
    handleDropdownOpen,
    handleDropdownMouseLeave,
    handleDropdownMouseEnter,
  } = useDropdown();

  return (
    <header className={styles.headerContainer}>
      <section className={styles.leftSection}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="logo"
            width={150}
            height={50}
            priority
          />
        </Link>
      </section>
      <section className={styles.centerSection} onMouseEnter={handleDropdownOpen}>
        <div
          className={`${styles.centerDropdown} ${!showDropdown ? styles.hidden : ''}`}
          ref={dropdownRef}
        >
          <button className={styles.dropdownTrigger}>대학교 선택</button>
          <div
            className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}
            onMouseLeave={handleDropdownMouseLeave}
            onMouseEnter={handleDropdownMouseEnter}
          >
            <UniversityList />
          </div>
        </div>
      </section>
      <section className={`${styles.rightSection} ${!showDropdown ? styles.alwaysVisible : ''}`}>
        <button className={styles.button}>마이페이지</button>
        <button className={styles.button}>로그인</button>
      </section>
      {showDropdown && <HamburgerMenu showDropdown={showDropdown} />}
    </header>
  );
}
