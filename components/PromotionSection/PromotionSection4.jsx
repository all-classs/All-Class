import React from 'react';
import styles from './styles/promotionSection.module.css';

export default function PromotionSection4() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.sectionTitle}>
				<h1 className={styles.mainTitle}>Sharing Lecture Review</h1>
				<h2 className={styles.subTitle}>왜 필요할까요?</h2>
			</div>
			<div className={styles.mainContent}>
				<h2>대학교 수강 신청은 선착순으로 진행되며, 성공이냐 실패냐에 따라</h2>
				<h2>한 학기가 결정되는 매우 중요한 이벤트입니다.</h2>
				<h2>하지만 매 학기 초 대학생들은 수강 신청에 따라 울고 웃습니다.</h2>
			</div>
		</div>
	);
}
