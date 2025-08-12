import type { Metadata } from 'next';
import { DashboardLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: '커리큘럼',
  description: '내 커리큘럼 정보를 확인하고 관리하세요.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CurriculumPage() {
  return (
    <DashboardLayout title="커리큘럼" subtitle="우수 졸업생들의 커리큘럼을 구매해보세요">
      <h3 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>준비중입니다...</h3>
    </DashboardLayout>
  );
}
