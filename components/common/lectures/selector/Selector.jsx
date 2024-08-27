import React from 'react';
import useUniversityStore from '@/stores/useUniversityStore';
import {
	SelectorContainer,
	SelectorWrapper,
	LeftHeader,
	CenterHeader,
	RightHeader,
	SearchForm,
	Department,
	Grade,
	Category,
	CustomLogo,
	LogoContainer,
	LabelSpan,
	StyledSelect,
} from './styles/Selector';

export default function Selector() {
	const { universityUrl, universityName } = useUniversityStore();

	return (
		<SelectorContainer>
			<SelectorWrapper>
				<LeftHeader>
					<h2>수강목록</h2>
				</LeftHeader>
				<CenterHeader>
					<SearchForm>
						<Department>
							<LabelSpan>학과</LabelSpan>
							<StyledSelect>
								<option>소프트웨어학과</option>
							</StyledSelect>
						</Department>
						<Grade>
							<LabelSpan>학년</LabelSpan>
							<StyledSelect>
								<option>1</option>
							</StyledSelect>
						</Grade>
						<Category>
							<LabelSpan>이수구분</LabelSpan>
							<StyledSelect>
								<option>전공선택</option>
							</StyledSelect>
						</Category>
					</SearchForm>
				</CenterHeader>
				<RightHeader>
					<LogoContainer>
						{universityUrl ? (
							<CustomLogo
								src={universityUrl}
								alt={universityName}
								width={100}
								height={100}
								$custom
							/>
						) : (
							<p>로고 없음</p>
						)}
					</LogoContainer>
				</RightHeader>
			</SelectorWrapper>
		</SelectorContainer>
	);
}
