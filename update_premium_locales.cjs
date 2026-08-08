const fs = require('fs');
const path = require('path');

const localesPath = path.join(process.cwd(), 'src/i18n/locales');

const en = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    certificates: "Certificates",
    experience: "Experience",
    contact: "Contact",
    language: "Language"
  },
  hero: {
    badges: {
      digital_developer: "Digital Developer",
      mobile_apps: "Mobile Apps",
      web_development: "Web Development"
    },
    subtitle: "Mobile and Web Engineer based in Morocco.<br className=\"hidden sm:block\" />Crafting native Android experiences with Kotlin and seamless cross-platform interfaces using Flutter and React.",
    buttons: {
      download_cv: "Download CV",
      view_projects: "View Projects"
    },
    stats: {
      years_training: "Years of Training",
      featured_projects: "Featured Projects",
      technologies: "Technologies"
    }
  },
  about: {
    section_title: "About Me",
    badge: "Profile",
    p1_start: "I recently graduated in ",
    p1_strong: "Digital Development (Mobile Applications)",
    p1_end: " from the Cité des Métiers et des Compétences.",
    p2_start: "I specialize in architecting clean, scalable, and high-performance applications, primarily using ",
    p2_strong: "Kotlin, Flutter, and React.",
    highlights: {
      expertise: "Expertise",
      expertise_val: "Mobile Engineering (Android, Flutter, Kotlin)",
      location: "Location",
      location_val: "Berrechid, Casablanca-Settat, Morocco",
      background: "Background",
      background_val: "CMC Graduate",
      availability: "Availability",
      availability_val: "Open to pre-employment internships and junior roles"
    }
  },
  skills: {
    section_title: "Technical Skills",
    badge: "Stack",
    categories: {
      frontend: "Frontend",
      mobile: "Mobile",
      backend: "Backend",
      tools: "Tools",
      professional: "Professional"
    },
    items: {
      ui_ux_design: "UI/UX Design",
      responsive_design: "Responsive Design",
      clean_architecture: "Clean Architecture",
      problem_solving: "Problem Solving",
      teamwork: "Teamwork",
      communication: "Communication",
      leadership: "Leadership"
    }
  },
  projects: {
    section_title: "Featured Projects",
    badge: "Portfolio",
    subtitle: "A curated selection of my latest work in mobile and web engineering",
    filters: {
      all: "All",
      mobile: "Mobile",
      web: "Web",
      platform: "Platform",
      ecommerce: "E-commerce"
    },
    items: {
      darna_clean: {
        description: "An Android application seamlessly connecting homeowners with vetted cleaning professionals.",
        features: [
          "Service booking and scheduling",
          "Modern UI built with Jetpack Compose",
          "Firebase backend integration",
          "Real-time booking tracking"
        ],
        case_problem: "Finding reliable home cleaning services in Morocco relies heavily on word-of-mouth, lacking a standard for verifying quality or ease of booking.",
        case_solution: "I architected a mobile booking app that unifies scheduling, reviews, and provider tracking into a single seamless experience.",
        kf1_title: "Smart Scheduling",
        kf1_desc: "A booking system with availability management and intelligent conflict resolution.",
        kf2_title: "Provider Profiles",
        kf2_desc: "Professional profiles showcasing ratings, verified reviews, and service history.",
        kf3_title: "Real-time Tracking",
        kf3_desc: "Live status updates spanning from confirmation to service completion.",
        learnings: [
          "Managing complex state using Jetpack Compose",
          "Synchronizing real-time data via Firebase",
          "Designing an intuitive and reliable booking flow"
        ],
        role: "Full-Stack Mobile Engineer"
      },
      allo_brikol: {
        description: "A dual-platform marketplace connecting customers with local home repair and maintenance experts.",
        features: [
          "Advanced search and booking system",
          "Transparent ratings and reviews",
          "Provider profile management",
          "Real-time authentication"
        ],
        case_problem: "Homeowners frequently struggle to find trustworthy service providers for urgent repairs without reliable referrals.",
        case_solution: "I contributed to building a Flutter app for customers and a React dashboard for providers, integrating a transparent review and pricing system.",
        kf1_title: "Dual Platform",
        kf1_desc: "A mobile Flutter application for clients paired with a React web dashboard for providers.",
        kf2_title: "Smart Matching",
        kf2_desc: "Connecting customers with the right professionals based on location, skills, and ratings.",
        kf3_title: "Review System",
        kf3_desc: "A public rating and review system ensuring service accountability.",
        learnings: [
          "Architecting a full-stack solution backed by a Laravel API",
          "Executing cross-platform development with Flutter and React",
          "Implementing robust search and filtering logic"
        ],
        role: "Full-Stack Engineer"
      },
      servegx: {
        description: "A mobile monitoring tool delivering real-time insights into server infrastructure health.",
        features: [
          "CPU, RAM, Disk & Network monitoring",
          "Real-time dashboard with live metrics",
          "Customizable alerts and notifications",
          "Historical analytics and reporting"
        ],
        case_problem: "System administrators need a lightweight solution to monitor server metrics on the go, without relying on heavy desktop dashboards.",
        case_solution: "I built an Android app that visualizes live system metrics and triggers push notifications for critical alerts.",
        kf1_title: "Live Metrics",
        kf1_desc: "Real-time monitoring of CPU, RAM, disk, and network with auto-refresh.",
        kf2_title: "Alert System",
        kf2_desc: "Configurable, threshold-based alerts integrated with push notifications.",
        kf3_title: "Analytics Dashboard",
        kf3_desc: "Historical data visualization highlighting trends and anomalies.",
        learnings: [
          "Streaming and rendering real-time data efficiently",
          "Designing responsive Android dashboards",
          "Interfacing with system-level metrics"
        ],
        role: "Mobile Engineer"
      },
      luxeldo: {
        description: "A premium e-commerce storefront for a Moroccan retailer specializing in Swiss-made luxury watches.",
        features: [
          "Premium product catalog",
          "Responsive, high-end design",
          "Brand identity integration",
          "SEO-optimized storefront"
        ],
        case_problem: "The brand required an online presence that matched the exclusivity of their physical products while expanding their reach.",
        case_solution: "I designed and developed their e-commerce platform, ensuring strict brand consistency and flawless product presentation.",
        kf1_title: "Premium Design",
        kf1_desc: "A minimal, elegant UI showcasing high-quality imagery and refined typography.",
        kf2_title: "Brand Consistency",
        kf2_desc: "A cohesive visual identity reflecting the physical luxury retail experience.",
        kf3_title: "Performance",
        kf3_desc: "Optimized load speeds and structured data ensuring strong SEO visibility.",
        learnings: [
          "Translating luxury brand guidelines into digital experiences",
          "Applying high-conversion e-commerce UX practices",
          "Optimizing product pages for SEO"
        ],
        role: "Web Engineer & Brand Marketing"
      }
    },
    case_study: "Case Study",
    problem: "The Problem",
    solution: "The Solution",
    key_features: "Key Features",
    learnings: "What I Learned",
    role: "Role",
    timeline: "Timeline",
    technologies: "Technologies",
    status_in_progress: "In Progress",
    status_completed: "Completed"
  },
  certificates: {
    section_title: "Certificates",
    badge: "Achievements",
    subtitle: "Professional milestones and continuous learning",
    issued: "Issued",
    view_credential: "View Credential",
    items: {
      "ai_capabilities": { title: "AI Fluency: AI Capabilities & Limitations" },
      "claude_code": { title: "Claude Code 101", date: "May 8, 2026" },
      "ai-capabilities": { title: "AI Fluency: AI Capabilities & Limitations" },
      "claude-code-101": { title: "Claude Code 101" }
    },
    buttons: {
      view_credential: "View Credential"
    }
  },
  experience: {
    section_title: "Experience & Education",
    badge: "Journey",
    subtitle: "My professional background and academic path",
    types: {
      work: "Work",
      education: "Education",
      certification: "Certification"
    },
    status: {
      current: "Current",
      completed: "Completed",
      planned: "Planned"
    },
    items: {
      "cmc-diploma": {
        title: "Digital Development — Mobile Applications",
        organization: "Cité des Métiers et des Compétences",
        date: "Sep 2024 — Jul 2026",
        location: "Casablanca-Settat, Morocco",
        description: "Specialized technician diploma in Digital Development with a core focus on Mobile Engineering.",
        responsibilities: [
          "Native development using Kotlin, Java, Flutter, and Dart",
          "Deep dive into Android SDK & Jetpack Compose",
          "Data management with Firebase, REST APIs, SQLite, and MySQL",
          "Foundational web tech: HTML, CSS, JavaScript, Git"
        ]
      },
      "zyne-officiel-new": {
        title: "Digital Marketing Manager",
        organization: "ZYNE OFFICIEL",
        date: "Nov 2023 — Jun 2024",
        location: "Casablanca, Morocco",
        description: "Orchestrated brand marketing initiatives and digital campaigns.",
        responsibilities: [
          "Managed key social media channels (Instagram, TikTok)",
          "Produced high-quality visual content and campaign assets",
          "Executed targeted digital marketing campaigns",
          "Analyzed engagement and reach metrics",
          "Elevated the brand's online presence"
        ]
      },
      "luxeldo-marketing": {
        title: "Head of Brand Marketing",
        organization: "LUXELDO",
        date: "2022 — Present",
        location: "Casablanca-Settat, Morocco",
        description: "Spearheading digital marketing and brand strategy to drive e-commerce growth.",
        responsibilities: [
          "Managing the e-commerce platform and executing technical SEO",
          "Directing social media campaigns and digital content strategies",
          "Cultivating partnerships with local influencers and media entities"
        ]
      },
      "bac-sciences": {
        title: "Baccalauréat in Physical Sciences",
        organization: "Lycée Ibn Rochd Berrechid",
        date: "Sep 2022 — Jun 2023",
        location: "Berrechid, Morocco",
        description: "High school diploma with a focus on Physical Sciences.",
        responsibilities: []
      }
    },
    filters: {
      all: "All",
      work: "Work",
      education: "Education",
      certification: "Certifications"
    }
  },
  contact: {
    section_title: "Get in Touch",
    badge: "Contact",
    subtitle: "Let's explore how we can collaborate on your next project.",
    email: "Email",
    location: "Location",
    social: "Profiles",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send Request",
    form_sending: "Sending...",
    success_title: "Message Sent",
    success_desc: "Thanks for reaching out. I'll get back to you shortly.",
    error_title: "Something went wrong",
    error_desc: "Unable to send your message. Please try again or email me directly.",
    try_again: "Try Again",
    form: {
      title: "Send a Request",
      subtitle: "Let's discuss your next project.",
      name_placeholder: "Name",
      email_placeholder: "Email address",
      subject_placeholder: "Subject",
      message_placeholder: "How can I help you?",
      send_button: "Send Request",
      sending: "Sending...",
      sent: "Sent",
      privacy_notice: "Your information stays private",
      success_title: "Message sent successfully",
      success_message: "Thanks for reaching out. I'll get back to you shortly.",
      error_title: "Sending Failed",
      error_message: "Something went wrong. Please try again later."
    },
    info_title: "Let's build something great.",
    info_description: "I'm currently seeking new opportunities. Whether you have a project idea, a role, or just want to connect, my inbox is always open.",
    email_label: "Email",
    phone_label: "Phone",
    location_label: "Location",
    copy: "Copy",
    copied: "Copied",
    available_work: "AVAILABLE FOR WORK",
    available_desc: "Open to remote opportunities and on-site collaboration."
  },
  footer: {
    rights: "All rights reserved.",
    built_with: "Built with",
    by: "by"
  }
};

