import styled from '@emotion/styled';
import { colors } from '@/constants';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem clamp(0.1rem, 6.3vw, 7rem);
  position: relative;
`;

export const LeftSection = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CenterSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  height: 100%;

  &:hover button {
    color: ${colors.PRIMARY};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @media (max-width: 470px) {
    display: none;
  }
`;

export const RightSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 470px) {
    display: none;
  }
`;

export const CenterDropdown = styled.div<{ showDropdown: boolean }>`
  position: relative;
  display: ${({ showDropdown }) => (showDropdown ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DropdownTrigger = styled.button`
  width: auto;
  background: none;
  border: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${colors.BLACK};
  cursor: pointer;
  transition: all 0.2s ease;
  height: 100%;

  &:hover {
    color: ${colors.PRIMARY};
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 130%;
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.WHITE};
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  z-index: 1000;
  margin-top: 0.5rem;
  min-width: 900px;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.2s ease;

  @media (max-width: 1024px) {
    min-width: 300px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid ${colors.WHITE};
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.BLACK};
  cursor: pointer;
  background: none;
  padding: 0.5em 0.55em;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: none;

  &:hover {
    background: ${colors.BLACK};
    color: ${colors.WHITE};
  }
`;
