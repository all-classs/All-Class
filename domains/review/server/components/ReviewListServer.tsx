import { getLectureInfo } from '@/lib';
import DynamicReviewList from '../../client/components/DynamicReviewList';

interface ReviewListServerProps {
  lectureId: string;
  universityName: string;
}

export async function ReviewListServer({ lectureId, universityName }: ReviewListServerProps) {
  const lectureInfo = await getLectureInfo(universityName, lectureId);
  const lectureName = lectureInfo.success ? lectureInfo.lectureInfo?.lectureName : '';

  return <DynamicReviewList lectureId={lectureId} lectureName={lectureName} />;
}
