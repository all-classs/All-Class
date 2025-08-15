'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import styles from './styles/HeroSection.module.css';

const CountUpNumber = ({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={styles.statNumber}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            부산 지역 대학교
            <br />
            <span className={styles.highlight}>강의정보를 한 눈에</span>
          </h1>
          <p className={styles.subtitle}>
            실제 수강생 리뷰로 현명한 수강신청하세요
            <br />
            14개 부산 소속 대학교의 강의 정보와 생생한 후기를 확인해보세요
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <CountUpNumber end={14} />
              <span className={styles.statLabel}>개 대학교</span>
            </div>
            <div className={styles.stat}>
              <CountUpNumber end={1000} suffix="+" />
              <span className={styles.statLabel}>강의 정보</span>
            </div>
            <div className={styles.stat}>
              <CountUpNumber end={500} suffix="+" />
              <span className={styles.statLabel}>학생 리뷰</span>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.floatingCards}>
            <div className={`${styles.reviewCard} ${styles.mainCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.rating}>★★★★★</div>
                <span className={styles.reviews}>127개 리뷰</span>
              </div>
              <h3>데이터베이스 시스템</h3>
              <p>김교수 • 컴퓨터공학과</p>
              <div className={styles.reviewText}>
                "과제가 많긴 하지만 정말 실무에 도움이 되는 수업입니다!"
              </div>
              <div className={styles.tags}>
                <span className={styles.tag}>추천</span>
                <span className={styles.tag}>실무형</span>
              </div>
            </div>

            <div className={`${styles.reviewCard} ${styles.floatingCard1}`}>
              <div className={styles.rating}>★★★★☆</div>
              <h4>웹프로그래밍</h4>
              <p>박교수</p>
              <div className={styles.miniReview}>"과제는 어렵지만 배우는 게 많아요"</div>
            </div>

            <div className={`${styles.reviewCard} ${styles.floatingCard2}`}>
              <div className={styles.rating}>★★★★★</div>
              <h4>알고리즘</h4>
              <p>이교수</p>
              <div className={styles.miniReview}>"코딩테스트 준비에 최고!"</div>
            </div>

            <div className={`${styles.reviewCard} ${styles.floatingCard3}`}>
              <div className={styles.rating}>★★★☆☆</div>
              <h4>운영체제</h4>
              <p>최교수</p>
              <div className={styles.miniReview}>"이론 위주라 조금 지루해요"</div>
            </div>

            <div className={styles.bgElement1}></div>
            <div className={styles.bgElement2}></div>
            <div className={styles.bgElement3}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
