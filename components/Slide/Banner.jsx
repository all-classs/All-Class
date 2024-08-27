import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/slide.module.css';
import banner1 from '@/public/assets/bannerimg/banner1.png';
import banner2 from '@/public/assets/bannerimg/banner2.png';
import banner3 from '@/public/assets/bannerimg/banner3.png';

const banners = [banner1, banner2, banner3];

export default function Banner() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
	};

	useEffect(() => {
		const interval = setInterval(goToNextSlide, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.banners}>
			<div className={styles.bannerContainer}>
				<div
					className={styles.bannerSlider}
					style={{ transform: `translateY(-${currentIndex * 100}%)` }}
				>
					{banners.map((banner, index) => (
						<div key={index} className={styles.banner}>
							<Image
								src={banner}
								alt={`banner${index + 1}`}
								layout="fill"
								objectFit="cover"
								priority
								className={styles.bannerImage}
							/>
							<h1>banner {index + 1}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
