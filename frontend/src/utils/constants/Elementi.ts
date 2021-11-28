import { Obcine } from './Obcine';

export enum Kategorija {
	Ceste = 'Ceste',
	Odpadki = 'Odpadki',
	KomunalneInPadavinskeVode = 'Komunalne in padavinske vode',
	PitnaVoda = 'Pitna voda',
	Pokopalisca = 'Pokopališča',
	Plakatiranje = 'Plakatiranje/oglaševanja',
	TuristicnaTaksa = 'Turistična taksa',
	Trznica = 'Tržnica',
	ZelenePovrsine = 'Zelene površine',
	OkoljeInProstor = 'Okolje in prostor'
}

export const Elementi = new Map<Obcine, Array<[string, string] | [Kategorija, [string, string][]]>>([
	[
		Obcine['Sveti Jurij v Slovenskih goricah'],
		[
			[
				Kategorija.Ceste,
				[
					[
						'Odlok o občinskih cestah v občini Sv. Jurij v Slov. Goricah',
						'http://www.medobcinski.si/files/2008/predpisi/1229671437_556.pdf'
					],
					[
						'Odlok o kategorizaciji občinskih cest v občini Sveti Jurij v Slovenskih goricah',
						'http://www.medobcinski.si/files/2008/predpisi/1229671465_557.pdf'
					],
					[
						'Odlok o spremembah Odloka o kategorizaciji občinskih cest v Občini Sveti Jurij v Slovenskih goricah',
						'http://www.medobcinski.si/files/2010/predpisi/1276243695_207.pdf'
					],
					[
						'Odlok o načinu opravljanja rednega vzdrževanja občinskih javnih cest in drugih prometnih površin v občini Sveti Jurij v Slovenskih goricah',
						'http://www.medobcinski.si/files/2013/predpisi/1373780116_269.pdf'
					]
				]
			],
			[
				Kategorija.Odpadki,
				[
					[
						'Odlok o načinu opravljanja obveznih lokalnih gospodarskih javnih služb ravnanja s komunalnimi odpadki v občini Sv. Jurij v Slov. goricah',
						'http://www.medobcinski.si/files/2015/predpisi/1450216765_MUV%2024%20%20442.pdf'
					]
				]
			],
			[
				Kategorija.KomunalneInPadavinskeVode,
				[
					[
						'Odlok o načinu opravljanja lokalne gospodarske javne službe odvajanja in čiščenja komunalne in padavinske odpadne vode v Občini Sveti Jurij v Slovenskih goricah',
						'http://www.medobcinski.si/files/2014/predpisi/1395779174_MUV%2006%202014%2095.pdf'
					],
					[
						'Odlok o spremembi odloka o načinu opravljanja lokalne gospodarske javne službe odvajanja in čiščenja komunalne in padavinske odpadne vode v Občini Sveti Jurij v Slovenskih goricah',
						'http://www.medobcinski.si/files/2014/predpisi/1418750274_MUV%2027%20%20488.pdf'
					]
				]
			],
			[
				Kategorija.PitnaVoda,
				[
					[
						'Odlok o načinu opravljanja lokalne gospodarske javne službe oskrbe s pitno vodo v Občini Sv. Jurij v Slov. Goricah',
						'http://www.medobcinski.si/files/2014/predpisi/1395779250_MUV%2006%202014%2097.pdf'
					]
				]
			],
			[
				Kategorija.Pokopalisca,
				[
					[
						'Odlok o pokopališkem redu v občini Sveti Jurij v Slovenskih goricah',
						'http://www.medobcinski.si/files/2018/predpisi/1540539774_MUV%2026%20%20%20374.pdf'
					]
				]
			],
			[
				Kategorija.Plakatiranje,
				[
					[
						'Odlok o plakatiranju v občini Sveti Jurij v Slovenskih goricah',
						'http://www.medobcinski.si/files/2008/predpisi/1229671410_555.pdf'
					]
				]
			],
			[
				Kategorija.TuristicnaTaksa,
				[
					[
						'Odlok o turistični in promocijski taksi v občini Sv. Jurij v Slov. Goricah',
						'http://www.medobcinski.si/files/2019/predpisi/1569822995_MUV%202019%2018%20%20%20355.pdf'
					]
				]
			]
		]
	],
	[
		Obcine['Sveta Ana'],
		[
			[
				Kategorija.Ceste,
				[
					['Odlok o kategorizaciji občinskih cest v Občini Sveta Ana', 'https://www.uradni-list.si/1/objava.jsp?sop=2009-01-1561'],
					[
						'Odlok o spremembi odloka o kategorizaciji občinskih cest v občini Sveta Ana',
						'http://www.medobcinski.si/files/2017/predpisi/1515079602_MUV%2036%20%20%20499.pdf'
					],
					['Odlok o občinskih cestah', 'https://www.uradni-list.si/1/objava.jsp?sop=1999-01-3470']
				]
			],
			[
				Kategorija.KomunalneInPadavinskeVode,
				[
					[
						'Odlok o načinu opravljanja lokalne gospodarske javne službe odvajanja in čiščenja komunalne in padavinske odpadne vode v Občini Sveta Ana v Slovenskih goricah',
						'http://www.medobcinski.si/files/2013/predpisi/1365879957_141.pdf'
					]
				]
			],
			[
				Kategorija.PitnaVoda,
				[
					[
						'Odlok o načinu opravljanja lokalne gospodarske javne službe oskrbe s pitno vodo v občini Sveta Ana',
						'http://www.medobcinski.si/files/2014/predpisi/1395778673_MUV%2006%202014%2082.pdf'
					]
				]
			],
			[
				Kategorija.Pokopalisca,
				[
					[
						'Odlok o pokopališkem redu v občini Sveta Ana',
						'http://www.medobcinski.si/files/2018/predpisi/1542020597_MUV%202018%2028%20%20%20402.pdf'
					]
				]
			],
			[
				Kategorija.Trznica,
				[['Pravilnik o tržnem redu v Občini Sveta Ana', 'http://www.medobcinski.si/files/2014/predpisi/1417256703_MUV%2026%20%20%20464.pdf']]
			],
			[
				Kategorija.TuristicnaTaksa,
				[
					[
						'Odlok o turistični in promocijski taksi v občini Sveta Ana',
						'http://www.medobcinski.si/files/2018/predpisi/1539694396_MUB%2024%20%20%20346.pdf'
					]
				]
			]
		]
	],
	[
		Obcine.Pesnica,
		[
			[
				Kategorija.Ceste,
				[
					[
						'Odlok o občinskih cestah v občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=7fd19180-1809-42e8-abe6-df47c6ff7c2e'
					],
					[
						'Odlok o kategorizaciji občinskih cest v občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=ceacb38b-e990-4149-a050-a1244b4612b0'
					]
				]
			],
			[
				Kategorija.Odpadki,
				[
					[
						'Odlok o ravnanju s komunalnimi odpadki na območju občine Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=9ec311b7-870e-42c1-80b7-a9e6d2527fff'
					]
				]
			],
			[
				Kategorija.KomunalneInPadavinskeVode,
				[
					[
						'Odlok o načinu opravljanja lokalne gospodarske javne službe odvajanja in čiščenja komunalne in padavinske odpadne vode v občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=3f7151e9-7ac8-4f2e-9cde-270982749757'
					]
				]
			],
			[
				Kategorija.PitnaVoda,
				[
					[
						'Odlok o načinu opravljanja lokalne gospodarske javne službe oskrbe s pitno vodo v Občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=9cfb4972-6cd9-4e59-ac7f-fa3cb93333c5'
					]
				]
			],
			[
				Kategorija.Pokopalisca,
				[
					[
						'Odlok o pokopališkem in pogrebnem redu ter urejanju pokopališč v Občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=2bf6d149-ef4c-4d32-a637-2b745129786f'
					],
					[
						'Odlok o dopolnitvah odloka o pokopališkem in pogrebnem redu ter urejanju pokopališč v občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=cd3cedea-2e1e-407a-9070-62ea475de18d'
					]
				]
			],
			[
				Kategorija.Plakatiranje,
				[
					[
						'Odlok o plakatiranju in oglaševanju v občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=ed6dfb35-5ef9-4486-8a55-6fc14c6da1d7'
					]
				]
			],
			[
				Kategorija.TuristicnaTaksa,
				[
					[
						'Odlok o turistični in promocijski taksi v Občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=76fdaddc-5739-4d21-b225-d07d42fb7761'
					]
				]
			],
			[
				Kategorija.ZelenePovrsine,
				[
					[
						'Odlok o javnem redu in mini v občini Pesnic',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=0ee92bc7-9460-49e5-a935-a7f145c542d2'
					]
				]
			],
			[
				Kategorija.OkoljeInProstor,
				[
					[
						'Odlok o prostorskih ureditvenih pogojih v Občini Pesnica',
						'http://www.lex-localis.info/KatalogInformacij/PodrobnostiDokumenta.aspx?SectionID=a3e495e8-3835-436b-9ee3-8fd8f11998a3'
					]
				]
			]
		]
	]
]);
