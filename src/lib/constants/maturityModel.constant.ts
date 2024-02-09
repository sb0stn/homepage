import type { Project } from '$lib/interfaces/project.interface';

export const MATURITY_MODEL: Project = {
	id: 'maturity-model',
	title: 'SHUFFLE-Reifegradmodell',
	category: 'Analyse-Tool',
	shortSummary:
		'Ein Unterstützungstool zur Analyse und Optimierung der digitalen Barrierefreiheit von Hochschulen.',
	targetGroup: ['Für Lehrende', 'Für die Hochschulleitung'],
	summary:
		'Das SHUFFLE-Reifegradmodell ist ein Unterstützungstool zur Verbesserung der (digitalen) Barrierefreiheit an Hochschulen. Es hilft Verantwortlichen, relevante Daten strukturiert zu erheben und zu bündeln. Durch das 5-stufige Modell können sich Hochschulen einen Überblick über den Stand ihrer (digitalen) Barrierefreiheit verschaffen. Das Reifegradmodell unterstützt dann bei dessen systematischen Ausbau, indem es Optimierungspotentiale aufzeigt und konkrete Handlungsempfehlungen dafür gibt.',
	showLinkToProject: false,
	linkText: '',
	linkToProject: '',
	partners: [
		'Hochschule der Medien Stuttgart',
		'Universität Bielefeld',
		'Pädagogische Hochschule Freiburg',
		'Pädagogische Hochschule Heidelberg'
	],
	joinEvaluation: {
		title: 'Reifegradmodell testen',
		introduction:
			'Das Reifegradmodell kann momentan in einer ersten Pilotphase getestet werden. Wenn Sie es an Ihrer Hochschule einsetzen möchten, kontaktieren Sie uns gerne. Sie erhalten dann die Dokumente zur Anwendung des Reifegradmodells. Auch bei allgemeinen Fragen zu unserem Reifegradmodell können Sie sich jederzeit an uns wenden.',
		contactEmail: 'auer@hdm-stuttgart.de',
		contactName: 'Nadine Auer'
	},
	publications: [
		{
			title:
				'How to measure the accessibility maturity of organizations—A survey on accessibility maturity models for higher education',
			titleLang: 'en',
			releaseDate: '2023-06',
			contributors: [
				'Nadine Auer',
				'Samira Kalemba',
				'Christin Stormer',
				'Ann-Katrin Böhm',
				'Hakan Ali Cetin',
				'Anja Gutjahr',
				'Franziska Neumann',
				'Verena Kersken',
				'Gerhard Weber',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'Frontiers Computer Science - Volume 5 2023',
			placeOfPublicationLang: 'en',
			linkText: 'Zum Paper',
			link: 'https://www.frontiersin.org/articles/10.3389/fcomp.2023.1134320/full',
			showLink: true
		},
		{
			title:
				'Applying Accessibility Maturity Models to Measure the Accessibility of Organizations (Educational Session)',
			titleLang: 'en',
			releaseDate: '2023-08',
			contributors: ['Gottfried Zimmermann', 'Nadine Auer', 'Verena Kersken'],
			placeOfPublication:
				'Association for the Advancement of Assistive Technology in Europe (AAATE) 2023',
			placeOfPublicationLang: 'en',
			linkText: 'Zum Abstract',
			link: 'https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=93',
			showLink: true
		},
		{
			title:
				'Methodik und Zwischenergebnisse zur Entwicklung eines Reifegradmodells für digitale Barrierefreiheit an Hochschulen',
			titleLang: 'de',
			releaseDate: '2023-09',
			contributors: [
				'Nadine Auer',
				'Verena Kersken',
				'Ann-Katrin Böhm',
				'Anja Gutjahr',
				'Samira Kalemba',
				'Hakan Ali Cetin',
				'Christin Stormer',
				'Gerhard Weber',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'Gemeinschaften in Neuen Medien 2023',
			placeOfPublicationLang: 'de',
			link: '',
			linkText: '',
			showLink: false
		},
		{
			title: 'Der Umfang von Barrierefreiheit an Hochschulen',
			titleLang: 'de',
			releaseDate: '2023-09',
			contributors: ['Nadine Auer', 'Verena Kersken', 'Gerhard Weber', 'Gottfried Zimmermann'],
			placeOfPublication: 'Gemeinschaften in Neuen Medien 2023',
			placeOfPublicationLang: 'de',
			link: '',
			linkText: '',
			showLink: false
		}
	]
};
