import styled from 'styled-components';

export const SelectorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 3rem auto 0;
`;

export const SelectorWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 70%;
	height: 100%;
	border-top: solid 1px #e5e5e5;
	border-left: solid 1px #e5e5e5;
	border-right: solid 1px #e5e5e5;
	border-radius: 0.5rem 0.5rem 0 0;
	font-size: small;
	padding: 20px;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 70%;
		height: auto;
		padding: 30px;
	}
`;

export const LeftSelector = styled.div`
	display: flex;
	flex: 2;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const CenterSelector = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 5;
	width: 100%;
	height: 100%;
	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 20px;
	}
`;

export const Rightselector = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 2;
	width: 100%;
	height: 100%;
`;

export const LeftSelectorWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 31vh;
	h1 {
		font-size: medium;
		text-align: center;
		width: 100%;
	}
	h2 {
		padding-left: 10px;
		font-size: small;
		color: #969696;
		width: 100%;
	}
	@media (max-width: 1400px) {
		justify-content: center;
	}
`;

export const LeftSelectorUnderWrapper = styled.div`
	display: flex;
	width: 11rem;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 10px;
	gap: 10px;
	h3 {
		font-size: small;
		padding-left: 0.5rem;
	}
	@media (max-width: 1400px) {
		justify-content: center;
		width: auto;
	}
`;

export const LeftSelectorScore = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	h2 {
		font-size: x-large;
	}
	h3 {
		padding-left: 5px;
		font-size: small;
		color: #969696;
	}
	@media (max-width: 1400px) {
		justify-content: center;
	}
`;

export const SelectorButton = styled.button`
	border: 1px solid #ccc;
	border-radius: 16px;
	padding: 10px 20px;
	margin: 0 5px;
	background-color: white;
	color: #000000;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s;
	width: 7.7rem;

	h3 {
		font-size: smaller;
	}

	${props =>
		props.$active === 'true' &&
		`
			background-color: #C3C4DB;
			border-color: transparent;
			color: black;
		`}

	&:hover {
		background-color: ${props =>
			props.$active === 'true' ? '#d1d4f0' : '#f0f0f0'};
	}
`;

export const ReviewButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #c3c4db;
	border: none;
	border-radius: 12px;
	padding: 10px 20px;
	cursor: pointer;
	color: black;
	font-size: 16px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #d1d4f0;
	}

	svg {
		margin-right: 8px;
		font-size: 18px;
	}
`;
