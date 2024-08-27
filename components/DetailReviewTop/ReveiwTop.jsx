import React from 'react';
import styles from './styles/ReviewTop.module.css';
import Image from 'next/image';
import gara from '@/public/assets/image.png';

export default function ReviewTop({ review, detailLecture }) {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.topContainer}>
				<h2>{detailLecture.lectureName}</h2>
			</div>
			<div className={styles.topCenterContainer}>
				<div className={styles.topLeftContainer}>
					<div className={styles.imgContainer}>
						<Image
							src={detailLecture.imageUrl}
							alt={detailLecture.lectureName}
							width={200}
							height={150}
						/>
					</div>
					<div>
						<h2 className={styles.profName}>
							{detailLecture.professor} <small>교수</small>
						</h2>
						<h3>{detailLecture.department}</h3>
						<h3>과목소개</h3>
						<h3>{detailLecture.introduction}</h3>
					</div>
				</div>
				<div className={styles.topRightContainer}>
					<Image src={gara} alt="bara" width={600} height={300} />
				</div>
			</div>
		</div>
	);
}
