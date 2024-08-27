import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import promotion8 from '../../public/assets/promotion/promotion8.png';

export default function PromotionSection10() {
	return (
		<div className={styles.mainContainer2}>
			<div className={styles.sectionTitle}>
				<h1 className={styles.mainTitle}>비즈니스 모델</h1>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={promotion8}
					alt="promotion8"
					className={styles.promotion8Img}
				/>
			</div>
		</div>
	);
}
