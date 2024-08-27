import { create } from 'zustand';

const useUserStore = create(set => ({
	userKey: null,
	setUserKey: key => set({ userKey: key }),
}));

export default useUserStore;
