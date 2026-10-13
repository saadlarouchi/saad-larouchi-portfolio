const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[prerender] dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Parse base Schema.org JSON-LD to preserve Person and WebSite entities
const schemaScriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
const schemaMatch = baseHtml.match(schemaScriptRegex);

if (!schemaMatch) {
  console.error('[prerender] Base JSON-LD script not found in dist/index.html');
  process.exit(1);
}

let baseSchemaGraph;
try {
  baseSchemaGraph = JSON.parse(schemaMatch[1].trim());
} catch (e) {
  console.error('[prerender] Failed to parse base JSON-LD in dist/index.html:', e.message);
  process.exit(1);
}

const personEntity = baseSchemaGraph['@graph'].find((e) => e['@type'] === 'Person');
const webSiteEntity = baseSchemaGraph['@graph'].find((e) => e['@type'] === 'WebSite');

const projects = [
  {
    id: 'darna-clean',
    title: 'Darna Clean — Android Booking App Case Study | Saad Larouchi',
    description: 'Case study of Darna Clean: a native Android booking application connecting homeowners with cleaning professionals, built with Kotlin, Jetpack Compose, Firebase, and SQLite.',
    url: 'https://saad-larouchi.vercel.app/projects/darna-clean',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    h1: 'Darna Clean',
    category: 'Mobile Application',
    role: 'Full-Stack Mobile Developer',
    timeline: '2025 — Present',
    problem: 'Finding reliable home cleaning services in Morocco usually relies on word-of-mouth, with no standard way to verify quality or book easily.',
    solution: 'I built a mobile booking app that handles scheduling, reviews, and provider tracking in one place.',
    features: [
      'Service booking and scheduling',
      'Modern UI with Jetpack Compose',
      'Firebase backend integration',
      'Real-time booking status tracking',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'SQLite'],
    schema: {
      '@type': 'SoftwareApplication',
      'name': 'Darna Clean',
      'applicationCategory': 'MobileApplication',
      'operatingSystem': 'Android',
      'description': 'An Android application that connects homeowners with vetted cleaning professionals, built with Kotlin, Jetpack Compose, Firebase, and SQLite.',
      'url': 'https://saad-larouchi.vercel.app/projects/darna-clean',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi',
      },
    },
  },
  {
    id: 'allo-brikol',
    title: 'Allo Brikol — Home Repair Marketplace Platform | Saad Larouchi',
    description: 'Case study of Allo Brikol: a dual-platform marketplace connecting customers with repair providers, engineered with Flutter, React, TypeScript, and Laravel API.',
    url: 'https://saad-larouchi.vercel.app/projects/allo-brikol',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2074&auto=format&fit=crop',
    h1: 'Allo Brikol',
    category: 'Dual-Platform Marketplace',
    role: 'Full-Stack Developer',
    timeline: '2025 — Present',
    problem: 'Homeowners often struggle to find trustworthy service providers for repairs without reliable referrals.',
    solution: 'I helped create a Flutter app for customers and a React dashboard for providers, integrating a transparent review and pricing system.',
    features: [
      'Search and booking system',
      'Ratings and reviews',
      'Provider profile management',
      'Real-time authentication',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Laravel API', 'Flutter'],
    schema: {
      '@type': 'SoftwareApplication',
      'name': 'Allo Brikol',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Android, iOS, Web',
      'description': 'A dual-platform marketplace connecting customers with local home repair and maintenance providers, built with Flutter, React, TypeScript, and Laravel API.',
      'url': 'https://saad-larouchi.vercel.app/projects/allo-brikol',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi',
      },
    },
  },
  {
    id: 'servegx',
    title: 'ServeGX — Mobile Server Monitoring App Case Study | Saad Larouchi',
    description: 'Case study of ServeGX: an Android server telemetry and infrastructure monitoring application with live metrics, developed with Kotlin, Java, and Android SDK.',
    url: 'https://saad-larouchi.vercel.app/projects/servegx',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    h1: 'ServeGX',
    category: 'Server Monitoring Mobile App',
    role: 'Mobile Developer',
    timeline: '2025 — Present',
    problem: 'System administrators need a lightweight way to check server metrics on the go without opening heavy desktop dashboards.',
    solution: 'I developed an Android app that visualizes live system metrics and sends push notifications for critical alerts.',
    features: [
      'CPU, RAM, Disk & Network monitoring',
      'Real-time dashboard with live metrics',
      'Customizable alerts and notifications',
      'Historical analytics and reporting',
    ],
    technologies: ['Java', 'Kotlin', 'Android SDK'],
    schema: {
      '@type': 'SoftwareApplication',
      'name': 'ServeGX',
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'Android',
      'description': 'Real-time server telemetry and infrastructure monitoring Android application delivering live metrics and alerts, built with Kotlin, Java, and Android SDK.',
      'url': 'https://saad-larouchi.vercel.app/projects/servegx',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi',
      },
    },
  },
  {
    id: 'luxeldo',
    title: 'Luxeldo — Luxury Swiss Watch E-Commerce Storefront | Saad Larouchi',
    description: 'Case study of Luxeldo: a luxury Swiss timepiece e-commerce digital storefront designed and developed with HTML, CSS, JavaScript, and SEO architecture.',
    url: 'https://saad-larouchi.vercel.app/projects/luxeldo',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    h1: 'Luxeldo',
    category: 'Luxury E-Commerce Storefront',
    role: 'Web Developer & Brand Marketing',
    timeline: '2022 — Present',
    problem: 'The brand needed an online presence that matched the premium quality of their physical products while reaching a wider audience.',
    solution: 'I designed and developed their e-commerce platform, focusing heavily on brand consistency and product presentation.',
    features: [
      'Premium product catalog',
      'Responsive luxury design',
      'Brand identity integration',
      'SEO-optimized storefront',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    schema: {
      '@type': 'CreativeWork',
      'name': 'Luxeldo',
      'description': 'An ultra-premium digital storefront for luxury Swiss timepieces designed and built with HTML, CSS, JavaScript, and SEO architecture.',
      'url': 'https://saad-larouchi.vercel.app/projects/luxeldo',
      'author': {
        '@type': 'Person',
        '@id': 'https://saad-larouchi.vercel.app/#person',
        'name': 'Saad Larouchi',
      },
    },
  },
];

