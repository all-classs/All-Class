// import { revalidateTag } from 'next/cache';
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const { universityName, action, secret } = await request.json();

//     // 보안을 위한 secret 키 검증
//     if (secret !== process.env.REVALIDATION_SECRET) {
//       return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
//     }

//     if (!universityName) {
//       return NextResponse.json({ message: 'University name is required' }, { status: 400 });
//     }

//     // 액션에 따른 재생성 로직
//     switch (action) {
//       case 'lecture_added':
//       case 'lecture_removed':
//       case 'lecture_modified':
//         // 특정 대학교의 강의 목록 페이지 재생성
//         await revalidateTag(`lectures-${universityName}`);
//         console.log(`Revalidated lectures for ${universityName} - Action: ${action}`);
//         break;

//       case 'university_added':
//         // 전체 대학교 목록 재생성 (필요한 경우)
//         await revalidateTag('universities');
//         console.log('Revalidated all universities');
//         break;

//       default:
//         return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
//     }

//     return NextResponse.json({
//       revalidated: true,
//       timestamp: new Date().toISOString(),
//       action,
//       universityName,
//     });
//   } catch (error) {
//     console.error('Revalidation error:', error);
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
//   }
// }

// // GET 요청으로도 간단한 재생성 지원
// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const universityName = searchParams.get('university');
//   const secret = searchParams.get('secret');

//   if (secret !== process.env.REVALIDATION_SECRET) {
//     return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
//   }

//   if (!universityName) {
//     return NextResponse.json({ message: 'University name is required' }, { status: 400 });
//   }

//   try {
//     await revalidateTag(`lectures-${universityName}`);

//     return NextResponse.json({
//       revalidated: true,
//       universityName,
//       timestamp: new Date().toISOString(),
//     });
//   } catch (error) {
//     console.error('Revalidation error:', error);
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
//   }
// }
