'use client';

import {
  HeaderContainer,
  CenterDropdown,
  DropdownTrigger,
  DropdownMenu,
  LeftSection,
  CenterSection,
  RightSection,
  Button,
} from './Header.style';
import Image from 'next/image';
import UniversityList from '../universityList/UniversityList';
import Link from 'next/link';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import { useDropdown } from '@/hooks/index';

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
    <HeaderContainer>
      <LeftSection>
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={150} height={50} priority />
        </Link>
      </LeftSection>
      <CenterSection onMouseEnter={handleDropdownOpen}>
        <CenterDropdown ref={dropdownRef} showDropdown={showDropdown}>
          <DropdownTrigger>대학교 선택</DropdownTrigger>
          <DropdownMenu
            isOpen={isDropdownOpen}
            onMouseLeave={handleDropdownMouseLeave}
            onMouseEnter={handleDropdownMouseEnter}
          >
            <UniversityList />
          </DropdownMenu>
        </CenterDropdown>
      </CenterSection>
      <RightSection>
        <Button>마이페이지</Button>
        <Button>로그인</Button>
      </RightSection>
      <HamburgerMenu showDropdown={showDropdown} />
    </HeaderContainer>
  );
}