projects.forEach((proj) => {
  const projectDir = path.join(distDir, 'projects', proj.id);
  fs.mkdirSync(projectDir, { recursive: true });

  let html = baseHtml;

  // 1. Primary Page Metadata
  html = html.replace(/<title>.*?<\/title>/s, `<title>${proj.title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${proj.description}" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${proj.url}" />`
  );

  // 2. Open Graph Metadata
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

  // 3. Twitter Metadata
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

  // 4. Fix 1: Unified Project Schema with accurate WebPage and mainEntity
  const projectWebPage = {
    '@type': 'WebPage',
    '@id': `${proj.url}#webpage`,
    'url': proj.url,
    'name': proj.title,
    'description': proj.description,
    'isPartOf': {
      '@id': 'https://saad-larouchi.vercel.app/#website',
    },
    'about': {
      '@id': 'https://saad-larouchi.vercel.app/#person',
    },
    'mainEntity': {
      '@id': `${proj.url}#project`,
    },
  };

  const projectEntity = {
    ...proj.schema,
    '@id': `${proj.url}#project`,
  };

  const unifiedSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      personEntity,
      webSiteEntity,
      projectWebPage,
      projectEntity,
    ],
  };

  const unifiedScript = `<script type="application/ld+json">\n    ${JSON.stringify(unifiedSchemaGraph, null, 2)}\n    </script>`;
  html = html.replace(schemaScriptRegex, unifiedScript);

  // 5. Fix 2: Accessible, meaningful initial HTML fallback (no display:none, no aria-hidden)
  const fallbackHtml = `
    <div id="prerender-fallback" style="background:var(--bg,#0a0a0c);color:var(--text-primary,#f8fafc);min-height:100vh;padding:4rem 1.5rem;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <article style="max-width:48rem;margin:0 auto;">
        <nav style="margin-bottom:2rem;">
          <a href="/#projects" style="color:var(--text-secondary,#94a3b8);text-decoration:none;font-size:0.875rem;font-weight:500;">← Back to Projects</a>
        </nav>
        <header style="margin-bottom:2.5rem;">
          <span style="display:inline-block;padding:0.25rem 0.75rem;border-radius:9999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;background:rgba(59,130,246,0.15);color:#3b82f6;margin-bottom:1rem;">${proj.category}</span>
          <h1 style="font-size:2.5rem;font-weight:800;letter-spacing:-0.025em;line-height:1.2;margin:0 0 1rem 0;">${proj.h1}</h1>
          <p style="font-size:1.125rem;line-height:1.7;color:var(--text-secondary,#94a3b8);margin:0;">${proj.description}</p>
        </header>
        <section style="margin-bottom:2rem;">
          <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.75rem 0;">The Challenge</h2>
          <p style="line-height:1.7;color:var(--text-secondary,#94a3b8);margin:0;">${proj.problem}</p>
        </section>
        <section style="margin-bottom:2rem;">
          <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.75rem 0;">The Solution</h2>
          <p style="line-height:1.7;color:var(--text-secondary,#94a3b8);margin:0;">${proj.solution}</p>
        </section>
        <section style="margin-bottom:2rem;">
          <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.75rem 0;">Key Features</h2>
          <ul style="padding-left:1.25rem;margin:0;color:var(--text-secondary,#94a3b8);line-height:1.8;">
            ${proj.features.map((f) => `<li>${f}</li>`).join('')}
          </ul>
        </section>
        <section style="margin-bottom:2.5rem;">
          <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.75rem 0;">Tech Stack</h2>
          <p style="line-height:1.7;color:var(--text-secondary,#94a3b8);margin:0;">${proj.technologies.join(', ')}</p>
        </section>
        <footer>
          <a href="/#projects" style="display:inline-block;padding:0.75rem 1.5rem;border-radius:0.75rem;background:var(--bg-secondary,#141418);border:1px solid var(--border,#26262e);color:var(--text-primary,#f8fafc);text-decoration:none;font-weight:600;font-size:0.875rem;">← Back to Projects</a>
        </footer>
      </article>
    </div>`.trim();

  html = html.replace('<div id="root"></div>', `<div id="root">${fallbackHtml}</div>`);

  const outputPath = path.join(projectDir, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`[prerender] Generated static HTML for /projects/${proj.id} -> ${path.relative(distDir, outputPath)}`);
});

console.log('[prerender] Successfully generated all project static entry points with unified WebPage schema and semantic fallback.');
