const fs = require('fs');
const path = require('path');

const localesPath = path.join(process.cwd(), 'src/i18n/locales');
const files = ['en.json', 'fr.json', 'ar.json'];

files.forEach(file => {
  const filePath = path.join(localesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace keys
  content = content.replace(/"darna_clean":/g, '"darna-clean":');
  content = content.replace(/"allo_brikol":/g, '"allo-brikol":');
  content = content.replace(/"ai_capabilities":/g, '"ai-capabilities":');
  content = content.replace(/"claude_code":/g, '"claude-code-101":');

  // Parse to add buttons to projects if missing
  const json = JSON.parse(content);
  if (!json.projects.buttons) {
    if (file === 'en.json') {
      json.projects.buttons = { case_study: "Case Study" };
    } else if (file === 'fr.json') {
      json.projects.buttons = { case_study: "Étude de Cas" };
    } else if (file === 'ar.json') {
      json.projects.buttons = { case_study: "دراسة حالة" };
    }
  }

  // Same for certificates.buttons.view_credential
  if (!json.certificates.buttons) {
     if (file === 'en.json') {
       json.certificates.buttons = { view_credential: "View Credential" };
     } else if (file === 'fr.json') {
       json.certificates.buttons = { view_credential: "Voir le Certificat" };
     } else if (file === 'ar.json') {
       json.certificates.buttons = { view_credential: "عرض الشهادة" };
     }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Updated ${file}`);
});
