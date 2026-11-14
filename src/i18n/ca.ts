import type { Dict } from './en';

const ca: Dict = {
  meta: {
    jobTitle: 'Desenvolupador Full-Stack Sènior',
    homeTitle: 'Sigfrid Couto Fernández | Desenvolupador Full-Stack Sènior',
    homeDescription:
      "Desenvolupador Full-Stack sènior especialitzat en C# / .NET i Angular. {years} anys en sistemes empresarials d'alta complexitat. Basat a França, projectes europeus.",
    aboutTitle: 'Sobre mi | Sigfrid Couto Fernández',
    aboutDescription:
      "Enginyer Full-Stack sènior. {years} anys d'experiència en el disseny i l'evolució de sistemes empresarials. Especialista en C# / .NET i Angular. Basat a França.",
  },
  nav: {
    home: 'Inici',
    about: 'Sobre mi',
    contact: 'Contacte',
    menu: 'Obrir menú',
    language: 'Idioma',
    skip: 'Saltar al contingut',
  },
  a11y: {
    menuClose: 'Tancar menú',
    darkTheme: 'Tema fosc',
    homeLink: 'Sigfrid Couto, inici',
    primaryNav: 'Navegació principal',
    footerNav: 'Navegació del peu de pàgina',
    intro: 'Presentació',
    technologies: 'Tecnologies',
    copyEmail: "Copiar l'adreça de correu",
    copied: 'Adreça de correu copiada',
  },
  notFound: {
    title: 'Pàgina no trobada',
    text: "La pàgina que busques no existeix o ha canviat d'adreça.",
    back: "Tornar a l'inici",
  },
  hero: {
    lead: "{years} anys d'experiència en el disseny, la consolidació i l'evolució de sistemes empresarials complexos.",
    text: "M'integro en equips en actiu, modernitzo plataformes heretades i construeixo sistemes pensats per durar.",
    location: 'Basat a França. Col·laboro amb equips a França, Alemanya i Espanya.',
    ctaPrimary: 'Treballem junts',
    ctaSecondary: 'Veure experiència',
    stats: [
      { value: '{years}', label: "anys d'experiència" },
      { value: '5', label: 'idiomes' },
      { value: '3', label: 'països' },
    ],
  },
  focus: {
    eyebrow: "Enfoc d'enginyeria",
    title: "Àrees clau d'enginyeria",
    intro: 'Entorns empresarials on la complexitat, la fiabilitat i la mantenibilitat a llarg termini no són negociables.',
    cards: [
      {
        title: 'Enginyeria Frontend',
        sub: 'Angular',
        desc: "Arquitectura UI escalable, gestió d'estat predictible i aplicacions Angular d'alt rendiment per a bases de codi duradores.",
        tags: [
          'Arquitectura de components i sistemes de disseny',
          "Gestió d'estat (RxJS / NgRx)",
          'Rendiment i UX a escala',
          'Patrons i convencions per a equips',
        ],
      },
      {
        title: 'Desenvolupament Backend i API',
        sub: '.NET',
        desc: 'Serveis C# / .NET robustos i APIs REST dissenyats per a fiabilitat, escalabilitat i mantenibilitat a llarg termini.',
        tags: [
          'APIs REST ASP.NET Core',
          'EF Core + models de dades complexos',
          'Optimització de rendiment SQL Server',
          'Supervisió i fiabilitat en producció',
        ],
      },
      {
        title: 'Modernització i integració de sistemes heretats',
        sub: 'Sistemes empresarials',
        desc: 'Programes de modernització que redueixen el deute tècnic sense interrompre les operacions.',
        tags: [
          'Estratègia de migració i desplegament per fases',
          'Integració de sistemes en ecosistemes heterogenis',
          'Entorns distribuïts / empresarials',
          'Projectes transfronterers europeus',
        ],
      },
    ],
  },
  snapshot: {
    eyebrow: 'Experiència',
    title: 'Perfil professional',
    items: [
      { period: '2023-Actualitat', company: 'Independent', place: 'França', detail: 'Arquitectura full-stack i plataformes empresarials per a processos financers en entorns regulats.' },
      { period: '2017-2023', company: 'netgo', place: 'Berlín', detail: 'Vaig participar en la modernització de plataformes logístiques empresarials en equips de producte integrats.' },
      { period: '2012-2017', company: 'GVL', place: 'Berlín', detail: 'Vaig dissenyar i implementar plataformes de dades de drets i integracions XML en equips multifuncionals.' },
    ],
    more: 'Veure carrera completa',
  },
  approach: {
    eyebrow: 'Enfoc',
    title: 'Com treballo',
    steps: [
      { title: 'Integrat o independent', desc: "M'adapto a la vostra organització: m'integro en el vostre equip o gestiono de forma autònoma un àmbit ben definit." },
      { title: 'Comunicació i responsabilitat clares', desc: "Transparència anticipada sobre decisions, bloquejos i arbitratges tècnics. Sense sorpreses al final de l'sprint." },
      { title: 'Mantenibilitat per defecte', desc: 'Cada col·laboració deixa la base de codi més llegible, extensible i fiable.' },
    ],
  },
  contact: {
    eyebrow: 'Contacte',
    title: 'Treballem junts',
    text: 'Si esteu treballant en un projecte de modernització, integració o transformació tecnològica, parlem-ne.',
    email: 'Enviar un correu',
    note: 'Basat a França. Disponible per a treball en remot a la UE i desplaçaments presencials.',
  },
  about: {
    role: 'Enginyer Full-Stack Sènior',
    facts: [
      { label: 'Ubicació', value: 'França, UE' },
      { label: 'Stack', value: 'C# / .NET, Angular' },
      { label: 'Experiència', value: '{years} anys' },
      { label: 'Modalitat', value: 'Integrat o independent' },
    ],
    bio: [
      "Enginyer full-stack sènior amb {years} anys d'experiència en el disseny i l'evolució de sistemes empresarials a Europa. Especialitzat en C# / .NET al backend i Angular al frontend, en entorns d'alta complexitat i exigència tècnica.",
      "Basat a França, amb experiència en projectes a Alemanya i Espanya, sovint en programes europeus transfronterers on el rigor d'enginyeria i la col·laboració entre equips són tan determinants com els propis resultats.",
      'Espanyol i català natius; alemany fluid; anglès i francès professionals.',
      'Em centro en modernitzar sistemes heretats sense interrupcions operatives, integrar arquitectures heterogènies sense acumular nou deute tècnic, i desenvolupar solucions que els equips puguin mantenir i evolucionar de manera autònoma.',
    ],
    stack: {
      eyebrow: 'Stack',
      title: 'Tecnologies',
      groups: [
        { name: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Arquitectura de components', "Patrons de gestió d'estat"] },
        { name: 'Backend', items: ['C# / .NET', 'ASP.NET Core', "Disseny d'APIs RESTful", 'Injecció de dependències', 'Patrons asíncrons'] },
        { name: 'Dades', items: ['Entity Framework', 'SQL Server', 'Models de dades complexos', 'Optimització de consultes', 'Migracions de dades'] },
        { name: 'Arquitectura', items: ['Clean Architecture', 'Sistemes distribuïts', 'Integració de sistemes', 'Modernització de sistemes heretats', 'Refactorització monòlit a modular', 'Programes transfronterers europeus'] },
        { name: 'Lliurament', items: ['Agile / Scrum', 'CI/CD', 'Git', 'Docker', 'Azure'] },
      ],
    },
    principles: {
      eyebrow: 'Enfoc',
      title: "Principis d'enginyeria",
      intro: "Els principis que guien el meu enfoc d'enginyeria i col·laboració.",
      items: [
        { title: 'Comunicació clara', desc: 'Les decisions tècniques, els compromisos tècnics i els riscos es comuniquen amb antelació i transparència per garantir alineació i confiança.' },
        { title: 'Lliurament fiable', desc: "Les estimacions i compromisos es basen en la realitat tècnica i l'impacte sistèmic a llarg termini." },
        { title: 'Sistemes sostenibles', desc: "Les decisions d'arquitectura i implementació prioritzen la claredat, la mantenibilitat i la complexitat controlada." },
        { title: 'Col·laboració a llarg termini', desc: 'Les associacions sòlides es construeixen sobre la responsabilitat, la coherència i el respecte pels objectius compartits.' },
      ],
    },
    career: {
      eyebrow: 'Experiència',
      title: 'Trajectòria professional',
      items: [
        { period: '2023-Actualitat', company: 'Independent', place: 'França', detail: 'APIs REST empresarials, Plataformes Angular, Processos financers' },
        { period: '2017-2023', company: 'netgo', place: 'Berlín', detail: 'Sistemes logístics empresarials, Modernització de sistemes heretats' },
        { period: '2012-2017', company: 'GVL', place: 'Berlín', detail: 'Plataformes de dades de drets, Integracions XML' },
        { period: '2010-2012', company: 'Jonas & Redmann', place: 'Berlín', detail: 'Automatització industrial, Integració de maquinari' },
        { period: '2008-2010', company: 'CC Vossel', place: 'Berlín', detail: 'Programari de producció, Gestió documental' },
        { period: '2007-2008', company: 'General Lab (Freelance)', place: 'Barcelona', detail: 'Aplicacions web, Processos clínics' },
        { period: '2006-2007', company: 'Nextret', place: 'Barcelona', detail: 'Plataformes web empresarials, Migracions de bases de dades' },
      ],
    },
    languages: {
      eyebrow: 'Comunicació',
      title: 'Idiomes',
      items: [
        { code: 'ES', name: 'Español', level: 'Llengua materna', value: 100 },
        { code: 'CA', name: 'Català', level: 'Llengua materna', value: 100 },
        { code: 'DE', name: 'Deutsch', level: 'Fluid', value: 85 },
        { code: 'EN', name: 'English', level: 'Professional', value: 75 },
        { code: 'FR', name: 'Français', level: 'Professional', value: 75 },
      ],
    },
    education: {
      title: 'Formació',
      text: 'Enginyeria Informàtica, Universitat Politècnica de Catalunya (Barcelona, 2006)',
    },
    outside: {
      title: 'Fora de la feina',
      text: 'Fora de la feina, corro regularment, passo temps amb els meus fills i la meva família, i segueixo el futbol com a espectador.',
    },
  },
};

export default ca;
