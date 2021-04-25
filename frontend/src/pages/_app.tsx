import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/ui';
import LoginForce from 'components/LoginForce';
import Navbar from 'components/Navbar';
import DefaultSeoProps from 'DefaultSeoProps';
import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { SupabaseContextProvider } from 'use-supabase';
import '../styles/_App.css';

// @ts-expect-error Stupidity
export const _supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<SupabaseContextProvider client={_supabase}>
				<Auth.UserContextProvider supabaseClient={_supabase}>
					<LoginForce>
						<Head>
							<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
							<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin" />
						</Head>
						<DefaultSeo {...DefaultSeoProps} />

						<header>
							<Navbar />
						</header>
						<div className="py-8" />
						<Component {...pageProps} />
						<div className="py-4" />
					</LoginForce>
				</Auth.UserContextProvider>
			</SupabaseContextProvider>
		</>
	);
};

export default App;
