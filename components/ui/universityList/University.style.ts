import styled from '@emotion/styled';
import Link from 'next/link';

export const UniversityGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  width: 100%;
`;

export const UniversityCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 214, 0, 0.1);
  }
`;
