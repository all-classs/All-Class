import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import promotion6 from '../../public/assets/promotion/promotion6.png';

export default function PromotionSection8() {
	return (
		<div className={styles.mainContainer2}>
			<div className={styles.sectionTitle}>
				<h1 className={styles.mainTitle}>기대 효과</h1>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={promotion6}
					alt="promotion6"
					className={styles.promotion6Img}
				/>
			</div>
		</div>
	);
}
