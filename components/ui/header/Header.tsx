'use client';

import styles from './Header.module.css';
import { HamburgerMenu } from '@/components/ui';
import DropdownUniversityList from '@/components/ui/universityList/DropdownUniversityList';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import LoginModal, { LoginModalRef } from '@/components/common/modal/LoginModal';

interface HeaderProps {
  showDropdown?: boolean;
}

export default function Header({ showDropdown = false }: HeaderProps) {
  const loginModalRef = useRef<LoginModalRef>(null);
  const handleLoginClick = () => {
    loginModalRef.current?.open();
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
        <DropdownUniversityList />
      </section>
      <section className={`${styles.rightSection} ${!showDropdown ? styles.alwaysVisible : ''}`}>
        <button className={styles.button}>마이페이지</button>
        <button className={styles.button} onClick={handleLoginClick}>
          로그인
        </button>
      </section>
      {showDropdown && <HamburgerMenu showDropdown={showDropdown} />}
      <LoginModal ref={loginModalRef} />
    </header>
  );
}
