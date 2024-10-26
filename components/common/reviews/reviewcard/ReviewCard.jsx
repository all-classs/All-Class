import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
import { useReviewHandlers } from '@/hooks/useReviewHandlers';
import useReviewStateStore from '@/stores/useReviewStateStore';
import { fetchReviewDetail } from '@/api/reviews';
import useAuthStore from '@/stores/useAuthStore';

export default function ReviewCard({ ReviewsDetail, ReviewsInfo }) {
	const { sortOption } = useReviewStateStore();
	const [reviews, setReviews] = useState(ReviewsDetail);

	const {
		handleLikeClick,
		handleDeleteClick,
		handleReadMoreClick,
		closeModal,
		selectedReview,
	} = useReviewHandlers();
	const storeUserNumbers = useAuthStore(state => state.name);

	const lectureId = ReviewsInfo?.data?.lectureId;

	useEffect(() => {
		const fetchSortedReviews = async () => {
			const queryParams = {};

			if (sortOption === 'high') queryParams.high = true;
			if (sortOption === 'low') queryParams.lowness = true;
			if (sortOption === 'likes') queryParams.likes = true;
			if (sortOption === 'recent') queryParams.recent = true;

			try {
				const data = await fetchReviewDetail(lectureId, queryParams);
				setReviews(data);
			} catch (error) {
				console.error('데이터 가져오기 오류:', error);
			}
		};

		fetchSortedReviews();
	}, [sortOption, lectureId]);

	return (
		<ReviewCardContainer>
			<ReviewCardWrapper>
				{reviews?.data && reviews.data.length > 0 ? (
					<GridContainer>
						{reviews.data.map(review => (
							<GridItem key={review.postId}>
								<UserInfo>
									<Image
										src={review.user?.profile || '/default-profile.png'}
										alt={`${review.user?.username || '유저'}의 프로필 사진`}
										width={40}
										height={40}
										style={{ borderRadius: '50%' }}
									/>
									<div>
										<h2>{review.user?.username || '익명 사용자'}</h2>
										<h3>{review.createDate}</h3>
										{storeUserNumbers == review.user?.userNumber && (
											<TrashButton
												onClick={() => handleDeleteClick(review.postId)}
											>
												<FaTrash />
											</TrashButton>
										)}
									</div>
								</UserInfo>
								<StarContainer>
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
								src={selectedReview.user?.profile || '/default-profile.png'}
								alt={`${selectedReview.user?.username || '유저'}의 프로필 사진`}
								width={60}
								height={60}
								style={{ borderRadius: '50%' }}
							/>
							<div>
								<h2>{selectedReview.user?.username || '익명 사용자'}</h2>
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
