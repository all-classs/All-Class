import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useUniversityStore from '@/stores/useUniversityStore';
import {
	UniversityCardContainer,
	UniversityCards,
	Cards,
	Card,
	StyledImage,
} from './styles/UniversityCard';

const convertToUrlSafe = name => {
	return encodeURIComponent(name.replace(/\s+/g, '-'));
};

const universityLogos = [
	{ id: 1, url: '/assets/universitylogo/1.jpg', name: '부산외국어대학교' },
	{ id: 2, url: '/assets/universitylogo/2.png', name: '동아대학교' },
	{ id: 3, url: '/assets/universitylogo/3.jpg', name: '경성대학교' },
	{ id: 4, url: '/assets/universitylogo/4.png', name: '부산대학교' },
	{ id: 5, url: '/assets/universitylogo/5.jpg', name: '동서대학교' },
	{ id: 6, url: '/assets/universitylogo/6.jpeg', name: '경남정보대학교' },
	{ id: 7, url: '/assets/universitylogo/7.jpg', name: '동명대학교' },
	{ id: 8, url: '/assets/universitylogo/8.png', name: '동의과학대학교' },
	{ id: 9, url: '/assets/universitylogo/9.jpg', name: '동의대학교' },
	{ id: 10, url: '/assets/universitylogo/10.png', name: '부경대학교' },
	{ id: 11, url: '/assets/universitylogo/11.png', name: '부산가톨릭대학교' },
	{ id: 12, url: '/assets/universitylogo/12.svg', name: '부산경상대학교' },
	{ id: 13, url: '/assets/universitylogo/13.png', name: '신라대학교' },
	{ id: 14, url: '/assets/universitylogo/14.png', name: '한국해양대학교' },
];

export default function UniversityCard({ isFooter }) {
	const setUniversity = useUniversityStore(state => state.setUniversity);
	const router = useRouter();

	const handleUniversityClick = (event, university) => {
		event.preventDefault();
		setUniversity(university.name, university.url);
		router.push(`/class/${convertToUrlSafe(university.name)}`, undefined, {
			scroll: false,
		});
	};

	return (
		<UniversityCardContainer>
			<UniversityCards $isFooter={isFooter}>
				{universityLogos.map(university => (
					<Cards key={university.id} $isFooter={isFooter}>
						<Link href={`/class/${convertToUrlSafe(university.name)}`} passHref>
							<Card onClick={event => handleUniversityClick(event, university)}>
								<StyledImage
									src={university.url}
									alt={university.name}
									width={100}
									height={50}
								/>
							</Card>
						</Link>
					</Cards>
				))}
			</UniversityCards>
		</UniversityCardContainer>
	);
}
