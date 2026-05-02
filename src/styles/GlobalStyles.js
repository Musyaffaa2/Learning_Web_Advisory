const GlobalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f8f9fc; font-family: 'DM Sans', sans-serif; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 99px; }

  /* ── Nav ── */
  .nav-link {
    transition: color .2s;
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    padding-bottom: 4px;
  }
  .nav-link:hover  { color: #2563eb; }
  .nav-link.active { color: #2563eb; font-weight: 600; border-bottom-color: #2563eb; }

  /* ── Buttons ── */
  .btn-primary { transition: all .2s; }
  .btn-primary:hover {
    background: #1d4ed8 !important;
    box-shadow: 0 8px 24px #2563eb33 !important;
    transform: translateY(-1px);
  }
  .btn-outline:hover {
    background: #eff6ff !important;
    color: #2563eb !important;
    border-color: #2563eb !important;
  }

  /* ── Cards ── */
  .card-hover { transition: all .25s; }
  .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,.1) !important; }

  .student-row { transition: background .15s; }
  .student-row:hover { background: #f8faff !important; }

  .sidebar-item { transition: all .2s; }
  .sidebar-item:hover { background: #eff6ff !important; color: #2563eb !important; }

  .radio-btn { transition: all .15s; }
  .radio-btn:hover { border-color: #2563eb !important; background: #eff6ff !important; }

  .tab-btn { transition: all .18s; }
  .tab-btn:hover { color: #2563eb !important; }

  /* ── Decorative ── */
  .dot-grid {
    background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
    background-size: 22px 22px;
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatCard {
    0%, 100% { transform: rotate(-2deg) translateY(0); }
    50%       { transform: rotate(-2deg) translateY(-8px); }
  }
  .fade-up    { animation: fadeUp 0.55s ease both; }
  .float-card { animation: floatCard 4s ease-in-out infinite; }

  /* ── Table scroll ── */
  .table-wrapper { overflow-x: auto; }

  /* ════════════════════════════════════
     LAYOUT CLASSES (desktop default)
  ════════════════════════════════════ */

  /* Navbar */
  .nav-links-desktop { display: flex; }
  .mobile-menu-btn   { display: none; }

  /* Hero */
  .hero-section {
    display: flex;
    align-items: center;
    padding: 0 48px;
    min-height: calc(100vh - 64px);
    position: relative;
    overflow: hidden;
    gap: 0;
  }
  .hero-left  { flex: 0 0 480px; z-index: 1; }
  .hero-right { flex: 1; position: relative; min-height: 560px; z-index: 1; }

  /* Page padding */
  .page-content { padding: 40px 48px; }

  /* Grids */
  .features-grid      { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
  .how-it-works-grid  { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; max-width: 1000px; margin: 0 auto; }
  .info-grid          { display: grid; grid-template-columns: 1fr 340px;     gap: 24px; align-items: start; }
  .stat-grid          { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 28px; }
  .chart-grid         { display: grid; grid-template-columns: 1fr 1fr;       gap: 20px; margin-bottom: 24px; }
  .identity-grid      { display: grid; grid-template-columns: 1fr 1fr;       gap: 24px; }

  /* Video */
  .video-section-grid { display: flex; gap: 40px; align-items: center; }
  .video-embed        { flex: 0 0 580px; }
  .video-embed-sm     { flex: 0 0 420px; }
  .video-embed-sm > div { position: relative; }


  /* Page sections */
  .page-section { padding: 64px 48px; }

  /* ════════════════════════════════════
     TABLET  ≤ 1024px
  ════════════════════════════════════ */
  @media (max-width: 1024px) {
    /* Navbar */
    nav { padding: 0 32px !important; }

    /* Hero — stack vertically */
    .hero-section {
      flex-direction: column;
      padding: 60px 32px !important;
      min-height: unset;
      gap: 48px;
      text-align: center;
    }
    .hero-left  { flex: none; width: 100%; max-width: 600px; }
    .hero-right { width: 100%; min-height: 380px; }
    .hero-btn-row { justify-content: center !important; }

    /* Page content & sections */
    .page-content  { padding: 32px 32px !important; }
    .page-section  { padding: 48px 32px !important; }

    /* Grids */
    .features-grid     { grid-template-columns: repeat(2,1fr) !important; }
    .how-it-works-grid { grid-template-columns: repeat(2,1fr) !important; }
    .info-grid         { grid-template-columns: 1fr !important; }
    .stat-grid         { grid-template-columns: repeat(3,1fr) !important; }
    .chart-grid        { grid-template-columns: 1fr !important; }

    /* Video */
    .video-section-grid { flex-direction: column !important; gap: 28px !important; }
    .video-embed        { flex: none !important; width: 100% !important; }
    .video-embed-sm     { flex: none !important; width: 100% !important; }

    /* Hero accent cards — hide some on tablet */
    .hero-right .accent-secondary { display: none; }
  }


  /* ════════════════════════════════════
     MOBILE  ≤ 768px
  ════════════════════════════════════ */
  @media (max-width: 768px) {
    /* Navbar */
    nav { padding: 0 20px !important; height: 56px !important; gap: 0 !important; }
    .nav-links-desktop { display: none !important; }
    .mobile-menu-btn   { display: flex !important; }

    /* Hero */
    .hero-section { padding: 40px 20px !important; gap: 32px; }
    .hero-left h1 { font-size: 34px !important; }
    .hero-right   { min-height: 300px; }

    /* Hide all accent cards on mobile, show only main float card */
    .hero-right > div:not(.float-card):not([style*="position: absolute; zIndex: 4"]) {
      display: none;
    }

    /* Page content & sections */
    .page-content  { padding: 24px 20px !important; }
    .page-section  { padding: 40px 20px !important; }

    /* Sections padding */
    section[style*="padding: \"64px 48px\""] { padding: 40px 20px !important; }

    /* Grids */
    .features-grid     { grid-template-columns: 1fr !important; }
    .how-it-works-grid { grid-template-columns: 1fr !important; }
    .info-grid         { grid-template-columns: 1fr !important; }
    .stat-grid         { grid-template-columns: 1fr !important; }
    .chart-grid        { grid-template-columns: 1fr !important; }
    .identity-grid     { grid-template-columns: 1fr !important; }

    /* Video */
    .video-section-grid { flex-direction: column !important; gap: 20px !important; }
    .video-embed        { flex: none !important; width: 100% !important; }
    .video-embed-sm     { flex: none !important; width: 100% !important; }

    /* Video iframe fixed height on mobile */
    .video-embed > div,
    .video-embed-sm > div {
      padding-top: 56.25% !important;
      height: 0 !important;
    }

    /* Kuesioner steps */
    .how-it-works-grid > div > div[style*="position: absolute"] {
      display: none;
    }

    /* Info grid sidebar stacks below */
    .info-grid > div:last-child { margin-top: 0; }

    /* CTA buttons stack */
    .hero-btn-row { flex-direction: column !important; gap: 10px !important; }
    .hero-btn-row button { width: 100% !important; }

    /* PageHome sections */
    .cta-btn-row { flex-direction: column !important; align-items: center; }
    .cta-btn-row button { width: 100% !important; max-width: 320px; }
  }


  /* ════════════════════════════════════
     SMALL MOBILE  ≤ 480px
  ════════════════════════════════════ */
  @media (max-width: 480px) {
    .hero-left h1 { font-size: 26px !important; }
    .page-content { padding: 20px 16px !important; }
    nav           { padding: 0 16px !important; }

    /* Kuesioner CTA card padding */
    .kuesioner-cta { padding: 32px 20px !important; }

    /* Stat grid single col */
    .stat-grid { grid-template-columns: 1fr !important; }
  }
`;

export default GlobalStyles;