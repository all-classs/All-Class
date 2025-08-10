'use client';

import styles from './Header.module.css';
import { Button, HamburgerMenu, DropdownUniversityList } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { LoginModal, useAuth, useLoginModal } from '@/domains/auth';

interface HeaderProps {
  showDropdown?: boolean;
}

export default function Header({ showDropdown = false }: HeaderProps) {
  const { isLoggedIn, logout } = useAuth();
  const { open: openLoginModal } = useLoginModal();
  const router = useRouter();
  const pathname = usePathname();

  const handleLoginClick = () => {
    openLoginModal();
  };

  const handleLogoutClick = () => {
    logout();
  };

  const handleMyPageClick = () => {
    if (pathname.startsWith('/mypage')) {
      return;
    }
    router.push('/mypage/lectures');
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
        {isLoggedIn ? (
          <Button variant="default" onClick={handleMyPageClick} data-test="open-mypage">
            마이페이지
          </Button>
        ) : (
          <Button variant="default" onClick={handleLoginClick}>
            마이페이지
          </Button>
        )}
        {isLoggedIn ? (
          <Button variant="default" onClick={handleLogoutClick} data-test="logout">
            로그아웃
          </Button>
        ) : (
          <Button variant="default" onClick={handleLoginClick} data-test="open-login">
            로그인
          </Button>
        )}
      </section>
      {showDropdown && <HamburgerMenu showDropdown={showDropdown} />}
      <LoginModal />
    </header>
  );
}
