import type { Dict } from './en';

const de: Dict = {
  meta: {
    jobTitle: 'Senior Full-Stack-Entwickler',
    homeTitle: 'Sigfrid Couto Fernández | Senior Full-Stack-Entwickler',
    homeDescription:
      'Senior Full-Stack-Entwickler, spezialisiert auf C# / .NET und Angular. {years} Jahre Erfahrung in Enterprise-Systemen hoher Komplexität. Standort Frankreich, EU-Projekte.',
    aboutTitle: 'Über mich | Sigfrid Couto Fernández',
    aboutDescription:
      'Über Sigfrid Couto Fernández. Senior Full-Stack-Ingenieur. {years} Jahre Erfahrung in der Konzeption und Weiterentwicklung von Enterprise-Systemen. Spezialist für C# / .NET und Angular. Standort Frankreich.',
  },
  nav: {
    home: 'Start',
    about: 'Über mich',
    contact: 'Kontakt',
    menu: 'Menü öffnen',
    language: 'Sprache',
    skip: 'Zum Inhalt springen',
  },
  a11y: {
    menuClose: 'Menü schließen',
    darkTheme: 'Dunkles Design',
    homeLink: 'Sigfrid Couto, Startseite',
    primaryNav: 'Hauptnavigation',
    footerNav: 'Fußzeilennavigation',
    intro: 'Einleitung',
    technologies: 'Technologien',
    copyEmail: 'E-Mail-Adresse kopieren',
    copied: 'E-Mail-Adresse kopiert',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    back: 'Zur Startseite',
  },
  hero: {
    lead: '{years} Jahre Erfahrung in der Stabilisierung und Weiterentwicklung komplexer Enterprise-Systeme.',
    text: 'Ich arbeite mich schnell in bestehende Teams ein, modernisiere Legacy-Plattformen und baue Systeme, die langfristig Bestand haben.',
    location: 'Sitz in Frankreich. Ich arbeite mit Teams in Frankreich, Deutschland und Spanien.',
    ctaPrimary: 'Kontakt aufnehmen',
    ctaSecondary: 'Erfahrung ansehen',
    stats: [
      { value: '{years}', label: 'Jahre Erfahrung' },
      { value: '5', label: 'Sprachen' },
      { value: '3', label: 'Länder' },
    ],
  },
  focus: {
    eyebrow: 'Schwerpunkte',
    title: 'Kernbereiche',
    intro: 'Unternehmensumgebungen, in denen Komplexität, Zuverlässigkeit und langfristige Wartbarkeit nicht verhandelbar sind.',
    cards: [
      {
        title: 'Frontend-Entwicklung',
        sub: 'Angular',
        desc: 'Skalierbare UI-Architektur, vorhersehbares State-Management und performante Angular-Anwendungen für langlebige Codebasen.',
        tags: [
          'Komponentenarchitektur und Design-Systeme',
          'State-Management (RxJS / NgRx)',
          'Performance und UX in der Skalierung',
          'Teamfreundliche Muster und Konventionen',
        ],
      },
      {
        title: 'Backend und API-Entwicklung',
        sub: '.NET',
        desc: 'Robuste C# / .NET-Dienste und REST-APIs für Zuverlässigkeit, Skalierbarkeit und langfristige Wartbarkeit.',
        tags: [
          'ASP.NET Core REST APIs',
          'EF Core + komplexe Datenmodelle',
          'SQL Server-Performanceoptimierung',
          'Monitoring und Produktionsstabilität',
        ],
      },
      {
        title: 'Legacy-Modernisierung und Integration',
        sub: 'Unternehmenssysteme',
        desc: 'Modernisierungsprogramme, die technische Schulden abbauen, ohne den Betrieb zu unterbrechen.',
        tags: [
          'Migrationsstrategie und schrittweise Umsetzung',
          'Systemintegration in heterogenen Umgebungen',
          'Verteilte / Enterprise-Umgebungen',
          'Grenzüberschreitende EU-Projekte',
        ],
      },
    ],
  },
  snapshot: {
    eyebrow: 'Erfahrung',
    title: 'Berufliche Stationen',
    items: [
      { period: '2023-heute', company: 'Selbstständig', place: 'Frankreich', detail: 'Full-Stack-Architektur und Enterprise-Plattformen für regulierte Finanz-Workflow-Systeme.' },
      { period: '2017-2023', company: 'netgo', place: 'Berlin', detail: 'Mitwirkung bei der Modernisierung von Enterprise-Logistikplattformen in eingebetteten Produktteams.' },
      { period: '2012-2017', company: 'GVL', place: 'Berlin', detail: 'Konzeption und Umsetzung von Rechtedaten-Plattformen und XML-Integrationen in funktionsübergreifenden Teams.' },
    ],
    more: 'Vollständige Karriere ansehen',
  },
  approach: {
    eyebrow: 'Arbeitsweise',
    title: 'Wie ich arbeite',
    steps: [
      { title: 'Im Team oder eigenverantwortlich', desc: 'Ich passe mich Ihrem Modell an: Ich integriere mich in Ihr Team oder übernehme eigenverantwortlich einen klar definierten Aufgabenbereich.' },
      { title: 'Klare Kommunikation und Verantwortung', desc: 'Frühzeitige Transparenz bei Entscheidungen, Hindernissen und Abwägungen. Keine Überraschungen am Sprintende.' },
      { title: 'Wartbarkeit als Standard', desc: 'Jeder Einsatz hinterlässt die Codebasis verständlicher, erweiterbarer und vertrauenswürdiger.' },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Zusammenarbeit',
    text: 'Wenn Sie eine Modernisierung, Integration oder langfristige technische Partnerschaft planen, spreche ich gerne darüber.',
    email: 'E-Mail senden',
    note: 'Sitz in Frankreich. Verfügbar für Remote- und Vor-Ort-Einsätze in der EU.',
  },
  about: {
    role: 'Senior Full-Stack-Ingenieur',
    facts: [
      { label: 'Standort', value: 'Frankreich, EU' },
      { label: 'Stack', value: 'C# / .NET, Angular' },
      { label: 'Erfahrung', value: '{years} Jahre' },
      { label: 'Einsatz', value: 'Im Team oder eigenverantwortlich' },
    ],
    bio: [
      'Senior Full-Stack-Ingenieur mit {years} Jahren Erfahrung in der Konzeption und Weiterentwicklung von Enterprise-Systemen im europäischen Umfeld. Fachschwerpunkte: C# / .NET im Backend und Angular im Frontend, in anspruchsvollen, unternehmenskritischen Systemlandschaften.',
      'Mit Sitz in Frankreich und Projekterfahrung in Deutschland und Spanien, häufig in grenzüberschreitenden EU-Programmen, bei denen fachliche Präzision und organisationsübergreifende Zusammenarbeit gleichermaßen gefragt sind.',
      'Muttersprachen Spanisch und Katalanisch; Deutsch fließend; Englisch und Französisch auf professionellem Niveau.',
      'Schwerpunkte: Legacy-Modernisierung ohne Betriebsunterbrechung, Integration heterogener Architekturen ohne Aufbau neuer technischer Schulden sowie Entwicklung von Systemen, die Teams dauerhaft selbstständig betreiben und weiterentwickeln können.',
    ],
    stack: {
      eyebrow: 'Stack',
      title: 'Technologien',
      groups: [
        { name: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Komponentenarchitektur', 'State-Management-Muster'] },
        { name: 'Backend', items: ['C# / .NET', 'ASP.NET Core', 'RESTful-API-Design', 'Dependency Injection', 'Async-Muster'] },
        { name: 'Daten', items: ['Entity Framework', 'SQL Server', 'Komplexe Datenmodelle', 'Query-Optimierung', 'Datenmigration'] },
        { name: 'Architektur', items: ['Clean Architecture', 'Verteilte Systeme', 'Systemintegration', 'Legacy-Modernisierung', 'Monolith-zu-Modular-Refactoring', 'Grenzüberschreitende EU-Programme'] },
        { name: 'Delivery', items: ['Agile / Scrum', 'CI/CD', 'Git', 'Docker', 'Azure'] },
      ],
    },
    principles: {
      eyebrow: 'Ansatz',
      title: 'Engineering-Grundsätze',
      intro: 'Die Grundsätze, die meine Arbeit als Ingenieur und meine Zusammenarbeit mit Teams prägen.',
      items: [
        { title: 'Klare Kommunikation', desc: 'Technische Entscheidungen, Abwägungen und Risiken werden frühzeitig und offen kommuniziert. Das schafft Abstimmung und gegenseitiges Vertrauen.' },
        { title: 'Verlässliche Umsetzung', desc: 'Aufwandsschätzungen und Zusagen basieren auf technischer Realität und den Auswirkungen auf das Gesamtsystem.' },
        { title: 'Nachhaltige Systeme', desc: 'Architektur- und Implementierungsentscheidungen zielen auf Klarheit, Wartbarkeit und kontrollierte Komplexität.' },
        { title: 'Langfristige Zusammenarbeit', desc: 'Belastbare Partnerschaften entstehen durch klare Verantwortung, Verlässlichkeit und Respekt für gemeinsame Ziele.' },
      ],
    },
    career: {
      eyebrow: 'Erfahrung',
      title: 'Karriere-Highlights',
      items: [
        { period: '2023-heute', company: 'Selbstständig', place: 'Frankreich', detail: 'Enterprise REST APIs, Angular-Plattformen, Finanz-Workflow-Systeme' },
        { period: '2017-2023', company: 'netgo', place: 'Berlin', detail: 'Enterprise-Logistiksysteme, Legacy-Modernisierung' },
        { period: '2012-2017', company: 'GVL', place: 'Berlin', detail: 'Rechtedaten-Plattformen, XML-Integrationen' },
        { period: '2010-2012', company: 'Jonas & Redmann', place: 'Berlin', detail: 'Industrieautomatisierung, Hardware-Integration' },
        { period: '2008-2010', company: 'CC Vossel', place: 'Berlin', detail: 'Produktionssoftware, Dokumenten-Workflows' },
        { period: '2007-2008', company: 'General Lab (Freelance)', place: 'Barcelona', detail: 'Webanwendungen, Abläufe im Gesundheitswesen' },
        { period: '2006-2007', company: 'Nextret', place: 'Barcelona', detail: 'Enterprise-Webplattformen, Datenbankmigrationen' },
      ],
    },
    languages: {
      eyebrow: 'Kommunikation',
      title: 'Sprachen',
      items: [
        { code: 'ES', name: 'Español', level: 'Muttersprache', value: 100 },
        { code: 'CA', name: 'Català', level: 'Muttersprache', value: 100 },
        { code: 'DE', name: 'Deutsch', level: 'Verhandlungssicher', value: 85 },
        { code: 'EN', name: 'English', level: 'Professionell', value: 75 },
        { code: 'FR', name: 'Français', level: 'Professionell', value: 75 },
      ],
    },
    education: {
      title: 'Ausbildung',
      text: 'B.Sc. Informatik, Universitat Politècnica de Catalunya (Barcelona, 2006)',
    },
    outside: {
      title: 'Außerhalb der Arbeit',
      text: 'Außerhalb der Arbeit laufe ich regelmäßig, verbringe Zeit mit meinen Kindern und meiner Familie und verfolge Fußball als Zuschauer.',
    },
  },
};

export default de;
