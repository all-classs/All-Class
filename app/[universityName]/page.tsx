import { notFound } from 'next/navigation';
import { universityNames } from '@/constants/universityName';
import { fetchLecture, Lecture } from './lib';

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

  if (!universityNames.includes(decoded)) {
    notFound();
  }

  const lecture = await fetchLecture(decoded);

  return (
    <div>
      <h1>{decoded} 강의 목록</h1>
      {lecture.length > 0 ? (
        lecture.map((item: Lecture) => <div key={item.lectureId}>{item.lectureName}</div>)
      ) : (
        <div>강의 목록이 없습니다.</div>
      )}
    </div>
  );
}
