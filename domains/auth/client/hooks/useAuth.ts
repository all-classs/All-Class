'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { UserData } from '../../shared/types';
import { removeToken, removeUserInfo } from '@/utils';

export interface UseAuthReturn {
  user: UserData | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: Error | null;
  logout: () => void;
  refetch: () => void;
}

export function useAuth(): UseAuthReturn {
  const queryClient = useQueryClient();

  const { data: user } = useQuery<UserData | null>({
    queryKey: ['auth', 'user'],
    queryFn: () => {
      return queryClient.getQueryData<UserData | null>(['auth', 'user']) || null;
    },
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: () => queryClient.getQueryData(['auth', 'user']),
  });

  const isLoggedIn = !!user;

  const logout = () => {
    removeToken();
    removeUserInfo();
    queryClient.setQueryData(['auth', 'user'], null);
    queryClient.invalidateQueries({ queryKey: ['auth'] });
  };

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ['auth'] });
  };

  return {
    user: user || null,
    isLoggedIn,
    isLoading: false,
    error: null,
    logout,
    refetch,
  };
}
