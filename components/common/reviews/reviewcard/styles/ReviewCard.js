import styled from 'styled-components';

export const ReviewCardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const ReviewCardWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 70%;
	height: 100%;
	border: solid 1px #e5e5e5;
	font-size: small;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	padding: 32px;

	@media (max-width: 1400px) {
		display: flex;
		flex-direction: column;
		width: 70%;
		height: auto;
		padding: 32px;
	}
`;
export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	width: 100%;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	border: solid 1px #e5e5e5;
	border-radius: 8px;
	font-size: small;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	padding: 20px;
	background-color: #fff;
	&:hover {
		transition: 0.5s ease-in-out;
	}
`;

export const UserInfo = styled.div`
	display: grid;
	grid-template-columns: 40px 1fr;
	gap: 10px;
	align-items: center;
	width: 100%;
	margin-bottom: 10px;
	position: relative;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;

		h2 {
			margin: 0;
			font-size: 14px;
			font-weight: bold;
		}

		h3 {
			padding-top: 5px;
			margin: 0;
			font-size: 12px;
			color: #777;
		}
	}
`;

export const ModalUserInfo = styled(UserInfo)`
	display: grid;
	grid-template-columns: 40px 1fr;
	gap: 10px;
	align-items: center;
	width: 100%;
	margin-bottom: 10px;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 20px;

		h2 {
			margin: 0;
			font-size: 14px;
			font-weight: bold;
		}

		h3 {
			padding-top: 5px;
			margin: 0;
			font-size: 12px;
			color: #777;
		}
	}
`;

export const ReviewContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	h1 {
		margin: 0;
		font-size: 16px;
		font-weight: bold;
		color: #333;
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		white-space: pre-wrap;
	}

	h2 {
		margin: 0;
		font-size: small;
		color: #555;
		white-space: pre-wrap;
		margin-top: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
`;

export const HiddenContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	h1 {
		margin: 0;
		font-size: 16px;
		font-weight: bold;
		color: #333;
		margin-bottom: 10px;
	}
`;

export const StarRating = styled.div`
	display: flex;
	gap: 2px;

	h3 {
		font-size: small;
		color: #d1d1d1;
	}

	.filled {
		color: #ffc107;
	}
`;

export const LikeButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h3 {
		font-size: small;
		display: flex;
		align-items: center;
		color: #555;
		background-color: #f0f0f0;
		border-radius: 12px;
		cursor: pointer;
		transition: background-color 0.3s;
		padding: 8px;

		&:hover {
			background-color: #e0e0e0;
		}
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 10px;
`;

export const ReadMoreButton = styled.button`
	background-color: #4d49a7;
	color: white;
	border: none;
	border-radius: 12px;
	padding: 2px 6px;
	cursor: pointer;
	font-size: smalle;
	margin-left: 10px;
	transition: background-color 0.3s;
	padding: 8px;

	&:hover {
		background-color: #3c38a1;
	}
`;

export const ModalContainer = styled.div`
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
	width: 600px;
	max-width: 90%;
	padding: 30px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	position: relative;

	h1 {
		font-size: 20px;
		margin-bottom: 20px;
	}

	h2 {
		font-size: 18px;
		margin-bottom: 10px;
	}

	p {
		font-size: 16px;
		color: #333;
	}

	@media (max-width: 768px) {
		width: 90%;
		padding: 20px;
	}
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

export const TrashButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 16px;
	color: #777;
	transition: color 0.3s;
	position: absolute;
	right: 0;

	&:hover {
		color: #4d49a7;
	}
`;

export const NoReview = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StarContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-bottom: 10px;
	font-size: large;

	.filled {
		color: #ffc107;
	}

	.empty {
		color: #e4e5e9;
	}
`;
