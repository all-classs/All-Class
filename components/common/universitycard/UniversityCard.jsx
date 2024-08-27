import React, { useEffect, useState } from 'react';
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

export default function UniversityCard({ isFooter }) {
	const setUniversity = useUniversityStore(state => state.setUniversity);
	const router = useRouter();
	const [universityLogos, setUniversityLogos] = useState([]);

	useEffect(() => {
		const fetchUniversityLogos = async () => {
			const response = await fetch(process.env.NEXT_PUBLIC_UNIVERSITY_NAME_URL);
			const data = await response.json();
			setUniversityLogos(data);
		};

		fetchUniversityLogos();
	}, []);

	const handleUniversityClick = (event, university) => {
		event.preventDefault();
		setUniversity(university.name, university.url);
		router.push(`/class/${convertToUrlSafe(university.name)}`);
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
