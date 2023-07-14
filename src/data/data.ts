import type { SocialNetwork } from "../model/SocialNetwok";
import type { Language } from "../model/TableModel";

// Cuenta para hacer el fetch de los repositorios de github
const githubUser = 'ThomasA98';

// nombre del dueño del portafolio
const nameOwner = 'Thomas Andrés Koczan';

// acerca del dueño del repositorio
const aboutOwnerDescription = 'Desarrollador frontend con Nextjs, manejo de React con typescript y backend con express. Conocimiento en librerías relacionadas a React como tanstack-query (en su forma especifica de React), style-components, y manejadores de estado como zustand y redux. Entre otras tecnologías como Docker y T3stack.';

// redes sociales del dueño del repositorio
const socialNetworks: SocialNetwork[] = [
    {
        href: 'https://github.com/ThomasA98',
        socialNetworkName: 'github'
    },{
        href: 'https://twitter.com/AndresKoczan',
        socialNetworkName: 'twitter'
    },{
        href: 'https://www.linkedin.com/in/thomas-andres-koczan-orellana-7a4968269/',
        socialNetworkName: 'linkedin'
    },{
        href: 'https://www.getonbrd.com/p/thomas-andres-koczan-orellana',
        socialNetworkName: 'getonboard'
    }
];

// descripcion de cada nivel
const levels = [
	{
		level: 1,
		levelDescription: 'Principiante: de 2 semanas a 1 mes estudiando la tecnología.'
	},{
		level: 2,
		levelDescription: 'Básico: de 1 mes a 3 meses.'
	},{
		level: 3,
		levelDescription: 'Intermedio: de 3 meses a 1 año.'
	},{
		level: 4,
		levelDescription: 'Avanzado: de 1 año a 2 años.'
	},{
		level: 5,
		levelDescription: 'Maestro: más de 2 años.'
	}
];

// datos de la primera tabla
const firstTableTitle = 'Conocimiento en lenguajes de programación';

const firstTableDescription = '';

const firstTableHeaders = ['Lenguaje', 'Librerías y Frameworks'];

const firstTableContent: Language[] = [
    {name: 'javascript', level: 4, href: 'https://developer.mozilla.org/es/docs/Web/JavaScript', technologies: [
        { name: 'astro', href: 'https://astro.build', level: 2 },
        { name: 'react', href: 'https://es.reactjs.org', level: 3 },
        { name: 'solid', href: 'https://www.solidjs.com', level: 1 },
        { name: 'nodejs', href: 'https://nodejs.org/en/', level: 2 },
        { name: 'typescript', href: 'https://www.typescriptlang.org', level: 3 }
    ]},
    {name: 'css', href: 'https://developer.mozilla.org/es/docs/Web/CSS', level: 3, technologies: []},
];

// datos de la segunda tabla
const secondTableTitle = 'Otros temas';

const secondTableDescription = '';

const secondTableHeaders = [ 'Categorías', ''];

const secondTableContent: Language[] = [
    { name: 'Otras tecnologías', href: '',level: null , technologies: [
        { name: 'Docker', href: 'https://www.docker.com', level: 2 },
        { name: 'Markdown', href: 'https://markdown.es', level: 3 },
        { name: 'Git', href: 'https://git-scm.com', level: 2 },
        { name: 'SQL', href: 'https://es.wikipedia.org/wiki/SQL', level: 2 },
        { name: 'MongoDB', href: 'https://www.mongodb.com', level: 1 }
    ]},
    { name: 'Idiomas (de A1 a C2)', href: '', level: null, technologies: [
        { name: 'Español', href: 'https://www.rae.es', level: 5 },
        { name: 'English', href: 'https://en.wikipedia.org/wiki/English_language', level: 1 }
    ]}
];

export default {
    githubUser,
    nameOwner,
    aboutOwnerDescription,
    socialNetworks,
    levels,
    firstTableTitle,
    firstTableDescription,
    firstTableHeaders,
    firstTableContent,
    secondTableTitle,
    secondTableDescription,
    secondTableHeaders,
    secondTableContent
};