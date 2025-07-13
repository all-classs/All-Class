'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>문제가 발생했습니다</h1>
      <p>{error.message}</p>

      <div>
        <button onClick={reset}>다시 시도하기</button>
        <button onClick={() => (window.location.href = '/')}>메인으로 돌아가기</button>
      </div>
    </div>
  );
}
