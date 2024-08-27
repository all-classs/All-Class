import React from 'react';
import { ReviewTopContainer, ReviewTopWrapper } from './styles/ReviewTitle';

export default function ReviewTitle({ ReviewsInfo }) {
	return (
		<ReviewTopContainer>
			<ReviewTopWrapper>
				<h1>{ReviewsInfo.data.lectureName}</h1>
			</ReviewTopWrapper>
		</ReviewTopContainer>
	);
}
