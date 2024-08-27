import { useState, useEffect, useRef } from 'react';
import styles from './MainPromotionPage.module.css';
import PromotionSection1 from '@/components/PromotionSection/PromotionSection1';
import PromotionSection2 from '@/components/PromotionSection/PromotionSection2';
import PromotionSection3 from '@/components/PromotionSection/PromotionSection3';
import PromotionSection4 from '@/components/PromotionSection/PromotionSection4';
import PromotionSection5 from '@/components/PromotionSection/PromotionSection5';
import PromotionSection6 from '@/components/PromotionSection/PromotionSection6';
import PromotionSection7 from '@/components/PromotionSection/PromotionSection7';
import PromotionSection8 from '@/components/PromotionSection/PromotionSection8';
import PromotionSection9 from '@/components/PromotionSection/PromotionSection9';
import PromotionSection10 from '@/components/PromotionSection/PromotionSection10';
import ShareUniversity from '@/components/Copyright/ShareUniversity';
import Footer from '@/components/Copyright/Footer';
import PromotionLayout from '@/layouts/PromotionLayout';

const MainPromotionPage = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const images = [
		'/assets/backgroundimg/background1.jpg',
		'/assets/backgroundimg/background2.jpg',
		'/assets/backgroundimg/background3.jpg',
		'/assets/backgroundimg/background4.jpg',
		'/assets/backgroundimg/background5.jpg',
	];

	const sectionRefs = {
		section0: useRef(null),
		section1: useRef(null),
		section2: useRef(null),
		section3: useRef(null),
	};

	useEffect(() => {
		const changeBackgroundImage = () => {
			setCurrentImage(prevImage => (prevImage + 1) % images.length);
		};

		const intervalId = setInterval(changeBackgroundImage, 5000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	const scrollToSection = sectionId => {
		const section = sectionRefs[sectionId]?.current;
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div
			className={styles.mainContainer}
			style={{ backgroundImage: `url(${images[currentImage]})` }}
		>
			{/* <nav className={styles.navBar}>
				<ul>
					<li onClick={() => scrollToSection('section0')}>Top</li>
					<li onClick={() => scrollToSection('section1')}>Section 1</li>
					<li onClick={() => scrollToSection('section2')}>Section 2</li>
					<li onClick={() => scrollToSection('section3')}>Section 3</li>
				</ul>
			</nav> */}
			<div id="section0" ref={sectionRefs.section0}>
				<PromotionSection1 />
			</div>
			<div class={styles.arrow}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="2.4em"
					height="2.4em"
					color="#ffffff"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5z"
					/>
				</svg>
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection4 />
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection5 />
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection6 />
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection2 />
			</div>
			<div id="section2" ref={sectionRefs.section2}>
				<PromotionSection3 />
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection7 />
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection8 />
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection9 />
			</div>
			<div id="section1" ref={sectionRefs.section1}>
				<PromotionSection10 />
			</div>
			<ShareUniversity />
			<div>
				<Footer />
			</div>
		</div>
	);
};

MainPromotionPage.getLayout = page => {
	return <PromotionLayout>{page}</PromotionLayout>;
};

export default MainPromotionPage;
