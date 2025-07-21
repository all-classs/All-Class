'use client';

import styles from './University.module.css';
import { memo, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getUniversitiesWithImageSrc } from '@/utils';
import { useDropdown } from '@/hooks';

interface UniversityListProps {
  showDropdown?: boolean;
}

const UniversityList = memo(function UniversityList({ showDropdown = false }: UniversityListProps) {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);
  const universityData = useMemo(() => {
    return getUniversitiesWithImageSrc();
  }, []);

  const {
    isDropdownOpen,
    dropdownRef,
    handleDropdownOpen,
    handleDropdownMouseLeave,
    handleDropdownMouseEnter,
  } = useDropdown();

  if (!showDropdown) return null;

  return (
    <div className={styles.centerDropdown} ref={dropdownRef} onMouseEnter={handleDropdownOpen}>
      <button className={styles.dropdownTrigger}>대학교 선택</button>
      <div
        className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}
        onMouseLeave={handleDropdownMouseLeave}
        onMouseEnter={handleDropdownMouseEnter}
      >
        <div className={styles.universityGrid}>
          {universityData.map((university) => {
            const href = `/${university.slug}`;
            const isCurrent = decodedPathname === href;
            return (
              <Link
                className={`${styles.universityCard} university-card`}
                key={university.slug}
                href={href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (isCurrent) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                <Image
                  className={styles.universityImage}
                  key={university.slug}
                  src={university.imageSrc}
                  alt={university.name}
                  width={100}
                  height={50}
                  loading="eager"
                  priority
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default UniversityList;
