import styled from 'styled-components';
import Image from 'next/image';

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const CardWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 100%;
	border: solid 1px #e5e5e5;
	border-radius: 0 0 0.5rem 0.5rem;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06);
	position: relative;
`;

export const Cards = styled.div`
	padding: 4%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 30px;
	width: 100%;
	transition: transform 0.6s ease;
`;

export const Card = styled.div`
	background-color: #f5f7fa;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	padding: 20px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	min-height: 180px;
	cursor: pointer;
	transition: transform 0.6s ease;

	&:hover {
		transform: scale(1.1);
	}

	${({ $hovered }) =>
		$hovered &&
		`
		&:not(:hover) {
			transform: scale(0.95);
		}
	`}
`;

export const CardTitle = styled.h1`
	font-size: 18px;
	margin-bottom: 8px;
	color: #333;
`;

export const CardSubTitle = styled.h2`
	font-size: 18px;
	color: #666;
	margin: 4px 0;
`;

export const ProfessorInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 8px;
	position: relative;
`;

export const ProfessorTitle = styled.h3`
	font-size: 20px;
	color: #333;
	margin-left: 10px;
`;

export const ProfessorSubTitle = styled.h3`
	margin-left: 8px;
	font-size: 14px;
	color: #333;
`;

export const Rating = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 8px;
`;

export const Star = styled.span`
	font-size: 20px;
	color: #ffcc00;
`;

export const Score = styled.p`
	margin-left: 4px;
	font-size: 16px;
	color: #333;
`;

export const EmptyContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Stamp = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
`;

export const StmapContainer = styled.div`
	position: relative;
	width: 100%;
`;
