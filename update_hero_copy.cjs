const fs = require('fs');
const path = require('path');

const localesPath = path.join(process.cwd(), 'src/i18n/locales');
const files = ['en.json', 'fr.json', 'ar.json'];

const updates = {
  'en.json': {
    subtitle: "I forge digital experiences that demand attention."
  },
  'fr.json': {
    subtitle: "Je forge des expériences numériques qui marquent les esprits."
  },
  'ar.json': {
    subtitle: "أصيغ تجارب رقمية تصنع الفارق."
  }
};

files.forEach(file => {
  const filePath = path.join(localesPath, file);
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  json.hero.subtitle = updates[file].subtitle;
  
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
});
console.log('Hero subtitles updated.');
