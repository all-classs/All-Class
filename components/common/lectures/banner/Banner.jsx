import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { BannerWrapper, StyledImage } from './styles/Banner';

const bannerImages = [
	{ id: 1, url: '/assets/banner/banner1.png' },
	{ id: 2, url: '/assets/banner/banner2.png' },
	{ id: 3, url: '/assets/banner/banner3.png' },
];

export default function Banner() {
	return (
		<BannerWrapper>
			<Splide
				options={{
					type: 'loop',
					direction: 'ttb',
					height: '50px',
					perPage: 1,
					pagination: false,
					arrows: false,
					autoplay: true,
					interval: 4000,
				}}
			>
				{bannerImages.map(image => (
					<SplideSlide key={image.id}>
						<StyledImage
							src={image.url}
							alt={`Banner ${image.id}`}
							fill
							priority={image.id === 1}
						/>
					</SplideSlide>
				))}
			</Splide>
		</BannerWrapper>
	);
}
