import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import promotion7 from '../../public/assets/promotion/promotion7.png';

export default function PromotionSection9() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.sectionTitle}>
				<h1 className={styles.mainTitle}>멘토링 후 계획</h1>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={promotion7}
					alt="promotion7"
					className={styles.promotion7Img}
				/>
			</div>
		</div>
	);
}
