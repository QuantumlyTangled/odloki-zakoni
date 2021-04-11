import SeznamObcin from 'components/SeznamObcin';
import Head from 'next/head';
import React from 'react';

export default function Home() {
	return (
		<>
			<Head>
				<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin" />
			</Head>
			<div className="container">
				<div className="text-center dark:text-dark-text p-8">
					<h1>Skupna Občinska uprava Maribor</h1>
					<br />
					<h2>Medobčinska inšpekcija</h2>
				</div>
				<SeznamObcin />
			</div>
		</>
	);
}
