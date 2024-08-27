import Image from 'next/image';
import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const FooterWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin-top: 3%;
`;

export const FirstFooter = styled.div`
	background-color: #f5f7fa;
`;

export const SecondFooter = styled.div`
	background-color: #31343d;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 15vh;
`;

export const FooterContent = styled.div`
	display: flex;
	align-items: center;
	width: 75%;
	height: 100%;
`;

export const FooterLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 5%;
`;

export const CustomLogo = styled(Image)`
	padding-bottom: 3px;
	margin-left: 30px;
	width: auto;
	height: auto;
`;

export const FooterInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	padding-top: 15px;
	gap: 8px;
`;

export const FooterItem = styled.div`
	font-size: x-small;
	padding-right: 50px;
	color: white;
	@media (max-width: 550px) {
		font-size: xx-small;
	}
`;

export const TopItem = styled.div`
	display: flex;
	flex-direction: row;
`;
