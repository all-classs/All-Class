import { headers } from 'next/headers';
import { getMyLectures, getMyReview } from '@/lib';
import { LectureList } from './LectureList';
import type { LectureWithReviewStatus } from '../../shared/types';

async function fetchLectureData(userNumber: number): Promise<LectureWithReviewStatus[]> {
  const [lectures, reviews] = await Promise.all([
    getMyLectures(userNumber),
    getMyReview(userNumber),
  ]);

  return lectures.map((lecture) => {
    const matchingReview = reviews.find(
      (review) => review.lecture.lectureId === lecture.classNumber
    );

    return {
      ...lecture,
      hasReview: !!matchingReview,
      review: matchingReview || null,
    };
  });
}

export async function MyLectureListServer() {
  const headersList = await headers();
  const userNumber = headersList.get('x-user-number');
  const myLectures = await fetchLectureData(Number(userNumber));

  return <LectureList lectures={myLectures} />;
}
