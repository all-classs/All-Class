import { LectureCard } from './LectureCard';
import type { LectureWithReviewStatus } from '../../shared/types';
import styles from '../../styles/LectureCard.module.css';

interface LectureListProps {
  lectures: LectureWithReviewStatus[];
}

export function LectureList({ lectures }: LectureListProps) {
  if (lectures.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>수강한 강의가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid} data-test="my-lectures-list">
      {lectures.map((lecture) => (
        <LectureCard key={lecture.classNumber} lecture={lecture} />
      ))}
    </div>
  );
}
