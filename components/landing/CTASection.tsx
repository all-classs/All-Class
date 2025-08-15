'use client';

import { motion } from 'framer-motion';
import styles from './styles/CTASection.module.css';
import { memo } from 'react';

const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const statItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export const CTASection = memo(function CTASection() {
  return (
    <section className={styles.cta}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className={styles.title}>
            지금 바로 <span className={styles.highlight}>AllClass</span>와 함께
            <br />
            스마트한 수강신청을 시작하세요!
          </h2>
          <p className={styles.subtitle}>
            14개 대학교의 강의 정보와 실제 학생 리뷰가 기다리고 있습니다.
          </p>

          <motion.div
            className={styles.features}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✅</div>
              <span>완전 무료</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <span>즉시 사용 가능</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔒</div>
              <span>안전한 데이터</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className={styles.statsGrid}
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className={styles.statCard}
              variants={statItemVariants}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <div className={styles.statNumber}>14</div>
              <div className={styles.statLabel}>개 대학교</div>
            </motion.div>
            <motion.div
              className={styles.statCard}
              variants={statItemVariants}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <div className={styles.statNumber}>1,000+</div>
              <div className={styles.statLabel}>강의 정보</div>
            </motion.div>
            <motion.div
              className={styles.statCard}
              variants={statItemVariants}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>학생 리뷰</div>
            </motion.div>
            <motion.div
              className={styles.statCard}
              variants={statItemVariants}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>만족도</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className={styles.background}>
        <div className={styles.backgroundShape1}></div>
        <div className={styles.backgroundShape2}></div>
        <div className={styles.backgroundShape3}></div>
      </div>
    </section>
  );
});
