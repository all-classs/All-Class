import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SLR_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 지정한 대학별 전체 강의정보 GET
export const fetchLecturesInfo = async universityName => {
	const response = await instance.get(`/class?university=${universityName}`);
	return response.data;
};

// 지정된 대학별 추천 강의 3개
export const RandomLectures = async universityName => {
	const resposne = await instance.get(
		`/class/recommend?university=${universityName}`,
	);
	return resposne.data;
};
