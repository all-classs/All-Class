import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SLR_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 로그인 api post
export const fetchLogin = async (userNumber, password) => {
	try {
		const response = await instance.post('/signin', {
			userNumber,
			password,
		});
		return response.data;
	} catch (error) {
		console.error('로그인 실패:', error);
		throw error;
	}
};

// 회원가입 api post
export const fetchSignup = async () => {
	try {
		const response = await instance.post('/signup', {});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
