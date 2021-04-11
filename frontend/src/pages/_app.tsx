import Navbar from 'components/Navbar';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
			</Head>
			<header>
				<Navbar />
			</header>
			<Component {...pageProps} />
		</>
	);
};

export default App;
