import React, { useState } from 'react';
import Image from 'next/image';
import { submitLike, deleteReview } from '@/api/reviews';
import { FaTrash, FaStar } from 'react-icons/fa';
import {
	ReviewCardContainer,
	ReviewCardWrapper,
	GridContainer,
	GridItem,
	UserInfo,
	ReviewContent,
	LikeButton,
	ReadMoreButton,
	ModalContainer,
	ModalContent,
	CloseButton,
	ButtonContainer,
	ModalUserInfo,
	TrashButton,
	NoReview,
	StarContainer,
	HiddenContent,
} from './styles/ReviewCard';
import { useRouter } from 'next/router';
import useAuthStore from '@/stores/useAuthStore';

export default function ReviewCard({ ReviewsDetail }) {
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
				console.log(response);
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
				console.log(error);
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

	return (
		<ReviewCardContainer>
			<ReviewCardWrapper>
				{ReviewsDetail.data && ReviewsDetail.data.length > 0 ? (
					<GridContainer>
						{ReviewsDetail.data.map(review => (
							<GridItem key={review.postId}>
								<UserInfo>
									<Image
										src={review.user.profile}
										alt={`${review.user.username}의 프로필 사진`}
										width={40}
										height={40}
										style={{ borderRadius: '50%' }}
									/>
									<div>
										<h2>{review.user.username}</h2>
										<h3>{review.createDate}</h3>
										{storeUserNumber == review.user.userNumber && (
											<TrashButton
												onClick={() => handleDeleteClick(review.postId)}
											>
												<FaTrash />
											</TrashButton>
										)}
									</div>
								</UserInfo>
								<StarContainer>
									{/* StarRating을 인라인으로 구현 */}
									{[...Array(5)].map((_, i) => (
										<FaStar
											key={i}
											className={i < review.starLating ? 'filled' : 'empty'}
										/>
									))}
								</StarContainer>
								<ReviewContent>
									<h1>{review.postTitle}</h1>
									<h2 className="limited">{review.postContent}</h2>
								</ReviewContent>
								<ButtonContainer>
									<LikeButton>
										<h3 onClick={() => handleLikeClick(review.postId)}>
											👍 좋아요 {review.likes}
										</h3>
									</LikeButton>
									<ReadMoreButton onClick={() => handleReadMoreClick(review)}>
										<h3>자세히 보기</h3>
									</ReadMoreButton>
								</ButtonContainer>
							</GridItem>
						))}
					</GridContainer>
				) : (
					<NoReview>
						<h1>현재 리뷰가 없습니다. 리뷰의 첫번째 주인공이 되보세요!</h1>
					</NoReview>
				)}
			</ReviewCardWrapper>

			{selectedReview && (
				<ModalContainer>
					<ModalContent>
						<CloseButton onClick={closeModal}>X</CloseButton>
						<ModalUserInfo>
							<Image
								src={selectedReview.user.profile}
								alt={`${selectedReview.user.username}의 프로필 사진`}
								width={60}
								height={60}
								style={{ borderRadius: '50%' }}
							/>
							<div>
								<h2>{selectedReview.user.username}</h2>
								<h3>{selectedReview.createDate}</h3>
							</div>
						</ModalUserInfo>
						<HiddenContent>
							<h1>{selectedReview.postTitle}</h1>
							<h2>{selectedReview.postContent}</h2>
						</HiddenContent>
					</ModalContent>
				</ModalContainer>
			)}
		</ReviewCardContainer>
	);
}
