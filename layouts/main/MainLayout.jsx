import React, { useCallback } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '@/components/common/modal/login/Login';
import Signup from '@/components/common/modal/signup/Signup';
import useLoginModalStore from '@/stores/useLoginModalStore';
import useSignupModalStore from '@/stores/useSignupModalStore';

export default function MainLayout({ children }) {
	const { isLoginModalOpen, closeLoginModal } = useLoginModalStore();
	const { isSignupModalOpen, closeSignupModal } = useSignupModalStore();

	const handleCloseLoginModal = useCallback(() => {
		closeLoginModal();
	}, [closeLoginModal]);

	const handleCloseSignupModal = useCallback(() => {
		closeSignupModal();
	}, [closeSignupModal]);

	return (
		<>
			{isLoginModalOpen && <Login onClose={handleCloseLoginModal} />}
			{isSignupModalOpen && <Signup onClose={handleCloseSignupModal} />}
			<Header />
			<>{children}</>
			<Footer />
		</>
	);
}
