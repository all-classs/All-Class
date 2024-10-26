import { create } from 'zustand';

const useSignupModalStore = create(set => ({
	isSignupModalOpen: false,
	openSignupModal: () => set({ isSignupModalOpen: true }),
	closeSignupModal: () => set({ isSignupModalOpen: false }),
}));

export default useSignupModalStore;
