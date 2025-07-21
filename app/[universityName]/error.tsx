'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>문제가 발생했습니다</h1>
      <p>{error.message}</p>

      <div>
        <h3>오류가 발생했습니다.</h3>
        <p>{error.message}</p>
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
