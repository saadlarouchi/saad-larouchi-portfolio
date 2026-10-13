const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[prerender] dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const projects = [
  {
    id: 'darna-clean',
    title: 'Darna Clean — Android Booking App Case Study | Saad Larouchi',
    description: 'Case study of Darna Clean: a native Android booking application connecting homeowners with cleaning professionals, built with Kotlin, Jetpack Compose, Firebase, and SQLite.',
    url: 'https://saad-larouchi.vercel.app/projects/darna-clean',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    h1: 'Darna Clean',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Darna Clean',
      'applicationCategory': 'MobileApplication',
      'operatingSystem': 'Android',
      'description': 'An Android application that connects homeowners with vetted cleaning professionals, built with Kotlin, Jetpack Compose, Firebase, and SQLite.',
      'url': 'https://saad-larouchi.vercel.app/projects/darna-clean',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi'
      }
    }
  },
  {
    id: 'allo-brikol',
    title: 'Allo Brikol — Home Repair Marketplace Platform | Saad Larouchi',
    description: 'Case study of Allo Brikol: a dual-platform marketplace connecting customers with repair providers, engineered with Flutter, React, TypeScript, and Laravel API.',
    url: 'https://saad-larouchi.vercel.app/projects/allo-brikol',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2074&auto=format&fit=crop',
    h1: 'Allo Brikol',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Allo Brikol',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Android, iOS, Web',
      'description': 'A dual-platform marketplace connecting customers with local home repair and maintenance providers, built with Flutter, React, TypeScript, and Laravel API.',
      'url': 'https://saad-larouchi.vercel.app/projects/allo-brikol',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi'
      }
    }
  },
  {
    id: 'servegx',
    title: 'ServeGX — Mobile Server Monitoring App Case Study | Saad Larouchi',
    description: 'Case study of ServeGX: an Android server telemetry and infrastructure monitoring application with live metrics, developed with Kotlin, Java, and Android SDK.',
    url: 'https://saad-larouchi.vercel.app/projects/servegx',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop',
    h1: 'ServeGX',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'ServeGX',
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'Android',
      'description': 'Real-time server telemetry and infrastructure monitoring Android application delivering live metrics and alerts, built with Kotlin, Java, and Android SDK.',
      'url': 'https://saad-larouchi.vercel.app/projects/servegx',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi'
      }
    }
  },
  {
    id: 'luxeldo',
    title: 'Luxeldo — Luxury Swiss Watch E-Commerce Storefront | Saad Larouchi',
    description: 'Case study of Luxeldo: a luxury Swiss timepiece e-commerce digital storefront designed and developed with HTML, CSS, JavaScript, and SEO architecture.',
    url: 'https://saad-larouchi.vercel.app/projects/luxeldo',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    h1: 'Luxeldo',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': 'Luxeldo',
      'description': 'An ultra-premium digital storefront for luxury Swiss timepieces designed and built with HTML, CSS, JavaScript, and SEO architecture.',
      'url': 'https://saad-larouchi.vercel.app/projects/luxeldo',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi'
      }
    }
  }
];

projects.forEach((proj) => {
  const projectDir = path.join(distDir, 'projects', proj.id);
  fs.mkdirSync(projectDir, { recursive: true });

  let html = baseHtml;

  // Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${proj.title}</title>`);

  // Meta description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${proj.description}" />`
  );

  // Canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${proj.url}" />`
  );

  // Open Graph
  html = html.replace(
    /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/s,
    '<meta property="og:type" content="article" />'
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:url" content="${proj.url}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:title" content="${proj.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:description" content="${proj.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:image" content="${proj.image}" />`
  );

  // Twitter
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:url" content="${proj.url}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:title" content="${proj.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:description" content="${proj.description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:image" content="${proj.image}" />`
  );

  // Inject Project JSON-LD Schema before </head>
  const schemaScript = `\n    <!-- Schema.org Project Structured Data -->\n    <script id="project-jsonld" type="application/ld+json">\n    ${JSON.stringify(proj.schema, null, 2)}\n    </script>\n  `;
  html = html.replace('</head>', `${schemaScript}</head>`);

  // Inject semantic initial HTML inside root for non-JS scrapers/crawlers
  const semanticFallback = `<main id="prerender-content" style="display:none;" aria-hidden="true"><h1>${proj.h1}</h1><p>${proj.description}</p></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${semanticFallback}</div>`);

  const outputPath = path.join(projectDir, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`[prerender] Generated static HTML for /projects/${proj.id} -> ${path.relative(distDir, outputPath)}`);
});

console.log('[prerender] Successfully generated all project static entry points.');
