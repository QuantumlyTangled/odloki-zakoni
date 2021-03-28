import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import React from 'react';
import { Obcine } from 'utils/constants/Obcine';

export interface ObcinaPageProps {
	obcina: string;
	obcinaIme: Obcine;
}

const ObcinaPage: NextPage<ObcinaPageProps> = ({ obcinaIme }) => {
	return <div>{obcinaIme}</div>;
};

export const getStaticProps = ({ params }: GetStaticPropsContext<{ id: string }>): GetStaticPropsResult<ObcinaPageProps> => {
	return {
		props: {
			obcina: params!.id,
			// @ts-expect-error Magic
			obcinaIme: Obcine[params!.id]
		},
		revalidate: 300
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
