import React from 'react';
import styles from './styles/promotion.module.css';
import Image from 'next/image';
import logo1 from '../public/assets/logo/logo2.png';
import ShareUniversity2 from '@/components/Copyright/ShareUniversity2';

export default function PromotionLayout({ children }) {
	return (
		<div className={styles.rootLayout}>
			<nav className={styles.topNavBar}>
				<div className={styles.headerLeftLogo}>
					<Image src={logo1} className={styles.logo1} alt="logo1" priority />
				</div>
				<div className={styles.headerCenterUniversity}>
					<h2>Busan!</h2>
					<div className={styles.hiddenContainer}>
						<ShareUniversity2></ShareUniversity2>
					</div>
				</div>
				<div className={styles.headerRightIcon}>
					<div className={styles.icon1}>{/* <h3>마이페이지</h3> */}</div>
					<div className={styles.icon2}>
						<h3>로그아웃</h3>
					</div>
				</div>
			</nav>
			<div>{children}</div>
		</div>
	);
}
