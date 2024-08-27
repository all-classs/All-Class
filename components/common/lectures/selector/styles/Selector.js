import Image from 'next/image';
import styled from 'styled-components';

export const SelectorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 100%;
	height: 100%;
`;

export const SelectorWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 70%;
	height: 10vh;
	border-top: solid 1px #e5e5e5;
	border-left: solid 1px #e5e5e5;
	border-right: solid 1px #e5e5e5;
	border-radius: 0.5rem 0.5rem 0 0;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06);

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 70%;
		height: auto;
		padding: 30px;
	}
`;

export const LeftHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex: 1;
	font-size: small;
`;

export const CenterHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex: 5;
`;

export const RightHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1.5;
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CustomLogo = styled(Image)`
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
`;

export const SearchForm = styled.form`
	display: flex;
	justify-content: space-evenly;
	width: 100%;

	@media (max-width: 1400px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 70%;
		height: auto;
		padding: 30px;
		padding-right: 150px;
		gap: 20px;
	}
`;

export const Department = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #d1d1d1;
	border-radius: 4px;
	overflow: hidden;
	width: 200px;
	@media (max-width: 1400px) {
		width: 260px;
	}
`;

export const Grade = styled(Department)``;

export const Category = styled(Department)``;

export const LabelSpan = styled.span`
	background-color: #aaabcc;
	color: #ffffff;
	padding: 8px 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	width: 50%;
`;

export const StyledSelect = styled.select`
	padding: 8px 12px;
	border: none;
	background-color: #f9f9f9;
	font-size: 14px;
	color: #333;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-left: 1px solid #d1d1d1;
	appearance: auto;
	cursor: pointer;

	&:hover {
		background-color: #e5e5e5;
	}
`;
