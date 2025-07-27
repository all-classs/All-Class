import { useMutation } from '@tanstack/react-query';
import { LoginParams, LoginResponse } from '@/domains/auth';
import { postLogin } from '@/api/auth';

export function useLoginMutation() {
  return useMutation<LoginResponse, Error, LoginParams>({
    mutationFn: postLogin,
  });
}
