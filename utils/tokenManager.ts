'use client';

import { UserData } from '@/domains/auth';
import { CACHE_TIME } from '@/constants';

const TOKEN_COOKIE_NAME = 'auth_token';
const USER_INFO_COOKIE_NAME = 'user_info';

function setCookie(name: string, value: string, maxAge: number): void {
  if (typeof document === 'undefined') return;

  const isProduction = process.env.NODE_ENV === 'production';
  const secureFlag = isProduction ? '; secure' : '';
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}${secureFlag}; samesite=strict`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const cookies = document.cookie.split(';');
  const cookie = cookies.find((cookie) => cookie.trim().startsWith(`${name}=`));

  if (!cookie) return null;
  return cookie.split('=')[1]?.trim() || null;
}

function removeCookie(name: string): void {
  setCookie(name, '', 0);
}

export function setToken(token: string): void {
  const maxAge = CACHE_TIME.TOKEN_MAX_AGE;
  setCookie(TOKEN_COOKIE_NAME, token, maxAge);
}

export function getToken(): string | null {
  return getCookie(TOKEN_COOKIE_NAME);
}

export function removeToken(): void {
  removeCookie(TOKEN_COOKIE_NAME);
}

export function hasToken(): boolean {
  return !!getToken();
}

export function setUserInfo(userInfo: UserData): void {
  const maxAge = CACHE_TIME.TOKEN_MAX_AGE;
  const userInfoJson = JSON.stringify(userInfo);
  setCookie(USER_INFO_COOKIE_NAME, userInfoJson, maxAge);
}

export function getUserInfo(): UserData | null {
  const userInfoJson = getCookie(USER_INFO_COOKIE_NAME);

  if (!userInfoJson) return null;

  try {
    return JSON.parse(userInfoJson);
  } catch (error) {
    console.error('Failed to parse user info from cookie:', error);
    return null;
  }
}

export function removeUserInfo(): void {
  removeCookie(USER_INFO_COOKIE_NAME);
}
