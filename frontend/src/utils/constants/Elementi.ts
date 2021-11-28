import { Obcine } from './Obcine';

export enum Kategorija {
	Ceste = 'Ceste'
}

export const Elementi = new Map<Obcine, Array<[string, string] | [Kategorija, [string, string][]]>>([
	[
		Obcine['Sveti Jurij v Slovenskih goricah'],
		[
			[
				Kategorija.Ceste,
				[['Odlok o občinskih cestah v občini Sv. Jurij v Slov. Goricah', 'http://www.medobcinski.si/files/2008/predpisi/1229671437_556.pdf']]
			]
		]
	]
]);
