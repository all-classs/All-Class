import React, { useState } from 'react';
import Image from 'next/image';
import {
	Container,
	ContentWrapper,
	Title,
	Tabs,
	TabButton,
	SectionTitle,
	CurriculumList,
	CurriculumCard,
	CurriculumImageWrapper,
	CurriculumName,
	CurriculumCategory,
	CurriculumPoints,
	CategorySelect,
	MyCurriculumContainer,
} from './styles/curriculums';

export default function SelectCurriculum() {
	const [selectedTab, setSelectedTab] = useState('purchase'); // 'purchase' or 'myCurriculum'
	const [selectedCategory, setSelectedCategory] = useState('software');

	const recommendedCurriculums = [
		{
			id: 1,
			name: '김*지 학생의 레전드 커리큘럼',
			category: '단과',
			points: 2600,
		},
		{
			id: 2,
			name: '장*호 학생의 레전드 커리큘럼',
			category: '라임',
			points: 2600,
		},
		{
			id: 3,
			name: '정*수 학생의 레전드 커리큘럼',
			category: '단과',
			points: 2600,
		},
		{
			id: 4,
			name: '장*영 학생의 레전드 커리큘럼',
			category: '현대',
			points: 2600,
		},
	];

	const allCurriculums = [
		{
			id: 1,
			name: '김*지 학생의 레전드 커리큘럼',
			category: '단과',
			points: 2600,
		},
		{
			id: 2,
			name: '장*호 학생의 레전드 커리큘럼',
			category: '라임',
			points: 2600,
		},
		{
			id: 3,
			name: '정*수 학생의 레전드 커리큘럼',
			category: '단과',
			points: 2600,
		},
		{
			id: 4,
			name: '장*영 학생의 레전드 커리큘럼',
			category: '현대',
			points: 2600,
		},
	];

	return (
		<Container>
			<ContentWrapper>
				<Title>커리큘럼</Title>
				<Tabs>
					<TabButton
						isActive={selectedTab === 'purchase'}
						onClick={() => setSelectedTab('purchase')}
					>
						커리큘럼 구매
					</TabButton>
					<TabButton
						isActive={selectedTab === 'myCurriculum'}
						onClick={() => setSelectedTab('myCurriculum')}
					>
						내 커리큘럼
					</TabButton>
				</Tabs>

				{selectedTab === 'purchase' && (
					<>
						<SectionTitle>추천 커리큘럼</SectionTitle>
						<CurriculumList>
							{recommendedCurriculums.map(curriculum => (
								<CurriculumCard key={curriculum.id}>
									<CurriculumImageWrapper>
										<Image
											src="/placeholder.png"
											alt="student avatar"
											layout="fill"
											objectFit="cover"
											style={{ borderRadius: '50%' }}
										/>
									</CurriculumImageWrapper>
									<CurriculumName>{curriculum.name}</CurriculumName>
									<CurriculumCategory>
										{curriculum.category} 과정
									</CurriculumCategory>
									<CurriculumPoints>
										{curriculum.points} 포인트
									</CurriculumPoints>
								</CurriculumCard>
							))}
						</CurriculumList>

						<SectionTitle>모든 커리큘럼</SectionTitle>
						<CategorySelect>
							<label htmlFor="category-select">학과: </label>
							<select
								id="category-select"
								value={selectedCategory}
								onChange={e => setSelectedCategory(e.target.value)}
							>
								<option value="software">소프트웨어학과</option>
								{/* 추가 학과 옵션을 여기에 추가하세요 */}
							</select>
						</CategorySelect>
						<CurriculumList>
							{allCurriculums.map(curriculum => (
								<CurriculumCard key={curriculum.id}>
									<CurriculumImageWrapper>
										<Image
											src="/placeholder.png"
											alt="student avatar"
											layout="fill"
											objectFit="cover"
											style={{ borderRadius: '50%' }}
										/>
									</CurriculumImageWrapper>
									<CurriculumName>{curriculum.name}</CurriculumName>
									<CurriculumCategory>
										{curriculum.category} 과정
									</CurriculumCategory>
									<CurriculumPoints>
										{curriculum.points} 포인트
									</CurriculumPoints>
								</CurriculumCard>
							))}
						</CurriculumList>
					</>
				)}

				{selectedTab === 'myCurriculum' && (
					<MyCurriculumContainer>
						<SectionTitle>내 커리큘럼</SectionTitle>
						{/* 내 커리큘럼 콘텐츠를 여기에 추가하세요 */}
					</MyCurriculumContainer>
				)}
			</ContentWrapper>
		</Container>
	);
}
