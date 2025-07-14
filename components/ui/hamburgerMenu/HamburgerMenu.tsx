'use client';

import { useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  HamburgerButton,
  MobileMenu,
  MobileMenuOverlay,
  MobileButton,
  UniversityListContainer,
  ButtonSection,
} from './HamburgerMenu.style';
import UniversityList from '../universityList/UniversityList';

interface HamburgerMenuProps {
  showDropdown?: boolean;
}

export default function HamburgerMenu({ showDropdown = false }: HamburgerMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HamburgerButton onClick={handleMobileMenuToggle}>
        <MenuIcon />
      </HamburgerButton>

      {isMobileMenuOpen && (
        <>
          <MobileMenuOverlay onClick={handleMobileMenuClose} />
          <MobileMenu>
            {showDropdown && (
              <UniversityListContainer>
                <h3>대학교 선택</h3>
                <UniversityList />
              </UniversityListContainer>
            )}
            <ButtonSection>
              <MobileButton onClick={handleMobileMenuClose}>마이페이지</MobileButton>
              <MobileButton onClick={handleMobileMenuClose}>로그인</MobileButton>
            </ButtonSection>
          </MobileMenu>
        </>
      )}
    </>
  );
}
