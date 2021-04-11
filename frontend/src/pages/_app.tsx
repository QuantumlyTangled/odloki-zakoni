import Navbar from 'components/Navbar';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
};

export default App;
