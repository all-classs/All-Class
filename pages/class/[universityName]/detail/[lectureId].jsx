import React from 'react';
import MainLayout from '@/layouts/main/MainLayout';
import { fetchReviewDetail, fetchReviewInfo } from '@/api/reviews';
import ReviewTitle from '@/components/common/reviews/reviewtitle/ReviewTitle';
import Introduce from '@/components/common/reviews/introduce/Introduce';
import Chart from '@/components/common/reviews/chart/Chart';
import Selector from '@/components/common/reviews/selector/Selector';
import ReviewCard from '@/components/common/reviews/reviewcard/ReviewCard';
import { FlexContainer } from '@/styles/FlexContainer';
import { fetchKeyword } from '@/api/ai/chart';

export default function DetailLectureandReviewPage({
	ReviewsInfo,
	ReviewsDetail,
	ChartCheck,
}) {
	return (
		<>
			<ReviewTitle ReviewsInfo={ReviewsInfo} />
			<FlexContainer>
				<Introduce ReviewsInfo={ReviewsInfo} />
				<Chart
					ReviewsInfo={ReviewsInfo}
					ReviewsDetail={ReviewsDetail}
					ChartCheck={ChartCheck}
				/>
			</FlexContainer>
			<Selector ReviewsInfo={ReviewsInfo} ReviewsDetail={ReviewsDetail} />
			<ReviewCard ReviewsInfo={ReviewsInfo} ReviewsDetail={ReviewsDetail} />
		</>
	);
}

DetailLectureandReviewPage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
	const { lectureId, universityName } = context.query;
	const ReviewsInfo = await fetchReviewInfo(universityName, lectureId);
	const ReviewsDetail = await fetchReviewDetail(lectureId);
	const ChartCheck = await fetchKeyword(lectureId);
	// console.log(ReviewsInfo);
	// console.log(ReviewsDetail);
	// console.log(ChartCheck);

	return {
		props: {
			ReviewsInfo,
			ReviewsDetail,
			ChartCheck,
		},
	};
}
