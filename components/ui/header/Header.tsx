'use client';

import styles from './Header.module.css';
import { HamburgerMenu, DropdownUniversityList } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { LoginModal } from '@/components/common';
import { useAuthStore, useModalStore } from '@/store';

interface HeaderProps {
  showDropdown?: boolean;
}

export default function Header({ showDropdown = false }: HeaderProps) {
  const { isLoggedIn, logout } = useAuthStore();
  const { openLoginModal } = useModalStore();

  const handleLoginClick = () => {
    openLoginModal();
  };

  const handleLogoutClick = () => {
    logout();
  };

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
      <section className={styles.centerSection}>
        {showDropdown && <DropdownUniversityList />}
      </section>
      <section className={`${styles.rightSection} ${!showDropdown ? styles.alwaysVisible : ''}`}>
        <button className={styles.button}>마이페이지</button>
        {isLoggedIn ? (
          <button className={styles.button} onClick={handleLogoutClick}>
            로그아웃
          </button>
        ) : (
          <button className={styles.button} onClick={handleLoginClick}>
            로그인
          </button>
        )}
      </section>
      {showDropdown && <HamburgerMenu showDropdown={showDropdown} />}
      <LoginModal />
    </header>
  );
}
