import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const HiddenContainer = styled.div`
	opacity: ${({ $isHovered }) => ($isHovered ? '1' : '0')};
	visibility: ${({ $isHovered }) => ($isHovered ? 'visible' : 'hidden')};
	position: absolute;
	top: 100%;
	width: 100%;
	height: 350%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition:
		opacity 0.2s ease-in-out,
		visibility 0.2s ease-in-out;
	border-top: 1px solid white;
	background-color: #4d49a7;
	z-index: 99;
`;

export const HeaderContainer = styled.nav`
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: row;
	width: 100%;
	border-bottom: 1px solid black;
	color: ${({ $isDashboard }) => ($isDashboard ? 'white' : '#4d49a7')};
	background-color: ${({ $isDashboard }) =>
		$isDashboard ? '#4d49a7' : 'transparent'};
	backdrop-filter: saturate(130%) blur(20px);
	transition: 0.2s ease-in-out;
	z-index: 99;

	position: ${({ $isDashboard }) => ($isDashboard ? 'fixed' : 'absolute')};

	&:hover {
		color: white;
		background-color: #4d49a7;
	}
`;

export const LeftHeader = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CenterHeader = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: fit-content;
	cursor: pointer;
	@media (max-width: 600px) {
		font-size: xx-small;
	}
`;

export const RightHeader = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
`;

export const RightFirstIcon = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	@media (max-width: 600px) {
		font-size: small;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export const RightSecondIcon = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-start;
	cursor: pointer;
	@media (max-width: 600px) {
		font-size: small;
	}
`;

export const LogoImages = styled(Image)`
	cursor: pointer;
	padding: 0% 5% 3% 0%;
	transition: opacity 0.5s ease-in-out;
	@media (max-width: 600px) {
		padding: 8%;
	}
`;

export const CashBtn = styled.div`
	background-color: white;
	padding: 10px;
	border-radius: 12px;
	color: #4d49a7;
`;

// export const CashBtn = styled.div`
// 	display: flex;
// 	align-items: center;
// 	cursor: pointer;
// `;

// export const CashBtn = styled.div`
// 	cursor: pointer;
// 	margin-left: 10px;
// `;

export const CoinImage = styled(Image)`
	margin-right: 5px;
`;

export const CoinText = styled.span`
	font-size: 14px;
	margin-right: 5px;
`;

export const CoinContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
`;
