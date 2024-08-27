import React from 'react';
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

	console.log(ChartCheck);
	console.log(ReviewsInfo);

	const score = ReviewsInfo.data.averageStarLating;
	const important = ReviewsInfo.data.important;
	const difficulty = ReviewsInfo.data.difficulty;
	const funny = ReviewsInfo.data.funny;
	const keyword = ChartCheck.score;

	console.log('차트값:', difficulty, important, funny, keyword, score);

	const data = {
		labels: [
			'난이도',
			'중요도',
			'재미',
			`${ChartCheck.keyword}(AI분석)`,
			'평점',
		],
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
							<li>
								<h3>1. 소프트웨어 분석 및 설계</h3>
							</li>
							<li>
								<h3>2. 아이데이션</h3>
							</li>
							<li>
								<h3>3. 소프트웨어공학</h3>
							</li>
						</ul>
					</RecommandViewer>
				</RecommandWrapper>
			</Wrapper>
		</Container>
	);
}
