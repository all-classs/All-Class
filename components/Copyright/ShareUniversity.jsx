import React from 'react';
import styles from './styles/footer.module.css';
import Image from 'next/image';
import card1 from '../../public/assets/uni/1.jpg';
import card2 from '../../public/assets/uni/2.png';
import card3 from '../../public/assets/uni/3.jpg';
import card4 from '../../public/assets/uni/4.png';
import card5 from '../../public/assets/uni/5.jpg';
import card6 from '../../public/assets/uni/6.jpeg';
import card7 from '../../public/assets/uni/7.jpg';
import card8 from '../../public/assets/uni/8.png';
import card9 from '../../public/assets/uni/9.jpg';
import card10 from '../../public/assets/uni/10.png';
import card11 from '../../public/assets/uni/11.png';
import card12 from '../../public/assets/uni/12.svg';
import card13 from '../../public/assets/uni/13.png';
import card14 from '../../public/assets/uni/14.png';

const images = [
	card1,
	card2,
	card3,
	card4,
	card5,
	card6,
	card7,
	card8,
	card9,
	card10,
	card11,
	card12,
	card13,
	card14,
];

export default function Footer() {
	return (
		<div className={styles.universityContainer}>
			<div className={styles.cardTitle}>
				<h1 className={styles.mainTitle}>어떤 공유 대학이 있나요?</h1>
			</div>
			<div className={styles.cards}>
				{images.map((img, index) => (
					<div key={index} className={styles.card}>
						<Image
							src={img}
							alt={`university logo ${index + 1}`}
							layout="intrinsic"
							objectFit="contain"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
