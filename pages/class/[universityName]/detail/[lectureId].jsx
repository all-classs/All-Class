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

	try {
		const [ReviewsInfo, ReviewsDetail, ChartCheck] = await Promise.all([
			fetchReviewInfo(universityName, lectureId),
			fetchReviewDetail(lectureId),
			// fetchKeyword(lectureId),
		]);
		console.log(ReviewsInfo);
		return {
			props: {
				ReviewsInfo,
				ReviewsDetail,
				// ChartCheck,
			},
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			props: {
				ReviewsInfo: null,
				ReviewsDetail: null,
				ChartCheck: null,
			},
		};
	}
}
