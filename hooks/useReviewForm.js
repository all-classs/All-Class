import { useState } from 'react';
import { useRouter } from 'next/router';
import { submitReview } from '@/api/reviews';
import { checkReview } from '@/api/ai/reject';
import { bannedWords } from '@/public/data/badword';
import useAuthStore from '@/stores/useAuthStore';

const containsBannedWords = text => {
	return bannedWords.some(word => text.includes(word));
};

export default function useReviewForm({ closeModal, ReviewsInfo }) {
	const [score, setScore] = useState(0);
	const [fixedScore, setFixedScore] = useState(0);
	const [postTitle, setPostTitle] = useState('');
	const [postContent, setPostContent] = useState('');
	const [important, setImportant] = useState('0');
	const [funny, setFunny] = useState('0');
	const [difficulty, setDifficulty] = useState('0');
	const [loading, setLoading] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const router = useRouter();
	const setCoin = useAuthStore(state => state.setCoin);

	const handleStarClick = () => setFixedScore(score);
	const handleLeftHalfEnter = idx => setScore(idx + 0.5);
	const handleRightHalfEnter = idx => setScore(idx + 1);
	const handleStarLeave = () => setScore(fixedScore);

	const handleSubmit = async token => {
		if (!postTitle || !postContent || score === 0) {
			alert('모든 필드를 채워주세요.');
			return;
		}

		if (containsBannedWords(postTitle) || containsBannedWords(postContent)) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				alert('욕설이 감지되어 리뷰 제출이 거부되었습니다.');
			});
			return;
		}

		setLoading(true);

		const authInfo = JSON.parse(localStorage.getItem('auth-storage'));
		const userNumber = authInfo?.state?.name;

		const payload = {
			userNumber,
			lectureName: ReviewsInfo,
			starLating: score,
			postTitle,
			postContent,
			important,
			funny,
			difficulty,
		};

		try {
			const rejectStatus = await checkReview({ postTitle, postContent });
			if (rejectStatus.data.status !== '200') {
				setLoading(false);
				alert('욕설이 감지되어 리뷰 제출이 거부되었습니다.');
				return;
			}

			const response = await submitReview(token, payload);
			if (response.status === 401) {
				setLoading(false);
				alert('이미 작성된 수강후기가 있습니다.');
				return;
			}

			setLoading(false);
			alert('리뷰가 성공적으로 작성되었습니다.');
			setShowConfetti(true);
			setTimeout(() => {
				setShowConfetti(false);
				router.reload();
				closeModal();
			}, 5000);
		} catch (error) {
			setLoading(false);
			alert('리뷰 제출 중 오류가 발생했습니다.');
		}
	};

	return {
		score,
		fixedScore,
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
	};
}
