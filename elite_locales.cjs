const fs = require('fs');
const path = require('path');

const localesPath = path.join(process.cwd(), 'src/i18n/locales');

const en = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Stack",
    projects: "Work",
    certificates: "Certificates",
    experience: "Experience",
    contact: "Contact",
    language: "Language"
  },
  hero: {
    badges: {
      digital_developer: "Digital Developer",
      mobile_apps: "Mobile Engineering",
      web_development: "Web Experiences"
    },
    subtitle: "Engineer & Designer based in Morocco.<br className=\"hidden sm:block\" />I build intuitive mobile and web experiences that merge flawless performance with striking design.",
    buttons: {
      download_cv: "Download Resume",
      view_projects: "View My Work"
    },
    stats: {
      years_training: "Years of Practice",
      featured_projects: "Products Shipped",
      technologies: "Technologies Mastered"
    }
  },
  about: {
    section_title: "About Me",
    badge: "Profile",
    p1_start: "I recently graduated in ",
    p1_strong: "Mobile Application Engineering",
    p1_end: " from CMC.",
    p2_start: "I design and build software that feels right. My focus is on creating fluid, scalable products using ",
    p2_strong: "Kotlin, Flutter, and React.",
    highlights: {
      expertise: "Expertise",
      expertise_val: "Mobile & Web Engineering",
      location: "Location",
      location_val: "Casablanca, Morocco",
      background: "Background",
      background_val: "Software Engineering",
      availability: "Status",
      availability_val: "Available for new opportunities"
    }
  },
  skills: {
    section_title: "Technical Stack",
    badge: "Toolkit",
    categories: {
      frontend: "Frontend",
      mobile: "Mobile",
      backend: "Backend",
      tools: "Tooling",
      professional: "Core Skills"
    },
    items: {
      ui_ux_design: "Product Design",
      responsive_design: "Fluid Interfaces",
      clean_architecture: "System Architecture",
      problem_solving: "Problem Solving",
      teamwork: "Collaboration",
      communication: "Clear Communication",
      leadership: "Initiative"
    }
  },
  projects: {
    section_title: "Selected Work",
    badge: "Portfolio",
    subtitle: "A showcase of products I've engineered, designed, and shipped.",
    filters: {
      all: "All",
      mobile: "Mobile Apps",
      web: "Web Platforms",
      platform: "SaaS / Internal",
      ecommerce: "Commerce"
    },
    items: {
      "darna-clean": {
        description: "A seamless booking platform. We connect homeowners with vetted professionals instantly.",
        features: [
          "Instant service matching",
          "Native Jetpack Compose UI",
          "Real-time Firebase sync",
          "Live booking status"
        ],
        case_problem: "Homeowners struggled to find reliable, verified cleaning services quickly.",
        case_solution: "Engineered an end-to-end native Android platform that simplifies discovery, booking, and tracking.",
        kf1_title: "Smart Scheduling",
        kf1_desc: "Automated availability management that eliminates double-booking.",
        kf2_title: "Verified Profiles",
        kf2_desc: "Transparent ratings and reviews to build instant trust.",
        kf3_title: "Live Tracking",
        kf3_desc: "Real-time state updates from request to completion.",
        learnings: [
          "Mastered complex declarative UI states",
          "Optimized real-time data flow",
          "Designed a frictionless onboarding flow"
        ],
        role: "Lead Mobile Engineer"
      },
      "allo-brikol": {
        description: "A dual-sided marketplace bridging the gap between customers and home repair experts.",
        features: [
          "Advanced matching algorithm",
          "Transparent review system",
          "Provider dashboard",
          "Real-time auth"
        ],
        case_problem: "Urgent home repairs require immediate, trustworthy professionals—a gap in the local market.",
        case_solution: "Built a robust ecosystem: a fluid Flutter app for clients and a powerful React dashboard for service providers.",
        kf1_title: "Unified Platform",
        kf1_desc: "Synchronized mobile and web interfaces powered by a central API.",
        kf2_title: "Intelligent Routing",
        kf2_desc: "Matching based on precise geolocation, skills, and availability.",
        kf3_title: "Trust System",
        kf3_desc: "Immutable public ratings ensuring accountability.",
        learnings: [
          "Architected scalable full-stack solutions",
          "Bridged Flutter and React ecosystems",
          "Handled complex geographical querying"
        ],
        role: "Full-Stack Engineer"
      },
      "servegx": {
        description: "Real-time server telemetry and monitoring delivered straight to your pocket.",
        features: [
          "Live metric streaming",
          "High-performance charts",
          "Custom threshold alerts",
          "Historical insights"
        ],
        case_problem: "Sysadmins were tied to heavy desktop dashboards for critical infrastructure monitoring.",
        case_solution: "Developed a native Android app that streams core metrics instantly, with intelligent push notifications.",
        kf1_title: "Instant Telemetry",
        kf1_desc: "Zero-latency monitoring of CPU, memory, and network.",
        kf2_title: "Smart Alerts",
        kf2_desc: "Context-aware push notifications for critical thresholds.",
        kf3_title: "Deep Analytics",
        kf3_desc: "Interactive visual data representing historical trends.",
        learnings: [
          "Optimized high-frequency data rendering",
          "Implemented efficient background polling",
          "Designed data-dense mobile interfaces"
        ],
        role: "Mobile Engineer"
      },
      "luxeldo": {
        description: "An ultra-premium digital storefront for luxury Swiss timepieces.",
        features: [
          "High-fidelity product galleries",
          "Lightning-fast storefront",
          "Bespoke brand identity",
          "Deep SEO optimization"
        ],
        case_problem: "A high-end brand needed a digital presence that matched the exclusivity of their physical products.",
        case_solution: "Crafted a bespoke e-commerce experience focusing on minimalist design, speed, and flawless presentation.",
        kf1_title: "Immersive Design",
        kf1_desc: "A minimal, refined UI that lets the product photography shine.",
        kf2_title: "Brand Cohesion",
        kf2_desc: "Strict adherence to luxury visual guidelines.",
        kf3_title: "SEO Architecture",
        kf3_desc: "Structured data and SSR techniques for maximum discoverability.",
        learnings: [
          "Translated luxury aesthetics into code",
          "Optimized media delivery for performance",
          "Implemented advanced e-commerce analytics"
        ],
        role: "Frontend Engineer"
      }
    },
    buttons: {
      case_study: "Read Case Study"
    },
    case_study: "Case Study",
    problem: "The Challenge",
    solution: "The Solution",
    key_features: "Core Features",
    learnings: "Key Takeaways",
    role: "My Role",
    timeline: "Timeline",
    technologies: "Tech Stack",
    status_in_progress: "In Development",
    status_completed: "Live"
  },
  certificates: {
    section_title: "Certifications",
    badge: "Knowledge",
    subtitle: "Continuous learning and professional milestones.",
    issued: "Acquired",
    buttons: {
      view_credential: "Verify Credential"
    },
    items: {
      "ai-capabilities": { title: "AI Fluency: Capabilities & Limitations" },
      "claude-code-101": { title: "Claude Code 101" }
    }
  },
  experience: {
    section_title: "Experience",
    badge: "Timeline",
    subtitle: "My professional journey.",
    types: {
      work: "Experience",
      education: "Education",
      certification: "Certification"
    },
    status: {
      current: "Present",
      completed: "Completed",
      planned: "Planned"
    },
    items: {
      "cmc-diploma": {
        title: "Software Engineering — Mobile",
        organization: "Cité des Métiers et des Compétences",
        date: "2024 — 2026",
        location: "Morocco",
        description: "Intensive engineering program focused on modern mobile architecture.",
        responsibilities: [
          "Native Android (Kotlin/Java) & Cross-platform (Flutter)",
          "Declarative UI with Jetpack Compose",
          "Cloud architecture with Firebase & REST",
          "Modern web foundations"
        ]
      },
      "zyne-officiel-new": {
        title: "Digital Marketing Manager",
        organization: "ZYNE OFFICIEL",
        date: "2023 — 2024",
        location: "Morocco",
        description: "Drove digital brand presence and growth.",
        responsibilities: [
          "Scaled social channels and engagement",
          "Directed visual content production",
          "Executed data-driven campaigns"
        ]
      },
      "luxeldo-marketing": {
        title: "Head of Digital Strategy",
        organization: "LUXELDO",
        date: "2022 — Present",
        location: "Morocco",
        description: "Leading digital operations for a premium commerce brand.",
        responsibilities: [
          "Overseeing e-commerce technical architecture",
          "Driving organic growth through advanced SEO",
          "Managing high-profile digital partnerships"
        ]
      },
      "bac-sciences": {
        title: "Baccalauréat in Physical Sciences",
        organization: "Lycée Ibn Rochd",
        date: "2022 — 2023",
        location: "Morocco",
        description: "Core sciences curriculum.",
        responsibilities: []
      }
    },
    filters: {
      all: "All",
      work: "Work",
      education: "Education",
      certification: "Certs"
    }
  },
  contact: {
    section_title: "Contact",
    badge: "Connect",
    subtitle: "Let's build something exceptional.",
    email: "Email",
    location: "Location",
    social: "Social",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send Message",
    form_sending: "Sending...",
    success_title: "Message Sent",
    success_desc: "I'll get back to you shortly.",
    error_title: "Error",
    error_desc: "Something went wrong. Please try again.",
    try_again: "Retry",
    form: {
      title: "Drop a line",
      subtitle: "I'm available for new opportunities.",
      name_placeholder: "John Doe",
      email_placeholder: "john@example.com",
      subject_placeholder: "Subject",
      message_placeholder: "How can I help you?",
      send_button: "Send Request",
      sending: "Sending...",
      sent: "Sent",
      privacy_notice: "Your data is secure.",
      success_title: "Message Delivered",
      success_message: "Thanks for reaching out.",
      error_title: "Delivery Failed",
      error_message: "Please try again later."
    },
    info_title: "Ready to scale?",
    info_description: "Whether you have a product idea or are looking for an engineering partner, my inbox is open.",
    email_label: "Email",
    phone_label: "Phone",
    location_label: "Location",
    copy: "Copy",
    copied: "Copied!",
    available_work: "AVAILABLE FOR HIRE",
    available_desc: "Open to remote and relocation."
  },
  footer: {
    rights: "All rights reserved.",
    built_with: "Engineered with",
    by: "by"
  }
};

