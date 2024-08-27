import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import useUserStore from '../../stores/useUserStore';
import Header from '../components/header/Header';

export default function DashBoardLayout({ children }) {
	const userKey = useUserStore(state => state.userKey);

	return (
		<>
			<Header isDashboard={true} />
			<SideBar userKey={userKey} />
			{children}
		</>
	);
}
