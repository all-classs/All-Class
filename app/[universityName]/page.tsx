import type { Metadata } from 'next';
import { universityNames } from '@/constants';
import { getLectureListStatic } from '@/lib/lecture';
import styles from '@/styles/global.module.css';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { createQueryClient, prefetchMultipleLectureRatings } from '@/utils';
import { Suspense } from 'react';
import { LectureCardListSkeleton, LectureSelector, LectureListHybrid } from '@/domains/lecture';

export const revalidate = false;

export async function generateStaticParams() {
  return universityNames.map((name) => ({ universityName: encodeURIComponent(name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ universityName: string }>;
}): Promise<Metadata> {
  const { universityName } = await params;
  const decoded = decodeURIComponent(universityName);

  return {
    title: `${decoded} 강의정보`,
    description: `${decoded}의 모든 강의정보와 학생 리뷰를 확인하세요. 평점, 수강후기, 교수님 정보까지!`,
    openGraph: {
      title: `${decoded} 강의정보 | AllClass`,
      description: `${decoded}의 모든 강의정보와 학생 리뷰를 확인하세요.`,
    },
    keywords: [decoded, '강의정보', '수강후기', '평점', '강의리뷰', 'AllClass'],
  };
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ universityName: string }>;
}) {
  const { universityName } = await params;
  const decoded = decodeURIComponent(universityName);

  const staticLectures = await getLectureListStatic(decoded);

  const queryClient = createQueryClient();

  if (staticLectures.success && staticLectures.lectures) {
    await prefetchMultipleLectureRatings(queryClient, staticLectures.lectures, decoded);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className={styles.paddingContainer}>
        <LectureSelector universityName={decoded} />
        <Suspense fallback={<LectureCardListSkeleton count={6} />}>
          <LectureListHybrid universityName={decoded} lectures={staticLectures} />
        </Suspense>
      </main>
    </HydrationBoundary>
  );
}
