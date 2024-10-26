import React, { useState, useCallback } from 'react';
import {
	Overlay,
	LoginContainer,
	TabContainer,
	Tab,
	InputField,
	LoginButton as SignupButton,
	CloseButton,
} from '../login/styles/Login';
import { useRouter } from 'next/router';

export default function Signup({ onClose }) {
	const [activeTab, setActiveTab] = useState('student');
	const [name, setName] = useState('');
	const [userNumber, setUserNumber] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const router = useRouter();

	const handleTabClick = useCallback(tab => {
		setActiveTab(tab);
	}, []);

	const handleSignup = useCallback(() => {
		if (password !== confirmPassword) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}
		// 회원가입 API 호출 예정 부분
		alert(`환영합니다, ${name}님! 회원가입이 완료되었습니다.`);
		onClose();
		router.push('/');
	}, [password, confirmPassword, name, onClose, router]);

	return (
		<Overlay onClick={onClose}>
			<LoginContainer onClick={e => e.stopPropagation()}>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				<TabContainer>
					<Tab
						$active={activeTab === 'student'}
						onClick={() => handleTabClick('student')}
					>
						<h3>학생 회원가입</h3>
					</Tab>
					<Tab
						$active={activeTab === 'professor'}
						onClick={() => handleTabClick('professor')}
					>
						<h3>교수 회원가입</h3>
					</Tab>
				</TabContainer>
				<InputField
					type="text"
					placeholder="이름을 입력해주세요."
					value={name}
					onChange={e => setName(e.target.value)}
				/>
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
				<InputField
					type="password"
					placeholder="비밀번호를 다시 입력해주세요."
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
				/>
				<SignupButton onClick={handleSignup}>
					<h3>회원가입</h3>
				</SignupButton>
			</LoginContainer>
		</Overlay>
	);
}
