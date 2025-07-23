import { LoginParams, LoginResponse } from '@/types';
import { HTTP_STATUS } from '@/constants';

export async function postLogin({ id, password }: LoginParams): Promise<LoginResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userNumber: id, password }),
  });

  const data = await response.json();

  if (data.status === HTTP_STATUS.ACCEPTED) {
    return {
      name: data.data.name,
      userKey: data.data.userKey,
      role: data.data.auth || data.data.role || '',
    };
  }

  if (data.status === HTTP_STATUS.UNAUTHORIZED)
    throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');

  if (data.status !== HTTP_STATUS.OK) throw new Error('알 수 없는 오류가 발생했습니다.');

  return {
    name: '',
    userKey: '',
    role: '',
  };
}
