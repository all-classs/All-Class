export async function fetchLecture(lectureId) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_LECTURE_API_URL}/detail?lectureId=${lectureId}`,
		);
		if (res.status === 200) {
			const json = await res.json();
			const lecture = json.data;
			return { lecture };
		} else {
			console.error(`Failed to fetch lecture, status code: ${res.status}`);
			return { lecture: null };
		}
	} catch (error) {
		console.error('An error occurred while fetching the lecture:', error);
		return { lecture: null };
	}
}
