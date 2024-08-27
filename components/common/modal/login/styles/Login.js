import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

export const LoginContainer = styled.div`
	width: 400px;
	background-color: white;
	border-radius: 12px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 20px;
	z-index: 10000;
	position: relative;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
	color: #aaa;

	&:hover {
		color: #000;
	}
`;

export const TabContainer = styled.div`
	display: flex;
	border-bottom: 1px solid #ddd;
	margin-bottom: 20px;
`;

export const Tab = styled.div`
	flex: 1;
	justify-content: center;
	text-align: center;
	padding: 5px 10px 15px 10px;
	cursor: pointer;
	color: ${props => (props.$active ? '#000' : '#aaa')};
	border-bottom: 2px solid transparent;
	border-bottom-color: ${props => (props.$active ? '#6a1b9a' : 'transparent')};
	font-weight: ${props => (props.$active ? 'bold' : 'normal')};
	transition: all 0.3s ease;

	&:hover {
		color: #000;
	}
`;

export const InputField = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 15px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;
	box-sizing: border-box;
`;

export const LoginButton = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #4d49a7;
	color: white;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #5c57dd;
	}

	h3 {
		font-size: medium;
	}
`;
