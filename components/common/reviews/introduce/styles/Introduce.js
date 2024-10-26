import styled from 'styled-components';
import Image from 'next/image';

export const IntroduceContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	width: 100%;
	height: 100%;
	@media (max-width: 1400px) {
		justify-content: center;
	}
`;

export const IntroduceWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 70%;
	height: 50vh;
	border-top: solid 1px #e5e5e5;
	border-left: solid 1px #e5e5e5;
	border-bottom: solid 1px #e5e5e5;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06);

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 70%;
		height: auto;
		padding: 30px;
		justify-content: center;
	}
`;

export const IntrocduceBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const ImageWrapper = styled.div`
	display: flex;
	width: 300px;
	height: 300px;
	flex-direction: column;
`;

export const ProfileImage = styled(Image)`
	display: flex;
	flex-direction: column;
	width: 100%;
	object-fit: contain;
`;

export const ProfileTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 15px;
	padding-right: 30px;
`;

export const ProfileMainTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	gap: 5px;
`;

export const IconImage = styled(Image)``;

export const ProfessorName = styled.h1`
	font-size: x-large;
`;

export const ProfessorSub = styled.h3`
	font-size: medium;
	color: #969696;
`;

export const Department = styled.h2`
	font-size: medium;
`;

export const Info = styled.h3`
	font-size: medium;
`;

export const LectureIntroduce = styled.h2`
	font-size: medium;
`;
