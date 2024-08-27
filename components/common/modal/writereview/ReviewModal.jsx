import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { submitReview } from '@/api/reviews';
import { checkReview } from '@/api/ai/reject';
import { keywordAnalysis } from '@/api/ai/chart/index';
import {
	ModalOverlay,
	ModalContent,
	CloseButton,
	ModalHeader,
	StarContainer,
	TagContainer,
	TextArea,
	InputField,
	ButtonGroup,
	SubmitButton,
	CancelButton,
} from './styles/ReviewModal';
import { useRouter } from 'next/router';
import useAuthStore from '@/stores/useAuthStore';

export default function ReviewModal({
	closeModal,
	ReviewsInfo,
	LectureIdInfo,
}) {
	const [rating, setRating] = useState(0);
	const [postTitle, setPostTitle] = useState('');
	const [postContent, setPostContent] = useState('');
	const [important, setImportant] = useState('0'); 
	const [funny, setFunny] = useState('0');
	const [difficulty, setDifficulty] = useState('0'); 
	const [showConfetti, setShowConfetti] = useState(false);
	const router = useRouter();

	const setCoin = useAuthStore(state => state.setCoin);

	const handleStarClick = index => {
		setRating(index + 1);
	};

	const handleTagClick = tag => {
		if (tag === '#중요도') setImportant(prev => (prev === '1' ? '0' : '1'));
		if (tag === '#유머') setFunny(prev => (prev === '1' ? '0' : '1'));
		if (tag === '#난이도') setDifficulty(prev => (prev === '1' ? '0' : '1'));
	};

	const handleSubmit = async () => {
		if (!postTitle || !postContent || rating === 0) {
			alert('모든 필드를 채워주세요.');
			return;
		}

		const authInfo = JSON.parse(localStorage.getItem('auth-storage'));
		const userNumber = authInfo?.state?.name;
		const token = authInfo?.state?.token;

		const payload = {
			userNumber,
			lectureName: ReviewsInfo,
			starLating: rating,
			postTitle,
			postContent,
			important,
			funny,
			difficulty,
		};

		const checkValue = {
			postTitle,
			postContent,
		};

		const keywordValues = {
			lectureId: LectureIdInfo,
		};

		const keywordValue = keywordValues.lectureId;

		try {
			const rejectStatus = await checkReview(checkValue);
			if (rejectStatus.data.status !== '200') {
				alert('리뷰 제출이 거부되었습니다.');
				return;
			} else if (rejectStatus.data.status == '200') {
				await submitReview(token, payload);
				await keywordAnalysis(keywordValue);

				setCoin(100);

				alert('포인트가 100원 적립되었습니다!');
				setShowConfetti(true);
				setTimeout(() => {
					setShowConfetti(false);
					router.reload();
					closeModal();
				}, 5000);
			}
		} catch (error) {
			alert('리뷰 제출 중 오류가 발생했습니다.');
		}
	};

	return (
		<ModalOverlay onClick={closeModal}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<CloseButton onClick={closeModal}>X</CloseButton>
				<ModalHeader>
					<h2>리뷰 작성</h2>
				</ModalHeader>
				<div>
					<h3>수업은 만족하셨나요?</h3>
					<StarContainer>
						{Array.from({ length: 5 }, (_, index) => (
							<span
								key={index}
								className={index < rating ? 'filled' : ''}
								onClick={() => handleStarClick(index)}
							>
								★
							</span>
						))}
					</StarContainer>
				</div>
				<InputField
					type="text"
					placeholder="제목을 입력하세요."
					value={postTitle}
					onChange={e => setPostTitle(e.target.value)}
				/>
				<TextArea
					placeholder="유익한 수업 리뷰는 교수님들한테 많은 도움이 됩니다. ^__^"
					rows="5"
					value={postContent}
					onChange={e => setPostContent(e.target.value)}
				/>
				<TagContainer>
					<button
						className={important === '1' ? 'active' : ''}
						onClick={() => handleTagClick('#중요도')}
					>
						<h3>#중요도</h3>
					</button>
					<button
						className={funny === '1' ? 'active' : ''}
						onClick={() => handleTagClick('#유머')}
					>
						<h3>#재미</h3>
					</button>
					<button
						className={difficulty === '1' ? 'active' : ''}
						onClick={() => handleTagClick('#난이도')}
					>
						<h3>#난이도</h3>
					</button>
				</TagContainer>
				<ButtonGroup>
					<CancelButton onClick={closeModal}>
						<h3>취소</h3>
					</CancelButton>
					<SubmitButton onClick={handleSubmit}>
						<h3>등록</h3>
					</SubmitButton>
				</ButtonGroup>
			</ModalContent>

			{showConfetti && (
				<Confetti width={window.innerWidth} height={window.innerHeight} />
			)}
		</ModalOverlay>
	);
}
