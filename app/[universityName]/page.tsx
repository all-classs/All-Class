import { universityNames } from '@/constants';
import { LectureListHybrid } from '@/domains/lecture';
import LectureSelector from './components/LectureSelector';
import { getLectureListStatic } from '@/api/lecture';
import styles from '@/styles/global.module.css';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { createQueryClient, prefetchMultipleLectureRatings } from '@/utils';

export const revalidate = false;

export async function generateStaticParams() {
  return universityNames.map((name) => ({ universityName: encodeURIComponent(name) }));
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
        <LectureListHybrid universityName={decoded} lectures={staticLectures} />
      </main>
    </HydrationBoundary>
  );
}
