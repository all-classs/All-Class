import React from 'react';
import styles from './styles/promotionSection.module.css';

export default function PromotionSection7() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.sectionTitle}>
				<h1 className={styles.mainTitle}>시연 영상</h1>
			</div>
			<div className={styles.videoContainer}>
				<iframe
					width="600"
					height="400"
					src="/assets/1.mp4"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
