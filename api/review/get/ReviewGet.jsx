export async function fetchReview(lectureId) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_REVIEW_API_URL}/detail?lectureId=${lectureId}`,
		);
		if (res.status === 200) {
			const json = await res.json();
			const review = json.data && json.data.length > 0 ? json.data : [];
			return { review };
		} else {
			console.error(`Failed to fetch review, status code: ${res.status}`);
			return { review: [] };
		}
	} catch (error) {
		console.error('An error occurred while fetching the review:', error);
		return { review: [] };
	}
}
