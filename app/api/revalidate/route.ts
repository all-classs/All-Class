import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { universityName, action, lectureId, userNumber } = await request.json();

    if (!universityName) {
      return NextResponse.json({ message: 'University name is required' }, { status: 400 });
    }

    switch (action) {
      case 'lecture_added':
      case 'lecture_removed':
      case 'lecture_modified':
        await revalidateTag(`lectures-${universityName}`);
        if (lectureId) {
          await revalidateTag(`lecture-info-${universityName}-${lectureId}`);
          await revalidateTag(`reviews-${lectureId}`);
        }
        break;

      case 'review_added':
      case 'review_updated':
      case 'review_deleted':
        if (lectureId) {
          await revalidateTag(`reviews-${lectureId}`);
          await revalidateTag(`lecture-info-${universityName}-${lectureId}`);
        }
        if (userNumber) {
          await revalidateTag(`my-reviews-${userNumber}`);
          await revalidateTag(`my-lectures-${userNumber}`);
        }
        break;

      case 'university_added':
        await revalidateTag('universities');
        break;

      default:
        return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
      action,
      universityName,
      lectureId,
      userNumber,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// 예시: 동서대학교 강의 정보 수정 후 호출
// fetch('https://all-class.vercel.app/api/revalidate', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     universityName: '동서대학교',
//     action: 'lecture_modified'
//   })
// })
// → https://all-class.vercel.app/동서대학교 페이지가 재생성됨
