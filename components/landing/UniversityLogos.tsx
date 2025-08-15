'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles/UniversityLogos.module.css';
import { memo } from 'react';

const universities = [
  { name: '부산대학교', logo: '/assets/university-logo/busan-uni.svg', path: '부산대학교' },
  { name: '동아대학교', logo: '/assets/university-logo/donga-uni.svg', path: '동아대학교' },
  { name: '경성대학교', logo: '/assets/university-logo/ks-uni.svg', path: '경성대학교' },
  { name: '동서대학교', logo: '/assets/university-logo/dongseo-uni.svg', path: '동서대학교' },
  {
    name: '부산외국어대학교',
    logo: '/assets/university-logo/bufs-uni.svg',
    path: '부산외국어대학교',
  },
  { name: '경남정보대학교', logo: '/assets/university-logo/kit-uni.svg', path: '경남정보대학교' },
  { name: '동명대학교', logo: '/assets/university-logo/tongmyong-uni.svg', path: '동명대학교' },
  { name: '동의대학교', logo: '/assets/university-logo/dongeui-uni.svg', path: '동의대학교' },
  { name: '동의과학대학교', logo: '/assets/university-logo/dit-uni.svg', path: '동의과학대학교' },
  { name: '부경대학교', logo: '/assets/university-logo/pukyong.svg', path: '부경대학교' },
  {
    name: '부산가톨릭대학교',
    logo: '/assets/university-logo/catholic-uni.svg',
    path: '부산가톨릭대학교',
  },
  {
    name: '부산경상대학교',
    logo: '/assets/university-logo/gyoungsang-uni.svg',
    path: '부산경상대학교',
  },
  { name: '신라대학교', logo: '/assets/university-logo/silla-uni.svg', path: '신라대학교' },
  { name: '한국해양대학교', logo: '/assets/university-logo/ocean-uni.svg', path: '한국해양대학교' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export const UniversityLogos = memo(function UniversityLogos() {
  return (
    <section className={styles.universities}>
      <div className={styles.container}>
        <motion.div
          className={styles.logoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: 'easeOut', staggerChildren: 0.03 }}
        >
          {universities.map((university, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Link href={`/${university.path}`} className={styles.logoLink} prefetch={false}>
                <motion.div
                  className={styles.logoCard}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    rotate: 2,
                    transition: { duration: 0.15 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.logoWrapper}>
                    <Image
                      src={university.logo}
                      alt={`${university.name} 로고`}
                      width={100}
                      height={100}
                      priority={false}
                      loading="lazy"
                      sizes="(max-width: 768px) 80px, 100px"
                      className={styles.logo}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
