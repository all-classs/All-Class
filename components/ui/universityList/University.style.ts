import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

export const UniversityCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  transition:
    background-color 0.2s ease,
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: background-color, transform;
`;

export const UniversityGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  width: 100%;

  &:hover .university-card {
    transform: scale(0.9);
    z-index: 1;
    filter: grayscale(1);
  }

  .university-card:hover {
    transform: scale(1.1);
    z-index: 2;
    filter: none;
  }
`;
export const UniversityImage = styled(Image)`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
`;
