import React from 'react';
import styles from './styles/footer.module.css';
import Image from 'next/image';
import footer from '../../public/assets/footer/footer.png';

export default function Footer() {
	return (
		<div className={styles.imageContainer}>
			<Image src={footer} alt="footer" className={styles.footerImg} />
		</div>
	);
}
