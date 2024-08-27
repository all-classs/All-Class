import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import promotion2 from '../../public/assets/promotion/promotion2.png';
import promotion3 from '../../public/assets/promotion/promotion3.png';
import promotion4 from '../../public/assets/promotion/promotion4.png';
import promotion5 from '../../public/assets/promotion/promotion5.png';

export default function PromotionSection6() {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.imageContainer}>
				<Image
					src={promotion2}
					alt="promotion2"
					className={styles.promotion2Img}
				/>
				<Image
					src={promotion3}
					alt="promotion3"
					className={styles.promotion3Img}
				/>
				<Image
					src={promotion4}
					alt="promotion4"
					className={styles.promotion4Img}
				/>
				<Image
					src={promotion5}
					alt="promotion5"
					className={styles.promotion5Img}
				/>
			</div>
			<div className={styles.sectionContainer3}>
				<div className={styles.mainContent3}>
					<h2>최근 과도한 수도권 집중과 출생률 저하로</h2>
					<h2>인한 부산지역의 위기감을 해결하기 위해</h2>
					<h2>대학간 공동학위 및 BITS, 수소 공유대학 등</h2>
					<h2>지역 혁신 사업이 증가하고 있습니다.</h2>
				</div>
				<div className={styles.mainContent3}>
					<h2>부산 지역 대학생들이 원하는 강의를</h2>
					<h2>들을 수 있도록 더 많은 정보를 제공하고,</h2>
					<h2>지역 혁신을 위한 사업들이 늘어나더라도</h2>
					<h2>타 대학의 강의 정보를 쉽고 빠르게</h2>
					<h2> 접근할 수 있는 방법이 필요합니다.</h2>
				</div>
			</div>
		</div>
	);
}
