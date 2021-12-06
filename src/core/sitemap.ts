import sitemapGenerator from 'nextjs-sitemap-generator';
import path from 'path';
import { getAllObcine } from 'core/obcine';

export async function generateSitemap(srcPath: string) {
	const baseUrl = 'https://odloki.drobnic.me';

	await sitemapGenerator({
		baseUrl,
		extraPaths: getAllObcine().map((obcina) => `/obcina/${encodeURIComponent(obcina)}`),
		pagesDirectory: path.join(srcPath, 'pages'),
		targetDirectory: path.join(srcPath, 'public'),
		nextConfigPath: path.join(srcPath, 'next.config.js'),
		ignoredPaths: ['api', '/obcina/[id]']
	});
}
