export async function fetchLectures() {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_LECTURE_API_URL);
		if (res.status === 200) {
			const json = await res.json();
			const lectures = json.data;
			return { lectures };
		} else {
			console.error('!!!', `${res.status}`);
			return { lectures: [] };
		}
	} catch (error) {
		console.error('!!!', error);
		return { lectures: [] };
	}
}