const fr = {
  nav: {
    home: "Accueil",
    about: "Profil",
    skills: "Stack",
    projects: "Réalisations",
    certificates: "Certificats",
    experience: "Parcours",
    contact: "Contact",
    language: "Langue"
  },
  hero: {
    badges: {
      digital_developer: "Ingénierie",
      mobile_apps: "Applications Mobiles",
      web_development: "Interfaces Web"
    },
    subtitle: "Ingénieur & Designer basé au Maroc.<br className=\"hidden sm:block\" />Je conçois des expériences mobiles et web fluides, alliant performance absolue et design millimétré.",
    buttons: {
      download_cv: "Mon CV",
      view_projects: "Voir mes projets"
    },
    stats: {
      years_training: "Années d'Expertise",
      featured_projects: "Produits Lancés",
      technologies: "Technologies Maîtrisées"
    }
  },
  about: {
    section_title: "À Propos",
    badge: "Profil",
    p1_start: "Récemment diplômé en ",
    p1_strong: "Ingénierie d'Applications Mobiles",
    p1_end: " de la CMC.",
    p2_start: "Je crée des logiciels intuitifs et performants. Mon approche se concentre sur des architectures propres et scalables avec ",
    p2_strong: "Kotlin, Flutter et React.",
    highlights: {
      expertise: "Expertise",
      expertise_val: "Ingénierie Mobile & Web",
      location: "Localisation",
      location_val: "Casablanca, Maroc",
      background: "Formation",
      background_val: "Génie Logiciel",
      availability: "Statut",
      availability_val: "À l'écoute de nouvelles opportunités"
    }
  },
  skills: {
    section_title: "Stack Technique",
    badge: "Outils",
    categories: {
      frontend: "Frontend",
      mobile: "Mobile",
      backend: "Backend",
      tools: "Outils",
      professional: "Soft Skills"
    },
    items: {
      ui_ux_design: "Product Design",
      responsive_design: "Interfaces Fluides",
      clean_architecture: "Architecture Système",
      problem_solving: "Résolution de problèmes",
      teamwork: "Collaboration",
      communication: "Communication claire",
      leadership: "Initiative"
    }
  },
  projects: {
    section_title: "Réalisations",
    badge: "Portfolio",
    subtitle: "Une sélection de produits que j'ai conçus, développés et lancés.",
    filters: {
      all: "Tout",
      mobile: "Apps Mobiles",
      web: "Plateformes Web",
      platform: "SaaS",
      ecommerce: "E-commerce"
    },
    items: {
      "darna-clean": {
        description: "Une plateforme de réservation fluide connectant instantanément les particuliers aux professionnels vérifiés.",
        features: [
          "Mise en relation instantanée",
          "Interface native Jetpack Compose",
          "Synchronisation Firebase en temps réel",
          "Suivi de réservation en direct"
        ],
        case_problem: "Il était difficile pour les particuliers de trouver rapidement des services de nettoyage fiables et vérifiés.",
        case_solution: "J'ai développé une plateforme Android native de bout en bout qui simplifie la découverte, la réservation et le suivi.",
        kf1_title: "Planification Intelligente",
        kf1_desc: "Gestion automatisée des disponibilités pour éviter les conflits.",
        kf2_title: "Profils Vérifiés",
        kf2_desc: "Système d'avis transparent pour instaurer une confiance immédiate.",
        kf3_title: "Suivi en Direct",
        kf3_desc: "Mises à jour d'état en temps réel de la demande à l'achèvement.",
        learnings: [
          "Maîtrise des états d'interface déclarative complexes",
          "Optimisation du flux de données en temps réel",
          "Conception d'un parcours d'intégration sans friction"
        ],
        role: "Lead Mobile Engineer"
      },
      "allo-brikol": {
        description: "Une marketplace bilatérale comblant le fossé entre les clients et les experts en réparation.",
        features: [
          "Algorithme de mise en relation",
          "Système d'évaluation transparent",
          "Tableau de bord prestataire",
          "Authentification en temps réel"
        ],
        case_problem: "Les réparations urgentes nécessitent des professionnels immédiats et de confiance—une lacune sur le marché local.",
        case_solution: "Construction d'un écosystème robuste : une application Flutter fluide pour les clients et un puissant dashboard React pour les prestataires.",
        kf1_title: "Plateforme Unifiée",
        kf1_desc: "Interfaces mobile et web synchronisées via une API centrale.",
        kf2_title: "Routage Intelligent",
        kf2_desc: "Mise en relation basée sur la géolocalisation, les compétences et les disponibilités.",
        kf3_title: "Système de Confiance",
        kf3_desc: "Évaluations publiques immuables garantissant la responsabilité.",
        learnings: [
          "Architecture de solutions full-stack évolutives",
          "Création de ponts entre les écosystèmes Flutter et React",
          "Gestion de requêtes géographiques complexes"
        ],
        role: "Ingénieur Full-Stack"
      },
      "servegx": {
        description: "Télémétrie et supervision serveur en temps réel, directement dans votre poche.",
        features: [
          "Streaming de métriques en direct",
          "Graphiques haute performance",
          "Alertes personnalisées",
          "Analyses historiques"
        ],
        case_problem: "Les administrateurs système étaient liés à de lourds tableaux de bord sur ordinateur pour la surveillance des infrastructures.",
        case_solution: "Développement d'une application Android native diffusant instantanément les métriques clés, avec des notifications push intelligentes.",
        kf1_title: "Télémétrie Instantanée",
        kf1_desc: "Surveillance sans latence du CPU, de la mémoire et du réseau.",
        kf2_title: "Alertes Intelligentes",
        kf2_desc: "Notifications push contextuelles pour les seuils critiques.",
        kf3_title: "Analyses Poussées",
        kf3_desc: "Données visuelles interactives représentant les tendances historiques.",
        learnings: [
          "Optimisation du rendu de données à haute fréquence",
          "Implémentation de processus d'arrière-plan efficaces",
          "Conception d'interfaces mobiles denses en données"
        ],
        role: "Ingénieur Mobile"
      },
      "luxeldo": {
        description: "Une vitrine digitale ultra-premium pour l'horlogerie de luxe suisse.",
        features: [
          "Galeries produits haute fidélité",
          "Vitrine ultra-rapide",
          "Identité de marque sur-mesure",
          "Optimisation SEO avancée"
        ],
        case_problem: "Une marque haut de gamme nécessitait une présence digitale à la hauteur de l'exclusivité de ses produits.",
        case_solution: "Création d'une expérience e-commerce sur-mesure axée sur un design minimaliste, la vitesse et une présentation parfaite.",
        kf1_title: "Design Immersif",
        kf1_desc: "Une interface épurée laissant toute la place à la photographie produit.",
        kf2_title: "Cohérence de Marque",
        kf2_desc: "Respect strict des directives visuelles du luxe.",
        kf3_title: "Architecture SEO",
        kf3_desc: "Données structurées et techniques SSR pour une découvrabilité maximale.",
        learnings: [
          "Traduction de l'esthétique du luxe en code",
          "Optimisation de la diffusion des médias pour les performances",
          "Mise en place d'analyses e-commerce avancées"
        ],
        role: "Ingénieur Frontend"
      }
    },
    buttons: {
      case_study: "Étude de Cas"
    },
    case_study: "Étude de Cas",
    problem: "Le Défi",
    solution: "La Solution",
    key_features: "Fonctionnalités Clés",
    learnings: "Ce que j'ai appris",
    role: "Mon Rôle",
    timeline: "Période",
    technologies: "Stack Technique",
    status_in_progress: "En Développement",
    status_completed: "En Ligne"
  },
  certificates: {
    section_title: "Certifications",
    badge: "Savoir-faire",
    subtitle: "Apprentissage continu et jalons professionnels.",
    issued: "Obtenu",
    buttons: {
      view_credential: "Voir le Certificat"
    },
    items: {
      "ai-capabilities": { title: "Maîtrise de l'IA : Capacités & Limites" },
      "claude-code-101": { title: "Claude Code 101" }
    }
  },
  experience: {
    section_title: "Parcours",
    badge: "Chronologie",
    subtitle: "Mon évolution professionnelle.",
    types: {
      work: "Expérience",
      education: "Formation",
      certification: "Certification"
    },
    status: {
      current: "Actuel",
      completed: "Terminé",
      planned: "Prévu"
    },
    items: {
      "cmc-diploma": {
        title: "Génie Logiciel — Mobile",
        organization: "Cité des Métiers et des Compétences",
        date: "2024 — 2026",
        location: "Maroc",
        description: "Programme d'ingénierie intensif centré sur l'architecture mobile moderne.",
        responsibilities: [
          "Android Natif (Kotlin/Java) & Multiplateforme (Flutter)",
          "Interfaces déclaratives avec Jetpack Compose",
          "Architecture Cloud avec Firebase & REST",
          "Bases du développement web moderne"
        ]
      },
      "zyne-officiel-new": {
        title: "Responsable Marketing Digital",
        organization: "ZYNE OFFICIEL",
        date: "2023 — 2024",
        location: "Maroc",
        description: "Pilotage de la présence digitale et de la croissance de la marque.",
        responsibilities: [
          "Développement des canaux sociaux et de l'engagement",
          "Direction de la production de contenu visuel",
          "Exécution de campagnes basées sur les données"
        ]
      },
      "luxeldo-marketing": {
        title: "Directeur Stratégie Digitale",
        organization: "LUXELDO",
        date: "2022 — Présent",
        location: "Maroc",
        description: "Direction des opérations digitales pour une marque commerce premium.",
        responsibilities: [
          "Supervision de l'architecture technique e-commerce",
          "Génération de croissance organique via un SEO avancé",
          "Gestion de partenariats digitaux de haut niveau"
        ]
      },
      "bac-sciences": {
        title: "Baccalauréat Sciences Physiques",
        organization: "Lycée Ibn Rochd",
        date: "2022 — 2023",
        location: "Maroc",
        description: "Cursus scientifique fondamental.",
        responsibilities: []
      }
    },
    filters: {
      all: "Tout",
      work: "Travail",
      education: "Formation",
      certification: "Certs"
    }
  },
  contact: {
    section_title: "Contact",
    badge: "Échange",
    subtitle: "Construisons l'exceptionnel.",
    email: "Email",
    location: "Localisation",
    social: "Réseaux",
    form_name: "Nom",
    form_email: "Email",
    form_message: "Message",
    form_send: "Envoyer",
    form_sending: "Envoi...",
    success_title: "Message Envoyé",
    success_desc: "Je vous répondrai très bientôt.",
    error_title: "Erreur",
    error_desc: "Un problème est survenu. Veuillez réessayer.",
    try_again: "Réessayer",
    form: {
      title: "Laissez un message",
      subtitle: "Je suis ouvert aux nouvelles opportunités.",
      name_placeholder: "Votre nom",
      email_placeholder: "vous@exemple.com",
      subject_placeholder: "Sujet",
      message_placeholder: "Comment puis-je vous aider ?",
      send_button: "Envoyer",
      sending: "Envoi...",
      sent: "Envoyé",
      privacy_notice: "Vos données sont sécurisées.",
      success_title: "Demande Transmise",
      success_message: "Merci pour votre message.",
      error_title: "Échec de l'envoi",
      error_message: "Veuillez réessayer plus tard."
    },
    info_title: "Prêt à scaler ?",
    info_description: "Que vous ayez une idée de produit ou que vous cherchiez un partenaire technique, ma boîte mail est ouverte.",
    email_label: "Email",
    phone_label: "Téléphone",
    location_label: "Lieu",
    copy: "Copier",
    copied: "Copié !",
    available_work: "DISPONIBLE",
    available_desc: "Ouvert au télétravail et aux missions sur site."
  },
  footer: {
    rights: "Tous droits réservés.",
    built_with: "Conçu avec",
    by: "par"
  }
};

