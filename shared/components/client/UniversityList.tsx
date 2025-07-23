'use client';

import styles from './University.module.css';
import { memo, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getUniversitiesWithImageSrc } from '@/utils';

const UniversityList = memo(function UniversityList() {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);

  const universityData = useMemo(() => {
    return getUniversitiesWithImageSrc();
  }, []);

  return (
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
  );
});

export default UniversityList;
