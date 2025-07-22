'use client';

import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { UniversityList } from '@/components/ui';
import dynamic from 'next/dynamic';
import { useModalStore } from '@/store';

const LoginModal = dynamic(() => import('@/components/common/modal/LoginModal'), { ssr: false });

interface HamburgerMenuProps {
  showDropdown?: boolean;
}

export default function HamburgerMenu({ showDropdown = false }: HamburgerMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openLoginModal } = useModalStore();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    openLoginModal();
  };

  return (
    <>
      <button className={styles.hamburgerButton} onClick={handleMobileMenuToggle}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isMobileMenuOpen && (
        <>
          <div className={styles.mobileMenuOverlay} onClick={handleMobileMenuClose} />
          <div className={styles.mobileMenu}>
            {showDropdown && (
              <div className={styles.universityListContainer}>
                <h3>대학교 선택</h3>
                <UniversityList />
              </div>
            )}
            <div className={styles.buttonSection}>
              <button className={styles.mobileButton} onClick={handleMobileMenuClose}>
                마이페이지
              </button>
              <button className={styles.mobileButton} onClick={handleLoginClick}>
                로그인
              </button>
            </div>
          </div>
        </>
      )}
      <LoginModal />
    </>
  );
}
