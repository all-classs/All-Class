import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState } from '@/types/auth';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: (user) => set({ isLoggedIn: true, user }),
      logout: () => set({ isLoggedIn: false, user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
