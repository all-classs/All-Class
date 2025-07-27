import { StaticLectureData } from '../../shared/types';
import { BookOpen, Tag, Star } from 'lucide-react';
import { DynamicRating } from '@/domains/lecture';
import styles from '../../styles/LectureCard.module.css';

interface LectureCardHybridProps {
  staticData: StaticLectureData;
  universityName: string;
}

export default function LectureCardHybrid({ staticData, universityName }: LectureCardHybridProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.colorBar} />

      <div className={styles.cardHeader}>
        <div className={styles.cardInfo}>
          <h3 className={styles.lectureName}>{staticData.lectureName}</h3>
          <p className={styles.professor}>{staticData.professor}</p>
        </div>
        <div className={styles.cardStatus}>
          <span
            className={`${styles.statusBadge} ${staticData.opened ? styles.opened : styles.closed}`}
          >
            {staticData.opened ? '개설' : '폐강'}
          </span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardDetail}>
          <span className={styles.label}>
            <BookOpen size={14} className={styles.icon} />
            학과
          </span>
          <span className={styles.value}>{staticData.department}</span>
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.label}>
            <Tag size={14} className={styles.icon} />
            구분
          </span>
          <span className={styles.value}>
            <span className={styles.lectureTypeBadge}>{staticData.lectureType}</span>
          </span>
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.label}>
            <Star size={14} className={styles.icon} />
            평점
          </span>
          <div className={styles.ratingContainer}>
            <DynamicRating
              lectureId={staticData.lectureId}
              universityName={universityName}
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
