import React, { useState } from 'react';
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
	const [activeButton, setActiveButton] = useState('high');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleButtonClick = value => {
		setActiveButton(value);
	};

	const openModal = () => {
		const authInfo = JSON.parse(localStorage.getItem('auth-storage'));

		const { state } = authInfo || {};

		if (!state || !state.isAuthenticated) {
			alert('로그인 이후 사용 가능한 서비스입니다!');
			return;
		}

		if (state.userKey !== 'STUDENT') {
			alert('학생만 이용 가능한 서비스입니다!');
			return;
		}

		if (state.checkLecture == false) {
			alert('마이페이지에서 인증후 작성 가능한 강의입니다!');
			return;
		}

		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<SelectorContainer>
				<SelectorWrapper>
					<LeftSelector>
						<LeftSelectorWrapper>
							<h1>{ReviewsInfo.data.lectureName}</h1>
							<h2>평가 및 리뷰</h2>
						</LeftSelectorWrapper>
						<LeftSelectorUnderWrapper>
							<LeftSelectorScore>
								<h2>{ReviewsInfo.data.averageStarLating} /</h2>
								<h3>5</h3>
							</LeftSelectorScore>
							<h3>({ReviewsInfo.data.reviewCount}개)</h3>
						</LeftSelectorUnderWrapper>
					</LeftSelector>
					<CenterSelector>
						<SelectorButton
							$active={activeButton === 'high' ? 'true' : 'false'}
							onClick={() => handleButtonClick('high')}
						>
							<h3>별점 높은순</h3>
						</SelectorButton>
						<SelectorButton
							$active={activeButton === 'low' ? 'true' : 'false'}
							onClick={() => handleButtonClick('low')}
						>
							<h3>별점 낮은순</h3>
						</SelectorButton>
						<SelectorButton
							$active={activeButton === 'likes' ? 'true' : 'false'}
							onClick={() => handleButtonClick('likes')}
						>
							<h3>좋아요 많은순</h3>
						</SelectorButton>
						<SelectorButton
							$active={activeButton === 'recent' ? 'true' : 'false'}
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
				<ReviewModal
					closeModal={closeModal}
					ReviewsInfo={ReviewsInfo.data.lectureName}
					LectureIdInfo={ReviewsInfo.data.lectureId}
				/>
			)}
		</>
	);
}
