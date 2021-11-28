import Element from 'components/Element';
import SeznamElementov from 'components/SeznamElementov';
import { getAllObcine } from 'core/obcine';
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Elementi, Kategorija } from 'utils/constants/Elementi';
import { Obcine } from 'utils/constants/Obcine';

export interface EleData {
	href: string;
	naslov: string;
}

export interface ObcinaPageProps {
	obcina: string;
	obcinaIme: Obcine;
	elementi: (EleData | (Kategorija | EleData[])[])[] | null;
}

const ObcinaPage: NextPage<ObcinaPageProps> = ({ obcinaIme, elementi }) => {
	return (
		<div className="container">
			<div className="text-center dark:text-dark-text p-8">
				<h1>{obcinaIme}</h1>
			</div>
			{elementi ? (
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
											key={ele.naslov}
											href={ele.href}
											naslov={ele.naslov}
										/>
									);
								})}
							</>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<ObcinaPageProps, { id: string }> = async ({ params }) => {
	const elementi = Elementi.has(params?.id as Obcine)
		? Elementi.get(params!.id as Obcine)!.map((val: [kategorija: Kategorija, elementi: [string, string][]] | [string, string]) => {
				return Array.isArray(val[1])
					? [val[0] as Kategorija, val[1].map((inner) => ({ naslov: inner[0], href: inner[1] } as EleData))]
					: ({ naslov: val[0], href: val[1] } as EleData);
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
	return getAllObcine().map((obcina) => ({
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
