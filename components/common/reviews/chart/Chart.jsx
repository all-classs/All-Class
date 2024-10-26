import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import {
	Container,
	Wrapper,
	ChartWrapper,
	RecommandWrapper,
	CharTitle,
	RecommnadTitle,
	ChartViewer,
	RecommandViewer,
} from './styles/Chart';
import useAuthStore from '@/stores/useAuthStore';
import { RandomLectures } from '@/api/lectures/index';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);

export default function Chart({ ReviewsInfo, ChartCheck }) {
	const userKey = useAuthStore(state => state.userKey);
	const [recommendedLectures, setRecommendedLectures] = useState([]);

	const universityName = ReviewsInfo.data.university;

	const score = ReviewsInfo?.data?.averageStarLating || 0;
	const important = ReviewsInfo?.data?.important || 0;
	const difficulty = ReviewsInfo?.data?.difficulty || 0;
	const funny = ReviewsInfo?.data?.funny || 0;
	const keyword = ChartCheck?.score || 0;
	const keywordLabel = ChartCheck?.keyword || '분석X';

	useEffect(() => {
		console.log(recommendedLectures);

		if (ReviewsInfo?.data?.university) {
			const fetchRecommendedLectures = async () => {
				const lectures = await RandomLectures(universityName);
				setRecommendedLectures(lectures.data);
			};
			fetchRecommendedLectures();
		}
	}, [ReviewsInfo, universityName]);

	const data = {
		labels: ['난이도', '중요도', '재미', `${keywordLabel}(AI분석)`, '평점'],
		datasets: [
			{
				label: '점수',
				data: [difficulty, important, funny, keyword, score],
				backgroundColor: 'rgba(255, 206, 86, 0.2)',
				borderColor: 'rgba(255, 206, 86, 1)',
				borderWidth: 1,
			},
		],
	};

	const options = {
		scale: {
			ticks: { beginAtZero: true, max: 5 },
			pointLabels: { fontSize: 16 },
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<Container>
			<Wrapper>
				<ChartWrapper>
					<CharTitle>
						<h1>수업</h1>
						<h2>에는 이런게 있어요!</h2>
					</CharTitle>
					<ChartViewer
						style={{
							filter: userKey === 'PROFESSOR' ? 'blur(4.5px)' : 'none',
						}}
					>
						<Radar data={data} options={options} />
					</ChartViewer>
				</ChartWrapper>
				<RecommandWrapper>
					<RecommnadTitle>
						<h1>추천</h1>
						<h2>수업</h2>
					</RecommnadTitle>
					<RecommandViewer
						style={{
							filter: userKey === 'PROFESSOR' ? 'blur(4.5px)' : 'none',
						}}
					>
						<ul>
							{recommendedLectures.map((lecture, index) => (
								<li key={index}>
									<h3>{`${index + 1}. ${lecture.lectureName}`}</h3>
								</li>
							))}
						</ul>
					</RecommandViewer>
				</RecommandWrapper>
			</Wrapper>
		</Container>
	);
}
