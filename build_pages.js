const fs = require('fs');

// =====================================================
// SHARED COMPONENTS
// =====================================================

const head = (title, desc) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,800;1,900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/style.css">
  <link rel="icon" type="image/png" href="assets/crest.png">
</head>
<body>

<div class="demo-banner">
  <strong>PREVIEW</strong> &nbsp;·&nbsp; Redesign mockup for ATU Local 823
</div>

<div class="utility-bar">
  <div class="container">
    <div class="utility-left">
      <span><span class="dot"></span>LOCAL 823 · NEWARK, NJ</span>
      <span>CHARTERED <em>placeholder</em></span>
    </div>
    <div class="utility-right">
      <a href="#">MEMBER LOGIN</a>
      <a href="#">PAY DUES</a>
      <a href="officers.html">CONTACT HALL</a>
      <span>973 · 374 · 4470</span>
    </div>
  </div>
</div>
`;

const nav = (active) => `<nav class="main-nav">
  <div class="container">
    <a href="index.html" class="brand-block">
      <img src="assets/crest.png" alt="ATU Local 823 crest" class="brand-crest">
      <div class="brand-text">
        <div class="brand-eyebrow">Amalgamated Transit Union</div>
        <div class="brand-name">LOCAL 823</div>
        <div class="brand-tagline">Ironbound · Kearny Point · Newark, NJ</div>
      </div>
    </a>
    <div class="affiliated-block">
      <span class="affiliated-label">Affiliated<br>With</span>
      <img src="assets/atu-logo.png" alt="ATU International">
    </div>
    <button class="menu-toggle" aria-label="Toggle menu" onclick="toggleMenu()">
      <div class="menu-icon" id="menuIcon"><span></span><span></span><span></span></div>
    </button>
    <div class="nav-links" id="navLinks">
      <a href="index.html"${active==='home'?' class="active"':''}>Home</a>
      <a href="news.html"${active==='news'?' class="active"':''}>News</a>
      <a href="pick-schedules.html"${active==='picks'?' class="active"':''}>Pick Schedules</a>
      <a href="routes.html"${active==='routes'?' class="active"':''}>Routes</a>
      <a href="officers.html"${active==='officers'?' class="active"':''}>Officers</a>
      <a href="resources.html"${active==='resources'?' class="active"':''}>Resources</a>
      <a href="#" class="nav-cta">Member Portal &rarr;</a>
    </div>
  </div>
</nav>
`;

const footer = `<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div>
        <div class="footer-brand-row">
          <img src="assets/crest.png" alt="Local 823 Crest" class="crest">
          <div>
            <div class="footer-brand-text">ATU LOCAL 823</div>
            <div class="footer-brand-sub">Ironbound &middot; Kearny Point</div>
          </div>
        </div>
        <p class="footer-tagline">
          The voice of bus operators driving Newark every day. Contracts won at the table. Solidarity built behind the wheel.
        </p>
        <div class="footer-affiliated">
          <img src="assets/atu-logo.png" alt="ATU International">
          <div class="footer-affiliated-text">
            <strong>Affiliated With ATU International</strong>
            atu.org
          </div>
        </div>
      </div>
      <div class="footer-col">
        <h4>The Local</h4>
        <ul>
          <li><a href="news.html">News &amp; Advisories</a></li>
          <li><a href="officers.html">Officers</a></li>
          <li><a href="#">Union Meetings</a></li>
          <li><a href="#">Member Portal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Member Tools</h4>
        <ul>
          <li><a href="pick-schedules.html">Pick Schedules</a></li>
          <li><a href="routes.html">Route Descriptions</a></li>
          <li><a href="resources.html">Forms &amp; Contract</a></li>
          <li><a href="#">File a Grievance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Visit the Hall</h4>
        <ul>
          <li>186 Brookside Avenue</li>
          <li>Irvington, NJ 07111</li>
          <li><a href="tel:9733744470">973 &middot; 374 &middot; 4470</a></li>
          <li><a href="https://www.atu.org" target="_blank">atu.org &#8599;</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 ATU Local 823. All rights reserved.</p>
      <div class="footer-bottom-right">
        <a href="#">Privacy</a>
        <a href="#">Accessibility</a>
        <span>Solidarity Forever.</span>
      </div>
    </div>
  </div>