const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    certificates: "Certificats",
    experience: "Expérience",
    contact: "Contact",
    language: "Langue"
  },
  hero: {
    badges: {
      digital_developer: "Développeur Digital",
      mobile_apps: "Applications Mobiles",
      web_development: "Développement Web"
    },
    subtitle: "Ingénieur Mobile et Web basé au Maroc.<br className=\"hidden sm:block\" />Je conçois des expériences Android natives en Kotlin et des interfaces multiplateformes fluides avec Flutter et React.",
    buttons: {
      download_cv: "Télécharger le CV",
      view_projects: "Voir les Projets"
    },
    stats: {
      years_training: "Années de Formation",
      featured_projects: "Projets Phares",
      technologies: "Technologies"
    }
  },
  about: {
    section_title: "À propos",
    badge: "Profil",
    p1_start: "Récemment diplômé en ",
    p1_strong: "Développement Digital (Applications Mobiles)",
    p1_end: " de la Cité des Métiers et des Compétences.",
    p2_start: "Je suis spécialisé dans la conception d'applications évolutives, propres et performantes, en m'appuyant principalement sur ",
    p2_strong: "Kotlin, Flutter et React.",
    highlights: {
      expertise: "Expertise",
      expertise_val: "Ingénierie Mobile (Android, Flutter, Kotlin)",
      location: "Localisation",
      location_val: "Berrechid, Casablanca-Settat, Maroc",
      background: "Parcours",
      background_val: "Diplômé de la CMC",
      availability: "Disponibilité",
      availability_val: "Ouvert aux stages de pré-embauche et aux postes junior"
    }
  },
  skills: {
    section_title: "Compétences Techniques",
    badge: "Stack",
    categories: {
      frontend: "Frontend",
      mobile: "Mobile",
      backend: "Backend",
      tools: "Outils",
      professional: "Professionnel"
    },
    items: {
      ui_ux_design: "Design UI/UX",
      responsive_design: "Design Responsive",
      clean_architecture: "Clean Architecture",
      problem_solving: "Résolution de problèmes",
      teamwork: "Travail d'équipe",
      communication: "Communication",
      leadership: "Leadership"
    }
  },
  projects: {
    section_title: "Projets Phares",
    badge: "Portfolio",
    subtitle: "Une sélection pointue de mes dernières réalisations en ingénierie mobile et web.",
    filters: {
      all: "Tous",
      mobile: "Mobile",
      web: "Web",
      platform: "Plateforme",
      ecommerce: "E-commerce"
    },
    items: {
      darna_clean: {
        description: "Une application Android connectant de manière fluide les propriétaires avec des professionnels du nettoyage certifiés.",
        features: [
          "Réservation et planification de services",
          "Interface moderne construite avec Jetpack Compose",
          "Intégration backend Firebase",
          "Suivi des réservations en temps réel"
        ],
        case_problem: "Au Maroc, trouver des services de nettoyage fiables repose souvent sur le bouche-à-oreille, sans standard clair pour vérifier la qualité ou faciliter la réservation.",
        case_solution: "J'ai conçu une application mobile unifiant la planification, les avis et le suivi des prestataires au sein d'une expérience unique et fluide.",
        kf1_title: "Planification Intelligente",
        kf1_desc: "Système de réservation incluant la gestion des disponibilités et la résolution intelligente des conflits.",
        kf2_title: "Profils des Prestataires",
        kf2_desc: "Profils professionnels mettant en valeur les évaluations, les avis vérifiés et l'historique des services.",
        kf3_title: "Suivi en Temps Réel",
        kf3_desc: "Mises à jour de statut en direct, de la confirmation jusqu'à l'achèvement de la prestation.",
        learnings: [
          "Gestion d'états complexes avec Jetpack Compose",
          "Synchronisation de données en temps réel via Firebase",
          "Conception d'un flux de réservation intuitif et fiable"
        ],
        role: "Ingénieur Mobile Full-Stack"
      },
      allo_brikol: {
        description: "Une place de marché multiplateforme connectant les clients à des experts locaux en réparation et entretien de l'habitat.",
        features: [
          "Système de recherche et de réservation avancé",
          "Évaluations et avis transparents",
          "Gestion des profils d'artisans",
          "Authentification en temps réel"
        ],
        case_problem: "Les propriétaires peinent souvent à trouver des artisans de confiance pour des réparations urgentes sans recommandations directes.",
        case_solution: "J'ai contribué au développement d'une application Flutter pour les clients et d'un tableau de bord React pour les artisans, intégrant un système de tarification et d'avis transparent.",
        kf1_title: "Double Plateforme",
        kf1_desc: "Application mobile Flutter pour les clients couplée à un tableau de bord web React pour les artisans.",
        kf2_title: "Mise en Relation Intelligente",
        kf2_desc: "Connexion des clients avec les professionnels adéquats selon leur localisation, leurs compétences et leurs évaluations.",
        kf3_title: "Système d'Avis",
        kf3_desc: "Système de notation et d'avis public garantissant la responsabilité des prestataires.",
        learnings: [
          "Architecture d'une solution full-stack adossée à une API Laravel",
          "Exécution d'un développement multiplateforme avec Flutter et React",
          "Implémentation d'une logique de recherche et de filtrage robuste"
        ],
        role: "Ingénieur Full-Stack"
      },
      servegx: {
        description: "Un outil de supervision mobile offrant des insights en temps réel sur la santé des infrastructures serveur.",
        features: [
          "Supervision CPU, RAM, Disque et Réseau",
          "Tableau de bord en temps réel avec métriques en direct",
          "Alertes et notifications personnalisables",
          "Analyses historiques et rapports"
        ],
        case_problem: "Les administrateurs système manquent d'une solution légère pour surveiller les métriques serveur en mobilité, sans dépendre de lourds tableaux de bord sur ordinateur.",
        case_solution: "J'ai construit une application Android visualisant les métriques système en direct et déclenchant des notifications push pour les alertes critiques.",
        kf1_title: "Métriques en Direct",
        kf1_desc: "Surveillance en temps réel du CPU, de la RAM, du disque et du réseau avec rafraîchissement automatique.",
        kf2_title: "Système d'Alertes",
        kf2_desc: "Alertes configurables basées sur des seuils, intégrées aux notifications push.",
        kf3_title: "Tableau de Bord Analytique",
        kf3_desc: "Visualisation de données historiques mettant en évidence les tendances et anomalies.",
        learnings: [
          "Streaming et rendu efficace de données en temps réel",
          "Conception de tableaux de bord Android responsives",
          "Interfaçage avec des métriques de niveau système"
        ],
        role: "Ingénieur Mobile"
      },
      luxeldo: {
        description: "Une vitrine e-commerce premium pour un détaillant marocain spécialisé dans les montres de luxe suisses.",
        features: [
          "Catalogue de produits haut de gamme",
          "Design responsive et premium",
          "Intégration de l'identité de marque",
          "Vitrine optimisée pour le SEO"
        ],
        case_problem: "La marque nécessitait une présence en ligne reflétant l'exclusivité de ses produits physiques tout en élargissant sa clientèle.",
        case_solution: "J'ai conçu et développé leur plateforme e-commerce en garantissant une cohérence de marque stricte et une présentation des produits irréprochable.",
        kf1_title: "Design Premium",
        kf1_desc: "Une interface minimaliste et élégante mettant en valeur des visuels haute définition et une typographie raffinée.",
        kf2_title: "Cohérence de la Marque",
        kf2_desc: "Une identité visuelle harmonieuse reflétant l'expérience client en boutique de luxe.",
        kf3_title: "Performance",
        kf3_desc: "Temps de chargement optimisés et données structurées assurant une excellente visibilité SEO.",
        learnings: [
          "Traduction des directives d'une marque de luxe en expériences digitales",
          "Application de pratiques UX e-commerce à fort taux de conversion",
          "Optimisation SEO avancée des pages produits"
        ],
        role: "Ingénieur Web & Brand Marketing"
      }
    },
    case_study: "Étude de Cas",
    problem: "Le Problème",
    solution: "La Solution",
    key_features: "Fonctionnalités Clés",
    learnings: "Ce que j'ai appris",
    role: "Rôle",
    timeline: "Période",
    technologies: "Technologies",
    status_in_progress: "En Cours",
    status_completed: "Terminé"
  },
  certificates: {
    section_title: "Certificats",
    badge: "Réalisations",
    subtitle: "Étapes professionnelles et apprentissage continu",
    issued: "Délivré le",
    view_credential: "Voir le Certificat",
    items: {
      "ai_capabilities": { title: "Maîtrise de l'IA : Capacités et Limites" },
      "claude_code": { title: "Claude Code 101", date: "8 Mai 2026" },
      "ai-capabilities": { title: "Maîtrise de l'IA : Capacités et Limites" },
      "claude-code-101": { title: "Claude Code 101" }
    },
    buttons: {
      view_credential: "Voir le Certificat"
    }
  },
  experience: {
    section_title: "Expérience & Formation",
    badge: "Parcours",
    subtitle: "Mon évolution professionnelle et académique",
    types: {
      work: "Travail",
      education: "Éducation",
      certification: "Certification"
    },
    status: {
      current: "Actuel",
      completed: "Terminé",
      planned: "Prévu"
    },
    items: {
      "cmc-diploma": {
        title: "Développement Digital — Applications Mobiles",
        organization: "Cité des Métiers et des Compétences",
        date: "Sep 2024 — Juil 2026",
        location: "Casablanca-Settat, Maroc",
        description: "Diplôme de technicien spécialisé en Développement Digital axé sur l'Ingénierie Mobile.",
        responsibilities: [
          "Développement natif avec Kotlin, Java, Flutter, et Dart",
          "Approfondissement du SDK Android & Jetpack Compose",
          "Gestion des données avec Firebase, APIs REST, SQLite, et MySQL",
          "Technologies web fondamentales : HTML, CSS, JavaScript, Git"
        ]
      },
      "zyne-officiel-new": {
        title: "Digital Marketing Manager",
        organization: "ZYNE OFFICIEL",
        date: "Nov 2023 — Juin 2024",
        location: "Casablanca, Maroc",
        description: "Orchestration d'initiatives marketing de marque et de campagnes digitales.",
        responsibilities: [
          "Gestion des canaux sociaux clés (Instagram, TikTok)",
          "Production de contenus visuels de haute qualité et d'éléments de campagne",
          "Exécution de campagnes de marketing digital ciblées",
          "Analyse des métriques d'engagement et de portée",
          "Amélioration globale de la présence en ligne de la marque"
        ]
      },
      "luxeldo-marketing": {
        title: "Head of Brand Marketing",
        organization: "LUXELDO",
        date: "2022 — Présent",
        location: "Casablanca-Settat, Maroc",
        description: "Pilotage du marketing digital et de la stratégie de marque pour stimuler la croissance e-commerce.",
        responsibilities: [
          "Gestion de la plateforme e-commerce et exécution du SEO technique",
          "Direction des campagnes réseaux sociaux et des stratégies de contenu digital",
          "Développement de partenariats avec des influenceurs locaux et des entités médiatiques"
        ]
      },
      "bac-sciences": {
        title: "Baccalauréat Sciences Physiques",
        organization: "Lycée Ibn Rochd Berrechid",
        date: "Sep 2022 — Juin 2023",
        location: "Berrechid, Maroc",
        description: "Diplôme d'études secondaires avec spécialisation en Sciences Physiques.",
        responsibilities: []
      }
    },
    filters: {
      all: "Tous",
      work: "Travail",
      education: "Éducation",
      certification: "Certifications"
    }
  },
  contact: {
    section_title: "Me Contacter",
    badge: "Contact",
    subtitle: "Explorons comment nous pouvons collaborer sur votre prochain projet.",
    email: "Email",
    location: "Localisation",
    social: "Réseaux",
    form_name: "Nom",
    form_email: "Email",
    form_message: "Message",
    form_send: "Envoyer la demande",
    form_sending: "Envoi...",
    success_title: "Message Envoyé",
    success_desc: "Merci de m'avoir contacté. Je vous répondrai très prochainement.",
    error_title: "Une erreur est survenue",
    error_desc: "Impossible d'envoyer votre message. Veuillez réessayer ou m'écrire directement par email.",
    try_again: "Réessayer",
    form: {
      title: "Envoyer une demande",
      subtitle: "Discutons de votre prochain projet.",
      name_placeholder: "Nom",
      email_placeholder: "Adresse e-mail",
      subject_placeholder: "Sujet",
      message_placeholder: "Comment puis-je vous aider ?",
      send_button: "Envoyer",
      sending: "Envoi...",
      sent: "Envoyé",
      privacy_notice: "Vos informations restent privées",
      success_title: "Message envoyé avec succès",
      success_message: "Merci pour votre message. Je vous répondrai sous peu.",
      error_title: "Échec de l'envoi",
      error_message: "Une erreur est survenue. Veuillez réessayer plus tard."
    },
    info_title: "Construisons l'avenir ensemble.",
    info_description: "Je suis actuellement à l'écoute de nouvelles opportunités. Qu'il s'agisse d'une idée de projet, d'un poste, ou d'une simple prise de contact, ma boîte de réception est toujours ouverte.",
    email_label: "Email",
    phone_label: "Téléphone",
    location_label: "Lieu",
    copy: "Copier",
    copied: "Copié",
    available_work: "DISPONIBLE",
    available_desc: "Ouvert aux opportunités à distance et aux collaborations sur place."
  },
  footer: {
    rights: "Tous droits réservés.",
    built_with: "Créé avec",
    by: "par"
  }
};

