import type { DefaultSeoProps as DefaultSeoPropsType } from 'next-seo';

export const BaseUrl = 'https://odloki.quantumly.dev';
export const DefaultSeoProps: DefaultSeoPropsType = {
	titleTemplate: 'Odloki in Zakoni | %s',
	title: 'Home',
	description: 'Seznam odlokov in zakonov posameznih občin znotraj medobčinskega inšpektorata Maribor.',
	canonical: BaseUrl,
	additionalMetaTags: [
		{ name: 'url', content: BaseUrl },
		{ name: 'identifier-URL', content: BaseUrl },
		{ name: 'shortlink', content: BaseUrl },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{
			name: 'keywords',
			content: 'odloki, zakoni, maribor, inšpektorat, inspektorat, slovenia, slovenija, quantumly, quantumlyy, quantumlytangled'
		},
		{
			name: 'summary',
			content: 'Seznam odlokov in zakonov posameznih občin znotraj medobčinskega inšpektorata Maribor.'
		},
		{ name: 'subject', content: 'Seznam odlokov in zakonov posameznih občin znotraj medobčinskega inšpektorata Maribor.' },
		{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
		{ name: 'googlebot', content: 'index,follow' },
		{ name: 'author', content: `Nejc Drobnič, yo@quantumly.dev` },
		{ name: 'owner', content: `Nejc Drobnič, yo@quantumly.dev` },
		{ name: 'designer', content: `Nejc Drobnič, yo@quantumly.dev` },
		{ name: 'reply-to', content: 'yo@quantumly.dev' },
		{ name: 'target', content: 'all' },
		{ name: 'audience', content: 'all' },
		{ name: 'coverage', content: 'Worldwide' },
		{ name: 'distribution', content: 'Global' },
		{ name: 'rating', content: 'safe for kids' },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' },
		{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		{ name: 'HandheldFriendly', content: 'True' },
		{ name: 'apple-mobile-web-app-title', content: 'Odloki in Zakoni' },
		{ name: 'application-name', content: 'Odloki in Zakoni' },
		{ name: 'revisit-after', content: '7 days' },
		{ property: 'og:email', content: 'yo@quantumly.dev' }
	],
	openGraph: {
		title: 'Odloki in Zakoni',
		url: BaseUrl,
		type: 'website',
		locale: 'sl_SI',
		site_name: 'Odloki in Zakoni',
		description: 'Seznam odlokov in zakonov posameznih občin znotraj medobčinskega inšpektorata Maribor.'
	},
	twitter: {
		handle: '@quantumlyy',
		site: '@quantumlyy',
		cardType: 'summary'
	}
};

export default DefaultSeoProps;
