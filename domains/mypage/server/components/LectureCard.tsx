import Link from 'next/link';
import { ReviewActionButton, LectureWithReviewStatus } from '@/domains/mypage';
import styles from '../../styles/LectureCard.module.css';

interface LectureCardProps {
  lecture: LectureWithReviewStatus;
}

export function LectureCard({ lecture }: LectureCardProps) {
  const statusText = lecture.hasReview ? '✓ 리뷰 작성완료' : '⚠️ 리뷰 미작성';
  const badgeClass = lecture.hasReview
    ? `${styles.compactReviewBadge} ${styles.compactReviewedBadge}`
    : `${styles.compactReviewBadge} ${styles.compactUnReviewedBadge}`;

  return (
    <div className={styles.card}>
      <Link href={`/동서대학교/${lecture.classNumber}`} style={{ textDecoration: 'none' }}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.lectureInfo}>
              <div className={styles.lectureName}>{lecture.lectureName}</div>
              <div className={styles.professor}>{lecture.professorName} 교수</div>
            </div>
            <div className={styles.reviewStatus}>
              <div className={badgeClass}>{statusText}</div>
            </div>
          </div>
        </div>
      </Link>

      <div className={styles.body}>
        <Link href={`/동서대학교/${lecture.classNumber}`} style={{ textDecoration: 'none' }}>
          <div className={styles.info}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>수강년도</span>
              <span className={styles.infoValue}>
                {lecture.completionYear}년 {lecture.semester}학기
              </span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>강의번호</span>
              <span className={styles.infoValue}>{lecture.classNumber}</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>이수구분</span>
              <span className={styles.completionType}>{lecture.completionType}</span>
            </div>
          </div>
        </Link>
        <ReviewActionButton lecture={lecture} />
      </div>
    </div>
  );
}
