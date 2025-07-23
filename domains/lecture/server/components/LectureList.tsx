import { Lecture, LectureResult } from '@/types';
import { LectureCard } from '@/domains/lecture';
import styles from '../styles/LectureList.module.css';
import Link from 'next/link';

interface LectureListProps {
  universityName: string;
  lectures: LectureResult;
}

export default function LectureList({ universityName, lectures }: LectureListProps) {
  if (!lectures.success || !lectures.lectures) {
    return (
      <main className={styles.noLectureContainer}>
        <div>{lectures.message || '강의를 불러오는데 실패했습니다.'} ㅠㅠ</div>
      </main>
    );
  }

  const lectureList = lectures.lectures.map((lecture: Lecture) => ({
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
    <main className={styles.lectureListContainer}>
      {lectureList.map((lecture: Lecture) => {
        const encodedOpened = encodeURIComponent(String(lecture.opened));

        return (
          <Link
            href={`/${universityName}/${lecture.lectureId}?opened=${encodedOpened}`}
            key={lecture.lectureId}
          >
            <LectureCard lecture={lecture} />
          </Link>
        );
      })}
    </main>
  );
}