</footer>

<script>
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const icon = document.getElementById('menuIcon');
  links.classList.toggle('open');
  icon.classList.toggle('open');
}
</script>

</body>
</html>`;

const pageHeader = (crumbs, title, accent, subtitle) => `<header class="page-header">
  <div class="container">
    <div class="breadcrumbs">${crumbs}</div>
    <h1 class="page-title">${title}<span class="accent">${accent}</span></h1>
    <p class="page-subtitle">${subtitle}</p>
  </div>
</header>
`;

const wrap = (title, desc, active, body) =>
  head(title, desc) + nav(active) + body + footer;

// =====================================================
// SINGLE NEWS POSTS
// =====================================================

const newsPost = ({ tag, tagText, date, title, body, slug }) => `<header class="page-header">
  <div class="container">
    <div class="breadcrumbs">
      <a href="index.html">Home</a> <span>/</span> <a href="news.html">News</a> <span>/</span> ${title.split('—')[0].trim()}
    </div>
  </div>
</header>

<article>
  <div class="article-wrap">
    <a href="news.html" class="article-back">&larr; All News</a>

    <div class="article-meta">
      <span class="article-tag ${tag}">${tagText}</span>
      <span class="article-date">${date}</span>
    </div>

    <h1 class="article-title">${title}</h1>

    <p class="article-author">Posted by <strong>Elijah Spates Jr.</strong> &middot; President / Business Agent &middot; ATU Local 823</p>

    <div class="article-body">
      ${body}
    </div>

    <div class="article-sign-off">
      In Solidarity,<br>
      Elijah Spates Jr.
    </div>
  </div>
</article>
`;

// FMCSA POST
const fmcsaBody = `
<p><strong>FMCSA Update.</strong></p>

<p>Please be advised that as of February 23rd, 2026, drivers are no longer required to submit their Interstate Commerce Commission (ICC) medical certifications directly to the Motor Vehicle Commission (MVC) or the Department of Motor Vehicles (DMV). Instead, the Department of Transportation (DOT) physical examination results will be submitted by the medical provider or examiner directly to the Federal Motor Carrier Safety Administration (FMCSA). The FMCSA will then report this information to the respective motor vehicle department within 28 to 48 hours.</p>

<p>Therefore, it is crucial to schedule your DOT physical examination well in advance of its expiration date. Failure to do so may result in a lapse in your certification status, which will prevent you from operating a commercial vehicle. Once your certification is recorded as expired in the system, New Jersey Transit will not permit you to drive a bus.</p>

<p>It is imperative that you allocate ample time for this process. Even if you complete your physical a month prior to its expiration, that is acceptable. Waiting until the last minute could lead to a situation where you arrive at work only to be informed that your ICC has expired. While you may have submitted the documentation, if the DMV has not yet received and processed it, and subsequently reported it to New Jersey Transit, <strong>you will not be authorized to work.</strong></p>

<p>As always, any questions or concerns please don't hesitate to reach out.</p>
`;

fs.writeFileSync('/home/claude/atu823-redesign/news-fmcsa.html', wrap(
  'FMCSA Medical Certification Changes — ATU Local 823',
  'Federal Motor Carrier Safety Administration update on DOT physical submissions, effective February 23rd 2026.',
  'news',
  newsPost({
    tag: 'update',
    tagText: 'Update',
    date: 'March 4, 2026',
    title: 'FMCSA Medical Certification Changes &mdash; what every operator needs to know.',
    body: fmcsaBody,
    slug: 'fmcsa'
  })
));

// BOWLING POST
const bowlingBody = `
<p>Good morning, Local 823.</p>

<p>Our bowling event is scheduled for <strong>Saturday, March 7th, 2026, at 7:30 p.m.</strong> The cost for two hours of bowling, including shoe rental, is <strong>$20.00 per person</strong>.</p>

