import styled from 'styled-components';

export const ReviewTopContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 7.5rem auto 0;
`;

export const ReviewTopWrapper = styled.div`
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
	font-size: small;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 70%;
		height: auto;
		padding: 30px;
	}
`;
