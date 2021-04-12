import { Obcine } from './Obcine';

export enum Kategorija {
	Okolje = 'Okolje',
	CesteInPromet = 'Ceste in Promet',
	SodneTakse = 'Sodne Takse',
	PogrebnaDejavnost = 'Pogrebna Dejavnost',
	PrebivaliscaInTurizen = 'Prebivališča in Turizem',
	Gradnja = 'Gradnja'
}

export const Elementi = new Map<Obcine, Array<string | [Kategorija, string[]]>>([
	[
		Obcine.Zakonodaja,
		[
			'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520splo%25C5%25A1nem%2520upravnem%2520postopku%2520(ZUP)%252C.pdf',
			'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520prekr%25C5%25A1kih%2520(ZP-1)%252C.pdf',
			'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520in%25C5%25A1pekcijskem%2520nadzoru%2520(ZIN)%252C.pdf',
			[Kategorija.Okolje, ['https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520varstvu%2520okolja%2520(ZVO-1)%252C.pdf']],
			[
				Kategorija.CesteInPromet,
				[
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520cestah%2520(ZCes-1)%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520prevozih%2520v%2520cestnem%2520prometu%2520(ZPCP-2)%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Pravilnik%2520o%2520rednem%2520vzdr%25C5%25BEevanju%2520javnih%2520cest%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Pravilnik%2520o%2520zaporah%2520na%2520cestah%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Pravilnik%2520o%2520gozdnih%2520prometnicah%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Pravilnik%2520o%2520prometni%2520signalizaciji%2520in%2520prometni%2520opremi%2520na%2520cestah%252C.pdf'
				]
			],
			[
				Kategorija.SodneTakse,
				['https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520upravnih%2520taksah%2520(ZUT)%252C.pdf']
			],
			[
				Kategorija.PogrebnaDejavnost,
				[
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520pogrebni%2520in%2520pokopali%25C5%25A1ki%2520dejavnosti%2520(ZPPDej)%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Pravilnik%2520o%2520minimalnih%2520standardih%2520in%2520normativih%2520za%2520izvajanje%2520pogrebne%2520dejavnosti%252C.pdf'
				]
			],
			[
				Kategorija.PrebivaliscaInTurizen,
				[
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520prijavi%2520prebivali%25C5%25A1%25C4%258Da%2520(ZPPreb-1)%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Zakon%2520o%2520spodbujanju%2520razvoja%2520turizma%2520(ZSRT-1)%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Pravilnik%2520o%2520prijavi%2520in%2520odjavi%2520gostov%252C.pdf'
				]
			],
			[
				Kategorija.Gradnja,
				[
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Gradbeni%2520zakon%2520(GZ)%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Pravilnik%2520o%2520univerzalni%2520graditvi%2520in%2520uporabi%2520objektov%252C.pdf',
					'https://f000.backblazeb2.com/file/odloki-zakoni/skupno/Uredba%2520o%2520odvajanju%2520in%2520%25C4%258Di%25C5%25A1%25C4%258Denju%2520komunalne%2520odpadne%2520vode%252C.pdf'
				]
			]
		]
	]
]);
