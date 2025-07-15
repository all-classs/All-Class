import styles from './CardSkeleton.module.css';

export default function CardSkeleton() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.colorBar} />

      <div className={styles.cardHeader}>
        <div className={styles.cardInfo}>
          <div className={styles.lectureNameSkeleton} />
          <div className={styles.professorSkeleton} />
        </div>
        <div className={styles.cardStatus}>
          <div className={styles.statusBadgeSkeleton} />
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardDetail}>
          <div className={styles.labelSkeleton} />
          <div className={styles.valueSkeleton} />
        </div>
        <div className={styles.cardDetail}>
          <div className={styles.labelSkeleton} />
          <div className={styles.valueSkeletonBadge} />
        </div>
        <div className={styles.cardDetail}>
          <div className={styles.labelSkeleton} />
          <div className={styles.starRatingSkeleton} />
        </div>
      </div>
    </div>
  );
}
