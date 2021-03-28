import type { Obcine } from './Obcine';

export enum Grbi {
	Maribor = 'maribor.svg',
	Benedikt = 'benedikt.svg',
	Cerkvenjak = 'cerkvenjak.svg',
	Duplek = 'duplek.svg'
}

// @ts-expect-error Element implicitly has an 'any' type because expression of type 'Obcine' can't be used to index type 'typeof Grbi'.
export const computeGrb = (obcina: Obcine) => Grbi[obcina] as Grbi | undefined;
