import { universityNames } from '@/constants';
import { Suspense } from 'react';
import { LectureList, LectureSelector, CardListSkeleton } from '@/domains/lecture';
import { getLectureList } from '@/api/lecture';
import styles from '@/styles/global.module.css';

export async function generateStaticParams() {
  return universityNames.map((name) => ({ universityName: name }));
}

async function LectureListWrapper({ universityName }: { universityName: string }) {
  const lectures = await getLectureList(universityName);
  return <LectureList universityName={universityName} lectures={lectures} />;
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ universityName: string }>;
}) {
  const { universityName } = await params;
  const decoded = decodeURIComponent(universityName);

  return (
    <main className={styles.paddingContainer}>
      <LectureSelector universityName={decoded} />
      <Suspense fallback={<CardListSkeleton count={12} />}>
        <LectureListWrapper universityName={decoded} />
      </Suspense>
    </main>
  );
}
