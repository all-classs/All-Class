import styled from 'styled-components';

export const MainContainer = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	transition: background-image 1s ease-in-out;
	z-index: 1;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
		z-index: -1;
	}
`;

export const IntroContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	flex-direction: column;
	position: relative;
	padding-top: 30px;
`;

export const IntroContainerFirst = styled.div`
	display: flex;

	h1:nth-child(1) {
		background-color: #4d49a7;
		border-radius: 10px 0 10px 0;
		height: 5rem;
		min-height: 30%;
		max-height: 30%;
	}
`;

export const IntroContainerSecond = styled.div`
	display: flex;

	h1:nth-child(1) {
		background-color: #4d49a7;
		border-radius: 10px 0 10px 0;
		height: 5rem;
		min-height: 30%;
		max-height: 30%;
	}
`;

export const Arrow = styled.div`
	rotate: 180deg;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -3%;
	animation: arrow-ani 0.6s cubic-bezier(0.37, 0.01, 0.63, 0.99) infinite
		alternate;

	@keyframes arrow-ani {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(30px);
		}
	}
`;
