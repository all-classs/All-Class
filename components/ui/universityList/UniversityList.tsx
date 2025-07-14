import { UniversityGrid, UniversityCard, UniversityImage } from './University.style';
import { universities } from '@/constants/universityName';
import { memo, useMemo } from 'react';

const UniversityList = memo(function UniversityList() {
  const universityData = useMemo(() => {
    return universities.map((university) => ({
      ...university,
      imageSrc: typeof university.logo === 'string' ? university.logo : university.logo.src,
    }));
  }, []);

  return (
    <UniversityGrid>
      {universityData.map((university) => (
        <UniversityCard
          className="university-card"
          key={university.slug}
          href={`/${university.slug}`}
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
      ))}
    </UniversityGrid>
  );
});

export default UniversityList;
