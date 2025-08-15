'use client';

import { motion } from 'framer-motion';
import styles from './styles/FeaturesSection.module.css';
import lectureCardStyles from '@/domains/lecture/styles/LectureCard.module.css';
import { BookOpen, Tag, Star } from 'lucide-react';
import { StarRating } from '@/components/common';
import { memo } from 'react';

const features = [
  {
    icon: '🏛️',
    title: '14개 대학교 지원',
    description:
      '부산대, 동아대, 경성대 등 부산 지역 주요 대학교의 강의 정보를 한곳에서 확인하세요.',
  },
  {
    icon: '⭐',
    title: '실제 수강생 리뷰',
    description: '수강한 학생들의 솔직한 후기와 5점 평점 시스템으로 강의의 실제 모습을 확인하세요.',
  },
  {
    icon: '📚',
    title: '스마트 마이페이지',
    description:
      '내가 들은 수업이 자동으로 연동되어 마이페이지에서 쉽게 관리하고 리뷰를 작성할 수 있습니다.',
  },
  {
    icon: '🔍',
    title: '다양한 정렬 기능',
    description:
      '별점순, 좋아요순, 최신순 등 원하는 기준으로 리뷰를 정렬하여 필요한 정보를 빠르게 찾으세요.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className={styles.title}>
            왜 <span className={styles.highlight}>AllClass</span>인가요?
          </h2>
          <p className={styles.subtitle}>학생들을 위한, 학생들에 의한 강의 정보 플랫폼</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: 'easeOut', staggerChildren: 0.05 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.15 },
              }}
            >
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.showcase}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className={styles.showcaseContent}>
            <h3>강의 정보 한눈에 보기</h3>
            <div className={styles.mockup}>
              <div className={styles.mockCardWrapper}>
                <div className={lectureCardStyles.cardContainer}>
                  <div className={lectureCardStyles.colorBar} />

                  <div className={lectureCardStyles.cardHeader}>
                    <div className={lectureCardStyles.cardInfo}>
                      <h3 className={lectureCardStyles.lectureName}>고급프로그래밍</h3>
                      <p className={lectureCardStyles.professor}>박교수</p>
                    </div>
                    <div className={lectureCardStyles.cardStatus}>
                      <span
                        className={`${lectureCardStyles.statusBadge} ${lectureCardStyles.opened}`}
                      >
                        개설
                      </span>
                    </div>
                  </div>

                  <div className={lectureCardStyles.cardBody}>
                    <div className={lectureCardStyles.cardDetail}>
                      <span className={lectureCardStyles.label}>
                        <BookOpen size={14} className={lectureCardStyles.icon} />
                        학과
                      </span>
                      <span className={lectureCardStyles.value}>컴퓨터공학과</span>
                    </div>
                    <div className={lectureCardStyles.cardDetail}>
                      <span className={lectureCardStyles.label}>
                        <Tag size={14} className={lectureCardStyles.icon} />
                        구분
                      </span>
                      <span className={lectureCardStyles.value}>
                        <span className={lectureCardStyles.lectureTypeBadge}>전공필수</span>
                      </span>
                    </div>
                    <div className={lectureCardStyles.cardDetail}>
                      <span className={lectureCardStyles.label}>
                        <Star size={14} className={lectureCardStyles.icon} />
                        평점
                      </span>
                      <div className={lectureCardStyles.ratingContainer}>
                        <StarRating rating={4.2} size="large" showRatingText={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
