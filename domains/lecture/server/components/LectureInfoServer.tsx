import { getLectureInfo } from '@/lib';
import LectureInfo from './LectureInfo';

interface LectureInfoServerProps {
  universityName: string;
  lectureId: string;
  lectureData?: { opened: boolean };
}

export async function LectureInfoServer({
  universityName,
  lectureId,
  lectureData,
}: LectureInfoServerProps) {
  const lectureInfo = await getLectureInfo(universityName, lectureId);

  return (
    <LectureInfo
      lectureInfo={lectureInfo}
      lectureData={lectureData}
      lectureId={lectureId}
      universityName={universityName}
    />
  );
}
