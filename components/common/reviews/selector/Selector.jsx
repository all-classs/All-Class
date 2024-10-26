import React, { useEffect, useState } from 'react';
import useReviewStateStore from '@/stores/useReviewStateStore';
import {
	CenterSelector,
	LeftSelector,
	LeftSelectorScore,
	LeftSelectorUnderWrapper,
	LeftSelectorWrapper,
	Rightselector,
	SelectorContainer,
	SelectorWrapper,
	SelectorButton,
	ReviewButton,
} from './styles/Selector';
import { FaPen } from 'react-icons/fa';
import ReviewModal from '@/components/common/modal/writereview/ReviewModal';

export default function Selector({ ReviewsInfo }) {
	const { sortOption, setSortOption } = useReviewStateStore();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [authInfo, setAuthInfo] = useState(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedAuthInfo = localStorage.getItem('auth-storage');
			if (storedAuthInfo) {
				setAuthInfo(JSON.parse(storedAuthInfo));
			}
		}
	}, []);

	const handleButtonClick = value => {
		setSortOption(value);
	};

	const openModal = () => {
		const { state } = authInfo || {};

		if (!state || !state.isAuthenticated) {
			alert('로그인 이후 사용 가능한 서비스입니다!');
			return;
		}

		if (state.userKey !== 'STUDENT') {
			alert('학생만 이용 가능한 서비스입니다!');
			return;
		}

		// if (state.checkLecture === false) {
		// 	alert('마이페이지에서 인증후 작성 가능한 강의입니다!');
		// 	return;
		// }

		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const lectureName = ReviewsInfo?.data?.lectureName || '강의명 없음';
	const averageStarLating = ReviewsInfo?.data?.averageStarLating || 0;
	const reviewCount = ReviewsInfo?.data?.reviewCount || 0;

	return (
		<>
			<SelectorContainer>
				<SelectorWrapper>
					<LeftSelector>
						<LeftSelectorWrapper>
							<h1>{lectureName}</h1>
							<h2>평가 및 리뷰</h2>
						</LeftSelectorWrapper>
						<LeftSelectorUnderWrapper>
							<LeftSelectorScore>
								<h2>{averageStarLating} /</h2>
								<h3>5</h3>
							</LeftSelectorScore>
							<h3>({reviewCount}개)</h3>
						</LeftSelectorUnderWrapper>
					</LeftSelector>

					<CenterSelector>
						<SelectorButton
							$active={sortOption === 'high' ? 'true' : 'false'}
							onClick={() => handleButtonClick('high')}
						>
							<h3>별점 높은순</h3>
						</SelectorButton>
						<SelectorButton
							$active={sortOption === 'low' ? 'true' : 'false'}
							onClick={() => handleButtonClick('low')}
						>
							<h3>별점 낮은순</h3>
						</SelectorButton>
						<SelectorButton
							$active={sortOption === 'likes' ? 'true' : 'false'}
							onClick={() => handleButtonClick('likes')}
						>
							<h3>좋아요 많은순</h3>
						</SelectorButton>
						<SelectorButton
							$active={sortOption === 'recent' ? 'true' : 'false'}
							onClick={() => handleButtonClick('recent')}
						>
							<h3>최신순</h3>
						</SelectorButton>
					</CenterSelector>

					<Rightselector>
						<ReviewButton onClick={openModal}>
							<FaPen />
							<h3>리뷰 작성</h3>
						</ReviewButton>
					</Rightselector>
				</SelectorWrapper>
			</SelectorContainer>

			{isModalOpen && (
				<ReviewModal closeModal={closeModal} ReviewsInfo={lectureName} />
			)}
		</>
	);
}
