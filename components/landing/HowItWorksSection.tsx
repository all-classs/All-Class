'use client';

import { motion } from 'framer-motion';
import styles from './styles/HowItWorksSection.module.css';
import { memo } from 'react';

const steps = [
  {
    step: '01',
    title: '대학교 선택',
    description: '부산 지역 14개 대학교 중 내 학교를 선택해보세요',
    icon: '🏫',
  },
  {
    step: '02',
    title: '강의 탐색',
    description: '학교별, 학과별로 원하는 강의를 찾아보세요',
    icon: '🔍',
  },
  {
    step: '03',
    title: '리뷰 확인',
    description: '실제 수강생들의 후기와 평점을 확인해보세요',
    icon: '📖',
  },
  {
    step: '04',
    title: '나만의 리뷰',
    description: '수강한 강의에 대한 솔직한 후기를 남겨보세요',
    icon: '✍️',
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
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const HowItWorksSection = memo(function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className={styles.title}>
            <span className={styles.highlight}>AllClass</span> 사용법
          </h2>
          <p className={styles.subtitle}>간단한 4단계로 시작하는 스마트한 강의 탐색</p>
        </motion.div>

        <motion.div
          className={styles.steps}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2, ease: 'easeOut', staggerChildren: 0.05 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepCard}
              variants={itemVariants}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                y: -12,
                transition: { duration: 0.15 },
              }}
            >
              <div className={styles.stepNumber}>{step.step}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3>지금 바로 시작해보세요!</h3>
          <p>부산 지역 대학생들이 이미 사용하고 있는 강의 정보 플랫폼</p>
        </motion.div>
      </div>
    </section>
  );
});
