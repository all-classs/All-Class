import { StaticLectureResult } from '@/lib/lecture/getLectureListStatic';
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
      <main className={styles.noLectureContainer} data-test="empty-state">
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
    <main className={styles.lectureListContainer} data-test="lecture-list">
      {lectureList.map((lecture: StaticLectureData) => {
        const openedParam = lecture.opened ? 'true' : 'false';

        return (
          <Link
            href={`/${universityName}/${lecture.lectureId}?opened=${openedParam}`}
            key={lecture.lectureId}
            prefetch={true}
            data-test="lecture-card"
            data-lecture-id={lecture.lectureId}
          >
            <LectureCardHybrid staticData={lecture} universityName={universityName} />
          </Link>
        );
      })}
    </main>
  );
}
