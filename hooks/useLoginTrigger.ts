'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useLoginModal } from '@/domains/auth/client/hooks';

export function useLoginTrigger(shouldTrigger: boolean) {
  const { open } = useLoginModal();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (shouldTrigger) {
      open();

      const params = new URLSearchParams(searchParams);
      params.delete('showLogin');

      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;

      router.replace(newUrl, { scroll: false });
    }
  }, [shouldTrigger, open, router, searchParams, pathname]);
}
