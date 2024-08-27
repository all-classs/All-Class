import { create } from 'zustand';

const useLoginModalStore = create(set => ({
	isLoginModalOpen: false,
	openLoginModal: () => set({ isLoginModalOpen: true }),
	closeLoginModal: () => set({ isLoginModalOpen: false }),
}));

export default useLoginModalStore;
