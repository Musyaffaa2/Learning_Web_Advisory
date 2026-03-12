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

  /* ── Cards & rows ── */
  .card-hover { transition: all .25s; }
  .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,.1) !important; }

  .student-row { transition: background .15s; }
  .student-row:hover { background: #f8faff !important; }

  .sidebar-item { transition: all .2s; }
  .sidebar-item:hover { background: #eff6ff !important; color: #2563eb !important; }

  .radio-btn { transition: all .15s; }
  .radio-btn:hover { border-color: #2563eb !important; background: #eff6ff !important; }

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
  @keyframes pulseRing {
    0%   { transform: scale(1);   opacity: .5; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  .fade-up    { animation: fadeUp 0.55s ease both; }
  .float-card { animation: floatCard 4s ease-in-out infinite; }

  /* ── Video player ── */
  .video-wrapper {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 */
    border-radius: 16px;
    overflow: hidden;
    background: #0f172a;
    box-shadow: 0 24px 60px rgba(0,0,0,.18);
  }
  .video-wrapper iframe,
  .video-wrapper video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  .play-btn-pulse::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 99px;
    border: 2px solid #2563eb;
    animation: pulseRing 1.5s ease-out infinite;
  }

  /* ════════════════════════════════════════
     RESPONSIVE LAYOUT UTILITIES
  ════════════════════════════════════════ */

  /* Navbar */
  .nav-links-desktop { display: flex; }
  .nav-links-mobile  { display: none; }
  .mobile-menu-btn   { display: none; }

  /* Hero */
  .hero-section {
    display: flex;
    align-items: center;
    padding: 0 48px;
    min-height: calc(100vh - 64px);
    position: relative;
    overflow: hidden;
  }
  .hero-left  { flex: 0 0 480px; z-index: 1; }
  .hero-right { flex: 1; position: relative; min-height: 560px; z-index: 1; }
  .hero-visual-cards { display: block; }

  /* Page content padding */
  .page-content { padding: 40px 48px; }

  /* Dashboard grid */
  .stat-grid    { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; margin-bottom: 24px; }
  .chart-grid   { display: grid; grid-template-columns: 2fr 1fr;       gap: 18px; margin-bottom: 24px; }

  /* Features grid */
  .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; max-width: 900px; margin: 0 auto; }

  /* Analysis layout */
  .analysis-layout { display: flex; gap: 20px; }
  .analysis-picker { width: 210px; flex-shrink: 0; }
  .analysis-detail { flex: 1; }
  .metric-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }

  /* Kuesioner identity grid */
  .identity-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  /* Dashboard table - horizontal scroll on small screens */
  .table-wrapper { overflow-x: auto; }

  /* ── Tablet (≤ 1024px) ── */
  @media (max-width: 1024px) {
    .hero-section  { padding: 60px 32px; flex-direction: column; min-height: unset; gap: 48px; }
    .hero-left     { flex: none; width: 100%; max-width: 600px; text-align: center; }
    .hero-left .fade-up div { justify-content: center; }
    .hero-right    { width: 100%; min-height: 400px; }
    .hero-btn-row  { justify-content: center !important; }

    .page-content  { padding: 32px 32px; }
    .stat-grid     { grid-template-columns: repeat(2,1fr); }
    .chart-grid    { grid-template-columns: 1fr; }
    .features-grid { grid-template-columns: repeat(2,1fr); }
  }

  /* ── Mobile (≤ 768px) ── */
  @media (max-width: 768px) {
    .nav-links-desktop { display: none; }
    .mobile-menu-btn   { display: flex; }

    .hero-section  { padding: 40px 20px; gap: 36px; }
    .hero-left h1  { font-size: 36px !important; }
    .hero-right    { min-height: 320px; }
    .hero-visual-cards .accent-card { display: none; }
    .hero-visual-cards .accent-card.keep { display: block; }

    .page-content  { padding: 24px 20px; }
    .stat-grid     { grid-template-columns: 1fr 1fr; gap: 12px; }
    .chart-grid    { grid-template-columns: 1fr; }
    .features-grid { grid-template-columns: 1fr; max-width: 100%; }

    .analysis-layout { flex-direction: column; }
    .analysis-picker { width: 100%; display: flex; flex-wrap: wrap; gap: 8px; }
    .analysis-picker button { flex: 1 1 140px !important; width: auto !important; }
    .metric-grid     { grid-template-columns: 1fr; }

    .identity-grid { grid-template-columns: 1fr; }

    .video-section-grid { flex-direction: column !important; }

    /* Flow steps: vertical on mobile */
    .flow-steps-row { flex-direction: column; align-items: center; }
    .flow-arrow     { transform: rotate(90deg); }
  }

  /* ── Small mobile (≤ 480px) ── */
  @media (max-width: 480px) {
    .hero-left h1  { font-size: 28px !important; }
    .hero-btn-row  { flex-direction: column !important; }
    .hero-btn-row button { width: 100% !important; }
    .stat-grid     { grid-template-columns: 1fr; }
  }
`;

export default GlobalStyles;
