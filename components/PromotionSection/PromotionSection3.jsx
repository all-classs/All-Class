import React from 'react';
import styles from './styles/promotionSection.module.css';
import Image from 'next/image';
import laptop from '../../public/assets/laptop/laptop.png';
import laptopView2 from '../../public/assets/laptop/labtopView2.png';
import {
	TbCircleNumber1Filled,
	TbCircleNumber2Filled,
	TbCircleNumber3Filled,
	TbCircleNumber4Filled,
} from 'react-icons/tb';

const iconStyle = {
	color: '#4D49A7',
	marginRight: '8px',
};

export default function PromotionSection3() {
	return (
		<div className={styles.mainContainer2}>
			<div className={styles.sectionContainer}>
				<div className={styles.laptopTitle}>
					<div className={styles.laptopLeft2}>
						<div className={styles.leftSection}>
							<div className={styles.iconContainer}>
								<span style={iconStyle}>
									<TbCircleNumber1Filled size={50} />
								</span>
								<h2>각 수업에 대한 리뷰를 모아놓은 화면이에요.</h2>
							</div>
							<div className={styles.iconContainer}>
								<span style={iconStyle}>
									<TbCircleNumber2Filled size={50} />
								</span>
								<div className={styles.content}>
									<h2>KorBERT를 활용한 키워드 분석을 통해</h2>
									<h2>수업 리뷰의 주요 키워드를 시각화해서 보여줘요.</h2>
								</div>
							</div>
							<div className={styles.iconContainer}>
								<span style={iconStyle}>
									<TbCircleNumber3Filled size={50} />
								</span>
								<div className={styles.content}>
									<h2>선택한 수업을 진행한 교수님이 진행하는</h2>
									<h2>다른 수업 리스트를 보여줘요.</h2>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.laptopRight2}>
						<h2 style={{ color: '#4D49A7' }}>수업 리뷰 리스트</h2>
						<Image src={laptop} alt="laptop" className={styles.laptopImg} />
						<Image
							src={laptopView2}
							alt="laptopView2"
							className={styles.laptopView2Img}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
