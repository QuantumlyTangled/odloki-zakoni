import Navbar from 'components/Navbar';
import DefaultSeoProps from 'DefaultSeoProps';
import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin" />
			</Head>
			<DefaultSeo {...DefaultSeoProps} />

			<header>
				<Navbar />
			</header>
			<Component {...pageProps} />
		</>
	);
};

export default App;
