import React from 'react';
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default Layout;
