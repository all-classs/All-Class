import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '@/components/common/modal/login/Login';
import useLoginModalStore from '@/stores/useLoginModalStore';

export default function MainLayout({ children }) {
	const { isLoginModalOpen, closeLoginModal } = useLoginModalStore();

	return (
		<>
			{isLoginModalOpen && <Login onClose={closeLoginModal} />}
			<Header />
			<>{children}</>
			<Footer />
		</>
	);
}
