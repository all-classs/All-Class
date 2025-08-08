import { HTTP_STATUS } from '@/constants';
import { LoginParams, LoginResponse } from '@/domains/auth';
import { apiPost } from '../apiClient';

export async function postLogin({ id, password }: LoginParams): Promise<LoginResponse> {
  try {
    const response = await apiPost('/signin', {
      userNumber: id,
      password: password,
    });

    if (response.status === HTTP_STATUS.OK && response.data) {
      const loginResponse = {
        name: response.data.name,
        token: response.data.token,
        userKey: response.data.userKey,
        role: response.data.auth || response.data.role || '',
      };

      return loginResponse;
    }

    if (response.status === HTTP_STATUS.UNAUTHORIZED) {
      throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
    }

    throw new Error('알 수 없는 오류가 발생했습니다.');
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('로그인 처리 중 오류가 발생했습니다.');
  }
}
