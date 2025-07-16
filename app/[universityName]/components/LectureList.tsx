import { fetchLecture, Lecture } from '../lib';
import { Card } from '@/components/common';
import styles from './styles/LectureList.module.css';

export default async function LectureList({ universityName }: { universityName: string }) {
  const lectures = await fetchLecture(universityName);

  const lectureList = lectures.map((lecture: Lecture) => ({
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

  console.log(lectureList);

  return (
    <div className={styles.lectureListContainer}>
      {lectureList.map((lecture: Lecture) => (
        <Card key={lecture.lectureId} lecture={lecture} />
      ))}
    </div>
  );
}
