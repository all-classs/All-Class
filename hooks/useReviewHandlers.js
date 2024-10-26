import { useState } from 'react';
import { useRouter } from 'next/router';
import { submitLike, deleteReview } from '@/api/reviews';
import useAuthStore from '@/stores/useAuthStore';

export const useReviewHandlers = () => {
	const storeUserNumber = useAuthStore(state => state.name);
	const token = useAuthStore(state => state.token);
	const router = useRouter();
	const [selectedReview, setSelectedReview] = useState(null);

	const handleLikeClick = async postId => {
		if (!token) {
			alert('로그인 이후 사용 가능한 서비스입니다!');
			return;
		}

		const payload = {
			userNumber: parseInt(storeUserNumber),
			postId,
		};

		try {
			const response = await submitLike(token, payload);
			if (response.status === 200) {
				alert('좋아요가 등록되었습니다!');
				router.reload();
			} else if (response.status === 202) {
				alert('좋아요가 취소되었습니다!');
				router.reload();
			}
		} catch (error) {
			alert('좋아요 등록 중 오류가 발생했습니다.');
		}
	};

	const handleDeleteClick = async postId => {
		if (confirm('정말로 삭제하시겠습니까?')) {
			try {
				const response = await deleteReview(token, {
					postId,
					userNumber: storeUserNumber,
				});
				alert('리뷰가 삭제되었습니다.');
				router.reload();
			} catch (error) {
				alert('리뷰 삭제 중 오류가 발생했습니다.');
			}
		}
	};

	const handleReadMoreClick = review => {
		setSelectedReview(review);
	};

	const closeModal = () => {
		setSelectedReview(null);
	};

	return {
		handleLikeClick,
		handleDeleteClick,
		handleReadMoreClick,
		closeModal,
		selectedReview,
	};
};
