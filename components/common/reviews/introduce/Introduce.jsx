import React from 'react';
import {
	IntroduceContainer,
	IntroduceWrapper,
	IntrocduceBox,
	ImageWrapper,
	ProfileTitleWrapper,
	ProfileImage,
	IconImage,
	ProfileMainTitle,
	ProfessorName,
	ProfessorSub,
	Department,
	Info,
	LectureIntroduce,
} from './styles/Introduce';

export default function Introduce({ ReviewsInfo }) {
	const professorImage =
		ReviewsInfo?.data?.profileImage || '/default-profile-image.jpg';
	const professorIcon = ReviewsInfo?.data?.icon || '/default-icon.png';
	const professorName = ReviewsInfo?.data?.professor || '교수 이름 없음';
	const department = ReviewsInfo?.data?.department || '학과 정보 없음';
	const introduction =
		ReviewsInfo?.data?.introduction || '소개 정보가 없습니다.';

	return (
		<IntroduceContainer>
			<IntroduceWrapper>
				<IntrocduceBox>
					<ImageWrapper>
						<ProfileImage
							src={professorImage}
							width={400}
							height={350}
							alt={professorName}
						/>
					</ImageWrapper>
					<ProfileTitleWrapper>
						<ProfileMainTitle>
							<IconImage
								src={professorIcon}
								width={25}
								height={25}
								alt={professorName}
							/>
							<ProfessorName> {professorName} </ProfessorName>
							<ProfessorSub>교수</ProfessorSub>
						</ProfileMainTitle>
						<Department>{department}</Department>
						<Info>과목소개</Info>
						<LectureIntroduce>{introduction}</LectureIntroduce>
					</ProfileTitleWrapper>
				</IntrocduceBox>
			</IntroduceWrapper>
		</IntroduceContainer>
	);
}