<p>Should you choose not to participate in bowling but wish to engage in fellowship with your colleagues, you are invited to attend free of charge.</p>

<p>A full cash bar and snack bar will be available.</p>

<p>Please submit payment via <strong>Zelle or Cash App</strong>, and kindly send a text message once you have paid to ensure an accurate count for the lanes.</p>

<p>Looking forward to seeing everyone there. It's been a long stretch of overtime and bad weather &mdash; come unwind with the people who get it.</p>
`;

fs.writeFileSync('/home/claude/atu823-redesign/news-bowling.html', wrap(
  'Bowling Night — March 7th — ATU Local 823',
  'Annual Local 823 bowling night. Saturday March 7th at 7:30 p.m.',
  'news',
  newsPost({
    tag: 'event',
    tagText: 'Event',
    date: 'February 28, 2026',
    title: 'Bowling Night &mdash; Saturday, March 7th.',
    body: bowlingBody,
    slug: 'bowling'
  })
));

// BLIZZARD POST
const blizzardBody = `
<p>Good evening, Local 823.</p>

<p>We regret to inform you of an impending storm. As essential personnel, <strong>all employees scheduled to work are required to report as usual</strong>, regardless of the declared state of emergency, unless otherwise notified.</p>

<p>We kindly request your best efforts to arrive on time. While we previously granted amnesty, the company has expressed significant concerns regarding its misuse, leading to a revised policy.</p>

<p>Should service be suspended, the same protocols as last storm season will be in effect. If you are unable to make it in due to genuine road impassability or hazardous conditions in your area, please contact your steward or the dispatch line as early as possible &mdash; do not wait until your scheduled report time.</p>

<p>Stay safe out there. Drive to the conditions, not to the schedule. The local has your back when you do the right thing.</p>
`;

fs.writeFileSync('/home/claude/atu823-redesign/news-blizzard.html', wrap(
  'Blizzard Advisory & Reporting Policy — ATU Local 823',
  'Reporting expectations and call-out protocol during severe weather.',
  'news',
  newsPost({
    tag: 'advisory',
    tagText: 'Advisory',
    date: 'February 22, 2026',
    title: 'Blizzard Advisory &amp; Reporting Policy.',
    body: blizzardBody,
    slug: 'blizzard'
  })
));

// =====================================================
// OFFICERS PAGE
// =====================================================

const officersData = [
  { initials: 'ES', name: 'Elijah Spates Jr.', role: 'President / Business Agent', phone: '(908) 514-1725' },
  { initials: 'EL', name: 'Earl Leach', role: 'Vice President', phone: '(973) 703-0625' },
  { initials: 'PS', name: 'Patrick Smith', role: 'Financial Secretary', phone: '(973) 202-5045' },
  { initials: 'DC', name: 'Dakeia Chaney', role: 'Recording Secretary', phone: '(732) 829-1007' },
  { initials: 'EE', name: 'Edward Egram', role: 'Garage Delegate', phone: '(908) 512-5551' },
  { initials: 'MH', name: 'Marlin Harris', role: 'Shop Steward — Ironbound', phone: '(862) 849-7874' },
  { initials: 'TM', name: 'Tomas Montalvo', role: 'Asst. Shop Steward — Kearny Point', phone: '(732) 259-1260' },
];

const officersBody = pageHeader(
  '<a href="index.html">Home</a> <span>/</span> Officers',
  'Meet the<br>',
  'Local 823 Board.',
  'Direct lines to the people who handle the work of the local. Contracts. Grievances. Discipline. Schedule disputes. Health and welfare. Pick rounds. If something is wrong on the job, this is who you call.'
) + `
<section class="section light">
  <div class="container">

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 4rem;">
      <div>
        <div class="eyebrow">Who to call &amp; when</div>
        <h2 style="font-family: var(--font-display); font-size: 2rem; line-height: 1.05; color: var(--navy); margin-bottom: 1rem; letter-spacing: -0.01em;">Start with your steward.</h2>
        <p style="font-size: 0.95rem; line-height: 1.7; color: var(--grey-700);">For day-to-day issues at the garage &mdash; schedule disputes, supervisor problems, write-ups &mdash; reach the steward at your garage first. They handle most issues directly. If they can't resolve it, they escalate to the Vice President or President.</p>
      </div>
      <div>
        <div class="eyebrow">Emergency &amp; after hours</div>
        <h2 style="font-family: var(--font-display); font-size: 2rem; line-height: 1.05; color: var(--navy); margin-bottom: 1rem; letter-spacing: -0.01em;">Always call the President.</h2>
        <p style="font-size: 0.95rem; line-height: 1.7; color: var(--grey-700);">Suspensions, terminations, on-the-job injuries, harassment claims, or anything else that can't wait until the next shift &mdash; call the President directly. (908) 514-1725. Day or night.</p>
      </div>
    </div>

    <div class="officers-grid">
      ${officersData.map(o => `
      <div class="officer-card">
        <div class="officer-photo">
          <span>${o.initials}</span>
        </div>
        <div class="officer-body">
          <div class="officer-role">${o.role}</div>
          <div class="officer-name">${o.name}</div>
          <a href="tel:${o.phone.replace(/[^0-9]/g, '')}" class="officer-contact">
            <span class="label">DIRECT</span>
            ${o.phone}
          </a>
        </div>
      </div>
      `).join('')}
    </div>

    <div style="margin-top: 4rem; padding: 2.5rem; background: var(--navy); color: var(--white); border-left: 4px solid var(--red);">
      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; align-items: center;">
        <div>
          <div class="eyebrow gold">Need to file something?</div>
          <h3 style="font-family: var(--font-display); font-size: 1.75rem; line-height: 1.05; letter-spacing: -0.005em;">File a grievance or report a workplace issue.</h3>
        </div>
        <div>
          <p style="font-size: 0.95rem; line-height: 1.7; color: rgba(255,255,255,0.8); margin-bottom: 1.5rem;">Grievance forms and the union constitution are available in the Resources section. Always file through your steward or the President &mdash; never through the company alone.</p>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="resources.html" class="btn btn-red">Grievance Forms &rarr;</a>
            <a href="tel:9085141725" class="btn btn-outline">Call the President</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
