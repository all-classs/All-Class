export default async function LectureDetailPage({
  params,
}: {
  params: Promise<{ lectureId: string; universityName: string }>;
}) {
  const { lectureId, universityName } = await params;

  return (
    <div>
      LectureDetailPage {lectureId} {universityName}
    </div>
  );
}
