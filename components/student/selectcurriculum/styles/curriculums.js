import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh; // 화면 중앙 정렬을 위한 최소 높이
	background-color: #f8f9fa;
	padding: 20px;
	box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
	width: 80%;
	max-width: 1200px;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const Tabs = styled.div`
	display: flex;
	margin-bottom: 20px;
	background-color: #e0e0e0;
	border-radius: 8px;
	overflow: hidden;
`;

export const TabButton = styled.button`
	flex: 1;
	padding: 15px;
	background-color: ${({ isActive }) => (isActive ? '#5e4bdc' : '#f0f0f0')};
	color: ${({ isActive }) => (isActive ? '#ffffff' : '#000000')};
	border: none;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;

	&:hover {
		background-color: ${({ isActive }) => (isActive ? '#5e4bdc' : '#d0d0d0')};
	}
`;

export const SectionTitle = styled.h3`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 15px;
`;

export const CurriculumList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	margin-bottom: 20px;
`;

export const CurriculumCard = styled.div`
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 15px;
	width: 200px;
	background-color: #ffffff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	text-align: center;
`;

export const CurriculumImageWrapper = styled.div`
	width: 100px;
	height: 100px;
	margin: 0 auto 10px auto;
	background-color: #e0e0e0; /* Placeholder background color */
	position: relative;
	border-radius: 50%;
`;

export const CurriculumName = styled.p`
	margin: 5px 0;
	font-weight: bold;
`;

export const CurriculumCategory = styled.p`
	margin: 5px 0;
	color: #666;
`;

export const CurriculumPoints = styled.p`
	margin: 5px 0;
	font-weight: bold;
	color: #dc3545; /* 포인트 색상 */
`;

export const CategorySelect = styled.div`
	margin-bottom: 20px;

	label {
		margin-right: 10px;
		font-size: 16px;
		font-weight: bold;
	}

	select {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ddd;
		font-size: 16px;
	}
`;

export const MyCurriculumContainer = styled.div`
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 10px;
	border: 1px solid #ddd;
`;
