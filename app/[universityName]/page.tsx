import { universityNames } from '@/constants';
import { LectureListHybrid, LectureSelector } from '@/domains/lecture';
import { getLectureListStatic } from '@/api/lecture';
import styles from '@/styles/global.module.css';

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

  return (
    <main className={styles.paddingContainer}>
      <LectureSelector universityName={decoded} />
      <LectureListHybrid universityName={decoded} lectures={staticLectures} />
    </main>
  );
}
