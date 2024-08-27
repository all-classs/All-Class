import React, { useState } from 'react';
import {
	CardContainer,
	CardWrapper,
	Cards,
	Card,
	ProfessorInfo,
	Rating,
	CardTitle,
	CardSubTitle,
	ProfessorTitle,
	ProfessorSubTitle,
	Star,
	Score,
	EmptyContainer,
	Stamp,
	StmapContainer,
} from './styles/LectureCard';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useAuthStore from '@/stores/useAuthStore';

const stampImg = {
	id: 1,
	url: '/assets/stamp/stamp.png',
};

export default function LectureCard({ lecturesInfo }) {
	const [hoveredCard, setHoveredCard] = useState(null);
	const { checkLecture } = useAuthStore();
	const router = useRouter();

	const handleCardClick = lectureId => {
		const universityName = router.query.universityName;
		router.push(
			`/class/${encodeURIComponent(universityName)}/detail/${lectureId}`,
		);
	};

	return (
		<CardContainer>
			<CardWrapper>
				<Cards>
					{lecturesInfo.data && lecturesInfo.data.length > 0 ? (
						lecturesInfo.data.map((lecture, index) => (
							<Card
								key={lecture.lectureId}
								$hovered={hoveredCard !== null}
								onMouseEnter={() => setHoveredCard(index)}
								onMouseLeave={() => setHoveredCard(null)}
								onClick={() => handleCardClick(lecture.lectureId)}
							>
								<StmapContainer>
									<CardTitle>{lecture.lectureName}</CardTitle>
									{checkLecture &&
										lecture.lectureName === '대한민국 해커톤' && (
											<Stamp
												src={stampImg.url}
												alt="도장"
												width={25}
												height={25}
											/>
										)}
								</StmapContainer>
								<CardSubTitle>전공 선택</CardSubTitle>
								<ProfessorInfo>
									<Image
										src={lecture.icon}
										alt={`${lecture.professor} 사진`}
										width={12}
										height={15}
									/>
									<ProfessorTitle>{lecture.professor}</ProfessorTitle>
									<ProfessorSubTitle>교수</ProfessorSubTitle>
								</ProfessorInfo>
								<Rating>
									<Star>⭐</Star>
									<Score>{lecture.averageStarLating}</Score>
								</Rating>
							</Card>
						))
					) : (
						<EmptyContainer>
							<h2>현재 리뷰를 달 수 있는 수강이 없습니다!</h2>
						</EmptyContainer>
					)}
				</Cards>
			</CardWrapper>
		</CardContainer>
	);
}
