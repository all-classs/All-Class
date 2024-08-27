import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/slide.module.css';

const defaultImages = [
	'https://via.placeholder.com/1200x360?text=Image+1',
	'https://via.placeholder.com/1200x360?text=Image+2',
	'https://via.placeholder.com/1200x360?text=Image+3',
	'https://via.placeholder.com/1200x360?text=Image+4',
	'https://via.placeholder.com/1200x360?text=Image+5',
];

export default function Slide() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % defaultImages.length);
	};

	const goToPrevSlide = () => {
		setCurrentIndex(
			prevIndex =>
				(prevIndex - 1 + defaultImages.length) % defaultImages.length,
		);
	};

	const goToSlide = index => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const interval = setInterval(goToNextSlide, 4000); // 4초마다 슬라이드 변경
		return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 제거
	}, []);

	return (
		<div className={styles.slider}>
			<div
				className={styles.sliderContent}
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{defaultImages.map((image, index) => (
					<div key={index} className={styles.slide}>
						<Image
							src={image}
							alt={`Slide ${index + 1}`}
							fill
							style={{ objectFit: 'cover' }}
							priority
						/>
					</div>
				))}
			</div>
			<button
				className={`${styles.navButton} ${styles.prevButton}`}
				onClick={goToPrevSlide}
			>
				&#10094;
			</button>
			<button
				className={`${styles.navButton} ${styles.nextButton}`}
				onClick={goToNextSlide}
			>
				&#10095;
			</button>
			<div className={styles.dotsContainer}>
				{defaultImages.map((_, index) => (
					<span
						key={index}
						className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
						onClick={() => goToSlide(index)}
					></span>
				))}
			</div>
		</div>
	);
}
