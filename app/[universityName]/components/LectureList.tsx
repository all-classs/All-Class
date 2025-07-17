import { fetchLecture, Lecture } from '../lib';
import { Card } from '@/components/common';
import styles from './styles/LectureList.module.css';
import Link from 'next/link';

export default async function LectureList({ universityName }: { universityName: string }) {
  const lectures = await fetchLecture(universityName);

  const lectureList = lectures.lectures?.map((lecture: Lecture) => ({
    lectureId: lecture.lectureId,
    lectureName: lecture.lectureName,
    department: lecture.department,
    university: lecture.university,
    lectureType: lecture.lectureType,
    averageStarLating: lecture.averageStarLating,
    professor: lecture.professor,
    opened: lecture.opened,
    icon: lecture.icon,
  }));

  return (
    <main
      className={
        lectures.success && lectureList ? styles.lectureListContainer : styles.noLectureContainer
      }
    >
      {lectures.success && lectureList ? (
        lectureList.map((lecture: Lecture) => (
          <Link href={`/${universityName}/${lecture.lectureId}`} key={lecture.lectureId}>
            <Card lecture={lecture} />
          </Link>
        ))
      ) : (
        <div>{lectures.message}</div>
      )}
    </main>
  );
}
