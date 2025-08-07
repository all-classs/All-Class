import { HTTP_STATUS } from '@/constants';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

const getHeaders = () => ({
  'Content-Type': 'application/json',
});

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function apiGet(endpoint: string, params?: Record<string, string | boolean>) {
  let url = endpoint;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });
    url += `?${searchParams.toString()}`;
  }

  return apiRequest(url, { method: 'GET' });
}

export async function apiPost(endpoint: string, data: unknown) {
  return apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function apiPatch(endpoint: string, data: unknown) {
  return apiRequest(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function apiDelete(endpoint: string, data?: unknown) {
  const config: RequestInit = { method: 'DELETE' };
  if (data) {
    config.body = JSON.stringify(data);
  }

  return apiRequest(endpoint, config);
}

export function isApiSuccess(response: { status?: number }): boolean {
  return response?.status === HTTP_STATUS.OK;
}

export async function apiGetWithCache(
  endpoint: string,
  params?: Record<string, string | boolean>,
  cacheOption: RequestCache = 'force-cache'
) {
  let url = endpoint;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });
    url += `?${searchParams.toString()}`;
  }

  return apiRequest(url, {
    method: 'GET',
    cache: cacheOption,
  });
}
