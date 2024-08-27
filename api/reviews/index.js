import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SLR_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 지정한 대학의 해당 강의내역의 상세정보 GET
export const fetchReviewInfo = async (universityName, lectureId) => {
	try {
		const response = await instance.get(
			`/class?university=${universityName}&lectureId=${lectureId}`,
		);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		throw new Error(
			error.response?.data?.message || '리뷰 정보를 받아오는데 실패했습니다.',
		);
	}
};

// 지정한 대학의 해당 강의내역의 수강리뷰 정보 GET
export const fetchReviewDetail = async lectureId => {
	const response = await instance.get(`/review?lectureId=${lectureId}`);
	return response.data;
};

// 리뷰 제출 POST
export const submitReview = async (token, payload) => {
	try {
		const response = await instance.post('/review', payload, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(payload);
		return response.data;
	} catch (error) {
		throw new Error(
			error.response?.data?.message || '리뷰 제출에 실패했습니다.',
		);
	}
};

// 좋아요 제출 POST
export const submitLike = async (token, payload) => {
	try {
		const response = await instance.post('/review/like', payload, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(payload);
		return response.data;
	} catch (error) {
		throw new Error(
			error.response?.data?.message || '좋아요 등록에 실패했습니다.',
		);
	}
};

// 삭제 제출 POST
export const deleteReview = async (token, payload) => {
	try {
		const response = await instance.delete('/review', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: payload,
		});
		console.log(payload);
		return response.data;
	} catch (error) {
		console.log(error);

		throw new Error(error.response?.data?.message || '삭제를 실패했습니다.');
	}
};
