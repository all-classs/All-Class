import React from 'react';
import styles from './styles/main.module.css';
import logo1 from '../public/assets/logo/logo1.png';
import logo2 from '../public/assets/logo/logo2.png';
import Link from 'next/link';
import Image from 'next/image';
import Slide from '@/components/Slide/Slide';
import ShareUniversity2 from '@/components/Copyright/ShareUniversity2';

export default function MainLayout({ children }) {
	return (
		<div className={styles.rootLayout}>
			<nav className={styles.topNavBar}>
				<div className={styles.headerLeftLogo}>
					<Image
						src={logo1}
						className={`${styles.logo} ${styles.logo1}`}
						alt="logo1"
						priority
					/>
					<Image
						src={logo2}
						className={`${styles.logo} ${styles.logo2}`}
						alt="logo2"
						priority
					/>
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
