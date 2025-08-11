'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLoginTrigger } from './hooks/useLoginTrigger';
import { LoadingSpinner } from '../loading/LoadingSpinner';

function LoginTrigger() {
  const searchParams = useSearchParams();
  const showLogin = searchParams.get('showLogin') === 'true';

  useLoginTrigger(showLogin);

  return null;
}

export function LoginTriggerWrapper() {
  return (
    <Suspense fallback={<LoadingSpinner size="small" text="로그인 준비 중..." />}>
      <LoginTrigger />
    </Suspense>
  );
}
