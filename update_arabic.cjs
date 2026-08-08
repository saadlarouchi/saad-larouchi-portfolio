const fs = require('fs');
const path = require('path');

const arPath = path.join(process.cwd(), 'src/i18n/locales/ar.json');
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// Hero
ar.hero.badges.digital_developer = "مطور رقمي";
ar.hero.badges.mobile_apps = "تطبيقات الهاتف";
ar.hero.badges.web_development = "تطوير الويب";

// About
ar.about.p1_start = "تخرجت متخصصاً في ";
ar.about.p1_strong = "تطوير تطبيقات الهاتف";
ar.about.p1_end = " من مركز التكوين CMC.";
ar.about.p2_start = "أصمم وأبني منتجات رقمية استثنائية. ينصب تركيزي على برمجة تطبيقات سريعة وفعالة باستخدام ";
ar.about.highlights.expertise_val = "تطوير تطبيقات الهاتف";
ar.about.highlights.background_val = "تطوير البرمجيات";

// Skills
ar.skills.categories.mobile = "تطبيقات الهاتف";

// Projects
ar.projects.subtitle = "مجموعة مختارة من أبرز المنتجات الرقمية التي قمت بتطويرها.";
ar.projects.items["darna-clean"].role = "مطور تطبيقات محمول";
ar.projects.items["allo-brikol"].role = "مطور شامل (Full-Stack)";
ar.projects.items["servegx"].role = "مطور تطبيقات محمول";
ar.projects.items["luxeldo"].role = "مطور واجهات أمامية";

// Experience
ar.experience.items["cmc-diploma"].title = "تطوير البرمجيات — تطبيقات ذكية";
ar.experience.items["cmc-diploma"].responsibilities = [
  "تطوير تطبيقات الهاتف الأصلية (Kotlin/Java) ومتعددة المنصات (Flutter)",
  "بناء واجهات مستخدم حديثة وتفاعلية باستخدام Jetpack Compose",
  "دمج وبناء أنظمة سحابية باستخدام Firebase و REST APIs",
  "تأسيس بنية قوية في تقنيات وتطوير الويب"
];

// Contact
ar.contact.info_description = "سواء كانت لديك فكرة لمنتج جديد أو تبحث عن مطور لتنفيذ مشروعك، بريدي الإلكتروني مفتوح دائماً.";

fs.writeFileSync(arPath, JSON.stringify(ar, null, 2), 'utf8');
console.log('Arabic translations refined for professional context.');
