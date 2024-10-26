import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import {
	HeaderContainer,
	LogoImages,
	LeftHeader,
	CenterHeader,
	RightHeader,
	RightFirstIcon,
	RightSecondIcon,
	HiddenContainer,
	StyledLink,
	CashBtn,
	CoinImage,
	CoinText,
	CoinContainer,
	RightThirdIcon,
} from './styles/Header';
import UniversityCard from '@/components/common/universitycard/UniversityCard';
import useLoginModalStore from '@/stores/useLoginModalStore';
import useSignupModalStore from '@/stores/useSignupModalStore';
import useAuthStore from '@/stores/useAuthStore';
import colorlogo from '@/public/assets/logo/colorlogo.png';
import whitelogo from '@/public/assets/logo/whitelogo.png';

const coinImageSrc = '/assets/coin/coin.png';

const Header = React.memo(function Header({ isDashboard = false }) {
	const [isHovered, setIsHovered] = useState(false);
	const { openLoginModal } = useLoginModalStore();
	const { openSignupModal } = useSignupModalStore();
	const { token, userKey, clearAuthInfo, coin } = useAuthStore();
	const router = useRouter();

	const handleLogout = useCallback(() => {
		clearAuthInfo();
		router.push('/');
	}, [clearAuthInfo, router]);

	const handleMyPageClick = useCallback(
		event => {
			if (!token) {
				event.preventDefault();
				alert('로그인 후 사용 가능합니다.');
			}
		},
		[token],
	);

	return (
		<HeaderContainer
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			$isDashboard={isDashboard}
		>
			<LeftHeader>
				<LogoImages
					src={isDashboard ? whitelogo : isHovered ? whitelogo : colorlogo}
					alt="logo"
					priority
					onClick={() => router.push('/')}
				/>
			</LeftHeader>

			<CenterHeader $isDashboard={isDashboard}>
				<h2>Busan is good!</h2>
				<HiddenContainer $isHovered={isHovered}>
					<UniversityCard />
				</HiddenContainer>
			</CenterHeader>

			<RightHeader>
				<RightFirstIcon>
					{isDashboard ? (
						<CoinContainer>
							<CoinImage src={coinImageSrc} alt="coin" width={15} height={15} />
							<CoinText>
								<h3>{coin} p</h3>
							</CoinText>
							<CashBtn>
								<h3>충전하기</h3>
							</CashBtn>
						</CoinContainer>
					) : (
						<StyledLink
							href={
								userKey === 'STUDENT'
									? '/dashboard/student'
									: '/dashboard/professor'
							}
							onClick={handleMyPageClick}
						>
							<h3>마이페이지</h3>
						</StyledLink>
					)}
				</RightFirstIcon>
				<RightSecondIcon onClick={token ? handleLogout : openLoginModal}>
					<h3>{token ? '로그아웃' : '로그인'}</h3>
				</RightSecondIcon>

				{/* {!token && (
					<RightThirdIcon onClick={openSignupModal}>
						<h3>회원가입</h3>
					</RightThirdIcon>
				)} */}
			</RightHeader>
		</HeaderContainer>
	);
});

export default Header;
