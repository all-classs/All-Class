import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/layouts/main/MainLayout';
import Slide from '@/components/common/lectures/slide/Slide';
import Banner from '@/components/common/lectures/banner/Banner';
import Selector from '@/components/common/lectures/selector/Selector';
import LectureCard from '@/components/common/lectures/lecturecard/LectureCard';
import useUniversityStore from '@/stores/useUniversityStore';
import { fetchLecturesInfo } from '@/api/lectures';

export default function MainLecturePage({ universityLogos, lecturesInfo }) {
	const setUniversity = useUniversityStore(state => state.setUniversity);
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady || !universityLogos || !router.query.universityName)
			return;

		const universityNameFromPath = decodeURIComponent(
			router.query.universityName,
		);
		const matchedUniversity = universityLogos.find(
			uni => uni.name === universityNameFromPath,
		);

		if (matchedUniversity) {
			setUniversity(matchedUniversity.name, matchedUniversity.url);
		} else {
			console.warn(
				'라우터와 매칭되는 로고가 없습니다.',
				universityNameFromPath,
			);
		}
	}, [
		router.isReady,
		router.query.universityName,
		universityLogos,
		setUniversity,
	]);

	return (
		<>
			<Slide />
			<Banner />
			<Selector />
			<LectureCard lecturesInfo={lecturesInfo} />
		</>
	);
}

MainLecturePage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
	const { universityName } = context.params;
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/universitylogos`,
	);
	const universityLogos = await res.json();

	const matchedUniversity = universityLogos.find(
		uni => uni.name === universityName,
	);

	if (!matchedUniversity) {
		return {
			notFound: true,
		};
	}

	const lecturesInfo = await fetchLecturesInfo(universityName);
	console.log(universityName);

	return {
		props: {
			universityName,
			universityLogos,
			lecturesInfo,
		},
	};
}
