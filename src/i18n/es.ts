import type { Dict } from './en';

const es: Dict = {
  meta: {
    jobTitle: 'Desarrollador Full-Stack Senior',
    homeTitle: 'Sigfrid Couto Fernández | Desarrollador Full-Stack Senior',
    homeDescription:
      'Desarrollador Full-Stack senior especializado en C# / .NET y Angular. {years} años en sistemas empresariales de alta complejidad. Basado en Francia, proyectos europeos.',
    aboutTitle: 'Sobre mí | Sigfrid Couto Fernández',
    aboutDescription:
      'Sobre Sigfrid Couto Fernández. Ingeniero Full-Stack senior. {years} años de experiencia en el diseño y evolución de sistemas empresariales. Especialista en C# / .NET y Angular. Basado en Francia.',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    contact: 'Contacto',
    menu: 'Abrir menú',
    language: 'Idioma',
    skip: 'Saltar al contenido',
  },
  a11y: {
    menuClose: 'Cerrar menú',
    darkTheme: 'Tema oscuro',
    homeLink: 'Sigfrid Couto, inicio',
    primaryNav: 'Navegación principal',
    footerNav: 'Navegación del pie de página',
    intro: 'Presentación',
    technologies: 'Tecnologías',
    copyEmail: 'Copiar dirección de email',
    copied: 'Dirección de email copiada',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o ha cambiado de dirección.',
    back: 'Volver al inicio',
  },
  hero: {
    lead: '{years} años de experiencia en el diseño, consolidación y evolución de sistemas empresariales complejos.',
    text: 'Me incorporo a los equipos en activo, modernizo plataformas existentes y desarrollo sistemas concebidos para perdurar.',
    location: 'Basado en Francia, trabajando con equipos en Francia, Alemania y España.',
    ctaPrimary: 'Trabaja conmigo',
    ctaSecondary: 'Ver experiencia',
    stats: [
      { value: '{years}', label: 'años de experiencia' },
      { value: '5', label: 'idiomas' },
      { value: '3', label: 'países' },
    ],
  },
  focus: {
    eyebrow: 'Enfoque de ingeniería',
    title: 'Áreas clave de ingeniería',
    intro: 'Entornos empresariales donde la complejidad, la fiabilidad y la mantenibilidad a largo plazo no son negociables.',
    cards: [
      {
        title: 'Ingeniería Frontend',
        sub: 'Angular',
        desc: 'Arquitectura UI escalable, gestión de estado predecible y aplicaciones Angular de alto rendimiento para bases de código duraderas.',
        tags: [
          'Arquitectura de componentes y sistemas de diseño',
          'Gestión de estado (RxJS / NgRx)',
          'Rendimiento y UX a escala',
          'Patrones y convenciones para equipos',
        ],
      },
      {
        title: 'Desarrollo Backend y API',
        sub: '.NET',
        desc: 'Servicios C# / .NET robustos y APIs REST diseñados para fiabilidad, escalabilidad y mantenibilidad a largo plazo.',
        tags: [
          'APIs REST ASP.NET Core',
          'EF Core + modelos de datos complejos',
          'Optimización de rendimiento SQL Server',
          'Supervisión y fiabilidad en producción',
        ],
      },
      {
        title: 'Modernización e integración de sistemas heredados',
        sub: 'Sistemas empresariales',
        desc: 'Programas de modernización que reducen la deuda técnica sin interrumpir las operaciones.',
        tags: [
          'Estrategia de migración y despliegue progresivo',
          'Integración de sistemas en ecosistemas heterogéneos',
          'Entornos distribuidos / empresariales',
          'Proyectos transfronterizos europeos',
        ],
      },
    ],
  },
  snapshot: {
    eyebrow: 'Experiencia',
    title: 'Perfil profesional',
    items: [
      { period: '2023-actualidad', company: 'Independiente', place: 'Francia', detail: 'Arquitectura full-stack y plataformas empresariales para procesos financieros en entornos regulados.' },
      { period: '2017-2023', company: 'netgo', place: 'Berlín', detail: 'Participé en la modernización de plataformas logísticas empresariales en equipos de producto integrados.' },
      { period: '2012-2017', company: 'GVL', place: 'Berlín', detail: 'Diseñé e implementé plataformas de datos de derechos e integraciones XML en equipos multifuncionales.' },
    ],
    more: 'Ver carrera completa',
  },
  approach: {
    eyebrow: 'Enfoque',
    title: 'Cómo trabajo',
    steps: [
      { title: 'Integrado o independiente', desc: 'Me adapto a tu organización: me integro en tu equipo o asumo de forma autónoma un ámbito claramente definido.' },
      { title: 'Comunicación y responsabilidad claras', desc: 'Visibilidad temprana sobre decisiones, bloqueos y compromisos técnicos. Sin sorpresas al cierre del sprint.' },
      { title: 'Mantenibilidad por defecto', desc: 'Cada proyecto deja la base de código más legible, más extensible y más fiable.' },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Trabajemos juntos',
    text: 'Si trabajas en un proyecto de modernización, integración o transformación tecnológica a largo plazo, hablemos.',
    email: 'Enviar un email',
    note: 'Basado en Francia. Disponible para trabajo en remoto en la UE y desplazamientos presenciales.',
  },
  about: {
    role: 'Ingeniero Full-Stack Senior',
    facts: [
      { label: 'Ubicación', value: 'Francia, UE' },
      { label: 'Stack', value: 'C# / .NET, Angular' },
      { label: 'Experiencia', value: '{years} años' },
      { label: 'Modalidad', value: 'Integrado o independiente' },
    ],
    bio: [
      'Ingeniero full-stack senior con {years} años de experiencia en el diseño y evolución de sistemas empresariales en Europa. Especializado en C# / .NET para el backend y Angular para el frontend, en entornos de alta complejidad y exigencia técnica.',
      'Basado en Francia, con experiencia en proyectos en Alemania y España, habitualmente en programas europeos transfronterizos donde el rigor de ingeniería y la colaboración entre equipos son tan determinantes como los propios resultados.',
      'Español y catalán nativos; alemán fluido; inglés y francés profesionales.',
      'Me centro en modernizar sistemas existentes sin interrumpir la operativa, integrar arquitecturas heterogéneas sin acumular nueva deuda técnica, y desarrollar soluciones que los equipos puedan mantener y evolucionar de manera autónoma.',
    ],
    stack: {
      eyebrow: 'Stack',
      title: 'Tecnologías',
      groups: [
        { name: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Arquitectura de componentes', 'Patrones de gestión de estado'] },
        { name: 'Backend', items: ['C# / .NET', 'ASP.NET Core', 'Diseño de APIs RESTful', 'Inyección de dependencias', 'Patrones asíncronos'] },
        { name: 'Datos', items: ['Entity Framework', 'SQL Server', 'Modelos de datos complejos', 'Optimización de consultas', 'Migraciones de datos'] },
        { name: 'Arquitectura', items: ['Clean Architecture', 'Sistemas distribuidos', 'Integración de sistemas', 'Modernización de sistemas heredados', 'Refactorización monolito a modular', 'Programas transfronterizos europeos'] },
        { name: 'Entrega', items: ['Agile / Scrum', 'CI/CD', 'Git', 'Docker', 'Azure'] },
      ],
    },
    principles: {
      eyebrow: 'Enfoque',
      title: 'Principios de ingeniería',
      intro: 'Los principios que guían mi enfoque de ingeniería y colaboración.',
      items: [
        { title: 'Comunicación clara', desc: 'Las decisiones técnicas, los compromisos técnicos y los riesgos se comunican con anticipación y transparencia para garantizar alineación y confianza.' },
        { title: 'Compromisos cumplidos', desc: 'Las estimaciones y compromisos se fundamentan en la realidad técnica y en el impacto a largo plazo sobre el sistema.' },
        { title: 'Sistemas sostenibles', desc: 'Las decisiones de arquitectura e implementación persiguen la claridad, la mantenibilidad y la complejidad controlada.' },
        { title: 'Colaboración a largo plazo', desc: 'Las relaciones sólidas se construyen sobre la responsabilidad, la coherencia y el respeto por los objetivos comunes.' },
      ],
    },
    career: {
      eyebrow: 'Experiencia',
      title: 'Trayectoria profesional',
      items: [
        { period: '2023-actualidad', company: 'Independiente', place: 'Francia', detail: 'APIs REST empresariales, Plataformas Angular, Procesos financieros' },
        { period: '2017-2023', company: 'netgo', place: 'Berlín', detail: 'Sistemas logísticos empresariales, Modernización de sistemas heredados' },
        { period: '2012-2017', company: 'GVL', place: 'Berlín', detail: 'Plataformas de datos de derechos, Integraciones XML' },
        { period: '2010-2012', company: 'Jonas & Redmann', place: 'Berlín', detail: 'Automatización industrial, Integración de hardware' },
        { period: '2008-2010', company: 'CC Vossel', place: 'Berlín', detail: 'Software de producción, Gestión documental' },
        { period: '2007-2008', company: 'General Lab (Freelance)', place: 'Barcelona', detail: 'Aplicaciones web, Procesos clínicos' },
        { period: '2006-2007', company: 'Nextret', place: 'Barcelona', detail: 'Plataformas web empresariales, Migraciones de bases de datos' },
      ],
    },
    languages: {
      eyebrow: 'Comunicación',
      title: 'Idiomas',
      items: [
        { code: 'ES', name: 'Español', level: 'Nativo', value: 100 },
        { code: 'CA', name: 'Català', level: 'Nativo', value: 100 },
        { code: 'DE', name: 'Deutsch', level: 'Fluido', value: 85 },
        { code: 'EN', name: 'English', level: 'Profesional', value: 75 },
        { code: 'FR', name: 'Français', level: 'Profesional', value: 75 },
      ],
    },
    education: {
      title: 'Formación',
      text: 'Ingeniería Informática, Universitat Politècnica de Catalunya (Barcelona, 2006)',
    },
    outside: {
      title: 'Fuera del trabajo',
      text: 'Fuera del trabajo, corro regularmente, paso tiempo con mis hijos y mi familia, y sigo el fútbol como espectador.',
    },
  },
};

export default es;
