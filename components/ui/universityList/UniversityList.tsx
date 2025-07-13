import { UniversityGrid, UniversityCard } from './University.style';
import Image from 'next/image';
import { universities } from '@/constants/universityName';
import { memo } from 'react';

const UniversityList = memo(function UniversityList() {
  return (
    <UniversityGrid>
      {universities.map((university) => (
        <UniversityCard key={university.slug} href={`/${university.slug}`}>
          <Image
            src={university.logo}
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