`;

fs.writeFileSync('/home/claude/atu823-redesign/officers.html', wrap(
  'Officers & Stewards — ATU Local 823',
  'Direct contact information for the officers, stewards, and delegates of ATU Local 823.',
  'officers',
  officersBody
));

// =====================================================
// PICK SCHEDULES
// =====================================================

const ironboundPicks = [
  { name: 'Saturday Paddles', sub: 'Ironbound &middot; April Pick 2026', size: 'PDF' },
  { name: 'Weekday Runs &mdash; Group A', sub: 'Ironbound &middot; April Pick 2026', size: 'PDF' },
  { name: 'Weekday Runs &mdash; Group B', sub: 'Ironbound &middot; April Pick 2026', size: 'PDF' },
  { name: 'Sunday Schedule', sub: 'Ironbound &middot; April Pick 2026', size: 'PDF' },
  { name: 'Holiday Coverage', sub: 'Ironbound &middot; April Pick 2026', size: 'PDF' },
  { name: 'Extra Board', sub: 'Ironbound &middot; April Pick 2026', size: 'PDF' },
];

const kearnyPicks = [
  { name: 'Weekday Runs &mdash; Group A', sub: 'Kearny Point &middot; April Pick 2026', size: 'PDF' },
  { name: 'Weekday Runs &mdash; Group B', sub: 'Kearny Point &middot; April Pick 2026', size: 'PDF' },
  { name: 'Saturday Paddles', sub: 'Kearny Point &middot; April Pick 2026', size: 'PDF' },
  { name: 'Sunday Schedule', sub: 'Kearny Point &middot; April Pick 2026', size: 'PDF' },
];

const picksBody = pageHeader(
  '<a href="index.html">Home</a> <span>/</span> Pick Schedules',
  'Pick<br>',
  'Schedules.',
  'Current and upcoming pick rounds for Ironbound and Kearny Point. Tap your garage. Tap a schedule to download the PDF.'
) + `
<section class="section light">
  <div class="container">

    <div class="disclaimer">
      <strong>Attention:</strong> The information on this website is to be used as a courtesy. It is your responsibility to re-check any information posted here, in the garage, against original documents before picking your work in the garage.
    </div>

    <div class="tab-bar">
      <button class="tab active" onclick="showTab('ib', this)">Ironbound</button>
      <button class="tab" onclick="showTab('kp', this)">Kearny Point</button>
    </div>

    <div id="ib-content">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h2 style="font-family: var(--font-display); font-size: 1.75rem; color: var(--navy); letter-spacing: -0.005em;">Ironbound &mdash; April Pick 2026</h2>
        <span style="font-size: 0.78rem; letter-spacing: 0.1em; color: var(--grey-500); text-transform: uppercase; font-weight: 700;">Effective April 4, 2026</span>
      </div>

      <div class="doc-list">
        ${ironboundPicks.map(p => `
        <a href="#" class="doc-card">
          <div class="doc-icon">${p.size}</div>
          <div class="doc-card-body">
            <div class="doc-title">${p.name}</div>
            <div class="doc-meta">${p.sub}</div>
          </div>
          <div class="doc-arrow">&rarr;</div>
        </a>
        `).join('')}
      </div>

      <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--navy); margin-bottom: 1rem; letter-spacing: -0.005em;">Upcoming &mdash; Memorial Day Pick</h3>
      <div class="doc-list">
        <a href="#" class="doc-card">
          <div class="doc-icon">PDF</div>
          <div class="doc-card-body">
            <div class="doc-title">Memorial Day Schedule</div>
            <div class="doc-meta">Ironbound &middot; Posts ~3 weeks before effective date</div>
          </div>
          <div class="doc-arrow">&rarr;</div>
        </a>
      </div>
    </div>

    <div id="kp-content" style="display: none;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h2 style="font-family: var(--font-display); font-size: 1.75rem; color: var(--navy); letter-spacing: -0.005em;">Kearny Point &mdash; April Pick 2026</h2>
        <span style="font-size: 0.78rem; letter-spacing: 0.1em; color: var(--grey-500); text-transform: uppercase; font-weight: 700;">Effective April 4, 2026</span>
      </div>

      <div class="doc-list">
        ${kearnyPicks.map(p => `
        <a href="#" class="doc-card">
          <div class="doc-icon">${p.size}</div>
          <div class="doc-card-body">
            <div class="doc-title">${p.name}</div>
            <div class="doc-meta">${p.sub}</div>
          </div>
          <div class="doc-arrow">&rarr;</div>
        </a>
        `).join('')}
      </div>

      <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--navy); margin-bottom: 1rem; letter-spacing: -0.005em;">Upcoming &mdash; Memorial Day Pick</h3>
      <div class="doc-list">
        <a href="#" class="doc-card">
          <div class="doc-icon">PDF</div>
          <div class="doc-card-body">
            <div class="doc-title">Memorial Day Schedule</div>
            <div class="doc-meta">Kearny Point &middot; Posts ~3 weeks before effective date</div>
          </div>
          <div class="doc-arrow">&rarr;</div>
        </a>
      </div>
    </div>

  </div>
