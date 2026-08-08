const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'ar'];
const basePath = path.join(process.cwd(), 'src/i18n/locales');

locales.forEach(locale => {
  const file = path.join(basePath, locale + '.json');
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  
  // Certificates
  if (!data.certificates) data.certificates = {};
  if (!data.certificates.buttons) data.certificates.buttons = {};
  data.certificates.buttons.view_credential = locale === 'ar' ? 'عرض الشهادة' : locale === 'fr' ? "Voir l'attestation" : 'View Credential';
  
  if (!data.certificates.items) data.certificates.items = {};
  data.certificates.items['ai-capabilities'] = { title: locale === 'ar' ? 'الطلاقة في الذكاء الاصطناعي: قدرات وقيود الذكاء الاصطناعي' : locale === 'fr' ? "Maîtrise de l'IA : Capacités et limites" : 'AI Fluency: AI Capabilities & Limitations' };
  data.certificates.items['claude-code-101'] = { title: locale === 'ar' ? 'كود كلود 101' : locale === 'fr' ? 'Claude Code 101' : 'Claude Code 101' };

  // Experience Filters
  if (!data.experience) data.experience = {};
  if (!data.experience.filters) data.experience.filters = {};
  data.experience.filters.all = locale === 'ar' ? 'الكل' : locale === 'fr' ? 'Tout' : 'All';
  data.experience.filters.work = locale === 'ar' ? 'العمل' : locale === 'fr' ? 'Travail' : 'Work';
  data.experience.filters.education = locale === 'ar' ? 'التعليم' : locale === 'fr' ? 'Éducation' : 'Education';
  data.experience.filters.certification = locale === 'ar' ? 'الشهادات' : locale === 'fr' ? 'Certifications' : 'Certifications';

  if (!data.experience.types) data.experience.types = {};
  data.experience.types.work = locale === 'ar' ? 'عمل' : locale === 'fr' ? 'Travail' : 'Work';
  data.experience.types.education = locale === 'ar' ? 'تعليم' : locale === 'fr' ? 'Éducation' : 'Education';
  data.experience.types.certification = locale === 'ar' ? 'شهادة' : locale === 'fr' ? 'Certification' : 'Certification';

  if (!data.experience.status) data.experience.status = {};
  data.experience.status.current = locale === 'ar' ? 'حالي' : locale === 'fr' ? 'Actuel' : 'Current';
  data.experience.status.completed = locale === 'ar' ? 'مكتمل' : locale === 'fr' ? 'Terminé' : 'Completed';
  data.experience.status.planned = locale === 'ar' ? 'مخطط له' : locale === 'fr' ? 'Prévu' : 'Planned';

  // Experience Items
  if (!data.experience.items) data.experience.items = {};
  
  data.experience.items['cmc-diploma'] = {
    title: locale === 'ar' ? 'التطوير الرقمي — تطبيقات الهاتف' : locale === 'fr' ? 'Développement Digital — Applications Mobiles' : 'Digital Development — Mobile Applications',
    organization: locale === 'ar' ? 'مدينة المهن والكفاءات' : locale === 'fr' ? 'Cité des Métiers et des Compétences' : 'Cité des Métiers et des Compétences',
    date: locale === 'ar' ? 'سبتمبر 2024 — يوليو 2026' : locale === 'fr' ? 'Sep 2024 — Juil 2026' : 'Sep 2024 — Jul 2026',
    location: locale === 'ar' ? 'الدار البيضاء-سطات، المغرب' : locale === 'fr' ? 'Casablanca-Settat, Maroc' : 'Casablanca-Settat, Morocco',
    description: locale === 'ar' ? 'دبلوم تقني متخصص في التطوير الرقمي مع التركيز على تطبيقات الهاتف المحمول.' : locale === 'fr' ? 'Diplôme de technicien spécialisé en développement digital avec une spécialisation en applications mobiles.' : 'Specialized technician diploma in Digital Development with focus on Mobile Applications.',
    responsibilities: locale === 'ar' 
      ? ['تطوير بـ Kotlin، Java، Flutter، Dart', 'Android SDK و Jetpack Compose', 'Firebase، REST APIs، SQLite، MySQL', 'HTML، CSS، JavaScript، Git']
      : locale === 'fr'
      ? ['Développement avec Kotlin, Java, Flutter, Dart', 'Android SDK & Jetpack Compose', 'Firebase, REST APIs, SQLite, MySQL', 'HTML, CSS, JavaScript, Git']
      : ['Kotlin, Java, Flutter, Dart development', 'Android SDK & Jetpack Compose', 'Firebase, REST APIs, SQLite, MySQL', 'HTML, CSS, JavaScript, Git']
  };

  data.experience.items['zyne-officiel-new'] = {
    title: locale === 'ar' ? 'مدير التسويق الرقمي' : locale === 'fr' ? 'Responsable du Marketing Digital' : 'Digital Marketing Manager',
    organization: 'ZYNE OFFICIEL',
    date: locale === 'ar' ? 'نوفمبر 2023 — يونيو 2024' : locale === 'fr' ? 'Nov 2023 — Juin 2024' : 'Nov 2023 — June 2024',
    location: locale === 'ar' ? 'الدار البيضاء، المغرب' : locale === 'fr' ? 'Casablanca, Maroc' : 'Casablanca, Morocco',
    description: locale === 'ar' ? 'إدارة التسويق للعلامة التجارية والحملات الرقمية.' : locale === 'fr' ? 'Gestion du marketing de la marque et des campagnes digitales.' : 'Managed brand marketing and digital campaigns.',
    responsibilities: locale === 'ar'
      ? ['إدارة حسابات وسائل التواصل الاجتماعي (انستغرام، تيك توك)', 'إنشاء محتوى مرئي ومنشورات', 'المساهمة في حملات التسويق الرقمي', 'تتبع الأداء (التفاعل، الوصول)', 'تحسين التواجد الرقمي للعلامة التجارية']
      : locale === 'fr'
      ? ['Gestion des comptes de réseaux sociaux (Instagram, TikTok)', 'Création de contenu visuel et de publications', 'Contribution aux campagnes de marketing digital', 'Suivi des performances (engagement, portée)', 'Amélioration de la présence en ligne de la marque']
      : ['Managed social media accounts (Instagram, TikTok)', 'Created visual content and posts', 'Contributed to digital marketing campaigns', 'Tracked performance (engagement, reach)', 'Improved brand online presence']
  };

  data.experience.items['luxeldo-marketing'] = {
    title: locale === 'ar' ? 'رئيس تسويق العلامة التجارية' : locale === 'fr' ? 'Responsable Marketing de la Marque' : 'Head of Brand Marketing',
    organization: 'LUXELDO',
    date: locale === 'ar' ? '2022 — الحاضر' : locale === 'fr' ? '2022 — Présent' : '2022 — Present',
    location: locale === 'ar' ? 'الدار البيضاء-سطات، المغرب' : locale === 'fr' ? 'Casablanca-Settat, Maroc' : 'Casablanca-Settat, Morocco',
    description: locale === 'ar' ? 'قيادة التسويق الرقمي واستراتيجية العلامة التجارية لزيادة المبيعات والوعي عبر الإنترنت.' : locale === 'fr' ? 'Direction du marketing digital et de la stratégie de marque pour stimuler les ventes en ligne et la notoriété.' : 'Led digital marketing and brand strategy to drive online sales and awareness.',
    responsibilities: locale === 'ar'
      ? ['إدارة منصة التجارة الإلكترونية وتحسين صفحات المنتجات لمحركات البحث', 'تنسيق حملات وسائل التواصل الاجتماعي وإنشاء المحتوى الرقمي', 'إدارة الشراكات مع المؤثرين المحليين ووسائل الإعلام']
      : locale === 'fr'
      ? ['Gestion de la plateforme e-commerce et optimisation des pages produits pour le SEO', 'Coordination des campagnes sur les réseaux sociaux et création de contenu digital', 'Gestion des partenariats avec les influenceurs locaux et les médias']
      : ['Managed the e-commerce platform and optimized product pages for SEO', 'Coordinated social media campaigns and digital content creation', 'Handled partnerships with local influencers and media outlets']
  };

  data.experience.items['bac-sciences'] = {
    title: locale === 'ar' ? 'بكالوريا علوم فيزيائية' : locale === 'fr' ? 'Baccalauréat Sciences Physiques' : 'Baccalauréat Sciences Physiques',
    organization: locale === 'ar' ? 'ثانوية ابن رشد ببرشيد' : locale === 'fr' ? 'Lycée Ibn Rochd Berrechid' : 'Lycée Ibn Rochd Berrechid',
    date: locale === 'ar' ? 'سبتمبر 2022 — يونيو 2023' : locale === 'fr' ? 'Sep 2022 — Juin 2023' : 'Sep 2022 — Jun 2023',
    location: locale === 'ar' ? 'برشيد، المغرب' : locale === 'fr' ? 'Berrechid, Maroc' : 'Berrechid, Morocco',
    description: locale === 'ar' ? 'شهادة الثانوية العامة في العلوم الفيزيائية.' : locale === 'fr' ? "Diplôme de fin d'études secondaires en Sciences Physiques." : 'High school diploma in Physical Sciences.',
    responsibilities: []
  };

  // Contact
  if (!data.contact) data.contact = {};
  if (!data.contact.form) data.contact.form = {};

  data.contact.info_title = locale === 'ar' ? 'لنبنِ شيئاً معاً.' : locale === 'fr' ? 'Construisons quelque chose ensemble.' : "Let's build something together.";
  data.contact.info_description = locale === 'ar' ? 'أنا أبحث حاليًا عن فرص جديدة وصندوق الوارد الخاص بي مفتوح دائمًا. سواء كان لديك سؤال، فكرة مشروع، أو ترغب فقط في التواصل، سأبذل قصارى جهدي للرد عليك!' : locale === 'fr' ? 'Je suis actuellement à la recherche de nouvelles opportunités et ma boîte de réception est toujours ouverte. Que vous ayez une question, une idée de projet ou que vous souhaitiez simplement échanger, je ferai de mon mieux pour vous répondre !' : "I'm currently seeking new opportunities and my inbox is always open. Whether you have a question, a project idea, or just want to connect, I'll do my best to get back to you!";

  data.contact.email_label = locale === 'ar' ? 'البريد الإلكتروني' : locale === 'fr' ? 'Email' : 'Email';
  data.contact.phone_label = locale === 'ar' ? 'الهاتف' : locale === 'fr' ? 'Téléphone' : 'Phone';
  data.contact.location_label = locale === 'ar' ? 'الموقع' : locale === 'fr' ? 'Lieu' : 'Location';
  
  data.contact.copy = locale === 'ar' ? 'نسخ' : locale === 'fr' ? 'Copier' : 'Copy';
  data.contact.copied = locale === 'ar' ? 'تم النسخ!' : locale === 'fr' ? 'Copié !' : 'Copied!';

  data.contact.available_work = locale === 'ar' ? 'متاح للعمل' : locale === 'fr' ? 'DISPONIBLE POUR TRAVAILLER' : 'AVAILABLE FOR WORK';
  data.contact.available_desc = locale === 'ar' ? 'متاح للاجتماعات الشخصية والتعاون عن بُعد.' : locale === 'fr' ? 'Disponible pour des réunions sur place et des collaborations à distance.' : 'Available for on-site meetings and remote collaboration.';

  data.contact.form.title = locale === 'ar' ? 'أرسل لي رسالة' : locale === 'fr' ? 'Envoyez-moi un message' : 'Send me a message';
  data.contact.form.subtitle = locale === 'ar' ? 'دعنا نناقش مشروعك القادم.' : locale === 'fr' ? 'Discutons de votre prochain projet.' : "Let's discuss your next project.";
  
  data.contact.form.name_placeholder = locale === 'ar' ? 'الاسم' : locale === 'fr' ? 'Nom' : 'Name';
  data.contact.form.email_placeholder = locale === 'ar' ? 'البريد الإلكتروني' : locale === 'fr' ? 'Adresse e-mail' : 'Email address';
  data.contact.form.subject_placeholder = locale === 'ar' ? 'الموضوع' : locale === 'fr' ? 'Sujet' : 'Subject';
  data.contact.form.message_placeholder = locale === 'ar' ? 'كيف يمكنني مساعدتك؟' : locale === 'fr' ? 'Comment puis-je vous aider ?' : 'How can I help you?';

  data.contact.form.send_button = locale === 'ar' ? 'إرسال الرسالة' : locale === 'fr' ? 'Envoyer le message' : 'Send Message';
  data.contact.form.sending = locale === 'ar' ? 'جاري الإرسال...' : locale === 'fr' ? 'Envoi...' : 'Sending...';
  data.contact.form.sent = locale === 'ar' ? 'تم الإرسال!' : locale === 'fr' ? 'Envoyé !' : 'Sent!';

  data.contact.form.privacy_notice = locale === 'ar' ? 'معلوماتك تبقى خاصة' : locale === 'fr' ? 'Vos informations restent privées' : 'Your information stays private';

  data.contact.form.success_title = locale === 'ar' ? 'تم إرسال الرسالة' : locale === 'fr' ? 'Message envoyé' : 'Message Sent';
  data.contact.form.success_message = locale === 'ar' ? 'تم إرسال رسالتك بنجاح.' : locale === 'fr' ? 'Votre message a été envoyé avec succès.' : 'Your message has been sent successfully.';

  data.contact.form.error_title = locale === 'ar' ? 'فشل الإرسال' : locale === 'fr' ? "Échec de l'envoi" : 'Sending Failed';
  data.contact.form.error_message = locale === 'ar' ? 'حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً.' : locale === 'fr' ? 'Une erreur est survenue. Veuillez réessayer plus tard.' : 'Something went wrong. Please try again later.';

  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
});

console.log('Translations updated successfully.');
