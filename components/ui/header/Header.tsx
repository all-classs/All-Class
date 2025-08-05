'use client';

import styles from './Header.module.css';
import { Button, HamburgerMenu, DropdownUniversityList } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { LoginModal, useAuth, useLoginModal } from '@/domains/auth';

interface HeaderProps {
  showDropdown?: boolean;
}

export default function Header({ showDropdown = false }: HeaderProps) {
  const { isLoggedIn, logout } = useAuth();
  const { open: openLoginModal } = useLoginModal();

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
        <Link href="/mypage/classes">
          <Button variant="default">마이페이지</Button>
        </Link>
        {isLoggedIn ? (
          <Button variant="default" onClick={handleLogoutClick}>
            로그아웃
          </Button>
        ) : (
          <Button variant="default" onClick={handleLoginClick}>
            로그인
          </Button>
        )}
      </section>
      {showDropdown && <HamburgerMenu showDropdown={showDropdown} />}
      <LoginModal />
    </header>
  );
}