</section>

<script>
function showTab(which, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ib-content').style.display = which === 'ib' ? 'block' : 'none';
  document.getElementById('kp-content').style.display = which === 'kp' ? 'block' : 'none';
}

// Handle deep link from garage selector on homepage
if (window.location.hash === '#kearny') {
  document.querySelectorAll('.tab')[1].click();
}
</script>
`;

fs.writeFileSync('/home/claude/atu823-redesign/pick-schedules.html', wrap(
  'Pick Schedules — ATU Local 823',
  'Current and upcoming pick rounds for Ironbound and Kearny Point garages.',
  'picks',
  picksBody
));

// =====================================================
// ROUTES PAGE
// =====================================================

const routesBody = pageHeader(
  '<a href="index.html">Home</a> <span>/</span> Route Descriptions',
  'Route<br>',
  'Descriptions.',
  'Every line in writing. Landmarks, pull-ins, layovers, route deviations. The book your steward swears by.'
) + `
<section class="section light">
  <div class="container">

    <div class="disclaimer">
      <strong>Attention:</strong> Route descriptions are member-maintained as a courtesy. Always confirm route details against the official paddles posted in the garage before pulling out.
    </div>

    <div class="tab-bar">
      <button class="tab active" onclick="showTab('ib', this)">Ironbound</button>
      <button class="tab" onclick="showTab('kp', this)">Kearny Point</button>
    </div>

    <div id="ib-content">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h2 style="font-family: var(--font-display); font-size: 1.75rem; color: var(--navy); letter-spacing: -0.005em;">Ironbound Routes</h2>
        <span style="font-size: 0.78rem; letter-spacing: 0.1em; color: var(--grey-500); text-transform: uppercase; font-weight: 700;">47 Routes &middot; Last Updated Mar 2026</span>
      </div>

      <div class="doc-list">
        ${[1,5,11,13,21,25,27,28,29,30,40,41].map(n => `
        <a href="#" class="doc-card">
          <div class="doc-icon" style="font-size: 1rem; letter-spacing: 0;">${n}</div>
          <div class="doc-card-body">
            <div class="doc-title">Route ${n}</div>
            <div class="doc-meta">Ironbound &middot; <em>route description coming soon</em></div>
          </div>
          <div class="doc-arrow">&rarr;</div>
        </a>
        `).join('')}
      </div>
    </div>

    <div id="kp-content" style="display: none;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h2 style="font-family: var(--font-display); font-size: 1.75rem; color: var(--navy); letter-spacing: -0.005em;">Kearny Point Routes</h2>
        <span style="font-size: 0.78rem; letter-spacing: 0.1em; color: var(--grey-500); text-transform: uppercase; font-weight: 700;">38 Routes &middot; Last Updated Mar 2026</span>
      </div>

      <div class="doc-list">
        ${[2,4,8,24,26,34,37,39,42,43,44,67,76].map(n => `
        <a href="#" class="doc-card">
          <div class="doc-icon" style="font-size: 1rem; letter-spacing: 0;">${n}</div>
          <div class="doc-card-body">
            <div class="doc-title">Route ${n}</div>
            <div class="doc-meta">Kearny Point &middot; <em>route description coming soon</em></div>
          </div>
          <div class="doc-arrow">&rarr;</div>
        </a>
        `).join('')}
      </div>
    </div>

  </div>
