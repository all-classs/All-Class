import type { Metadata } from 'next';
import { Header } from '@/components/ui';
import { LoginTriggerWrapper } from '@/components/common';
import {
  HeroSection,
  FeaturesSectionLazy,
  UniversityLogosLazy,
  HowItWorksSectionLazy,
  CTASectionLazy,
} from '@/components/landing';

export const metadata: Metadata = {
  title: 'AllClass',
  description:
    'AllClass에서 부산소속 대학교 강의정보를 한 눈에 확인하세요. 강의 리뷰, 평점, 수강신청 정보까지!',
  openGraph: {
    title: 'AllClass - 부산소속 대학교 강의정보 플랫폼',
    description: 'AllClass에서 부산소속 대학교 강의정보를 한 눈에 확인하세요.',
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ showLogin?: string }>;
}) {
  const params = await searchParams;
  const showLogin = params.showLogin === 'true';

  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSectionLazy />
      <UniversityLogosLazy />
      <HowItWorksSectionLazy />
      <CTASectionLazy />
      {showLogin && <LoginTriggerWrapper />}
    </main>
  );
}
