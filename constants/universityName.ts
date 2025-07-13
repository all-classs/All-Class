import busanUniLogo from '@/public/assets/university-logo/busan-uni.svg';
import dongseoUniLogo from '@/public/assets/university-logo/dongseo-uni.svg';
import ksUniLogo from '@/public/assets/university-logo/ks-uni.svg';
import dongaUniLogo from '@/public/assets/university-logo/donga-uni.svg';
import pukyongLogo from '@/public/assets/university-logo/pukyong.svg';
import sillaUniLogo from '@/public/assets/university-logo/silla-uni.svg';
import tongmyongUniLogo from '@/public/assets/university-logo/tongmyong-uni.svg';
import dongeuiUniLogo from '@/public/assets/university-logo/dongeui-uni.svg';
import bufsUniLogo from '@/public/assets/university-logo/bufs-uni.svg';
import dongeuiSciLogo from '@/public/assets/university-logo/dit-uni.svg';
import catholicUniLogo from '@/public/assets/university-logo/catholic-uni.svg';
import gyoungsangUniLogo from '@/public/assets/university-logo/gyoungsang-uni.svg';
import oceanUniLogo from '@/public/assets/university-logo/ocean-uni.svg';
import kitUniLogo from '@/public/assets/university-logo/kit-uni.svg';

export interface University {
  name: string;
  slug: string;
  logo: string | { src: string; width: number; height: number };
}

export const universities: University[] = [
  { name: '부산외국어대학교', slug: '부산외국어대학교', logo: bufsUniLogo },
  { name: '동아대학교', slug: '동아대학교', logo: dongaUniLogo },
  { name: '경성대학교', slug: '경성대학교', logo: ksUniLogo },
  { name: '부산대학교', slug: '부산대학교', logo: busanUniLogo },
  { name: '동서대학교', slug: '동서대학교', logo: dongseoUniLogo },
  { name: '경남정보대학교', slug: '경남정보대학교', logo: kitUniLogo },
  { name: '동명대학교', slug: '동명대학교', logo: tongmyongUniLogo },
  { name: '동의대학교', slug: '동의대학교', logo: dongeuiUniLogo },
  { name: '동의과학대학교', slug: '동의과학대학교', logo: dongeuiSciLogo },
  { name: '부경대학교', slug: '부경대학교', logo: pukyongLogo },
  { name: '부산가톨릭대학교', slug: '부산가톨릭대학교', logo: catholicUniLogo },
  { name: '부산경상대학교', slug: '부산경상대학교', logo: gyoungsangUniLogo },
  { name: '신라대학교', slug: '신라대학교', logo: sillaUniLogo },
  { name: '한국해양대학교', slug: '한국해양대학교', logo: oceanUniLogo },
];

export const universityNames: string[] = universities.map((uni) => uni.name);