const ar = {
  nav: {
    home: "الرئيسية",
    about: "نبذة عني",
    skills: "المهارات",
    projects: "المشاريع",
    certificates: "الشهادات",
    experience: "الخبرات",
    contact: "تواصل معي",
    language: "اللغة"
  },
  hero: {
    badges: {
      digital_developer: "مطور رقمي",
      mobile_apps: "تطبيقات الهاتف",
      web_development: "تطوير الويب"
    },
    subtitle: "مهندس برمجيات لتطبيقات الهاتف والويب، مقيم في المغرب.<br className=\"hidden sm:block\" />أبتكر تجارب أندرويد أصلية باستخدام Kotlin، وواجهات سلسة متعددة المنصات عبر Flutter و React.",
    buttons: {
      download_cv: "تحميل السيرة الذاتية",
      view_projects: "عرض المشاريع"
    },
    stats: {
      years_training: "سنوات من التكوين",
      featured_projects: "مشاريع منجزة",
      technologies: "تقنيات وخبرات"
    }
  },
  about: {
    section_title: "نبذة عني",
    badge: "الملف الشخصي",
    p1_start: "تخرجت حديثاً في تخصص ",
    p1_strong: "التطوير الرقمي (تطبيقات الهاتف المحمول)",
    p1_end: " من مدينة المهن والكفاءات.",
    p2_start: "متخصص في هندسة وبناء تطبيقات قابلة للتطوير، نظيفة وعالية الأداء، اعتماداً بشكل رئيسي على تقنيات ",
    p2_strong: "Kotlin و Flutter و React.",
    highlights: {
      expertise: "التخصص",
      expertise_val: "هندسة تطبيقات الهاتف (Android, Flutter, Kotlin)",
      location: "الموقع",
      location_val: "برشيد، الدار البيضاء - سطات، المغرب",
      background: "الخلفية الأكاديمية",
      background_val: "خريج مدينة المهن والكفاءات",
      availability: "التوفر",
      availability_val: "متاح للتدريب قبل التوظيف وفرص العمل المبتدئة"
    }
  },
  skills: {
    section_title: "المهارات التقنية",
    badge: "التقنيات",
    categories: {
      frontend: "واجهة المستخدم",
      mobile: "الهاتف المحمول",
      backend: "تطوير الخوادم",
      tools: "الأدوات",
      professional: "مهارات مهنية"
    },
    items: {
      ui_ux_design: "تصميم تجربة المستخدم (UI/UX)",
      responsive_design: "التصميم المتجاوب",
      clean_architecture: "البنية النظيفة",
      problem_solving: "حل المشكلات",
      teamwork: "العمل الجماعي",
      communication: "التواصل الفعال",
      leadership: "القيادة والمبادرة"
    }
  },
  projects: {
    section_title: "مشاريع متميزة",
    badge: "معرض الأعمال",
    subtitle: "مجموعة مختارة بعناية من أحدث أعمالي في هندسة الويب وتطبيقات الهاتف.",
    filters: {
      all: "الكل",
      mobile: "موبايل",
      web: "ويب",
      platform: "منصة",
      ecommerce: "تجارة إلكترونية"
    },
    items: {
      darna_clean: {
        description: "تطبيق أندرويد يربط بسلاسة بين أصحاب المنازل ومحترفي التنظيف الموثوقين.",
        features: [
          "حجز وجدولة مرنة للخدمات",
          "واجهة مستخدم عصرية مبنية بـ Jetpack Compose",
          "تكامل خلفي متين مع Firebase",
          "تتبع فوري لحالة الحجز"
        ],
        case_problem: "يعتمد العثور على خدمات تنظيف منزلية موثوقة في المغرب غالباً على التوصيات الشفوية، مما يفتقر إلى معايير واضحة للتحقق من الجودة أو سهولة الحجز.",
        case_solution: "صممت وهندست تطبيق حجز متكامل يجمع بين الجدولة، التقييمات، وتتبع مزودي الخدمة في تجربة مستخدم واحدة ومبسطة.",
        kf1_title: "جدولة ذكية",
        kf1_desc: "نظام حجز يتضمن إدارة التوافر وحل تعارض المواعيد بذكاء.",
        kf2_title: "ملفات تعريف مزودي الخدمة",
        kf2_desc: "ملفات احترافية تعرض التقييمات، المراجعات الموثقة، وسجل الخدمات.",
        kf3_title: "تتبع في الوقت الفعلي",
        kf3_desc: "تحديثات حية ومستمرة للحالة بدءاً من التأكيد وحتى إتمام الخدمة.",
        learnings: [
          "إدارة الحالات المعقدة (State Management) باستخدام Jetpack Compose",
          "مزامنة البيانات في الوقت الفعلي عبر Firebase",
          "تصميم مسار حجز بديهي وموثوق"
        ],
        role: "مهندس تطبيقات الهاتف (Full-Stack)"
      },
      allo_brikol: {
        description: "منصة سوق مزدوجة تربط العملاء بخبراء الصيانة والإصلاحات المنزلية المحليين.",
        features: [
          "نظام بحث وحجز متقدم",
          "تقييمات ومراجعات شفافة",
          "إدارة احترافية لملفات الحرفيين",
          "مصادقة في الوقت الفعلي"
        ],
        case_problem: "يواجه أصحاب المنازل صعوبة متكررة في العثور على مزودي خدمات جديرين بالثقة للإصلاحات العاجلة دون الاعتماد على التوصيات المباشرة.",
        case_solution: "ساهمت في بناء تطبيق Flutter للعملاء ولوحة تحكم React لمزودي الخدمات، مع دمج نظام تسعير وتقييم يتميز بالشفافية.",
        kf1_title: "منصة مزدوجة",
        kf1_desc: "تطبيق Flutter محمول للعملاء مقترن بلوحة تحكم ويب React لمزودي الخدمات.",
        kf2_title: "مطابقة ذكية",
        kf2_desc: "ربط العملاء بالمحترفين المناسبين بناءً على الموقع الجغرافي، المهارات، والتقييمات.",
        kf3_title: "نظام التقييم",
        kf3_desc: "نظام تقييم عام يضمن جودة الخدمات ومسؤولية المزودين.",
        learnings: [
          "هندسة حل برمجي متكامل (Full-Stack) مدعوم بـ API من Laravel",
          "تنفيذ تطوير متعدد المنصات باستخدام Flutter و React",
          "تطبيق منطق بحث وتصفية متقدم"
        ],
        role: "مهندس Full-Stack"
      },
      servegx: {
        description: "أداة مراقبة عبر الهاتف تقدم رؤى دقيقة وفي الوقت الفعلي حول أداء وصحة الخوادم.",
        features: [
          "مراقبة وحدة المعالجة المركزية (CPU)، الذاكرة (RAM)، القرص، والشبكة",
          "لوحة تحكم فورية مع مقاييس حية",
          "إشعارات وتنبيهات قابلة للتخصيص",
          "تحليلات تاريخية وتقارير أداء"
        ],
        case_problem: "يفتقر مسؤولو الأنظمة إلى حل خفيف لمراقبة مقاييس الخوادم أثناء التنقل، دون الحاجة للجوء إلى لوحات التحكم الثقيلة على أجهزة الكمبيوتر.",
        case_solution: "قمت ببناء تطبيق أندرويد يعرض مقاييس النظام بشكل حي ويطلق إشعارات فورية عند تجاوز الحدود الحرجة.",
        kf1_title: "مقاييس حية",
        kf1_desc: "مراقبة فورية للموارد مع ميزة التحديث التلقائي المستمر.",
        kf2_title: "نظام التنبيهات",
        kf2_desc: "إعداد تنبيهات مخصصة مبنية على عتبات معينة مدعومة بإشعارات فورية.",
        kf3_title: "لوحة التحليلات",
        kf3_desc: "تصوير مرئي للبيانات التاريخية يكشف عن الاتجاهات والأعطال المحتملة.",
        learnings: [
          "بث وعرض البيانات الحية بكفاءة عالية",
          "تصميم لوحات تحكم أندرويد متجاوبة",
          "التعامل المباشر مع مقاييس مستوى النظام"
        ],
        role: "مهندس تطبيقات الهاتف"
      },
      luxeldo: {
        description: "واجهة متجر إلكتروني فاخرة لعلامة تجارية مغربية متخصصة في الساعات السويسرية الراقية.",
        features: [
          "كتالوج منتجات فاخر",
          "تصميم راقٍ ومتجاوب",
          "تكامل وثيق مع هوية العلامة التجارية",
          "متجر مُحسّن لمحركات البحث (SEO)"
        ],
        case_problem: "تطلبت العلامة التجارية حضوراً رقمياً يوازي حصرية منتجاتها المادية مع العمل على توسيع نطاق وصولها.",
        case_solution: "صممت وطورت منصة التجارة الإلكترونية الخاصة بهم، مع ضمان الاتساق التام للعلامة التجارية وتقديم عرض لا تشوبه شائبة للمنتجات.",
        kf1_title: "تصميم فاخر",
        kf1_desc: "واجهة مستخدم بسيطة وأنيقة تبرز مرئيات عالية الدقة وطباعة راقية.",
        kf2_title: "تناسق العلامة التجارية",
        kf2_desc: "هوية بصرية متماسكة تعكس تجربة التسوق الفاخرة في المتاجر الفعلية.",
        kf3_title: "الأداء المتميز",
        kf3_desc: "سرعات تحميل محسّنة وهيكلة بيانات دقيقة تضمن رؤية قوية في محركات البحث.",
        learnings: [
          "ترجمة معايير العلامات الفاخرة إلى تجارب رقمية",
          "تطبيق ممارسات تجربة المستخدم (UX) عالية التحويل في التجارة الإلكترونية",
          "التحسين المتقدم لصفحات المنتجات (SEO)"
        ],
        role: "مهندس ويب ومسؤول تسويق العلامة التجارية"
      }
    },
    case_study: "دراسة حالة",
    problem: "المشكلة",
    solution: "الحل",
    key_features: "المميزات الرئيسية",
    learnings: "ما تعلمته",
    role: "الدور",
    timeline: "الإطار الزمني",
    technologies: "التقنيات",
    status_in_progress: "قيد التطوير",
    status_completed: "مكتمل"
  },
  certificates: {
    section_title: "الشهادات",
    badge: "الإنجازات",
    subtitle: "محطات مهنية ومسار التعلم المستمر",
    issued: "تاريخ الإصدار",
    view_credential: "عرض الشهادة",
    items: {
      "ai_capabilities": { title: "إتقان الذكاء الاصطناعي: القدرات والحدود" },
      "claude_code": { title: "أساسيات Claude Code 101", date: "8 مايو 2026" },
      "ai-capabilities": { title: "إتقان الذكاء الاصطناعي: القدرات والحدود" },
      "claude-code-101": { title: "أساسيات Claude Code 101" }
    },
    buttons: {
      view_credential: "عرض الشهادة"
    }
  },
  experience: {
    section_title: "الخبرات والتعليم",
    badge: "المسيرة",
    subtitle: "الخلفية المهنية والمسار الأكاديمي",
    types: {
      work: "عمل",
      education: "تعليم",
      certification: "شهادة"
    },
    status: {
      current: "حالي",
      completed: "مكتمل",
      planned: "مخطط"
    },
    items: {
      "cmc-diploma": {
        title: "التطوير الرقمي — تطبيقات الهاتف",
        organization: "مدينة المهن والكفاءات",
        date: "سبتمبر 2024 — يوليو 2026",
        location: "الدار البيضاء-سطات، المغرب",
        description: "دبلوم تقني متخصص في التطوير الرقمي، مع تركيز أساسي على هندسة تطبيقات الهاتف.",
        responsibilities: [
          "تطوير التطبيقات الأصلية باستخدام Kotlin و Java و Flutter و Dart",
          "التعمق في بيئة Android SDK و Jetpack Compose",
          "إدارة البيانات عبر Firebase، REST APIs، SQLite، و MySQL",
          "تقنيات الويب الأساسية: HTML، CSS، JavaScript، و Git"
        ]
      },
      "zyne-officiel-new": {
        title: "مدير التسويق الرقمي",
        organization: "ZYNE OFFICIEL",
        date: "نوفمبر 2023 — يونيو 2024",
        location: "الدار البيضاء، المغرب",
        description: "تنسيق وإدارة مبادرات تسويق العلامة التجارية والحملات الرقمية.",
        responsibilities: [
          "إدارة القنوات الاجتماعية الرئيسية (Instagram, TikTok)",
          "إنتاج محتوى مرئي عالي الجودة وأصول حملات تسويقية",
          "تنفيذ حملات تسويق رقمية موجهة",
          "تحليل مقاييس التفاعل والوصول",
          "الارتقاء بالحضور الرقمي للعلامة التجارية"
        ]
      },
      "luxeldo-marketing": {
        title: "رئيس قسم تسويق العلامة التجارية",
        organization: "LUXELDO",
        date: "2022 — الحاضر",
        location: "الدار البيضاء-سطات، المغرب",
        description: "قيادة استراتيجية العلامة التجارية والتسويق الرقمي لدفع نمو التجارة الإلكترونية.",
        responsibilities: [
          "إدارة منصة التجارة الإلكترونية وتنفيذ تحسين محركات البحث التقني (SEO)",
          "توجيه حملات وسائل التواصل الاجتماعي واستراتيجيات المحتوى الرقمي",
          "تنمية الشراكات الاستراتيجية مع المؤثرين المحليين والهيئات الإعلامية"
        ]
      },
      "bac-sciences": {
        title: "بكالوريا في العلوم الفيزيائية",
        organization: "ثانوية ابن رشد ببرشيد",
        date: "سبتمبر 2022 — يونيو 2023",
        location: "برشيد، المغرب",
        description: "شهادة البكالوريا مع تخصص في العلوم الفيزيائية.",
        responsibilities: []
      }
    },
    filters: {
      all: "الكل",
      work: "العمل",
      education: "التعليم",
      certification: "الشهادات"
    }
  },
  contact: {
    section_title: "تواصل معي",
    badge: "اتصال",
    subtitle: "دعنا نستكشف كيف يمكننا التعاون في مشروعك القادم.",
    email: "البريد",
    location: "الموقع",
    social: "الروابط",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "الرسالة",
    form_send: "إرسال الطلب",
    form_sending: "جاري الإرسال...",
    success_title: "تم إرسال الرسالة",
    success_desc: "شكراً لتواصلك. سأرد عليك في أقرب وقت.",
    error_title: "حدث خطأ ما",
    error_desc: "تعذر إرسال رسالتك. يرجى المحاولة لاحقاً أو مراسلتي عبر البريد مباشرة.",
    try_again: "إعادة المحاولة",
    form: {
      title: "إرسال طلب",
      subtitle: "دعنا نناقش مشروعك القادم.",
      name_placeholder: "الاسم",
      email_placeholder: "عنوان البريد الإلكتروني",
      subject_placeholder: "الموضوع",
      message_placeholder: "كيف يمكنني مساعدتك؟",
      send_button: "إرسال",
      sending: "جاري الإرسال...",
      sent: "تم الإرسال",
      privacy_notice: "معلوماتك آمنة وتبقى خاصة",
      success_title: "تم إرسال الرسالة بنجاح",
      success_message: "شكراً لرسالتك. سأرد عليك في أسرع وقت.",
      error_title: "فشل الإرسال",
      error_message: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً."
    },
    info_title: "لنبنِ شيئاً رائعاً.",
    info_description: "أنا أبحث حاليًا عن فرص جديدة. سواء كان لديك فكرة مشروع، أو فرصة عمل، أو ترغب فقط في التواصل، فصندوق الوارد الخاص بي مفتوح دائمًا.",
    email_label: "البريد",
    phone_label: "الهاتف",
    location_label: "الموقع",
    copy: "نسخ",
    copied: "تم النسخ",
    available_work: "متاح للعمل",
    available_desc: "متاح للعمل عن بُعد وللتعاون المباشر."
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    built_with: "بُني بواسطة",
    by: "من طرف"
  }
};

fs.writeFileSync(path.join(localesPath, 'en.json'), JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(path.join(localesPath, 'fr.json'), JSON.stringify(fr, null, 2), 'utf8');
fs.writeFileSync(path.join(localesPath, 'ar.json'), JSON.stringify(ar, null, 2), 'utf8');

console.log('Premium translations updated successfully!');
