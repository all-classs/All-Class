import React from 'react';
import styles from './styles/promotionSection.module.css';

export default function PromotionSection1() {
	return (
		<div className={styles.introContainer}>
			<div className={styles.introContainerFirst}>
				<h1>수업</h1>
				<h1>에 대한 모든 것</h1>
			</div>
			<div className={styles.introContainerSecond}>
				<h1>SLR</h1>
				<h1>을 통해 확인하세요</h1>
			</div>
		</div>
	);
}
