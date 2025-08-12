import type { Metadata } from 'next';
import { DashboardLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: '내 정보',
  description: '프로필 정보를 관리하고 개인정보를 업데이트하세요.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProfilePage() {
  return (
    <DashboardLayout title="내정보" subtitle="프로필 정보를 관리하세요">
      <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>준비중입니다...</p>
    </DashboardLayout>
  );
}
