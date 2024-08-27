import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import styles from './MainPage.module.css';
import Slide from '@/components/Slide/Slide';
import Banner from '@/components/Slide/Banner';
import Card from '@/components/Card/Card';
import { fetchLectures } from '@/api/lectures/get/LecturesGet';

export default function MainLecturePage({ lectures }) {
	console.log(lectures);
	return (
		<div className={styles.mainContainer}>
			<Slide />
			<Banner />
			<Card lectures={lectures} />
		</div>
	);
}

MainLecturePage.getLayout = page => {
	return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps() {
	const { lectures } = await fetchLectures();
	return {
		props: {
			lectures,
		},
	};
}
