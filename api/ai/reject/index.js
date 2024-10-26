import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SLR_AI_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 욕설감지 post
export const checkReview = async checkValue => {
	try {
		const response = await instance.post(
			`${process.env.NEXT_PUBLIC_SLR_AI_API_URL}/filter`,
			checkValue,
		);
		return response;
	} catch (error) {
		throw new Error(
			error.response?.data?.message || '리뷰 제출이 거부되었습니다.',
		);
	}
};
