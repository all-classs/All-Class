import { create } from 'zustand';

const useReviewStateStore = create(set => ({
	sortOption: '',
	setSortOption: option => set({ sortOption: option }),
}));

export default useReviewStateStore;
