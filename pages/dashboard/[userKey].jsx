import React, { useEffect } from 'react';
import DashBoardLayout from '@/layouts/dashboard/DashBoardLayout';
import useUserStore from '@/stores/useUserStore';
import SelectReview from '@/components/student/selectreview/SelectReview';

export default function DashBoardPage({ userKey }) {
	const setUserKey = useUserStore(state => state.setUserKey);

	useEffect(() => {
		setUserKey(userKey);
	}, [userKey, setUserKey]);

	return <>{userKey === 'student' && <SelectReview />}</>;
}

DashBoardPage.getLayout = function getLayout(page) {
	return <DashBoardLayout>{page}</DashBoardLayout>;
};

export async function getServerSideProps(context) {
	const { userKey } = context.params;

	if (userKey !== 'student' && userKey !== 'professor') {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			userKey,
		},
	};
}
