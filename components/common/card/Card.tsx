import styles from './Card.module.css';
import StarRating from '../starRating/StarRating';
import { Lecture } from '@/app/[universityName]/lib';

interface CardProps {
  lecture: Lecture;
}

export default function Card({ lecture }: CardProps) {
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
          <span className={styles.label}>학과</span>
          <span className={styles.value}>{lecture.department}</span>
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.label}>구분</span>
          <span className={styles.value}>
            <span className={styles.lectureTypeBadge}>{lecture.lectureType}</span>
          </span>
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.label}>평점</span>
          <div className={styles.ratingContainer}>
            <StarRating rating={lecture.averageStarLating} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}
