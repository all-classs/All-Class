import styled from 'styled-components';
import Image from 'next/image';
import { Splide } from '@splidejs/react-splide';

export const SliderContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 5.25rem auto 0;
`;

export const SlideImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 50vh;
	overflow: hidden;
`;

export const StyledImage = styled(Image)`
	object-fit: cover;
`;

export const CustomSplide = styled(Splide)`
	.splide__arrow {
		background-color: #4d49a7;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
	}

	.splide__arrow--prev {
		left: 100px;
	}

	.splide__arrow--next {
		right: 100px;
	}

	.splide__arrow svg {
		fill: white;
		width: 20px;
		height: 20px;
	}

	.splide__pagination__page {
		background-color: #b0aee6;
		width: 10px;
		height: 10px;
		margin: 0 5px;
		border-radius: 50%;
		transition: background-color 0.3s;
	}

	.splide__pagination__page.is-active {
		background-color: #4d49a7;
		width: 12px;
		height: 12px;
	}
`;
