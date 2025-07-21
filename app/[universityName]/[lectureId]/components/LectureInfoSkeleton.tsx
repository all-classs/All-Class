import styles from './styles/LectureInfoSkeleton.module.css';

export default function LectureInfoSkeleton() {
  return (
    <main className={styles.infoContainer}>
      <section className={styles.introSection}>
        <div className={styles.leftContent}>
          <div className={styles.topLine} />
          <div className={styles.lectureNameSkeleton} />
          <div className={styles.professorSkeleton} />
          <div className={styles.infoBar}>
            <div className={styles.badgeSkeleton} />
            <div className={styles.badgeSkeleton} />
            <div className={styles.badgeSkeleton} />
          </div>

          <div className={styles.introductionSkeleton}>
            <div className={styles.introLineSkeleton} />
            <div className={styles.introLineSkeleton} />
            <div className={styles.introLineSkeleton} />
          </div>

          <div className={styles.statsSection}>
            <div className={styles.statItem}>
              <div className={styles.statIconSkeleton} />
              <div className={styles.statNumberSkeleton} />
              <div className={styles.statLabelSkeleton} />
            </div>
            <div className={styles.statItem}>
              <div className={styles.starRatingSkeleton} />
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.profileImageSkeleton} />
        </div>
      </section>
    </main>
  );
}
