import { Lecture, LectureResult } from '../lib';
import { LectureCard } from '@/components/common';
import styles from './styles/LectureList.module.css';
import Link from 'next/link';

interface LectureListProps {
  universityName: string;
  lectures: LectureResult;
}

export default function LectureList({ universityName, lectures }: LectureListProps) {
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
        lectureList.map((lecture: Lecture) => {
          const encodedOpened = encodeURIComponent(String(lecture.opened));

          return (
            <Link
              href={`/${universityName}/${lecture.lectureId}?opened=${encodedOpened}`}
              key={lecture.lectureId}
            >
              <LectureCard lecture={lecture} />
            </Link>
          );
        })
      ) : (
        <div>{lectures.message} ㅠㅠ</div>
      )}
    </main>
  );
}
