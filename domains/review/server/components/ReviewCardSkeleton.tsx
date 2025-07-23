import styles from '../styles/ReviewCardSkeleton.module.css';

export default function ReviewCardSkeleton() {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.cardHeader}>
        <div className={styles.userInfo}>
          <div className={styles.profileImage}>
            <div className={styles.profileImageSkeleton} />
          </div>
          <div className={styles.userDetails}>
            <div className={styles.usernameSkeleton} />
            <div className={styles.reviewMeta}>
              <div className={styles.dateIconSkeleton} />
              <div className={styles.dateSkeleton} />
            </div>
          </div>
        </div>
        <div className={styles.ratingSection}>
          <div className={styles.starRatingSkeleton} />
          <div className={styles.ratingTextSkeleton} />
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.reviewTitleSkeleton} />
        <div className={styles.reviewContentSkeleton} />
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.likesSection}>
          <div className={styles.likeIconSkeleton} />
          <div className={styles.likeCountSkeleton} />
        </div>
      </div>
    </div>
  );
}
