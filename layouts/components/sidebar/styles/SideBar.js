import Image from 'next/image';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
	width: 110px;
	height: 100vh;
	background-color: #4d49a7;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-top: 5.25rem;
	position: fixed;
`;

export const SideBarWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NavItems = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin-top: 50px;
	gap: 50px;
	h3 {
		font-size: medium;
	}
`;

export const NavItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 15px;
	cursor: pointer;
	text-align: center;
	flex-direction: column;
	gap: 5px;
	width: 100%;
	& :hover {
		background-color: #2a2c7f;
	}
`;

export const SideBarIcon = styled(Image)``;

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	flex-direction: column;
	gap: 5px;
	border-radius: 50%;
	width: 80%;
`;
