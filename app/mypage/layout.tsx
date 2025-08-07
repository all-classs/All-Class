'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/domains/auth';
import { AppLayout } from '@/components/layout';
import { LoadingSpinner } from '@/components/common';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <AppLayout>
        <LoadingSpinner text="메인 페이지로 이동 중..." />
      </AppLayout>
    );
  }

  return <AppLayout>{children}</AppLayout>;
}
