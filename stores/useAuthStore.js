import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
	persist(
		set => ({
			name: '',
			token: '',
			userKey: '',
			isAuthenticated: false,
			checkLecture: false,
			coin: 0,

			setAuthInfo: (name, token, userKey) =>
				set(state => ({
					name,
					token,
					userKey,
					isAuthenticated: true,
					checkLecture: state.checkLecture,
					coin: state.coin,
				})),

			clearAuthInfo: () =>
				set({
					name: '',
					token: '',
					userKey: '',
					isAuthenticated: false,
					checkLecture: false,
					coin: 0,
				}),

			setCheckLecture: value =>
				set(state => ({
					checkLecture: value,
					coin: state.coin,
				})),

			setCoin: value =>
				set(state => ({
					coin: state.coin + value,
					checkLecture: state.checkLecture,
				})),
		}),
		{
			name: 'auth-storage',
		},
	),
);

export default useAuthStore;
