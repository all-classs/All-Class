import { create } from 'zustand';

const useUniversityStore = create(set => ({
	universityName: '',
	universityUrl: '',
	setUniversity: (name, url) =>
		set({ universityName: name, universityUrl: url }),
}));

export default useUniversityStore;
