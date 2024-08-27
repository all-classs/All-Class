import React from 'react';
import useUserStore from '@/stores/useUserStore';
import {
	SideBarContainer,
	SideBarWrapper,
	NavItems,
	NavItem,
	SideBarIcon,
	IconWrapper,
} from './styles/SideBar';
import { useRouter } from 'next/router';

const buttonImages = {
	book: '/assets/mypagebtn/book.png',
	curriculum: '/assets/mypagebtn/curriculum.png',
	lecture: '/assets/mypagebtn/lecture.png',
	profile: '/assets/mypagebtn/profile.png',
	review: '/assets/mypagebtn/review.png',
};

export default function SideBar() {
	const router = useRouter();
	const userKey = useUserStore(state => state.userKey);

	return (
		<SideBarContainer>
			<SideBarWrapper>
				<NavItems>
					{userKey === 'student' ? (
						<>
							<NavItem>
								<IconWrapper
									onClick={() => router.push('/dashboard/student/selectreview')}
								>
									<SideBarIcon
										src={buttonImages.book}
										alt="수업"
										width={30}
										height={30}
									/>
									<h3>수업</h3>
								</IconWrapper>
							</NavItem>
							<NavItem>
								<IconWrapper>
									<SideBarIcon
										src={buttonImages.review}
										alt="리뷰관리"
										width={30}
										height={30}
									/>
									<h3>리뷰관리</h3>
								</IconWrapper>
							</NavItem>
							<NavItem>
								<IconWrapper
									onClick={() =>
										router.push('/dashboard/student/selectcurriculum')
									}
								>
									<SideBarIcon
										src={buttonImages.curriculum}
										alt="커리큘럼"
										width={30}
										height={30}
									/>
									<h3>커리큘럼</h3>
								</IconWrapper>
							</NavItem>
							<NavItem>
								<IconWrapper>
									<SideBarIcon
										src={buttonImages.profile}
										alt="내정보"
										width={30}
										height={30}
									/>
									<h3>내정보</h3>
								</IconWrapper>
							</NavItem>
						</>
					) : (
						<>
							<NavItem>
								<IconWrapper>
									<SideBarIcon
										src={buttonImages.lecture}
										alt="강의관리"
										width={30}
										height={30}
									/>
									<h3>강의관리</h3>
								</IconWrapper>
							</NavItem>
							<NavItem>
								<IconWrapper>
									<SideBarIcon
										src={buttonImages.book}
										alt="수업"
										width={30}
										height={30}
									/>
									<h3>수업</h3>
								</IconWrapper>
							</NavItem>
						</>
					)}
				</NavItems>
			</SideBarWrapper>
		</SideBarContainer>
	);
}
