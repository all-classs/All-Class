import React from 'react';
import Image from 'next/image';
import laptop from '@/public/assets/laptop/laptop.png';
import laptopView from '@/public/assets/laptop/labtopView.png';
import {
	TbCircleNumber1Filled,
	TbCircleNumber2Filled,
	TbCircleNumber3Filled,
} from 'react-icons/tb';
import styles from './styles/PromotionSection.module.css';

const iconStyle = {
	color: '#4D49A7',
	marginRight: '8px',
};

export default function MiddleViewer() {
	return (
		<div className={styles.mainContainer2}>
			<div className={styles.sectionContainer}>
				<div className={styles.sectionTitle}>
					<h1 className={styles.mainTitle}>Sharing Lecture Review</h1>
					<h2 className={styles.subTitle}>어떤 시스템인가요?</h2>
					<h3>
						학생들이 직접 수업을 들은 경험을 바탕으로 작성한 수업 리뷰를
						공유하는 시스템입니다.
					</h3>
				</div>
				<div className={styles.laptopTitle}>
					<div className={styles.laptopLeft1}>
						<h2 style={{ color: '#4D49A7' }}>학교 수업 리스트</h2>
						<Image src={laptop} alt="laptop" className={styles.laptopImg} />
						<Image
							src={laptopView}
							alt="laptopView"
							className={styles.laptopViewImg}
						/>
					</div>
					<div className={styles.laptopRight1}>
						<div className={styles.iconContainer}>
							<span style={iconStyle}>
								<TbCircleNumber1Filled size={50} />
							</span>
							<h2>각 대학별 수업들을 모아놓은 화면이에요.</h2>
						</div>
						<div className={styles.iconContainer}>
							<span style={iconStyle}>
								<TbCircleNumber2Filled size={50} />
							</span>
							<div className={styles.content}>
								<h2>메인 배너와 서브 배너를 통해 학교별 필요한</h2>
								<h2>정보를 확인할 수 있어요.</h2>
							</div>
						</div>
						<div className={styles.iconContainer}>
							<span style={iconStyle}>
								<TbCircleNumber3Filled size={50} />
							</span>
							<div className={styles.content}>
								<h2>각 수업들은 평점순으로 정렬되어 있으며,</h2>
								<h2>학과, 학년, 이수구분 필터를 통해</h2>
								<h2>원하는 수업을 찾을 수 있어요.</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
