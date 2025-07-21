import { universities, University } from '@/constants/universityName';

interface UniversityWithImageSrc extends Omit<University, 'logo'> {
  imageSrc: string;
}

const getImageSrc = (logo: University['logo']): string => {
  return typeof logo === 'string' ? logo : logo.src;
};

const getUniversitiesWithImageSrc = (): UniversityWithImageSrc[] => {
  return universities.map((university) => ({
    ...university,
    imageSrc: getImageSrc(university.logo),
  }));
};

const getUniversityByName = (name: string): UniversityWithImageSrc | undefined => {
  const university = universities.find((uni) => uni.name === name || uni.slug === name);
  if (!university) return undefined;

  return {
    ...university,
    imageSrc: getImageSrc(university.logo),
  };
};

const getUniversityBySlug = (slug: string): UniversityWithImageSrc | undefined => {
  const university = universities.find((uni) => uni.slug === slug);
  if (!university) return undefined;

  return {
    ...university,
    imageSrc: getImageSrc(university.logo),
  };
};

export { getImageSrc, getUniversitiesWithImageSrc, getUniversityByName, getUniversityBySlug };
