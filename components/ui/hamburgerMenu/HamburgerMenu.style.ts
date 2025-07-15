import styled from '@emotion/styled';
import { colors } from '@/constants';

export const HamburgerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: all 0.2s ease;

  svg {
    font-size: 24px;
    color: ${colors.BLACK};
    transition: color 0.2s ease;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);

    svg {
      color: ${colors.PRIMARY};
    }
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 470px) {
    display: flex;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;

  @media (max-width: 470px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background-color: ${colors.WHITE};
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 2rem 1.5rem;
  display: none;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.BLACK};
    margin-bottom: 0.5rem;
  }

  @media (max-width: 470px) {
    display: flex;
  }
`;

export const UniversityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.BLACK};
  cursor: pointer;
  background: none;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: none;
  text-align: center;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${colors.BLACK};
    color: ${colors.WHITE};
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 5rem;
  left: 0;
  right: 0;
  padding: 0 1rem;
`;
