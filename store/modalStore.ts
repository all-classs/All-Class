import { create } from 'zustand';
import { ModalState } from '@/types';

export const useModalStore = create<ModalState>((set) => ({
  loginModalOpen: false,
  openLoginModal: () => set({ loginModalOpen: true }),
  closeLoginModal: () => set({ loginModalOpen: false }),
}));
