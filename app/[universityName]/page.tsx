import { notFound } from 'next/navigation';
import { universityNames } from '@/constants';
import { Suspense } from 'react';
import { LectureList, LectureSelector } from './components';
import { CardListSkeleton } from '@/components/common/card/skeleton';
import { fetchLecture } from './lib';
import styles from '@/styles/global.module.css';

export async function generateStaticParams() {
  return universityNames.map((name) => ({ universityName: name }));
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ universityName: string }>;
}) {
  const { universityName } = await params;
  const decoded = decodeURIComponent(universityName);
  const lectures = await fetchLecture(decoded);

  if (!universityNames.includes(decoded)) {
    notFound();
  }

  return (
    <main className={styles.paddingContainer}>
      <LectureSelector universityName={decoded} />
      <Suspense fallback={<CardListSkeleton count={lectures.lectures?.length || 0} />}>
        <LectureList universityName={decoded} />
      </Suspense>
    </main>
  );
}
