import { LectureInfoResult, DynamicRating, DynamicReviewCount } from '@/domains/lecture';
import { manImage, womanImage } from '@/public';
import { Book, Tag, CalendarCheck, MessageSquare } from 'lucide-react';
import styles from '../../styles/LectureInfo.module.css';
import Image from 'next/image';

interface LectureStatus {
  opened: boolean;
}

interface LectureInfoProps {
  lectureInfo: LectureInfoResult;
  lectureData?: LectureStatus;
  lectureId: string;
  universityName: string;
}

export default function LectureInfo({
  lectureInfo,
  lectureData,
  lectureId,
  universityName,
}: LectureInfoProps) {
  if (!lectureInfo.success || !lectureInfo.lectureInfo) {
    return (
      <main className={styles.infoContainer}>
        <div>{lectureInfo.message || '강의 정보를 불러오는데 실패했습니다.'} ㅠㅠ</div>
      </main>
    );
  }

  const lecture = lectureInfo.lectureInfo;

  const profileImages = [manImage, womanImage];
  const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

  return (
    <main className={styles.infoContainer}>
      <section className={styles.introSection}>
        <div className={styles.leftContent}>
          <div className={styles.topLine} />
          <h1 className={styles.lectureName}>{lecture.lectureName}</h1>
          <div className={styles.professor}>{lecture.professor}</div>
          <div className={styles.infoBar}>
            <span className={styles.badge}>
              <Book size={16} className={styles.icon} />
              {lecture.department}
            </span>
            <span className={styles.badge}>
              <Tag size={16} className={styles.icon} />
              {lecture.lectureType}
            </span>
            <span
              className={`${styles.badge} ${lectureData?.opened ? styles.opened : styles.closed}`}
            >
              <CalendarCheck size={16} className={styles.icon} />
              {lectureData?.opened ? '개설' : '미개설'}
            </span>
          </div>

          {lecture.introduction && (
            <div className={styles.introduction}>
              <p>{lecture.introduction}</p>
            </div>
          )}

          <div className={styles.statsSection}>
            <div className={styles.statItem}>
              <MessageSquare size={16} className={styles.statIcon} />
              <span className={styles.statNumber}>
                <DynamicReviewCount
                  lectureId={parseInt(lectureId)}
                  universityName={universityName}
                  fallbackCount={lecture.reviewCount || 0}
                />
              </span>
              <span className={styles.statLabel}>개의 리뷰</span>
            </div>
            <div className={styles.statItem}>
              <DynamicRating
                lectureId={parseInt(lectureId)}
                universityName={universityName}
                size="veryLarge"
                showRatingText={true}
                fallbackRating={lecture.averageStarLating || 0}
              />
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.profileImage}>
            <Image
              src={randomImage}
              alt="강의 이미지"
              width={200}
              height={200}
              className={styles.image}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
