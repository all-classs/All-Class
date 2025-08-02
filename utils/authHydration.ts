import { cookies } from 'next/headers';
import { QueryClient } from '@tanstack/react-query';

export async function hydrateAuthState(queryClient: QueryClient): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  const userInfoCookie = cookieStore.get('user_info')?.value;

  if (token && userInfoCookie) {
    try {
      const userInfo = JSON.parse(userInfoCookie);
      queryClient.setQueryData(['auth', 'user'], userInfo);
    } catch (error) {
      console.error(error);
    }
  }
}
