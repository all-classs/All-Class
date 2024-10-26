import React from 'react';
import Confetti from 'react-confetti';
import { ClipLoader } from 'react-spinners';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import useReviewForm from '@/hooks/useReviewForm';
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

export default function ReviewModal({
	closeModal,
	ReviewsInfo,
	LectureIdInfo,
}) {
	const {
		score,
		postTitle,
		postContent,
		important,
		funny,
		difficulty,
		loading,
		showConfetti,
		setPostTitle,
		setPostContent,
		setImportant,
		setFunny,
		setDifficulty,
		handleLeftHalfEnter,
		handleRightHalfEnter,
		handleStarClick,
		handleStarLeave,
		handleSubmit,
	} = useReviewForm({ closeModal, ReviewsInfo });

	const renderStars = () =>
		Array(5)
			.fill(0)
			.map((_, idx) => (
				<div
					key={idx}
					style={{ position: 'relative', display: 'inline-block' }}
				>
					{score - Math.floor(score) === 0.5 && Math.floor(score) === idx ? (
						<FaStarHalfAlt size={32} color="gold" />
					) : idx + 1 <= score ? (
						<FaStar size={32} color="gold" />
					) : (
						<FaRegStar size={32} color="lightgray" />
					)}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '50%',
							height: '100%',
							cursor: 'pointer',
						}}
						onMouseEnter={() => handleLeftHalfEnter(idx)}
						onMouseLeave={handleStarLeave}
						onClick={handleStarClick}
					/>
					<div
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							width: '50%',
							height: '100%',
							cursor: 'pointer',
						}}
						onMouseEnter={() => handleRightHalfEnter(idx)}
						onMouseLeave={handleStarLeave}
						onClick={handleStarClick}
					/>
				</div>
			));

	return (
		<ModalOverlay onClick={closeModal}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<CloseButton onClick={closeModal}>X</CloseButton>
				<ModalHeader>
					<h2>리뷰 작성</h2>
				</ModalHeader>
				<div>
					<h3>수업은 만족하셨나요?</h3>
					<StarContainer>{renderStars()}</StarContainer>
				</div>
				<TagContainer>
					<button
						className={important === '1' ? 'active' : ''}
						onClick={() => setImportant(prev => (prev === '1' ? '0' : '1'))}
					>
						<h3>#중요도</h3>
					</button>
					<button
						className={funny === '1' ? 'active' : ''}
						onClick={() => setFunny(prev => (prev === '1' ? '0' : '1'))}
					>
						<h3>#재미</h3>
					</button>
					<button
						className={difficulty === '1' ? 'active' : ''}
						onClick={() => setDifficulty(prev => (prev === '1' ? '0' : '1'))}
					>
						<h3>#난이도</h3>
					</button>
				</TagContainer>
				<InputField
					type="text"
					placeholder="제목을 입력하세요."
					value={postTitle}
					onChange={e => setPostTitle(e.target.value)}
				/>
				<TextArea
					placeholder="리뷰 내용을 입력하세요."
					rows="5"
					value={postContent}
					onChange={e => setPostContent(e.target.value)}
				/>
				<ButtonGroup>
					<CancelButton onClick={closeModal}>
						<h3>취소</h3>
					</CancelButton>
					<SubmitButton onClick={handleSubmit}>
						<h3>등록</h3>
					</SubmitButton>
				</ButtonGroup>
			</ModalContent>

			{loading && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						zIndex: 9999,
					}}
				>
					<ClipLoader color="#ffffff" size={50} />
					<div
						style={{ marginTop: '20px', color: '#ffffff', fontSize: '18px' }}
					>
						욕설 감지중...
					</div>
				</div>
			)}

			{showConfetti && (
				<Confetti width={window.innerWidth} height={window.innerHeight} />
			)}
		</ModalOverlay>
	);
}
