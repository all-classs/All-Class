import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	width: 100%;
	height: 100%;
	@media (max-width: 1400px) {
		justify-content: center;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 70%;
	height: 100%;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06);

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		padding: 30px;
	}
`;

export const ChartWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
	height: 50vh;
	height: 50vh;
	border-bottom: solid 1px #e5e5e5;
	border-top: solid 1px #e5e5e5;
	border-left: solid 1px #e5e5e5;
	padding: 20px;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 75%;
		height: auto;
		padding: 30px;
	}
`;

export const RecommandWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 50%;
	height: 50vh;
	border: solid 1px #e5e5e5;
	padding: 20px;
	gap: 30px;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 75%;
		height: auto;
		padding: 30px;
		li {
			width: 22rem;
		}
	}

	ul {
		list-style: none;
		padding: 0;

		li {
			background: #f5f5f5;
			border-radius: 20px;
			padding: 10px;
			margin-bottom: 10px;
			display: flex;
			align-items: center;
			font-size: 16px;

			&:before {
				content: '•';
				color: #4d49a7;
				font-size: 20px;
				margin-right: 10px;
			}
		}

		h3 {
			font-size: medium;
		}
	}
`;

export const CharTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: 20px;
	h1 {
		color: #ffa500;
		font-size: large;
	}

	h2 {
		font-size: large;
	}
`;

export const RecommnadTitle = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	padding-right: 20px;
	h1 {
		color: #ffa500;
		font-size: large;
	}
	h2 {
		font-size: large;
	}
`;

export const ChartViewer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const RecommandViewer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
