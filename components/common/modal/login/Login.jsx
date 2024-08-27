import React, { useState, useEffect } from 'react';
import {
	Overlay,
	LoginContainer,
	TabContainer,
	Tab,
	InputField,
	LoginButton,
	CloseButton,
} from './styles/Login';
import { fetchLogin } from '@/api/auth';
import useLoginModalStore from '@/stores/useLoginModalStore';
import useAuthStore from '@/stores/useAuthStore';

export default function Login({ onClose }) {
	const [activeTab, setActiveTab] = useState('student');
	const [userNumber, setUserNumber] = useState('');
	const [password, setPassword] = useState('');
	const [isMounted, setIsMounted] = useState(false);
	const { closeLoginModal } = useLoginModalStore();
	const { setAuthInfo, clearAuthInfo } = useAuthStore();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleTabClick = tab => {
		setActiveTab(tab);
	};

	const handleLogin = async () => {
		try {
			const data = await fetchLogin(userNumber, password);
			const { name, token, userKey, checkLecture, coin } = data.data; // checkLecture 및 coin 값 받아옴
			clearAuthInfo();
			setAuthInfo(name, token, userKey, checkLecture, coin); // checkLecture 및 coin 값 설정
			alert(`환영합니다. ${name}님`);
			closeLoginModal();
		} catch (error) {
			alert('로그인 실패');
		}
	};

	if (!isMounted) {
		return null;
	}

	return (
		<Overlay onClick={onClose}>
			<LoginContainer onClick={e => e.stopPropagation()}>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				<TabContainer>
					<Tab
						$active={activeTab === 'student'}
						onClick={() => handleTabClick('student')}
					>
						<h3>학생 로그인</h3>
					</Tab>
					<Tab
						$active={activeTab === 'professor'}
						onClick={() => handleTabClick('professor')}
					>
						<h3>교수 로그인</h3>
					</Tab>
				</TabContainer>
				<InputField
					type="text"
					placeholder="학번을 입력해주세요."
					value={userNumber}
					onChange={e => setUserNumber(e.target.value)}
				/>
				<InputField
					type="password"
					placeholder="비밀번호를 입력해주세요."
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<LoginButton onClick={handleLogin}>
					<h3>로그인</h3>
				</LoginButton>
			</LoginContainer>
		</Overlay>
	);
}