const ar = {
  nav: {
    home: "الرئيسية",
    about: "المنفذ",
    skills: "التقنيات",
    projects: "الأعمال",
    certificates: "الشهادات",
    experience: "المسار",
    contact: "تواصل",
    language: "اللغة"
  },
  hero: {
    badges: {
      digital_developer: "هندسة برمجيات",
      mobile_apps: "تطبيقات الهاتف",
      web_development: "تجارب الويب"
    },
    subtitle: "مهندس ومصمم منتجات، مقيم في المغرب.<br className=\"hidden sm:block\" />أبتكر تجارب رقمية سلسة تدمج الأداء المطلق مع التصميم الدقيق.",
    buttons: {
      download_cv: "سيرتي الذاتية",
      view_projects: "تصفح أعمالي"
    },
    stats: {
      years_training: "سنوات خبرة",
      featured_projects: "منتجات حية",
      technologies: "تقنيات متقنة"
    }
  },
  about: {
    section_title: "من أنا",
    badge: "الملف",
    p1_start: "تخرجت في تخصص ",
    p1_strong: "هندسة تطبيقات الهاتف",
    p1_end: " من مركز التكوين CMC.",
    p2_start: "أصمم وأبني برمجيات تشعرك بالتميز. تركيزي ينصب على تطوير منتجات سريعة وقابلة للتوسع باستخدام ",
    p2_strong: "Kotlin و Flutter و React.",
    highlights: {
      expertise: "الاختصاص",
      expertise_val: "هندسة التطبيقات والويب",
      location: "المقر",
      location_val: "الدار البيضاء، المغرب",
      background: "الخلفية",
      background_val: "هندسة برمجيات",
      availability: "الحالة",
      availability_val: "متاح لفرص جديدة"
    }
  },
  skills: {
    section_title: "الحزمة التقنية",
    badge: "الأدوات",
    categories: {
      frontend: "واجهة المستخدم",
      mobile: "تطبيقات المحمول",
      backend: "الخوادم",
      tools: "المنصات",
      professional: "المهارات"
    },
    items: {
      ui_ux_design: "تصميم المنتجات",
      responsive_design: "واجهات ديناميكية",
      clean_architecture: "هيكلة الأنظمة",
      problem_solving: "حل المشكلات بذكاء",
      teamwork: "العمل التشاركي",
      communication: "تواصل فعال",
      leadership: "مبادرة وقيادة"
    }
  },
  projects: {
    section_title: "أبرز الأعمال",
    badge: "المعرض",
    subtitle: "نظرة على أهم المنتجات التي قمت بتصميمها وبرمجتها.",
    filters: {
      all: "الكل",
      mobile: "تطبيقات ذكية",
      web: "منصات الويب",
      platform: "أنظمة داخلية",
      ecommerce: "متاجر إلكترونية"
    },
    items: {
      "darna-clean": {
        description: "منصة حجز ذكية. نربطك بأفضل محترفي التنظيف الموثوقين في لحظات.",
        features: [
          "مطابقة فورية للخدمات",
          "واجهة أصلية بـ Jetpack Compose",
          "مزامنة حية للبيانات",
          "تتبع دقيق للمواعيد"
        ],
        case_problem: "عانى المستخدمون من صعوبة إيجاد عمال نظافة موثوقين بسرعة وشفافية.",
        case_solution: "هندسة منصة أندرويد متكاملة تسهل عملية الاستكشاف والحجز والمتابعة بسلاسة تامة.",
        kf1_title: "جدولة متطورة",
        kf1_desc: "نظام يدير الأوقات المتاحة ويمنع تضارب المواعيد تلقائياً.",
        kf2_title: "ملفات موثقة",
        kf2_desc: "تقييمات شفافة وموثوقة تبني الثقة الفورية مع المستخدم.",
        kf3_title: "تتبع حي",
        kf3_desc: "تحديثات مستمرة لحالة الطلب من البداية حتى الإنجاز.",
        learnings: [
          "إدارة واجهات معقدة وسريعة الاستجابة",
          "تحسين تدفق البيانات اللحظي",
          "تصميم تجربة مستخدم خالية من التعقيد"
        ],
        role: "مهندس تطبيقات محمول"
      },
      "allo-brikol": {
        description: "سوق متكامل يربط العملاء بخبراء الصيانة والإصلاحات المنزلية بسلاسة.",
        features: [
          "خوارزميات بحث متقدمة",
          "نظام تقييم شفاف",
          "لوحة تحكم للمزودين",
          "مصادقة آنية"
        ],
        case_problem: "تتطلب الأعطال المنزلية حلولاً فورية وموثوقة، وهو ما كان يفتقده السوق المحلي.",
        case_solution: "بناء نظام بيئي متين: تطبيق Flutter للعميل، ولوحة تحكم React احترافية للحرفي.",
        kf1_title: "منصة موحدة",
        kf1_desc: "مزامنة مثالية بين واجهات الهاتف والويب من خلال واجهة برمجية مركزية.",
        kf2_title: "توجيه ذكي",
        kf2_desc: "ربط دقيق بناءً على الموقع، المهارات المتوفرة، والجدول الزمني.",
        kf3_title: "نظام الثقة",
        kf3_desc: "تقييمات عامة غير قابلة للتعديل تضمن الجودة والمحاسبة.",
        learnings: [
          "هندسة حلول قابلة للتوسع",
          "الدمج الاحترافي بين أنظمة Flutter و React",
          "معالجة استعلامات جغرافية معقدة"
        ],
        role: "مهندس Full-Stack"
      },
      "servegx": {
        description: "مراقبة احترافية لخوادمك في الوقت الفعلي، مباشرة من هاتفك الذكي.",
        features: [
          "بث حي للمقاييس",
          "رسوم بيانية عالية الأداء",
          "تنبيهات دقيقة قابلة للتخصيص",
          "قراءة تاريخية للبيانات"
        ],
        case_problem: "ارتباط مديري الأنظمة بلوحات تحكم مكتبية ثقيلة طوال الوقت.",
        case_solution: "تطوير تطبيق أندرويد سريع يعرض المقاييس الحيوية لحظياً، مع إشعارات ذكية استباقية.",
        kf1_title: "تتبع فوري",
        kf1_desc: "مراقبة دقيقة بدون تأخير لاستهلاك المعالج، الذاكرة، والشبكة.",
        kf2_title: "تنبيهات ذكية",
        kf2_desc: "إشعارات موجهة عند تجاوز مستويات الأمان المحددة مسبقاً.",
        kf3_title: "تحليلات عميقة",
        kf3_desc: "عرض تفاعلي لبيانات الأداء التاريخية لتحديد التوجهات.",
        learnings: [
          "عرض كميات هائلة من البيانات بتردد عالٍ",
          "إنشاء مهام خلفية فعالة ولا تستهلك البطارية",
          "تصميم واجهات محمولة غنية بالبيانات وسهلة القراءة"
        ],
        role: "مهندس تطبيقات"
      },
      "luxeldo": {
        description: "واجهة تسوق رقمية فائقة الفخامة للساعات السويسرية الراقية.",
        features: [
          "معارض صور عالية الدقة",
          "منصة فائقة السرعة",
          "هوية بصرية استثنائية",
          "هيكلة صديقة لمحركات البحث"
        ],
        case_problem: "علامة تجارية فاخرة تحتاج لتجربة رقمية توازي فخامة متاجرها الواقعية.",
        case_solution: "صياغة تجربة تسوق إلكتروني تركز على الحد الأدنى من التصميم (Minimalism)، السرعة، والعرض المثالي.",
        kf1_title: "تصميم غامر",
        kf1_desc: "واجهة هادئة تتيح للمنتج أن يكون البطل المطلق.",
        kf2_title: "انسجام الهوية",
        kf2_desc: "التزام صارم بالخطوط البصرية لعلامات الفخامة العالمية.",
        kf3_title: "هندسة SEO",
        kf3_desc: "تقنيات متقدمة تضمن تصدراً قوياً في نتائج البحث.",
        learnings: [
          "ترجمة الجماليات الفاخرة إلى كود برمجي",
          "تحسين تسليم الوسائط لضمان أداء فائق",
          "تطبيق مقاييس دقيقة لتجارة التجزئة الرقمية"
        ],
        role: "مهندس واجهات أمامية"
      }
    },
    buttons: {
      case_study: "قراءة التفاصيل"
    },
    case_study: "دراسة حالة",
    problem: "التحدي",
    solution: "الحل",
    key_features: "المميزات الجوهرية",
    learnings: "اكتساب خبرات",
    role: "دوري في المشروع",
    timeline: "المدة الزمنية",
    technologies: "التقنيات المستخدمة",
    status_in_progress: "قيد التطوير",
    status_completed: "مكتمل"
  },
  certificates: {
    section_title: "الشهادات",
    badge: "توثيق",
    subtitle: "تطوير مستمر واعترافات مهنية.",
    issued: "تم الإصدار",
    buttons: {
      view_credential: "التحقق من الشهادة"
    },
    items: {
      "ai-capabilities": { title: "إتقان الذكاء الاصطناعي: القدرات والحدود" },
      "claude-code-101": { title: "أساسيات Claude Code 101" }
    }
  },
  experience: {
    section_title: "المسار المهني",
    badge: "محطات",
    subtitle: "نظرة على مسيرتي الأكاديمية والعملية.",
    types: {
      work: "عمل",
      education: "تعليم",
      certification: "شهادة"
    },
    status: {
      current: "حاضر",
      completed: "سابق",
      planned: "قادم"
    },
    items: {
      "cmc-diploma": {
        title: "هندسة البرمجيات — تطبيقات ذكية",
        organization: "مركز التكوين CMC",
        date: "2024 — 2026",
        location: "المغرب",
        description: "برنامج هندسي مكثف يركز على بنية تطبيقات الهاتف الحديثة.",
        responsibilities: [
          "برمجة تطبيقات أصلية (Kotlin/Java) ومتعددة المنصات (Flutter)",
          "واجهات تفاعلية حديثة بـ Jetpack Compose",
          "بناء أنظمة سحابية باستخدام Firebase و REST APIs",
          "تأسيس قوي في تقنيات الويب"
        ]
      },
      "zyne-officiel-new": {
        title: "مدير التسويق الرقمي",
        organization: "ZYNE OFFICIEL",
        date: "2023 — 2024",
        location: "المغرب",
        description: "قيادة الحضور الرقمي ونمو العلامة التجارية.",
        responsibilities: [
          "توسيع نطاق القنوات الاجتماعية وزيادة التفاعل",
          "إدارة إنتاج المحتوى المرئي",
          "تنفيذ حملات دقيقة مدفوعة بالبيانات"
        ]
      },
      "luxeldo-marketing": {
        title: "رئيس الإستراتيجية الرقمية",
        organization: "LUXELDO",
        date: "2022 — الحاضر",
        location: "المغرب",
        description: "إدارة العمليات الرقمية لعلامة تجارية راقية.",
        responsibilities: [
          "الإشراف على البنية التقنية للمتجر الإلكتروني",
          "تعزيز النمو العضوي عبر استراتيجيات SEO متقدمة",
          "إدارة شراكات رقمية رفيعة المستوى"
        ]
      },
      "bac-sciences": {
        title: "بكالوريا علوم فيزيائية",
        organization: "ثانوية ابن رشد",
        date: "2022 — 2023",
        location: "المغرب",
        description: "منهج علمي تأسيسي.",
        responsibilities: []
      }
    },
    filters: {
      all: "الكل",
      work: "عمل",
      education: "تكوين",
      certification: "شهادات"
    }
  },
  contact: {
    section_title: "تواصل معي",
    badge: "مراسلة",
    subtitle: "لنبنِ شيئاً استثنائياً.",
    email: "البريد",
    location: "المقر",
    social: "الشبكات",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "الرسالة",
    form_send: "إرسال",
    form_sending: "جاري الإرسال...",
    success_title: "تم الاستلام",
    success_desc: "سأرد عليك في أقرب وقت.",
    error_title: "خطأ",
    error_desc: "حدث خطأ ما. يرجى المحاولة لاحقاً.",
    try_again: "إعادة المحاولة",
    form: {
      title: "تواصل مباشرة",
      subtitle: "أنا متاح لمناقشة فرص جديدة.",
      name_placeholder: "اسمك",
      email_placeholder: "بريدك الإلكتروني",
      subject_placeholder: "الموضوع",
      message_placeholder: "كيف يمكنني مساعدتك؟",
      send_button: "إرسال الطلب",
      sending: "يتم الإرسال...",
      sent: "تم بنجاح",
      privacy_notice: "بياناتك بأمان ولن تشارك.",
      success_title: "تم تسليم رسالتك",
      success_message: "شكراً لتواصلك. سأتصل بك قريباً.",
      error_title: "فشل الإرسال",
      error_message: "الرجاء المحاولة في وقت لاحق."
    },
    info_title: "هل أنت مستعد للتوسع؟",
    info_description: "سواء كانت لديك فكرة منتج مبتكر أو تبحث عن شريك هندسي، بريدي الإلكتروني مفتوح دائماً.",
    email_label: "البريد",
    phone_label: "الهاتف",
    location_label: "المنطقة",
    copy: "نسخ",
    copied: "نسخ بنجاح!",
    available_work: "متاح للتوظيف",
    available_desc: "متاح للعمل عن بُعد وللتعاون في الموقع."
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    built_with: "صُنع بواسطة",
    by: " "
  }
};

fs.writeFileSync(path.join(localesPath, 'en.json'), JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(path.join(localesPath, 'fr.json'), JSON.stringify(fr, null, 2), 'utf8');
fs.writeFileSync(path.join(localesPath, 'ar.json'), JSON.stringify(ar, null, 2), 'utf8');
