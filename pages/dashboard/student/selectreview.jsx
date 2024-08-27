import React from 'react';
import SelectReview from '@/components/student/selectreview/SelectReview';
import DashBoardLayout from '@/layouts/dashboard/DashBoardLayout';

export default function SelectReviewPage() {
	return (
		<>
			<SelectReview />
		</>
	);
}

SelectReviewPage.getLayout = function getLayout(page) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};
