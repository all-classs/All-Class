import TopViewer from '@/components/common/onboarding/TopViewer';
import Header from '@/layouts/components/header/Header';
import styled from 'styled-components';
import Login from '@/components/common/modal/login/Login';
import Signup from '@/components/common/modal/signup/Signup';
import useLoginModalStore from '@/stores/useLoginModalStore';
import useSignupModalStore from '@/stores/useSignupModalStore';
import MiddleViewer from '@/components/common/onboarding/MiddleViewer';

export default function Home() {
	const { isLoginModalOpen, closeLoginModal } = useLoginModalStore();
	const { isSignupModalOpen, closeSignupModal } = useSignupModalStore();

	return (
		<Temporarylayout>
			{isLoginModalOpen && <Login onClose={closeLoginModal} />}
			{isSignupModalOpen && <Signup onClose={closeSignupModal} />}
			<Header />
			<TopViewer />
			{/* <MiddleViewer /> */}
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
