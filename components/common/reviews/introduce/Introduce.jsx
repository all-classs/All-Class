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
	return (
		<IntroduceContainer>
			<IntroduceWrapper>
				<IntrocduceBox>
					<ImageWrapper>
						<ProfileImage
							src={ReviewsInfo.data.imageUrl}
							width={287}
							height={230}
							alt={ReviewsInfo.data.professor}
						/>
					</ImageWrapper>
					<ProfileTitleWrapper>
						<ProfileMainTitle>
							<IconImage
								src={ReviewsInfo.data.icon}
								width={25}
								height={25}
								alt={ReviewsInfo.data.professor}
							/>
							<ProfessorName> {ReviewsInfo.data.professor} </ProfessorName>
							<ProfessorSub>교수</ProfessorSub>
						</ProfileMainTitle>
						<Department>{ReviewsInfo.data.department}</Department>
						<Info>과목소개</Info>
						<LectureIntroduce>{ReviewsInfo.data.introduction}</LectureIntroduce>
					</ProfileTitleWrapper>
				</IntrocduceBox>
			</IntroduceWrapper>
		</IntroduceContainer>
	);
}
