import { UniversityGrid, UniversityCard, UniversityImage } from './University.style';
import { universities } from '@/constants/universityName';
import { memo, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const UniversityList = memo(function UniversityList() {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);

  const universityData = useMemo(() => {
    return universities.map((university) => ({
      ...university,
      imageSrc: typeof university.logo === 'string' ? university.logo : university.logo.src,
    }));
  }, []);

  return (
    <UniversityGrid>
      {universityData.map((university) => {
        const href = `/${university.slug}`;
        const isCurrent = decodedPathname === href;

        return (
          <UniversityCard
            className="university-card"
            key={university.slug}
            href={href}
            onClick={(e) => {
              if (isCurrent) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            <UniversityImage
              key={university.slug}
              src={university.imageSrc}
              alt={university.name}
              width={100}
              height={50}
              loading="eager"
              priority
            />
          </UniversityCard>
        );
      })}
    </UniversityGrid>
  );
});

export default UniversityList;
