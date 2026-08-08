const fs = require('fs');
const path = require('path');

const arPath = path.join(process.cwd(), 'src/i18n/locales/ar.json');
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// Nav
ar.nav.about = "نبذة";
ar.nav.skills = "التقنيات";
ar.nav.projects = "الأعمال";

// About
ar.about.section_title = "نبذة عني";
ar.about.badge = "الملف الشخصي";
ar.about.p2_start = "أصمم وأبني منتجات رقمية استثنائية. ينصب تركيزي على تطوير تطبيقات سريعة، سلسة، وقابلة للتوسع باستخدام ";
ar.about.highlights.expertise_val = "تطوير تطبيقات الجوال";
ar.about.highlights.background_val = "مطور رقمي";

// Hero
ar.hero.badges.digital_developer = "مطور رقمي";
ar.hero.badges.mobile_apps = "تطبيقات الجوال";
ar.hero.badges.web_development = "تطوير الويب";
ar.hero.subtitle = "أصيغ تجارب رقمية تصنع الفارق.";
ar.hero.stats.featured_projects = "مشاريع منجزة";

// Skills
ar.skills.categories.mobile = "تطبيقات الجوال";
ar.skills.items.ui_ux_design = "تصميم واجهة وتجربة المستخدم";
ar.skills.items.responsive_design = "واجهات متجاوبة";
ar.skills.items.clean_architecture = "بنية برمجية نظيفة";

// Projects
ar.projects.filters.mobile = "تطبيقات الجوال";
ar.projects.filters.ecommerce = "التجارة الإلكترونية";

ar.projects.items["darna-clean"].role = "مطور تطبيقات جوال";
ar.projects.items["servegx"].role = "مطور تطبيقات جوال";

// Contact
ar.contact.info_title = "هل أنت مستعد للبدء؟";
ar.contact.info_description = "سواء كانت لديك فكرة لمنتج جديد أو تبحث عن شريك تقني لتنفيذ مشروعك، بريدي الإلكتروني مفتوح دائماً.";

fs.writeFileSync(arPath, JSON.stringify(ar, null, 2), 'utf8');
console.log('Arabic translations polished for premium tone.');
