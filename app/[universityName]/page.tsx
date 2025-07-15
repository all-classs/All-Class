import { notFound } from 'next/navigation';
import { universityNames } from '@/constants';
import { Suspense } from 'react';
import { LectureList, LectureSelector } from './components';
import { CardListSkeleton } from '@/components/common/card/skeleton';
import { fetchLecture } from './lib';

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
    <main style={{ padding: '0.5rem clamp(0.1rem, 6.3vw, 7rem)' }}>
      <LectureSelector universityName={decoded} />
      <Suspense fallback={<CardListSkeleton count={lectures.length} />}>
        <LectureList universityName={decoded} />
      </Suspense>
    </main>
  );
}
