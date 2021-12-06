import SeznamObcin from 'components/SeznamObcin';
import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';

const Index: NextPage = () => {
	return (
		<>
			<div className="py-2" />
			<div className="container">
				<SeznamObcin />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default Index;
