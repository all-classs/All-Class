import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles/card.module.css';

export default function Card({ lectures }) {
	const router = useRouter();

	const handleCardClick = lectureId => {
		router.push(`/review/detail/${lectureId}`);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.header__left}>
					<h1>수강목록</h1>
				</div>
				<div className={styles.header__center}>
					<form className={styles.searchForm}>
						<div className={styles.department}>
							<span className={styles.formLabel}>학과</span>
							<select className={styles.departmentSelect}>
								<option>소프트웨어학과</option>
							</select>
						</div>
						<div className={styles.grade}>
							<span className={styles.formLabel}>학년</span>
							<select className={styles.gradeSelect}>
								<option>1</option>
							</select>
						</div>
						<div className={styles.category}>
							<span className={styles.formLabel}>이수구분</span>
							<select className={styles.categorySelect}>
								<option>전공선택</option>
							</select>
						</div>
					</form>
				</div>

				<div className={styles.header__right}>
					<button type="submit" className={styles.searchButton}>
						검색
					</button>
				</div>
			</div>
			<div className={styles.cards}>
				{lectures && lectures.length > 0 ? (
					lectures.map((lecture, index) => (
						<div
							key={index}
							className={styles.card}
							onClick={() => handleCardClick(lecture.lectureId)}
						>
							<h2>{lecture.lectureName}</h2>
							<p>{lecture.lectureType}</p>
							<p>{lecture.professor} 교수</p>
							<p>{lecture.averageStarLating}</p>
						</div>
					))
				) : (
					<div className={styles.noReview}>
						<h2>현재 리뷰를 달수있는 수강이 없습니다!</h2>
					</div>
				)}
			</div>
		</div>
	);
}
