import styled from 'styled-components';
import Image from 'next/image';

export const Cards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background-color: #fff;
	border-radius: 10px;
	padding: 10px;
	border: 1px solid #d7d7d7;
	transition: 0.5s;
	cursor: pointer;

	${({ $isFooter }) =>
		$isFooter &&
		`
		filter: grayscale(1);

		&:hover {
			filter: none;
			transform: scale(1.05);
		}
	`}
`;

export const UniversityCardContainer = styled.div`
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

export const UniversityCards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	gap: 10px;
	width: 72%;
	height: 100%;

	&:hover ${Cards} {
		${({ $isFooter }) =>
			$isFooter &&
			`
			transform: scale(0.9);
			filter: grayscale(1);
		`}
		transform: scale(0.9);
		filter: grayscale(1);
	}

	${Cards}:hover {
		transform: scale(1.1);
		filter: none;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(7, 1fr);
	}
`;

export const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledImage = styled(Image)`
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
