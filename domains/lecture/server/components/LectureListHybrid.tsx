import { StaticLectureResult } from '@/api/lecture/getLectureListStatic';
import { StaticLectureData } from '../../shared/types';
import LectureCardHybrid from './LectureCardHybrid';
import Link from 'next/link';
import styles from '../../styles/LectureList.module.css';

interface LectureListHybridProps {
  universityName: string;
  lectures: StaticLectureResult;
}

export default function LectureListHybrid({ universityName, lectures }: LectureListHybridProps) {
  if (!lectures.success || !lectures.lectures) {
    return (
      <main className={styles.noLectureContainer}>
        <div>{lectures.message || '강의를 불러오는데 실패했습니다.'}</div>
      </main>
    );
  }

  const lectureList = lectures.lectures.map((lecture: StaticLectureData) => ({
    lectureId: lecture.lectureId,
    lectureName: lecture.lectureName,
    department: lecture.department,
    university: lecture.university,
    lectureType: lecture.lectureType,
    professor: lecture.professor,
    opened: lecture.opened,
    icon: lecture.icon,
  }));

  return (
    <main className={styles.lectureListContainer}>
      {lectureList.map((lecture: StaticLectureData) => {
        const encodedOpened = encodeURIComponent(String(lecture.opened));

        return (
          <Link
            href={`/${universityName}/${lecture.lectureId}?opened=${encodedOpened}`}
            key={lecture.lectureId}
          >
            <LectureCardHybrid staticData={lecture} universityName={universityName} />
          </Link>
        );
      })}
    </main>
  );
}
