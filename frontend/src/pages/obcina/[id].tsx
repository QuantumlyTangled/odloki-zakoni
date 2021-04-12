import Element from 'components/Element';
import SeznamElementov from 'components/SeznamElementov';
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Elementi, Kategorija } from 'utils/constants/Elementi';
import { Obcine } from 'utils/constants/Obcine';

export interface EleData {
	href: string;
	naslov: string;
	st: string;
}

export interface ObcinaPageProps {
	obcina: string;
	obcinaIme: Obcine;
	elementi: (EleData | (Kategorija | URL[] | EleData[])[])[] | null;
}

const ObcinaPage: NextPage<ObcinaPageProps> = ({ obcinaIme, elementi }) => {
	return (
		<>
			<h1>{obcinaIme}</h1>
			{elementi ? (
				<>
					<div className="grid">
						<div className="flex-col flex-1 w-full p-5">
							<div className="flex-col flex-1 mb-7">
								<>
									{elementi.map((ele) => {
										if (Array.isArray(ele)) {
											return (
												<SeznamElementov //
													key={`${ele[0]}`}
													naslov={ele[0] as Kategorija}
													elementi={ele[1] as EleData[]}
												/>
											);
										}
										return (
											<Element //
												key={`${ele.naslov}-${ele.st}`}
												href={ele.href}
												naslov={ele.naslov}
												st={ele.st}
											/>
										);
									})}
								</>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<ObcinaPageProps, { id: string }> = async ({ params }) => {
	const parseUrl = (url: URL): EleData => {
		const partsUrl = url.pathname.split('/');
		const partsEncoded = partsUrl[partsUrl.length - 1];
		// Backblaze se enkrat enkodira url
		const partsDecoded = decodeURIComponent(decodeURIComponent(partsEncoded));
		const parts = partsDecoded.split(',');

		return {
			href: url.href,
			naslov: parts[0],
			st: parts[1].replace(/.[^.]+$/, '')
		};
	};

	const elementi = Elementi.has(params?.id as Obcine)
		? Elementi.get(params!.id as Obcine)!
				.map((val: [kategorija: Kategorija, elementi: string[]] | string) =>
					Array.isArray(val) ? [val[0], val[1].map((dVal) => new URL(dVal))] : new URL(val)
				)
				.map((val) => {
					if (Array.isArray(val)) {
						return [val[0], (val[1] as URL[]).map((ele) => parseUrl(ele))];
					}
					return parseUrl(val);
				})
		: null;

	return {
		props: {
			obcina: params!.id,
			// @ts-expect-error Magic
			obcinaIme: Obcine[params!.id],
			elementi
		},
		revalidate: 1
	};
};

export const computeSeznamObcin = () => {
	return Object.keys(Obcine).map((obcina) => ({
		params: {
			id: obcina
		}
	}));
};

export const getStaticPaths = () => {
	const paths = computeSeznamObcin();
	return {
		paths,
		fallback: false
	};
};

export default ObcinaPage;