</section>

<script>
function showTab(which, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ib-content').style.display = which === 'ib' ? 'block' : 'none';
  document.getElementById('kp-content').style.display = which === 'kp' ? 'block' : 'none';
}
</script>
`;

fs.writeFileSync('/home/claude/atu823-redesign/routes.html', wrap(
  'Route Descriptions — ATU Local 823',
  'Route descriptions for Ironbound and Kearny Point garages.',
  'routes',
  routesBody
));

// =====================================================
// RESOURCES PAGE
// =====================================================

const resourcesBody = pageHeader(
  '<a href="index.html">Home</a> <span>/</span> Resources',
  '',
  'Resources.',
  'The contract. The constitution. Grievance forms. Health and welfare guides. Federal regulations that affect every operator. Everything you might need, in one place.'
) + `
<section class="section light">
  <div class="container">

    <h2 style="font-family: var(--font-display); font-size: 1.75rem; color: var(--navy); margin-bottom: 1.5rem; letter-spacing: -0.005em;">The Contract &amp; Constitution</h2>
    <div class="doc-list" style="margin-bottom: 3.5rem;">
      <a href="#" class="doc-card">
        <div class="doc-icon">CBA</div>
        <div class="doc-card-body">
          <div class="doc-title">Collective Bargaining Agreement</div>
          <div class="doc-meta">Current contract &middot; Effective through 2027</div>
        </div>
        <div class="doc-arrow">&rarr;</div>
      </a>
      <a href="#" class="doc-card">
        <div class="doc-icon">DOC</div>
        <div class="doc-card-body">
          <div class="doc-title">ATU International Constitution</div>
          <div class="doc-meta">Governing document for all locals</div>
        </div>
        <div class="doc-arrow">&rarr;</div>
      </a>
    </div>

    <h2 style="font-family: var(--font-display); font-size: 1.75rem; color: var(--navy); margin-bottom: 1.5rem; letter-spacing: -0.005em;">Grievance &amp; Workplace Forms</h2>
    <div class="doc-list" style="margin-bottom: 3.5rem;">
      <a href="#" class="doc-card">
        <div class="doc-icon">FORM</div>
        <div class="doc-card-body">
          <div class="doc-title">Grievance Filing Form</div>
          <div class="doc-meta">Submit through your steward</div>
        </div>
        <div class="doc-arrow">&rarr;</div>
      </a>
      <a href="#" class="doc-card">
        <div class="doc-icon">FORM</div>
        <div class="doc-card-body">
          <div class="doc-title">Workers' Compensation Claim</div>
          <div class="doc-meta">For on-the-job injuries</div>
        </div>
        <div class="doc-arrow">&rarr;</div>
      </a>
      <a href="#" class="doc-card">
        <div class="doc-icon">FORM</div>
        <div class="doc-card-body">
          <div class="doc-title">Discrimination &amp; Harassment Report</div>
          <div class="doc-meta">Confidential filing through the local</div>
        </div>
        <div class="doc-arrow">&rarr;</div>
      </a>
      <a href="#" class="doc-card">
        <div class="doc-icon">FORM</div>
        <div class="doc-card-body">
          <div class="doc-title">Beneficiary Designation</div>
          <div class="doc-meta">Update your benefits beneficiary</div>
        </div>
        <div class="doc-arrow">&rarr;</div>
      </a>
    </div>

    <h2 style="font-family: var(--font-display); font-size: 1.75rem; color: var(--navy); margin-bottom: 1.5rem; letter-spacing: -0.005em;">Federal &amp; State Regulations</h2>
    <div class="doc-list" style="margin-bottom: 3.5rem;">
      <a href="https://www.fmcsa.dot.gov/" target="_blank" class="doc-card">
        <div class="doc-icon">LINK</div>
        <div class="doc-card-body">
          <div class="doc-title">FMCSA &mdash; Federal Motor Carrier Safety Administration</div>
          <div class="doc-meta">Medical certification &middot; CDL regulations</div>
        </div>
        <div class="doc-arrow">&#8599;</div>
      </a>
      <a href="https://www.nj.gov/mvc/" target="_blank" class="doc-card">
        <div class="doc-icon">LINK</div>
        <div class="doc-card-body">
          <div class="doc-title">NJ Motor Vehicle Commission</div>
          <div class="doc-meta">CDL renewals &middot; Endorsements</div>
        </div>
        <div class="doc-arrow">&#8599;</div>
      </a>
      <a href="https://www.atu.org" target="_blank" class="doc-card">
        <div class="doc-icon">LINK</div>
        <div class="doc-card-body">
          <div class="doc-title">ATU International</div>
          <div class="doc-meta">Parent union &middot; News &middot; Pension info</div>
        </div>
        <div class="doc-arrow">&#8599;</div>
      </a>
      <a href="https://www.osha.gov" target="_blank" class="doc-card">
        <div class="doc-icon">LINK</div>
        <div class="doc-card-body">
          <div class="doc-title">OSHA &mdash; Workplace Safety</div>
          <div class="doc-meta">Reporting unsafe conditions</div>
        </div>
        <div class="doc-arrow">&#8599;</div>
      </a>
    </div>

  </div>
</section>
`;

fs.writeFileSync('/home/claude/atu823-redesign/resources.html', wrap(
  'Resources — ATU Local 823',
  'Contract, constitution, forms, and external regulatory resources.',
  'resources',
  resourcesBody
));

console.log('All pages built.');
