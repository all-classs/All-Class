import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import useAuthStore from '@/stores/useAuthStore';

const defaultImg = {
	table: '/assets/selectreview/table.png',
};

export default function SelectReview() {
	const authInfo = JSON.parse(localStorage.getItem('auth-storage'));
	const { state } = authInfo || {};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [file, setFile] = useState(null);
	const [description, setDescription] = useState('');

	const { setCheckLecture } = useAuthStore();

	const handleFileChange = e => {
		setFile(e.target.files[0]);
	};

	const handleDescriptionChange = e => {
		setDescription(e.target.value);
	};

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleSubmit = () => {
		setCheckLecture(true);

		alert('수강인증 신청을 성공했습니다!');
		handleModalClose();
	};

	return (
		<>
			<ImgContainer>
				<ImgArea
					src={defaultImg.table}
					alt="테이블"
					width={1100}
					height={630}
				></ImgArea>
				<ChargeBtn onClick={handleModalOpen}>
					<h3>수강인증</h3>
				</ChargeBtn>
			</ImgContainer>

			{isModalOpen && (
				<ModalOverlay onClick={handleModalClose}>
					<ModalContent onClick={e => e.stopPropagation()}>
						<CloseButton onClick={handleModalClose}>&times;</CloseButton>
						<ModalHeader>
							<h2>수강 인증</h2>
						</ModalHeader>
						<InputField type="file" onChange={handleFileChange} />
						<TextArea
							placeholder="파일에 대한 설명을 입력하세요."
							value={description}
							onChange={handleDescriptionChange}
							rows="5"
						/>
						<ButtonGroup>
							<SubmitButton onClick={handleSubmit}>
								<h3>제출</h3>
							</SubmitButton>
							<CancelButton onClick={handleModalClose}>
								<h3>취소</h3>
							</CancelButton>
						</ButtonGroup>
					</ModalContent>
				</ModalOverlay>
			)}
		</>
	);
}

const ChargeBtn = styled.div`
	position: absolute;
	top: 18%;
	right: 11.5%;
	background-color: #4d49a7;
	padding: 10px;
	border-radius: 12px;
	color: white;
	transition: 0.3s ease;
	cursor: pointer;
	&:hover {
		background-color: #2a2c7f;
	}
`;

const ImgArea = styled(Image)`
	margin-top: 150px;
	padding-bottom: 50px;
`;

const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
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

const CloseButton = styled.button`
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

const ModalHeader = styled.div`
	text-align: center;
	margin-bottom: 20px;

	h2 {
		margin: 0;
		font-size: 24px;
	}
`;

const InputField = styled.input`
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

const TextArea = styled.textarea`
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

const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SubmitButton = styled.button`
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

const CancelButton = styled.button`
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
