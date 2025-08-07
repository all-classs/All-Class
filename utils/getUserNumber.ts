import { UserData } from '@/domains/auth';

export function getUserNumber(user: UserData): number | null {
  const nameAsNumber = parseInt(user.name);
  const userKeyAsNumber = parseInt(user.userKey);

  if (!isNaN(nameAsNumber)) {
    return nameAsNumber;
  }

  if (!isNaN(userKeyAsNumber)) {
    return userKeyAsNumber;
  }

  return null;
}
