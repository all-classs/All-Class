import React from 'react';
import DashBoardLayout from '@/layouts/dashboard/DashBoardLayout';
import SelectCurriculum from '@/components/student/selectcurriculum/SelectCurriculum';

export default function SelectCurriculumPage() {
	return (
		<>
			<SelectCurriculum />
		</>
	);
}

SelectCurriculumPage.getLayout = function getLayout(page) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};
