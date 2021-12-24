import { readFileSync } from 'fs';
import { join } from 'path';

export interface DocumentEntry {
	name: string;
	link: string;
	category: string;
}

export interface MunicipalityDocuments {
	name: string;
	slug: string;
	elements: DocumentEntry[];
}

export const Elementi: MunicipalityDocuments[] = (() => {
	const elements: MunicipalityDocuments[] = [];
	const csvRaw = readFileSync(join(__dirname, '..', '..', 'assets', 'odloki-raw.csv'), { encoding: 'utf-8' });
	const csvLines = csvRaw.split('\n');

	csvLines.shift();
	csvLines.pop();

	const csvLineEntries = csvLines.map((line) => line.split(','));

	for (const entry of csvLineEntries) {
		const link = entry[8];

		if (!link) continue;

		const municipality = elements.find((val) => val.name === entry[0]);
		const documentEntry: DocumentEntry = {
			name: entry[4],
			link,
			category: entry[1] || 'Splošni dokumenti'
		};

		if (municipality) {
			municipality.elements.push(documentEntry);
			continue;
		}

		elements.push({
			name: entry[0],
			slug: entry[0] //
				.toLowerCase()
				.normalize('NFD')
				.replace(/\p{Diacritic}|\./gu, '')
				.replace(/ /g, '-'),
			elements: [documentEntry]
		});
	}

	return elements;
})();
