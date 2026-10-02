// Brand names, the company name, people and the address are intentionally
// left out of the dictionary: they read the same in every language.

export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      aboutUs: 'Sobre Nosotros',
      services: 'Servicios',
      whyCompany: 'Por qué Orellana Capital',
      contact: 'Contacto',
      toggleNavigation: 'Abrir menú',
      language: 'Idioma',
    },
    hero: {
      title: 'M&A, Finanzas Corporativas y Banca de Inversión',
      subtitle: 'Más de 15 años de experiencia impulsando tu crecimiento empresarial con Soluciones Financieras Estratégicas',
      cta: 'Descubre cómo podemos ayudarte',
    },
    aboutUs: {
      title: 'Sobre Nosotros',
      paragraph1: 'Somos una firma especializada en brindar asesoramiento financiero estratégico, liderada por Alejandro Hughes, un profesional con más de 15 años de experiencia en M&A, finanzas corporativas, banca de inversión y gestión empresarial.',
      paragraph2: 'A lo largo de su carrera, Alejandro ha liderado exitosamente numerosas rondas de inversión, negociaciones complejas y adquisiciones a nivel local e internacional. Con una sólida red de contactos en el sector financiero, su experiencia abarca mercados como Uruguay, España, Australia, y otras regiones, lo que le otorga una perspectiva global para cada transacción.',
      academicLabel: 'Actividad académica',
      academic: 'Docente en la Facultad de Ciencias Empresariales y Economía de la Universidad de Montevideo, en la materia Fusiones y Adquisiciones.',
      paragraph3: 'Nuestro enfoque personalizado y pragmático nos permite ofrecer soluciones financieras que maximicen el valor para cada cliente.',
      role: 'M&A, finanzas corporativas y banca de inversión',
      yearsOfExperience: 'Años de experiencia',
    },
    services: {
      title: 'Nuestros Servicios',
      intro: 'Ofrecemos soluciones financieras integrales para ayudar a empresas a crecer y maximizar su valor. Nuestros servicios principales son:',
      included: 'Servicios incluidos',
      items: [
        {
          title: 'Finanzas Corporativas y Estrategia',
          description: 'Asesoramos a empresas en el financiamiento de sus negocios existentes y/o nuevos proyectos, diseñando estrategias financieras que maximizan el valor y optimizan la estructura de capital.',
          services: ['Valoración de empresas y modelos financieros.', 'Financiamiento y relacionamiento con instituciones financieras / bancarias.', 'Análisis de solvencia financiera, flujos de caja y desarrollo de nuevos negocios.'],
        },
        {
          title: 'Levantamiento de Capital',
          description: 'Brindamos apoyo integral para el levantamiento de capital, desde la preparación de teasers y decks de inversión hasta la negociación de contratos y la optimización de términos y condiciones para recibir inversión.',
          services: ['Preparación de documentos para inversores.', 'Asesoría en términos, condiciones, cláusulas y covenants.', 'Contacto con fondos de inversión y/o inversores estratégicos.'],
        },
        {
          title: 'Venture Capital',
          description: 'Ayudamos a startups y empresas en expansión a preparar sus modelos financieros, desarrollar métricas y a optimizar sus estrategias para atraer inversión de Capital de Riesgo.',
          services: ['Desarrollo de modelos financieros para startups.', 'Medición de métricas clave (KPI’s).', 'Contacto y captación de fondos con VC’s.'],
        },
        {
          title: 'Mergers and Acquisitions',
          description: 'Asesoramos en todo el proceso de fusiones y adquisiciones, gestionando las negociaciones y estructurando las operaciones de manera eficiente y profesional.',
          services: ['Presentación de fondos de Private Equity o inversores estratégicos.', 'Valuación, modelos financieros, estructuración, y cierre de acuerdos.', 'Negociación con todas las partes involucradas.'],
        },
      ],
    },
    brands: {
      title: 'Algunos de nuestros Clientes',
    },
    bannerCta: {
      title: 'Impulsá el crecimiento de tu empresa',
      text: 'Conversemos sobre tu próximo paso: financiamiento, levantamiento de capital o una operación de M&A.',
      cta: 'Solicitá una consulta personalizada',
    },
    whyCompany: {
      title: 'Por Qué Elegirnos',
      text: 'Nuestra experiencia, red de contactos y enfoque orientado a resultados nos permiten ofrecer un servicio de alto valor para nuestros clientes. Adaptamos nuestras soluciones a las necesidades específicas de cada empresa, asegurando un crecimiento sostenible y rentable.',
      differentiators: 'Puntos diferenciadores',
      reasons: [
        'Adaptabilidad a entornos dinámicos.',
        'Amplia experiencia internacional.',
        'Red de contactos estratégicos.',
        'Foco en resultados medibles.',
      ],
    },
    contact: {
      title: 'Contacto',
      text: 'Nos encantaría ayudarte a alcanzar tus objetivos financieros. Escribínos para solicitar una consulta personalizada.',
      nameLabel: 'Nombre y apellido',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      phoneLabel: 'Teléfono',
      countryLabel: 'País',
      countryPlaceholder: 'Desde dónde nos escribís',
      optional: '(opcional)',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Contanos brevemente en qué podemos ayudarte',
      nameRequired: 'Ingresá tu nombre',
      emailRequired: 'Ingresá tu email',
      messageRequired: 'Escribí tu mensaje',
      success: '¡Mensaje enviado! Te vamos a responder a la brevedad.',
      error: 'No pudimos enviar tu mensaje. Probá de nuevo o escribínos directamente por email.',
      submit: 'Enviar',
      submitting: 'Enviando...',
    },
  },
  en: {
    nav: {
      aboutUs: 'About Us',
      services: 'Services',
      whyCompany: 'Why Orellana Capital',
      contact: 'Contact',
      toggleNavigation: 'Toggle navigation',
      language: 'Language',
    },
    hero: {
      title: 'M&A, Corporate Finance and Investment Banking',
      subtitle: 'Over 15 years of experience driving your business growth with Strategic Financial Solutions',
      cta: 'Discover how we can help you',
    },
    aboutUs: {
      title: 'About Us',
      paragraph1: 'We are a firm specialized in strategic financial advisory, led by Alejandro Hughes, a professional with over 15 years of experience in M&A, corporate finance, investment banking and business management.',
      paragraph2: 'Throughout his career, Alejandro has successfully led numerous investment rounds, complex negotiations and acquisitions, both locally and internationally. With a strong network in the financial sector, his experience spans markets such as Uruguay, Spain, Australia and other regions, giving him a global perspective on every transaction.',
      academicLabel: 'Academic activity',
      academic: 'Professor of Mergers and Acquisitions at the School of Business and Economics of Universidad de Montevideo.',
      paragraph3: 'Our personalized and pragmatic approach allows us to deliver financial solutions that maximize value for every client.',
      role: 'M&A, corporate finance and investment banking',
      yearsOfExperience: 'Years of experience',
    },
    services: {
      title: 'Our Services',
      intro: 'We offer comprehensive financial solutions to help companies grow and maximize their value. Our core services are:',
      included: 'Included services',
      items: [
        {
          title: 'Corporate Finance and Strategy',
          description: 'We advise companies on financing their existing businesses and/or new projects, designing financial strategies that maximize value and optimize their capital structure.',
          services: ['Company valuation and financial modeling.', 'Financing and relationship management with financial / banking institutions.', 'Financial solvency and cash flow analysis, and new business development.'],
        },
        {
          title: 'Capital Raising',
          description: 'We provide end-to-end support for raising capital, from preparing teasers and investment decks to negotiating contracts and optimizing the terms and conditions of the investment.',
          services: ['Preparation of investor documents.', 'Advice on terms, conditions, clauses and covenants.', 'Outreach to investment funds and/or strategic investors.'],
        },
        {
          title: 'Venture Capital',
          description: 'We help startups and scale-ups build their financial models, develop metrics and optimize their strategies to attract Venture Capital investment.',
          services: ['Financial modeling for startups.', 'Tracking of key metrics (KPIs).', 'Outreach and fundraising with VCs.'],
        },
        {
          title: 'Mergers and Acquisitions',
          description: 'We advise throughout the entire mergers and acquisitions process, managing negotiations and structuring transactions efficiently and professionally.',
          services: ['Introductions to Private Equity funds or strategic investors.', 'Valuation, financial modeling, structuring and deal closing.', 'Negotiation with all parties involved.'],
        },
      ],
    },
    brands: {
      title: 'Some of our Clients',
    },
    bannerCta: {
      title: 'Drive your company’s growth',
      text: 'Let’s talk about your next step: financing, capital raising or an M&A transaction.',
      cta: 'Request a personalized consultation',
    },
    whyCompany: {
      title: 'Why Choose Us',
      text: 'Our experience, network and results-driven approach allow us to deliver high-value service to our clients. We tailor our solutions to the specific needs of each company, ensuring sustainable and profitable growth.',
      differentiators: 'What sets us apart',
      reasons: [
        'Adaptability to dynamic environments.',
        'Extensive international experience.',
        'Strategic network of contacts.',
        'Focus on measurable results.',
      ],
    },
    contact: {
      title: 'Contact',
      text: 'We would love to help you achieve your financial goals. Write to us to request a personalized consultation.',
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      phoneLabel: 'Phone',
      countryLabel: 'Country',
      countryPlaceholder: 'Where are you writing from',
      optional: '(optional)',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly tell us how we can help you',
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter your email',
      messageRequired: 'Please write your message',
      success: 'Message sent! We will get back to you shortly.',
      error: 'We couldn’t send your message. Please try again or email us directly.',
      submit: 'Send',
      submitting: 'Sending...',
    },
  },
};

export type Translations = typeof translations.es;
