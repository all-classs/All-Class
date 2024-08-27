import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import {
	SliderContainer,
	SlideImageWrapper,
	StyledImage,
	CustomSplide,
} from './styles/Slide';

const defaultImages = [
	{ id: 1, url: '/assets/slide/image1.png' },
	{ id: 2, url: '/assets/slide/image2.png' },
	{ id: 3, url: '/assets/slide/image3.png' },
];

export default function Slide() {
	return (
		<SliderContainer>
			<CustomSplide
				options={{
					type: 'loop',
					perPage: 1,
					autoplay: true,
					pagination: true,
					interval: 3000,
				}}
			>
				{defaultImages.map(image => (
					<SplideSlide key={image.id}>
						<SlideImageWrapper>
							<StyledImage
								src={image.url}
								alt={`Slide ${image.id}`}
								fill
								sizes="(max-width: 1200px) 100vw, 1200px"
							/>
						</SlideImageWrapper>
					</SplideSlide>
				))}
			</CustomSplide>
		</SliderContainer>
	);
}
