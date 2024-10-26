import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SLR_CHART_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const fetchKeyword = async lectureId => {
	try {
		const response = await instance.get(`/keyword?lectureId=${lectureId}`);

		if (!response.data) {
			return '현재 분석된 키워드가 없습니다.';
		}

		return response.data;
	} catch (error) {
		throw new Error(
			error.response?.data?.message || '키워드가 거부되었습니다.',
		);
	}
};

// 키워드 분석 post
export const keywordAnalysis = async keywordValue => {
	try {
		const response = await instance.post(
			`/completion?lectureId=${keywordValue}`,
		);
		return response;
	} catch (error) {
		throw new Error(
			error.response?.data?.message || '키워드 제출이 거부되었습니다.',
		);
	}
};
