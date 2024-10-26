import React from 'react';
import { ReviewTopContainer, ReviewTopWrapper } from './styles/ReviewTitle';

export default function ReviewTitle({ ReviewsInfo }) {
	const lectureName =
		ReviewsInfo?.data?.lectureName || '강의 이름을 불러올 수 없습니다.';

	return (
		<ReviewTopContainer>
			<ReviewTopWrapper>
				<h1>{lectureName}</h1>
			</ReviewTopWrapper>
		</ReviewTopContainer>
	);
}
