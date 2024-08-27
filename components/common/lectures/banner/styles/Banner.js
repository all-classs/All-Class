import styled from 'styled-components';
import Image from 'next/image';

export const BannerWrapper = styled.div`
	width: 70%;
	margin: 1rem auto;
	position: relative;
	border-radius: 8px;
`;

export const StyledImage = styled(Image)`
	object-fit: cover;
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 8px;
`;
