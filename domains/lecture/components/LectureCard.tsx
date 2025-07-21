import { Lecture } from '@/app/[universityName]/lib';
import { BookOpen, Tag, Star } from 'lucide-react';
import { StarRating } from '@/components/common';
import styles from '../styles/LectureCard.module.css';

interface CardProps {
  lecture: Lecture;
}

export default function LectureCard({ lecture }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.colorBar} />

      <div className={styles.cardHeader}>
        <div className={styles.cardInfo}>
          <h3 className={styles.lectureName}>{lecture.lectureName}</h3>
          <p className={styles.professor}>{lecture.professor}</p>
        </div>
        <div className={styles.cardStatus}>
          <span
            className={`${styles.statusBadge} ${lecture.opened ? styles.opened : styles.closed}`}
          >
            {lecture.opened ? '개설' : '폐강'}
          </span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardDetail}>
          <span className={styles.label}>
            <BookOpen size={14} className={styles.icon} />
            학과
          </span>
          <span className={styles.value}>{lecture.department}</span>
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.label}>
            <Tag size={14} className={styles.icon} />
            구분
          </span>
          <span className={styles.value}>
            <span className={styles.lectureTypeBadge}>{lecture.lectureType}</span>
          </span>
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.label}>
            <Star size={14} className={styles.icon} />
            평점
          </span>
          <div className={styles.ratingContainer}>
            <StarRating rating={lecture.averageStarLating} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}
