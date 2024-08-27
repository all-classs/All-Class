import TopViewer from '@/components/common/onboarding/TopViewer';
import Header from '@/layouts/components/header/Header';
import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
	return (
		<Temporarylayout>
			<Header />
			<TopViewer />
		</Temporarylayout>
	);
}

const Temporarylayout = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
`;
