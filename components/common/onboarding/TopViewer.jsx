import React, { useState, useEffect } from 'react';
import {
	MainContainer,
	IntroContainer,
	IntroContainerFirst,
	IntroContainerSecond,
	Arrow,
} from './styles/TopVier';

export default function TopViewer() {
	const [currentImage, setCurrentImage] = useState(0);
	const images = [
		'/assets/backgroundimg/background1.jpg',
		'/assets/backgroundimg/background2.jpg',
		'/assets/backgroundimg/background3.jpg',
		'/assets/backgroundimg/background4.jpg',
		'/assets/backgroundimg/background5.jpg',
	];

	useEffect(() => {
		const changeBackgroundImage = () => {
			setCurrentImage(prevImage => (prevImage + 1) % images.length);
		};

		const intervalId = setInterval(changeBackgroundImage, 5000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<MainContainer style={{ backgroundImage: `url(${images[currentImage]})` }}>
			<div id="section0">
				<IntroContainer>
					<IntroContainerFirst>
						<h1>부산 대학</h1>
						<h1>의 모든 것</h1>
					</IntroContainerFirst>
					<IntroContainerSecond>
						<h1>SLR</h1>
						<h1>을 통해 확인하세요</h1>
					</IntroContainerSecond>
				</IntroContainer>
			</div>
			<Arrow>
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
			</Arrow>
		</MainContainer>
	);
}
