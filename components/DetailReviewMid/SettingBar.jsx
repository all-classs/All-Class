import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './styles/settingBar.module.css';

export default function SettingBar({ review, detailLecture }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		postTitle: '',
		postContent: '',
		starLating: 0,
		lecName: detailLecture.lectureName, // detailLecture에서 가져옴
		userNumber: 20191585,
	});
	const [getCheckPassed, setGetCheckPassed] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
		setGetCheckPassed(false); // 모달을 열 때마다 상태 초기화
		console.log('Modal opened, getCheckPassed set to false');
	};

	const closeModal = () => setIsModalOpen(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleStarRating = rating => {
		setFormData({
			...formData,
			starLating: rating,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const flaskUrl = 'http://3.34.53.155:5000/gg';
		const apiUrl = process.env.NEXT_PUBLIC_REVIEW_API_URL;
		const body = JSON.stringify(formData);

		try {
			if (!getCheckPassed) {
				// 상태가 false일 때만 GET 요청을 보냅니다.
				console.log('Sending GET request to:', flaskUrl);
				const response = await fetch(flaskUrl, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				console.log({ data: formData.postContent });
				console.log('Response status:', response.status);
				console.log('Response status text:', response.statusText);

				if (!response.ok) {
					throw new Error(
						`Network response was not ok: ${response.statusText}`,
					);
				}

				const responseData = await response.json();
				console.log('Response data:', responseData);

				if (response.status === 200) {
					alert('부적절한 언어가 감지되었습니다. 리뷰를 다시 작성해주세요!');
					console.log('Get check passed will be set to true in 5 seconds');
					setTimeout(() => {
						setGetCheckPassed(true);
						console.log('Get check passed set to true');
					}, 5000);
				} else {
					console.log('Get check passed will be set to true in 5 seconds');
					setTimeout(() => {
						setGetCheckPassed(true);
						console.log('Get check passed set to true');
					}, 5000);
					alert(
						'부적절한 언어가 감지되지 않았습니다. 다시 등록 버튼을 눌러주세요.',
					);
				}
			} else {
				// 상태가 true일 때는 POST 요청을 보냅니다.
				console.log('Sending POST request to:', apiUrl);
				const postResponse = await fetch(apiUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: body,
				});

				console.log('Post response status:', postResponse.status);
				console.log('Post response status text:', postResponse.statusText);

				if (!postResponse.ok) {
					throw new Error(
						`Network response was not ok: ${postResponse.statusText}`,
					);
				}

				const postResponseData = await postResponse.json();
				console.log('Post response data:', postResponseData);
				if (postResponseData.status === 200) {
					alert('수강후기 작성 완료!');
					// 모든 상태를 초기화하고 페이지를 새로고침합니다.
					setFormData({
						postTitle: '',
						postContent: '',
						starLating: 0,
						lecName: detailLecture.lectureName,
						userNumber: 0,
					});
					setGetCheckPassed(false);
					closeModal();
					window.location.reload();
				}
			}
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
		}
	};

	return (
		<div className={styles.reviewWrapper}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<h1>
						<span>{detailLecture.lectureName}</span>
						<span className={styles.headerTitle}> 평가 및 리뷰</span>
					</h1>
					<div className={styles.headerInfo}>
						<p>
							<span className={styles.averageStars}>
								{detailLecture.averageStarLating}
							</span>{' '}
							<span className={styles.totalReviews}>/ 5</span>
						</p>
						<p>{detailLecture.reviewCount}개의 수강 리뷰</p>
					</div>
				</div>
				<div className={styles.headerCenter}>
					<input type="checkbox" />
					<label>최신순</label>
					<input type="checkbox" />
					<label>별점 높은순</label>
					<input type="checkbox" />
					<label>별점 낮은순</label>
					<input type="checkbox" />
					<label>좋아요 많은순</label>
				</div>
				<div className={styles.headerRight}>
					<button className={styles.reviewBtn} onClick={openModal}>
						글쓰기
					</button>
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				className={styles.modal}
				overlayClassName={styles.overlay}
			>
				<div className={styles.modalContainer}>
					<div className={styles.titleContainer}>
						<h2 className={styles.modalTitle}>리뷰 작성</h2>
					</div>
					<form onSubmit={handleSubmit} className={styles.modalContainer}>
						<div className={styles.starContainer}>
							<div className={styles.starRating}>
								<label className={styles.starContent}>
									수업은 만족하셨나요?
								</label>
								{[1, 2, 3, 4, 5].map(star => (
									<span
										key={star}
										className={
											formData.starLating >= star
												? styles.starSelected
												: styles.star
										}
										onClick={() => handleStarRating(star)}
									>
										★
									</span>
								))}
							</div>
						</div>
						<span className={styles.contentTitle}>제목 </span>
						<input
							name="postTitle"
							value={formData.postTitle}
							onChange={handleChange}
							className={styles.inputTitle}
						/>
						<textarea
							className={styles.textArea}
							name="postContent"
							value={formData.postContent}
							onChange={handleChange}
							placeholder="유익한 수업 리뷰는 교수님들한테 많은 도움이 됩니다. ^__^"
						/>
						<div className={styles.buttons}>
							<button type="button" onClick={closeModal}>
								취소
							</button>
							<button type="submit">등록</button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	);
}
