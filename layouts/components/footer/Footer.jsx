import React from 'react';
import {
	FooterContainer,
	FooterWrapper,
	FirstFooter,
	SecondFooter,
	FooterLogo,
	FooterContent,
	FooterInfo,
	FooterItem,
	CustomLogo,
	TopItem,
} from './styles/Footer';
import UniversityCard from '@/components/common/universitycard/UniversityCard';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FirstFooter>
					<UniversityCard isFooter />
				</FirstFooter>
				<SecondFooter>
					<FooterContent>
						<FooterLogo>
							<CustomLogo
								src="/assets/logo/whitelogo.png"
								alt="Logo"
								width={80}
								height={60}
							/>
						</FooterLogo>
						<FooterInfo>
							<TopItem>
								<FooterItem>
									<h3>⌂ 동서대학교 뉴밀레니엄 NM246</h3>
								</FooterItem>
								<FooterItem>
									<h3>☎ TEL : 010-4233-4924</h3>
								</FooterItem>
							</TopItem>
							<FooterItem>
								<h3>
									Copyright© AI KOREA 2024 장우영. 김강민. 김정환. 박진우.
									정규환. All rights reserved.
								</h3>
							</FooterItem>
						</FooterInfo>
					</FooterContent>
				</SecondFooter>
			</FooterWrapper>
		</FooterContainer>
	);
}
