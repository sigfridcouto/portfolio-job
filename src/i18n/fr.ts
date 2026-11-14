import type { Dict } from './en';

const fr: Dict = {
  meta: {
    jobTitle: 'Développeur Full-Stack Senior',
    homeTitle: 'Sigfrid Couto Fernández | Développeur Full-Stack Senior',
    homeDescription:
      "Développeur Full-Stack senior spécialisé en C# / .NET et Angular. {years} ans d'expérience dans des environnements d'entreprise complexes. Basé en France, projets européens.",
    aboutTitle: 'À propos | Sigfrid Couto Fernández',
    aboutDescription:
      "À propos de Sigfrid Couto Fernández. Ingénieur Full-Stack senior. {years} ans d'expérience dans la conception et l'évolution de systèmes d'entreprise. Spécialiste C# / .NET et Angular. Basé en France.",
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contact',
    menu: 'Ouvrir le menu',
    language: 'Langue',
    skip: 'Aller au contenu',
  },
  a11y: {
    menuClose: 'Fermer le menu',
    darkTheme: 'Thème sombre',
    homeLink: 'Sigfrid Couto, accueil',
    primaryNav: 'Navigation principale',
    footerNav: 'Navigation de pied de page',
    intro: 'Présentation',
    technologies: 'Technologies',
    copyEmail: "Copier l'adresse e-mail",
    copied: 'Adresse e-mail copiée',
  },
  notFound: {
    title: 'Page introuvable',
    text: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
  hero: {
    lead: "{years} ans de conception, consolidation et évolution de systèmes d'entreprise complexes.",
    text: 'Je rejoins les équipes en place, modernise les systèmes existants et conçois des architectures pensées pour durer.',
    location: "Basé en France, en mission auprès d'équipes en France, en Allemagne et en Espagne.",
    ctaPrimary: 'Travailler ensemble',
    ctaSecondary: "Voir l'expérience",
    stats: [
      { value: '{years}', label: "ans d'expérience" },
      { value: '5', label: 'langues' },
      { value: '3', label: 'pays' },
    ],
  },
  focus: {
    eyebrow: 'Ingénierie',
    title: "Domaines d'expertise",
    intro: "Environnements d'entreprise où la complexité, la fiabilité et la pérennité à long terme ne sont pas négociables.",
    cards: [
      {
        title: 'Développement frontend',
        sub: 'Angular',
        desc: "Architecture UI évolutive, gestion d'état prévisible et applications Angular performantes pour des bases de code durables.",
        tags: [
          'Architecture de composants et systèmes de design',
          "Gestion d'état (RxJS / NgRx)",
          "Performance et UX à l'échelle",
          'Patterns et conventions adaptés aux équipes',
        ],
      },
      {
        title: 'Développement backend et API',
        sub: '.NET',
        desc: 'Services C# / .NET robustes et API REST conçus pour la fiabilité, la scalabilité et la pérennité à long terme.',
        tags: [
          'API REST ASP.NET Core',
          'EF Core + modèles de données complexes',
          'Optimisation des performances SQL Server',
          'Supervision et fiabilité en production',
        ],
      },
      {
        title: 'Modernisation et intégration de systèmes existants',
        sub: "Systèmes d'entreprise",
        desc: 'Programmes de modernisation réduisant la dette technique sans interrompre les opérations.',
        tags: [
          'Stratégie de migration et déploiement progressif',
          'Intégration de systèmes hétérogènes',
          "Environnements distribués / d'entreprise",
          'Projets transfrontaliers européens',
        ],
      },
    ],
  },
  snapshot: {
    eyebrow: 'Expérience',
    title: 'Profil professionnel',
    items: [
      { period: "2023-aujourd'hui", company: 'Indépendant', place: 'France', detail: "Architecture full-stack et plateformes d'entreprise pour des processus financiers en environnement réglementé." },
      { period: '2017-2023', company: 'netgo', place: 'Berlin', detail: "Contribution à la modernisation de plateformes logistiques d'entreprise au sein d'équipes produit intégrées." },
      { period: '2012-2017', company: 'GVL', place: 'Berlin', detail: "Conception et mise en œuvre de plateformes de données de droits et d'intégrations XML dans des équipes pluridisciplinaires." },
    ],
    more: 'Voir la carrière complète',
  },
  approach: {
    eyebrow: 'Approche',
    title: 'Comment je travaille',
    steps: [
      { title: 'Intégré ou indépendant', desc: "Je m'adapte à votre organisation : intégration dans votre équipe ou pilotage autonome d'un périmètre clairement défini." },
      { title: 'Communication et responsabilité claires', desc: 'Visibilité précoce sur les décisions, les blocages et les arbitrages. Pas de surprise en fin de sprint.' },
      { title: 'Maintenabilité par défaut', desc: 'Chaque mission laisse la base de code plus lisible, plus extensible et plus fiable.' },
    ],
  },
  contact: {
    eyebrow: 'Prendre contact',
    title: 'Travaillons ensemble',
    text: "Pour tout projet de modernisation, d'intégration ou de transformation à long terme, je vous propose d'en discuter.",
    email: 'Envoyer un e-mail',
    note: 'Basé en France. Disponible pour du télétravail et des missions sur site en Europe.',
  },
  about: {
    role: 'Ingénieur Full-Stack Senior',
    facts: [
      { label: 'Localisation', value: 'France, UE' },
      { label: 'Stack', value: 'C# / .NET, Angular' },
      { label: 'Expérience', value: '{years} ans' },
      { label: 'Engagement', value: 'Intégré ou indépendant' },
    ],
    bio: [
      "Ingénieur full-stack senior fort de {years} ans d'expérience dans l'architecture et l'évolution de systèmes d'entreprise en Europe. Spécialisé en C# / .NET pour le backend et Angular pour le frontend, dans des contextes à forte complexité et haute criticité.",
      "Basé en France, avec une expérience de projets en Allemagne et en Espagne, régulièrement engagé sur des programmes européens transfrontaliers où la rigueur d'ingénierie et la collaboration inter-équipes sont aussi décisives que l'exécution technique.",
      'Espagnol et catalan natifs ; allemand courant ; anglais et français professionnels.',
      "Je me concentre sur la modernisation des applications en place sans interruption d'activité, l'intégration d'architectures hétérogènes sans accumulation de dette technique, et la réalisation de solutions que les équipes s'approprient et font évoluer en autonomie.",
    ],
    stack: {
      eyebrow: 'Stack',
      title: 'Technologies',
      groups: [
        { name: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Architecture de composants', "Patterns de gestion d'état"] },
        { name: 'Backend', items: ['C# / .NET', 'ASP.NET Core', "Conception d'API RESTful", 'Injection de dépendances', 'Patterns asynchrones'] },
        { name: 'Données', items: ['Entity Framework', 'SQL Server', 'Modèles de données complexes', 'Optimisation de requêtes', 'Migrations de données'] },
        { name: 'Architecture', items: ['Clean Architecture', 'Systèmes distribués', 'Intégration de systèmes', 'Modernisation patrimoniale', 'Refactoring monolithe vers modulaire', 'Programmes transfrontaliers européens'] },
        { name: 'Livraison', items: ['Agile / Scrum', 'CI/CD', 'Git', 'Docker', 'Azure'] },
      ],
    },
    principles: {
      eyebrow: 'Approche',
      title: "Principes d'ingénierie",
      intro: "Les principes qui guident mon approche de l'ingénierie et de la collaboration.",
      items: [
        { title: 'Communication claire', desc: "Les décisions, arbitrages et risques techniques sont communiqués tôt et avec transparence, pour assurer l'alignement et la confiance." },
        { title: 'Engagements tenus', desc: "Les estimations et engagements s'appuient sur la réalité technique et les impacts à long terme sur le système." },
        { title: 'Systèmes durables', desc: "Les choix d'architecture et d'implémentation privilégient la clarté, la pérennité et la maîtrise de la complexité." },
        { title: 'Collaboration sur la durée', desc: 'Les partenariats solides reposent sur la responsabilité, la cohérence et le respect des objectifs communs.' },
      ],
    },
    career: {
      eyebrow: 'Expérience',
      title: 'Parcours professionnel',
      items: [
        { period: "2023-aujourd'hui", company: 'Indépendant', place: 'France', detail: "API REST d'entreprise, Plateformes Angular, Processus financiers" },
        { period: '2017-2023', company: 'netgo', place: 'Berlin', detail: "Systèmes logistiques d'entreprise, Modernisation patrimoniale" },
        { period: '2012-2017', company: 'GVL', place: 'Berlin', detail: 'Plateformes de données de droits, Intégrations XML' },
        { period: '2010-2012', company: 'Jonas & Redmann', place: 'Berlin', detail: 'Automatisation industrielle, Intégration matérielle' },
        { period: '2008-2010', company: 'CC Vossel', place: 'Berlin', detail: 'Logiciel de production, Gestion documentaire' },
        { period: '2007-2008', company: 'General Lab (Freelance)', place: 'Barcelone', detail: 'Applications web, Processus cliniques' },
        { period: '2006-2007', company: 'Nextret', place: 'Barcelone', detail: "Plateformes web d'entreprise, Migrations de bases de données" },
      ],
    },
    languages: {
      eyebrow: 'Communication',
      title: 'Langues',
      items: [
        { code: 'ES', name: 'Español', level: 'Langue maternelle', value: 100 },
        { code: 'CA', name: 'Català', level: 'Langue maternelle', value: 100 },
        { code: 'DE', name: 'Deutsch', level: 'Courant', value: 85 },
        { code: 'EN', name: 'English', level: 'Professionnel', value: 75 },
        { code: 'FR', name: 'Français', level: 'Professionnel', value: 75 },
      ],
    },
    education: {
      title: 'Formation',
      text: 'Licence en informatique, Universitat Politècnica de Catalunya (Barcelone, 2006)',
    },
    outside: {
      title: 'En dehors du travail',
      text: 'En dehors du travail, je cours régulièrement, passe du temps avec mes enfants et ma famille, et suis le football en spectateur.',
    },
  },
};

export default fr;
