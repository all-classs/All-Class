import React, { useState } from 'react';
import { FaThumbsUp, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from './styles/ReviewCard.module.css';
import Image from 'next/image';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function ReviewCard({ review, detailLecture }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const renderStars = rating => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<FaStar key={i} className={styles.star} />);
			} else if (i - 0.5 === rating) {
				stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
			} else {
				stars.push(<FaRegStar key={i} className={styles.star} />);
			}
		}
		return stars;
	};

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.cardHeader}>
					<Image
						src="https://via.placeholder.com/40"
						alt="profile"
						width={40}
						height={40}
						className={styles.profileImage}
						priority
					/>
					<span className={styles.nickname}>{review.userNumber.nickname}</span>
					<span className={styles.createdDate}>
						{new Date(review.createdDate).toLocaleDateString('ko-KR', {
							year: 'numeric',
							month: '2-digit',
							day: '2-digit',
						})}
					</span>
				</div>
				<div className={styles.cardTitle}>
					<strong>{review.postTitle}</strong>
				</div>
				<div className={styles.cardStars}>{renderStars(review.starLating)}</div>
				<div className={styles.cardContent}>
					<p>
						{review.postContent && review.postContent.length > 100 ? (
							<>{`${review.postContent.substring(0, 100)}... `}</>
						) : (
							review.postContent
						)}
					</p>
				</div>
				<div className={styles.cardFooter}>
					<button className={styles.likeButton}>
						<FaThumbsUp /> 좋아요
					</button>
					<button onClick={openModal} className={styles.moreButton}>
						자세히보기
					</button>
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Review Modal"
				className={styles.modal}
				overlayClassName={styles.overlay}
			>
				<button onClick={closeModal} className={styles.closeButton}>
					&times;
				</button>
				<div className={styles.cardHeader}>
					<Image
						src="https://via.placeholder.com/40"
						alt="profile"
						width={40}
						height={40}
						className={styles.profileImage}
						priority
					/>
					<span className={styles.nickname}>{review.userNumber.nickname}</span>
					<span className={styles.createdDate}>
						{new Date(review.createdDate).toLocaleDateString('ko-KR', {
							year: 'numeric',
							month: '2-digit',
							day: '2-digit',
						})}
					</span>
				</div>
				<div className={styles.cardTitle}>
					<strong>{review.postTitle}</strong>
				</div>
				<div className={styles.cardStars}>{renderStars(review.starLating)}</div>
				<div className={styles.cardContent}>
					<p>{review.postContent}</p>
				</div>
				<div className={styles.cardFooter}>
					<button className={styles.likeButton}>
						<FaThumbsUp /> 좋아요
					</button>
				</div>
			</Modal>
		</div>
	);
}
