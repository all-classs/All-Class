import styled, { keyframes } from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ModalContent = styled.div`
	background: white;
	border-radius: 8px;
	width: 500px;
	padding: 30px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	position: relative;

	h3 {
		font-size: 18px;
		margin-bottom: 10px;
		text-align: center;
	}

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 20px;
	cursor: pointer;
	color: #999;

	&:hover {
		color: #333;
	}
`;

export const ModalHeader = styled.div`
	text-align: center;
	margin-bottom: 20px;

	h2 {
		margin: 0;
		font-size: 24px;
	}
`;

export const StarContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;

	span {
		font-size: 30px;
		color: #d1d1d1;
		cursor: pointer;
		margin: 0 5px;
		transition: color 0.2s;

		&.filled {
			color: #ffc107;
		}

		&:hover,
		&.filled:hover {
			color: #ff9800;
		}
	}
`;

export const TagContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;

	button {
		background-color: #e5e5e5;
		color: #4d49a7;
		border: none;
		border-radius: 20px;
		padding: 10px 15px;
		margin: 0 5px;
		cursor: pointer;
		font-size: 14px;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;

		&.active,
		&:hover {
			background-color: #4d49a7;
			color: white;
		}

		h3 {
			font-size: small;
			margin: 0;
		}
	}
`;

export const InputField = styled.input`
	width: 100%;
	padding: 12px;
	margin-bottom: 20px;
	border-radius: 8px;
	border: 1px solid #ddd;
	font-size: 14px;
	box-sizing: border-box;

	&::placeholder {
		color: #aaa;
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 15px;
	border-radius: 8px;
	border: 1px solid #ddd;
	font-size: 14px;
	resize: none;
	margin-bottom: 20px;

	&::placeholder {
		color: #aaa;
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SubmitButton = styled.button`
	width: 45%;
	padding: 10px 20px;
	border: none;
	border: 1px solid #ddd;
	border-radius: 8px;
	background-color: white;
	color: #333;
	font-size: 16px;
	cursor: pointer;
	text-align: center;
	transition: all 0.3s ease;

	&:hover {
		background-color: #4d49a7;
		color: white;
	}
	h3 {
		margin: 0;
		font-size: medium;
	}
`;

export const CancelButton = styled.button`
	width: 45%;
	padding: 10px 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
	background-color: white;
	color: #333;
	font-size: 16px;
	cursor: pointer;
	text-align: center;
	transition: all 0.3s ease;

	&:hover {
		background-color: #4d49a7;
		color: white;
	}
	h3 {
		margin: 0;
		font-size: medium;
	}
`;

const explode = keyframes`
	0% { transform: scale(0.1); opacity: 1; }
	100% { transform: scale(1.5); opacity: 0; }
`;

export const FireworksContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	pointer-events: none; /* 폭죽 클릭 불가 */
	z-index: 1001; /* 모달 위에 표시 */
`;

export const Firework = styled.div`
	width: 100px;
	height: 100px;
	background: radial-gradient(
		circle,
		rgba(255, 215, 0, 1) 0%,
		rgba(255, 69, 0, 1) 60%,
		rgba(255, 0, 0, 1) 100%
	);
	border-radius: 50%;
	animation: ${explode} 1s ease-out infinite;
`;
