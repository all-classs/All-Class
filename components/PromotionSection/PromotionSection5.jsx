import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import promotion from '../../public/assets/promotion/promotion1.png';

export default function PromotionSection5() {
	return (
		<div className={styles.mainContainer2}>
			<div className={styles.sectionContainer2}>
				<div className={styles.sectionContent}>
					<div className={styles.mainContent2}>
						<h2>원하는 강의를 듣지 못하는 것은</h2>
						<h2>모든 대학에서 발생하는 공통적인 문제점입니다.</h2>
					</div>
					<div className={styles.mainContent2}>
						<h2>대학내일20대연구소와 국민일보에서 조사한 결과에서도</h2>
						<h2>“어쩔 수 없이 원치 않는 강의를 들어본 적이 있다.”</h2>
						<h2>라고 응답한 학생들이 42.7%로 나타났습니다.</h2>
					</div>
				</div>
				<Image
					src={promotion}
					alt="promotion1"
					className={styles.promotion1Img}
				/>
			</div>
		</div>
	);
}
