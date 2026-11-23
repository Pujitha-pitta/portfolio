/* Study desk in Sweden · interactions */
(function () {
  'use strict';
  var D = window.PORTFOLIO;
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  var trackColor = {}, trackColorDark = { ml: '#6FCF97', ai: '#F2C46D', cloud: '#7FB6F0', infra: '#8FD3C1', web: '#F5A3C7', security: '#F08A6E', se: '#C3B6FF' };
  Object.keys(D.tracks).forEach(function (k) { trackColor[k] = 'var(--t-' + k + ')'; });
  var external = function (href) { return /^https?:/.test(href) || /\.(pdf|htm|apk)$/i.test(href.split('?')[0]); };
  var linkAttrs = function (href) { return external(href) ? ' target="_blank" rel="noopener"' : ''; };
  /* All links for a project: code, live demo, report */
  function projectLinks(p) {
    var out = [];
    if (p.code) out.push({ href: p.code, label: 'View code on GitHub' });
    if (p.demo) out.push({ href: p.demo, label: 'Live demo' });
    if (p.link) out.push({ href: p.link, label: p.linkLabel || 'Read report' });
    return out;
  }

  /* Lookup of every piece of work by id, for skill links */
  var work = {};
  D.projects.forEach(function (p) { work[p.id] = { label: p.title, where: 'projects' }; });
  D.research.forEach(function (r) { work[r.id] = { label: r.kind, where: 'research' }; });
  D.experience.forEach(function (e) { work[e.id] = { label: e.org + ' internship', where: 'experience' }; });

  /* ---------------- Theme (lamp) ---------------- */
  var themeBtn = $('#themeBtn');
  function applyThemeUI() {
    var night = doc.dataset.theme === 'night';
    themeBtn.setAttribute('aria-pressed', String(night));
    themeBtn.setAttribute('aria-label', night ? 'Switch to day mode' : 'Switch to night mode');
    var lamp = $('.obj-lamp');
    if (lamp) lamp.setAttribute('aria-label', night ? 'Desk lamp: switch to day mode' : 'Desk lamp: switch to night mode');
    var tag = $('.obj-lamp .tag');
    if (tag) tag.textContent = night ? 'LAMP · DAY MODE' : 'LAMP · NIGHT MODE';
  }
  function toggleTheme() {
    doc.dataset.theme = doc.dataset.theme === 'night' ? 'day' : 'night';
    store.set('np-theme', doc.dataset.theme);
    applyThemeUI();
  }
  themeBtn.addEventListener('click', toggleTheme);
  applyThemeUI();

  /* ---------------- Clock ---------------- */
  var clock = $('#clock');
  function tick() {
    try {
      clock.textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Stockholm', weekday: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date()).toUpperCase();
    } catch (e) { clock.textContent = ''; }
  }
  tick(); setInterval(tick, 15000);
  $('#year').textContent = new Date().getFullYear();


  /* ---------------- Typewriter on the card ---------------- */
  (function typewriter() {
    var el = $('#typed');
    if (!el || reduceMotion) return;
    var roles = D.roles, ri = 0, ci = roles[0].length, deleting = true;
    function step() {
      var word = roles[ri];
      if (deleting) {
        ci--;
        if (ci <= 0) { deleting = false; ri = (ri + 1) % roles.length; }
      } else {
        ci++;
        if (ci >= roles[ri].length) { deleting = true; el.textContent = roles[ri]; return setTimeout(step, 2200); }
      }
      el.textContent = roles[ri].slice(0, Math.max(ci, 0)) || ' ';
      setTimeout(step, deleting ? 35 : 70);
    }
    el.textContent = roles[0];
    setTimeout(step, 3000);
  })();

  /* ---------------- Laptop terminal ---------------- */
  (function terminal() {
    var body = $('#termBody');
    if (!body) return;
    var folders = D.projects.map(function (p) { return p.folder + '/'; });
    var shown = 6;
    var lines = folders.slice(0, shown);
    var script = [{ t: '$ ls', cls: 'p' }].concat(lines.map(function (l) { return { t: l, cls: 'd' }; }), [{ t: '… and ' + (folders.length - shown) + ' more', cls: '' }, { t: '$ open projects', cls: 'p', caret: true }]);
    function render(upto, partial) {
      var html = '';
      for (var j = 0; j < upto; j++) html += '<span class="' + script[j].cls + '">' + esc(script[j].t) + '</span>\n';
      if (partial != null) html += '<span class="' + script[upto].cls + '">' + esc(partial) + '</span><span class="c"></span>';
      else html += '<span class="c"></span>';
      body.innerHTML = html;
    }
    if (reduceMotion) { render(script.length); return; }
    var li = 0, ch = 0;
    function type() {
      if (li >= script.length) { setTimeout(function () { li = 0; ch = 0; type(); }, 6000); return; }
      var line = script[li];
      var isCmd = line.cls === 'p';
      if (!isCmd) { li++; render(li); return setTimeout(type, 140); }
      ch++;
      render(li, line.t.slice(0, ch));
      if (ch >= line.t.length) { li++; ch = 0; return setTimeout(type, 500); }
      setTimeout(type, 80);
    }
    setTimeout(type, 900);
  })();

  /* ---------------- Snow ---------------- */
  (function snow() {
    var box = $('#snow');
    if (!box || reduceMotion) return;
    var html = '';
    for (var i = 0; i < 28; i++) {
      var size = 2 + Math.random() * 3.5;
      html += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;width:' + size.toFixed(1) + 'px;height:' + size.toFixed(1) + 'px;animation-duration:' + (5 + Math.random() * 6).toFixed(1) + 's;animation-delay:-' + (Math.random() * 10).toFixed(1) + 's;--drift:' + (Math.random() * 30 - 15).toFixed(0) + 'px;opacity:' + (.6 + Math.random() * .4).toFixed(2) + '"></i>';
    }
    box.innerHTML = html;
  })();

  /* ---------------- The desk: scale, drag, open ---------------- */
  var desk = $('#desk'), stage = $('#stage');
  var objs = $$('.obj', stage);
  var STAGE_W = 1440, STAGE_H = 860;
  var scale = 1, narrow = false, topZ = 40;
  var home = {};

  objs.forEach(function (o, i) {
    home[o.dataset.id] = [+o.dataset.x, +o.dataset.y];
    place(o, +o.dataset.x, +o.dataset.y);
    o.style.setProperty('--d', (i * 0.06).toFixed(2) + 's');
  });
  function place(o, x, y) { o.style.setProperty('--x', x + 'px'); o.style.setProperty('--y', y + 'px'); o._x = x; o._y = y; }

  function layout() {
    var w = desk.clientWidth;
    if (!w) return; /* desk tab is hidden */
    narrow = window.innerWidth < 760;
    if (narrow) {
      scale = w / STAGE_W;
      desk.style.height = Math.round(STAGE_H * scale) + 'px';
      stage.style.setProperty('--ox', '0px');
      stage.style.setProperty('--oy', '0px');
    } else {
      desk.style.height = '';
      var h = desk.clientHeight;
      scale = Math.min(w / STAGE_W, h / STAGE_H);
      stage.style.setProperty('--ox', ((w - STAGE_W * scale) / 2).toFixed(1) + 'px');
      stage.style.setProperty('--oy', ((h - STAGE_H * scale) / 2).toFixed(1) + 'px');
    }
    stage.style.setProperty('--s', scale.toFixed(4));
  }
  layout();
  window.addEventListener('resize', layout);

  objs.forEach(function (o) {
    var start = null, moved = false;
    o.addEventListener('pointerdown', function (e) {
      if (narrow || (e.button !== undefined && e.button !== 0)) return;
      if (e.target.closest('[data-nodrag]')) return;
      start = { px: e.clientX, py: e.clientY, x: o._x, y: o._y };
      moved = false;
      o.setPointerCapture && o.setPointerCapture(e.pointerId);
    });
    o.addEventListener('pointermove', function (e) {
      if (!start) return;
      var dx = (e.clientX - start.px) / scale, dy = (e.clientY - start.py) / scale;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 6) return;
      if (!moved) { moved = true; o.classList.add('dragging'); topZ = Math.min(topZ + 1, 390); o.style.setProperty('--z', topZ); }
      var nx = Math.max(-120, Math.min(STAGE_W - 60, start.x + dx));
      var ny = Math.max(-60, Math.min(STAGE_H - 40, start.y + dy));
      place(o, Math.round(nx), Math.round(ny));
    });
    function end() {
      if (!start) return;
      start = null;
      o.classList.remove('dragging');
      if (moved) { o._justDragged = true; setTimeout(function () { o._justDragged = false; }, 50); }
    }
    o.addEventListener('pointerup', end);
    o.addEventListener('pointercancel', end);
    o.addEventListener('click', function (e) {
      if (o._justDragged) { e.preventDefault(); e.stopPropagation(); return; }
      if (e.target.closest('[data-nodrag]')) return;
      if (o.dataset.action === 'lamp') toggleTheme();
      else if (o.dataset.open) openViewer(o.dataset.open, o);
    });
    o.addEventListener('dragstart', function (e) { e.preventDefault(); });
  });

  $('#resetDesk').addEventListener('click', function () {
    objs.forEach(function (o) {
      o.style.transition = 'left .6s cubic-bezier(.2,.8,.2,1), top .6s cubic-bezier(.2,.8,.2,1)';
      place(o, home[o.dataset.id][0], home[o.dataset.id][1]);
      o.style.removeProperty('--z');
      setTimeout(function () { o.style.transition = ''; }, 650);
    });
    topZ = 40;
  });

  /* ---------------- Viewer (opened objects) ---------------- */
  var viewer = $('#viewer'), inner = $('#viewerInner'), lastOpener = null;
  var sectionName = { projects: 'Projects', about: 'About', skills: 'Skills', research: 'Research', experience: 'Experience', contact: 'Contact' };
  function footer(id) {
    return '<div class="v-footer"><a class="v-jump" href="#' + id + '" data-close>See the full ' + sectionName[id].toLowerCase() + ' section ↓</a></div>';
  }
  var builders = {
    projects: function () {
      var files = D.projects.map(function (p, i) {
        return '<button type="button" class="v-file" data-i="' + i + '"' + (i === 0 ? ' aria-current="true"' : '') + '><span class="chev" aria-hidden="true">▸</span>' + esc(p.folder) + '/</button>';
      }).join('');
      return '<div class="v-laptop"><div class="v-term">' +
        '<div class="term-bar"><i></i><i></i><i></i><b>~/pujitha/projects · ' + D.projects.length + ' folders</b></div>' +
        '<div class="v-split"><nav class="v-files" aria-label="Project folders">' + files + '</nav><div class="v-readme-wrap" aria-live="polite"></div></div>' +
        '</div>' + footer('projects') + '</div>';
    },
    about: function () {
      var left = ['Hej, I\'m Pujitha!', 'Based in Karlskrona, Sweden.', 'M.Sc. Computer Science,', 'Blekinge Inst. of Tech. (2024–26)', 'B.Tech Computer Science (2020–24)', 'I love turning messy data', 'into useful, reliable software.', 'Club founder & team captain.'];
      var checks = ['Python & machine learning', 'Data pipelines & forecasting', 'AI agents & LLM apps', 'Cloud & DevOps (AWS, K8s)', 'Web apps (JS, Next.js)', 'English & a little Swedish'];
      var d = 0;
      var l = left.map(function (t) { d += 0.35; return '<span class="hand write" style="animation-delay:' + d.toFixed(2) + 's">' + esc(t) + '</span>'; }).join('');
      var r = checks.map(function (t) { d += 0.3; return '<li class="hand write" style="animation-delay:' + d.toFixed(2) + 's">' + esc(t) + '</li>'; }).join('');
      return '<div class="v-notebook">' +
        '<div class="v-page"><span class="hand h-title" id="viewerTitle">About me</span>' + l + '</div>' +
        '<div class="v-page"><figure class="v-polaroid"><img src="images/profile.jpeg" alt="Portrait of Naga Pujitha Pitta"></figure><span class="hand h-title">Checklist</span><ul class="v-checklist">' + r + '</ul></div>' +
        footer('about') + '</div>';
    },
    skills: function () {
      var cols = D.skills.map(function (g) {
        return '<div><h3>' + esc(g.group) + '</h3><ul>' + g.items.slice(0, 5).map(function (s) {
          return '<li>' + esc(s[0]) + '<span>×' + s[1].length + '</span></li>';
        }).join('') + '</ul></div>';
      }).join('');
      return '<div class="v-skills"><span class="hand h-title" id="viewerTitle">Skills</span><p class="hand">The number shows how many of my projects use each one.</p><div class="v-skill-cols">' + cols + '</div>' + footer('skills') + '</div>';
    },
    research: function () {
      var a = D.research[0], b = D.research[1];
      var desc = esc(a.desc).replace('makes their probabilities trustworthy with isotonic calibration', '<mark>makes their probabilities trustworthy with isotonic calibration</mark>');
      return '<div class="v-paper-wrap">' +
        '<article class="v-paper"><p class="kind">' + esc(a.kind) + '</p><h3 id="viewerTitle">' + esc(a.title) + '</h3><p>' + desc + '</p><p>' + esc(a.highlight) + '</p>' +
        '<div class="links">' + a.links.map(function (k, i) { return '<a class="btn' + (i ? ' btn-ghost' : '') + '" href="' + k.href + '"' + linkAttrs(k.href) + '>' + esc(k.label) + ' ↗</a>'; }).join('') + '</div></article>' +
        '<div class="v-side"><p class="v-note">Privacy first: data stays at each hospital.</p><p class="v-note teal">Calibrated + explained with SHAP.</p>' +
        '<article class="v-paper small"><p class="kind">' + esc(b.kind) + '</p><h3>' + esc(b.title) + '</h3><p>' + esc(b.highlight) + '</p><div class="links"><a class="btn btn-ghost" href="' + b.links[0].href + '" target="_blank" rel="noopener">' + esc(b.links[0].label) + ' ↗</a></div></article></div>' +
        footer('research') + '</div>';
    },
    experience: function () {
      var colors = ['#1F1A15', '#2D6E9E'];
      var badges = D.experience.map(function (e, i) {
        return '<article class="v-badge' + (i ? ' alt' : '') + '" style="--bc:' + colors[i % 2] + '"><small>' + esc(e.dates.toUpperCase()) + '</small><h3' + (i === 0 ? ' id="viewerTitle"' : '') + '>' + esc(e.org) + '</h3><p class="r">' + esc(e.role) + ' · ' + esc(e.place) + '</p><ul>' + e.points.slice(0, 3).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></article>';
      }).join('');
      var aw = D.award;
      return '<div class="v-badges"><div class="v-badge-row">' + badges +
        '<div class="v-medal"><span class="ribbons" aria-hidden="true"><i></i><i></i></span><span class="medal-big" aria-hidden="true"><b>BUILD</b><small>WINNER · 2026</small><span class="glint"></span></span><h3>' + esc(aw.title) + '</h3><p>' + esc(aw.detail) + '</p><a href="' + aw.link + '" target="_blank" rel="noopener">Project on GitHub ↗</a></div>' +
        '</div>' + footer('experience') + '</div>';
    },
    contact: function () {
      return '<div class="v-envelope"><div class="v-flap" aria-hidden="true"></div><div class="v-letter">' +
        '<span class="hand h-title" id="viewerTitle">Hej, recruiter!</span>' +
        '<span class="hand">I\'m open to ML, AI research and software engineering roles. Write to me any time.</span>' +
        '<div class="contact-actions"><a class="btn btn-big" href="mailto:' + D.email + '">' + esc(D.email) + '</a><button class="btn btn-ghost" type="button" data-copy>Copy email</button></div>' +
        '<ul class="contact-links"><li><a href="' + D.linkedin + '" target="_blank" rel="noopener">LinkedIn ↗</a></li><li><a href="' + D.github + '" target="_blank" rel="noopener">GitHub ↗</a></li><li><a href="' + D.resume + '" target="_blank" rel="noopener">Résumé (PDF) ↗</a></li></ul>' +
        '<p class="sign">Tack så mycket! · Pujitha</p></div>' + footer('contact') + '</div>';
    }
  };

  function showReadme(i) {
    var p = D.projects[i], wrap = $('.v-readme-wrap', inner);
    if (!wrap) return;
    $$('.v-file', inner).forEach(function (b) { b.setAttribute('aria-current', String(+b.dataset.i === i)); });
    wrap.innerHTML = '<div class="v-readme"><p class="cmd">$ cat ' + esc(p.folder) + '/README.md</p>' +
      '<p class="vt" style="--c:' + trackColorDark[p.track] + '">' + esc(D.tracks[p.track].label) + '</p>' +
      '<h3 id="viewerTitle">' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p>' +
      '<ul class="tags">' + p.skills.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
      '<div class="v-links">' + projectLinks(p).map(function (k, j) { return '<a class="btn' + (j ? ' btn-ghost' : '') + '" href="' + k.href + '"' + linkAttrs(k.href) + '>' + esc(k.label) + ' ↗</a>'; }).join('') + '</div></div>';
  }

  /* ---- A project book, opened ---- */
  var bookColor = { ml: '#2F5D46', ai: '#8A5A12', cloud: '#23527A', infra: '#1F5F5A', web: '#8C2F5F', security: '#8E3326', se: '#5C4585' };
  var linkIcon = {
    code: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" stroke="none"/>',
    demo: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    link: '<path d="M6 3h9l4 4v14H6Z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>'
  };
  function visibleBookIds() {
    return $$('.book').filter(function (b) { return !b.classList.contains('hide'); }).map(function (b) { return b.dataset.id; });
  }
  builders.book = function (id) {
    var i = 0, p = D.projects[0];
    D.projects.forEach(function (q, k) { if (q.id === id) { i = k; p = q; } });
    var ids = visibleBookIds(); if (ids.indexOf(id) < 0) ids = D.projects.map(function (q) { return q.id; });
    var pos = ids.indexOf(id), prev = ids[(pos - 1 + ids.length) % ids.length], next = ids[(pos + 1) % ids.length];
    var byId = function (x) { return D.projects.filter(function (q) { return q.id === x; })[0]; };
    var links = [];
    if (p.code) links.push(['code', p.code, 'Read the code', 'GitHub repository']);
    if (p.demo) links.push(['demo', p.demo, 'Try the live demo', 'Opens the running app']);
    if (p.link) links.push(['link', p.link, p.linkLabel || 'Read the report', /\.apk/i.test(p.link) ? 'Android app file' : 'Full write-up']);
    return '<div class="v-book" style="--bc:' + bookColor[p.track] + '">' +
      '<div class="v-spread">' +
        '<section class="v-leaf v-left">' +
          '<p class="v-chapter">Book ' + (i + 1) + ' of ' + D.projects.length + ' · ' + esc(D.tracks[p.track].label) + '</p>' +
          (p.featured ? '<p class="v-ribbon">★ ' + esc(p.featured) + '</p>' : '') +
          '<h3 id="viewerTitle">' + esc(p.title) + '</h3>' +
          '<p class="v-folder">' + esc(p.folder) + '/</p>' +
          '<p class="v-story">' + esc(p.desc) + '</p>' +
          '<span class="v-pageno">' + (i * 2 + 1) + '</span>' +
        '</section>' +
        '<section class="v-leaf v-right">' +
          '<h4>Built with</h4><ul class="tags">' + p.skills.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
          '<h4>Open the project</h4><div class="v-book-links">' + links.map(function (l) {
            return '<a class="v-booklink" href="' + l[1] + '"' + linkAttrs(l[1]) + '><span class="bl-icon" aria-hidden="true"><svg viewBox="0 0 24 24">' + linkIcon[l[0]] + '</svg></span><span><b>' + esc(l[2]) + ' ↗</b><small>' + esc(l[3]) + '</small></span></a>';
          }).join('') + '</div>' +
          '<span class="v-pageno">' + (i * 2 + 2) + '</span>' +
        '</section>' +
        '<div class="v-cover" aria-hidden="true"><span class="vc-band"></span><b>' + esc(p.title) + '</b><span class="vc-band"></span></div>' +
      '</div>' +
      '<div class="v-book-nav">' +
        '<button type="button" class="v-turn" data-book="' + prev + '"><span aria-hidden="true">←</span><span><small>Previous book</small>' + esc(byId(prev).title) + '</span></button>' +
        '<a class="v-shelf" href="#projects" data-close>Back to the shelf</a>' +
        '<button type="button" class="v-turn next" data-book="' + next + '"><span><small>Next book</small>' + esc(byId(next).title) + '</span><span aria-hidden="true">→</span></button>' +
      '</div></div>';
  };

  function openViewer(kind, opener, arg) {
    if (!builders[kind]) return;
    lastOpener = opener || null;
    inner.innerHTML = builders[kind](arg);
    if (kind === 'projects') {
      showReadme(0);
      $$('.v-file', inner).forEach(function (b) { b.addEventListener('click', function () { showReadme(+b.dataset.i); }); });
    }
    if (typeof viewer.showModal === 'function') viewer.showModal();
    else { location.hash = kind; return; }
    inner.scrollTop = 0;
  }
  function closeViewer() { if (viewer.open) viewer.close(); }
  $('#viewerClose').addEventListener('click', closeViewer);
  viewer.addEventListener('click', function (e) {
    if (e.target === viewer) return closeViewer();
    var jump = e.target.closest('[data-close]');
    if (jump) { e.preventDefault(); closeViewer(); go(jump.getAttribute('href').slice(1)); }
    if (e.target.closest('[data-copy]')) copyEmail();
    var turn = e.target.closest('[data-book]');
    if (turn) turnTo(turn.dataset.book, turn.classList.contains('next'));
  });
  function turnTo(id, forward) {
    inner.innerHTML = builders.book(id);
    var bk = $('.v-book', inner);
    if (bk) bk.classList.add(forward ? 'turn-next' : 'turn-prev');
    var b = $('.book[data-id="' + id + '"]'); if (b) lastOpener = b;
    var t = $('.v-turn' + (forward ? '.next' : ':not(.next)'), inner); if (t) t.focus({ preventScroll: true });
  }
  viewer.addEventListener('keydown', function (e) {
    if (!$('.v-book', inner)) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      var t = $('.v-turn' + (e.key === 'ArrowRight' ? '.next' : ':not(.next)'), inner);
      if (t) { e.preventDefault(); turnTo(t.dataset.book, e.key === 'ArrowRight'); }
    }
  });
  viewer.addEventListener('close', function () {
    if (viewer.open) return; /* reopened before this queued event fired */
    inner.innerHTML = '';
    if (lastOpener && document.contains(lastOpener)) lastOpener.focus({ preventScroll: true });
  });

  /* ---------------- Copy email + toast ---------------- */
  var toastEl = $('#toast'), toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }
  function copyEmail() {
    var done = function () { toast('Email copied: ' + D.email); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(D.email).then(done, function () { toast(D.email); });
    else toast(D.email);
  }
  $('#copyEmail').addEventListener('click', copyEmail);

  /* ---------------- Skills ---------------- */
  var icons = {
    'Machine learning': '<path d="M9 3a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 9.3a3 3 0 0 0 .7 4.9A3 3 0 0 0 7 18.5 2.5 2.5 0 0 0 12 19V5a2 2 0 0 0-3-2Zm6 0a3 3 0 0 1 3 3v.5a3 3 0 0 1 2 2.8 3 3 0 0 1-.7 4.9 3 3 0 0 1-2.3 4.3A2.5 2.5 0 0 1 12 19"/>',
    'Data & forecasting': '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    'AI agents & LLMs': '<path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 11h.01M14 11h.01M10 14h4"/>',
    'Cloud & DevOps': '<path d="M7 18a4.5 4.5 0 0 1-.5-9 6 6 0 0 1 11.5 1.5A3.75 3.75 0 0 1 17.5 18Z"/>',
    'Web & app development': '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12"/>',
    'Systems, networking & security': '<path d="M12 3 5 6v5c0 4.5 3 8.3 7 9.5 4-1.2 7-5 7-9.5V6Z"/><path d="m9 12 2 2 4-4"/>'
  };
  var totalWork = Object.keys(work).length;
  var grid = $('#skillsGrid');
  grid.innerHTML = D.skills.map(function (g, gi) {
    var used = {};
    g.items.forEach(function (s) { s[1].forEach(function (id) { if (work[id]) used[id] = 1; }); });
    var n = Object.keys(used).length;
    return '<article class="skill-card reveal" style="--rd:' + (gi * 0.08) + 's">' +
      '<h3><span class="sc-icon" aria-hidden="true"><svg viewBox="0 0 24 24">' + (icons[g.group] || '') + '</svg></span>' + esc(g.group) + '</h3>' +
      '<div class="skill-meter" aria-hidden="true"><i style="--w:' + Math.round(n / totalWork * 100) + '%"></i></div>' +
      '<p class="skill-meter-label">Used in ' + n + ' of my ' + totalWork + ' projects, thesis work and internships</p>' +
      '<ul class="skill-list">' + g.items.map(function (s) {
        var ids = s[1].filter(function (id) { return work[id]; });
        return '<li><button type="button" class="skill" aria-pressed="false" data-skill="' + esc(s[0]) + '" data-ids="' + ids.join(',') + '">' + esc(s[0]) + '<span class="count" aria-label="used in ' + ids.length + '">' + ids.length + '</span></button></li>';
      }).join('') + '</ul></article>';
  }).join('');
  $('#alsoKnow').innerHTML = '<b>Also familiar with:</b> ' + D.alsoKnow.map(esc).join(' · ');

  /* ---------------- Projects ---------------- */
  var pgrid = $('#projectGrid'), filters = $('#filters'), note = $('#filterNote');
  pgrid.innerHTML = D.projects.map(function (p) {
    return '<article class="project reveal" data-id="' + p.id + '" data-track="' + p.track + '" style="--c:' + trackColor[p.track] + '">' +
      '<div class="project-top"><span class="track">' + esc(D.tracks[p.track].label) + '</span><span class="folder">' + esc(p.folder) + '/</span></div>' +
      (p.featured ? '<p class="featured-badge">★ ' + esc(p.featured) + '</p>' : '') +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p>' +
      '<ul class="tags">' + p.skills.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
      '<div class="project-links">' + projectLinks(p).map(function (k) {
        var label = k.label === 'View code on GitHub' ? 'GitHub' : k.label;
        return '<a class="project-link" href="' + k.href + '"' + linkAttrs(k.href) + '>' + esc(label) + ' <span class="arr" aria-hidden="true">↗</span></a>';
      }).join('') + '</div>' +
      '</article>';
  }).join('');
  var counts = {};
  D.projects.forEach(function (p) { counts[p.track] = (counts[p.track] || 0) + 1; });
  filters.innerHTML = '<button type="button" class="filter" data-f="all" aria-pressed="true">All · ' + D.projects.length + '</button>' +
    Object.keys(D.tracks).filter(function (k) { return counts[k]; }).map(function (k) {
      return '<button type="button" class="filter" data-f="' + k + '" aria-pressed="false" style="--c:' + trackColor[k] + '"><span class="dot" aria-hidden="true"></span>' + esc(D.tracks[k].label) + ' · ' + counts[k] + '</button>';
    }).join('');

  /* The bookshelf: one book per project */
  var shelf = $('#shelf'), library = $('#library');
  shelf.innerHTML = D.projects.map(function (p, i) {
    var h = 0; for (var k = 0; k < p.id.length; k++) h = (h * 31 + p.id.charCodeAt(k)) % 997;
    var height = 214 + (h % 5) * 11;
    var width = 50 + Math.min(p.title.length, 46) * 0.5;
    var lean = (i % 7 === 6) ? ' lean' : '';
    return '<div class="slot"><button type="button" class="book' + lean + (p.featured ? ' featured' : '') + '" data-id="' + p.id + '" data-track="' + p.track + '"' +
      ' style="--bc:' + bookColor[p.track] + ';--bh:' + height + 'px;--bw:' + Math.round(width) + 'px;--rd:' + (i * 0.025).toFixed(3) + 's"' +
      ' aria-label="Open book: ' + esc(p.title) + ' (' + esc(D.tracks[p.track].label) + ')">' +
      '<span class="b-band top" aria-hidden="true"></span>' +
      '<span class="b-title">' + esc(p.title.split(':')[0]) + '</span>' +
      '<span class="b-band bottom" aria-hidden="true"></span>' +
      (p.featured ? '<span class="b-ribbon" aria-hidden="true"></span>' : '') +
      '</button></div>';
  }).join('');
  shelf.addEventListener('click', function (e) {
    var b = e.target.closest('.book'); if (!b) return;
    openViewer('book', b, b.dataset.id);
  });

  /* Bookshelf / cards switch, remembered per visitor */
  function setView(v) {
    library.dataset.view = v;
    $$('.vs-btn').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.view === v)); });
    store.set('np-view', v);
  }
  $$('.vs-btn').forEach(function (b) { b.addEventListener('click', function () { setView(b.dataset.view); }); });
  setView(store.get('np-view') === 'list' ? 'list' : 'shelf');

  var cards = $$('.project, .book');
  function showCards(test, matchTag) {
    cards.forEach(function (c, i) {
      var show = test(c);
      c.classList.toggle('hide', !show);
      $$('.tags li', c).forEach(function (li) { li.classList.toggle('match', !!matchTag && show && matchTag(li.textContent)); });
      if (show) { c.classList.remove('pop'); void c.offsetWidth; c.style.animationDelay = (i * 0.03) + 's'; c.classList.add('pop'); c.classList.add('in'); }
    });
  }
  function setFilterButtons(f) { $$('.filter', filters).forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === f)); }); }
  function clearSkill() { $$('.skill', grid).forEach(function (b) { b.setAttribute('aria-pressed', 'false'); }); }
  filters.addEventListener('click', function (e) {
    var b = e.target.closest('.filter'); if (!b) return;
    var f = b.dataset.f;
    setFilterButtons(f); clearSkill(); note.innerHTML = '';
    showCards(function (c) { return f === 'all' || c.dataset.track === f; });
  });
  function resetAll() { setFilterButtons('all'); clearSkill(); note.innerHTML = ''; showCards(function () { return true; }); }
  note.addEventListener('click', function (e) { if (e.target.closest('button')) resetAll(); });

  var words = function (s) { return s.toLowerCase().replace(/\(.*?\)/g, ' ').split(/[^a-z0-9+-]+/).filter(function (w) { return w.length > 2 && ['and', 'the', 'web', 'models', 'framework'].indexOf(w) < 0; }); };
  grid.addEventListener('click', function (e) {
    var b = e.target.closest('.skill'); if (!b) return;
    var wasOn = b.getAttribute('aria-pressed') === 'true';
    clearSkill();
    if (wasOn) { resetAll(); return; }
    b.setAttribute('aria-pressed', 'true');
    var ids = b.dataset.ids.split(',').filter(Boolean);
    var projIds = ids.filter(function (id) { return work[id].where === 'projects'; });
    var others = ids.filter(function (id) { return work[id].where !== 'projects'; });
    var kw = words(b.dataset.skill);
    var matchTag = function (t) { var tw = words(t); return tw.some(function (w) { return kw.indexOf(w) >= 0; }); };
    var skill = esc(b.dataset.skill);
    var extra = others.length ? ' Also used in: ' + others.map(function (id) { return '<a href="#' + work[id].where + '">' + esc(work[id].label) + '</a>'; }).join(', ') + '.' : '';
    if (projIds.length) {
      setFilterButtons('');
      showCards(function (c) { return projIds.indexOf(c.dataset.id) >= 0; }, matchTag);
      note.innerHTML = 'Showing ' + projIds.length + ' project' + (projIds.length > 1 ? 's that use' : ' that uses') + ' <b>' + skill + '</b>.' + extra + ' <button type="button">Show all</button>';
      go('projects');
    } else if (others.length) {
      toast(b.dataset.skill + ': used in ' + others.map(function (id) { return work[id].label; }).join(', '));
      b.setAttribute('aria-pressed', 'false');
      go(work[others[0]].where);
    }
  });

  /* ---------------- Research ---------------- */
  $('#researchList').innerHTML = D.research.map(function (r, i) {
    return '<article class="paper reveal" style="--rd:' + (i * 0.1) + 's"><p class="kind">' + esc(r.kind) + '</p><h3>' + esc(r.title) + '</h3><p>' + esc(r.desc) + '</p>' +
      '<p class="hl-wrap"><span class="highlight">' + esc(r.highlight) + '</span></p>' +
      '<ul class="tags">' + r.skills.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
      '<div class="links">' + r.links.map(function (k, j) { return '<a class="btn' + (j ? ' btn-ghost' : '') + '" href="' + k.href + '"' + linkAttrs(k.href) + '>' + esc(k.label) + ' ↗</a>'; }).join('') + '</div></article>';
  }).join('');

  /* ---------------- Experience ---------------- */
  $('#timeline').innerHTML = D.experience.map(function (e, i) {
    return '<li class="job reveal" style="--rd:' + (i * 0.12) + 's"><div class="job-card"><div class="job-head"><h3>' + esc(e.role) + ' · <span class="org">' + esc(e.org) + '</span></h3><span class="dates">' + esc(e.dates) + '</span></div>' +
      '<p class="dates">' + esc(e.place) + '</p><ul>' + e.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
      (e.code ? '<a class="project-link" href="' + e.code + '" target="_blank" rel="noopener">Internship work on GitHub <span class="arr" aria-hidden="true">↗</span></a>' : '') + '</div></li>';
  }).join('');
  var conf = '';
  if (!reduceMotion) {
    var cc = ['#F2C230', '#E0644B', '#6FCF97', '#7FB6F0', '#F4E9DA'];
    for (var k = 0; k < 18; k++) conf += '<i style="left:' + (Math.random() * 100).toFixed(0) + '%;background:' + cc[k % cc.length] + ';animation-duration:' + (4 + Math.random() * 4).toFixed(1) + 's;animation-delay:-' + (Math.random() * 6).toFixed(1) + 's"></i>';
  }
  $('#award').innerHTML = '<div class="confetti" aria-hidden="true">' + conf + '</div>' +
    '<div class="medal-big" aria-hidden="true">BUILD<span class="glint"></span></div>' +
    '<p class="kicker">AWARD · 2026</p><h3>' + esc(D.award.title) + '</h3><p>' + esc(D.award.detail) + '</p>' +
    '<a href="' + D.award.link + '" target="_blank" rel="noopener">See the project on GitHub ↗</a>';

  /* ---------------- Reveal on scroll + counters ---------------- */
  function countUp(el) {
    var n = +el.dataset.count;
    if (reduceMotion || !n) { el.textContent = n; return; }
    var t0 = null;
    function f(t) { if (!t0) t0 = t; var p = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); }
    requestAnimationFrame(f);
  }
  var projCount = $('#statProjects');
  if (projCount) { projCount.dataset.count = D.projects.length; projCount.textContent = D.projects.length; }
  var counters = $$('[data-count]');
  if (!reduceMotion) counters.forEach(function (c) { c.textContent = '0'; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.classList.add('in');
        var c = el.querySelector('[data-count]'); if (c) countUp(c);
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal, .timeline').forEach(function (el) { io.observe(el); });
  } else {
    $$('.reveal, .timeline').forEach(function (el) { el.classList.add('in'); });
    counters.forEach(function (c) { c.textContent = c.dataset.count; });
  }

  /* ---------------- Tabs: one section on screen at a time ---------------- */
  var tabLinks = $$('.tab'), ink = $('#tabInk'), tabsEl = $('#tabs');
  var panels = $$('[data-panel]');
  var order = panels.map(function (p) { return p.id; });
  var tabName = {};
  tabLinks.forEach(function (a) { tabName[a.dataset.tab] = a.textContent.trim(); });

  /* Previous / next buttons at the bottom of every section tab */
  panels.forEach(function (p, i) {
    if (p.id === 'home') return;
    var prev = order[i - 1], next = order[i + 1];
    var nav = document.createElement('nav');
    nav.className = 'pager wrap';
    nav.setAttribute('aria-label', 'Previous and next section');
    nav.innerHTML =
      (prev ? '<a class="pager-btn" href="#' + prev + '"><span aria-hidden="true">←</span><span><small>Previous</small>' + esc(tabName[prev] || prev) + '</span></a>' : '<span></span>') +
      (next ? '<a class="pager-btn next" href="#' + next + '"><span><small>Next</small>' + esc(tabName[next] || next) + '</span><span aria-hidden="true">→</span></a>' : '<a class="pager-btn next" href="#home"><span><small>Back to</small>the desk</span><span aria-hidden="true">↺</span></a>');
    p.appendChild(nav);
  });

  function moveInk(a) {
    if (!a || !ink) return;
    ink.style.width = a.offsetWidth + 'px';
    ink.style.transform = 'translateX(' + a.offsetLeft + 'px)';
    var target = a.offsetLeft - (tabsEl.clientWidth - a.offsetWidth) / 2;
    tabsEl.scrollTo({ left: target, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  var current = null;
  function showTab(id) {
    if (order.indexOf(id) < 0) id = 'home';
    if (id === current) return;
    current = id;
    panels.forEach(function (p) {
      var on = p.id === id;
      p.hidden = !on;
      p.classList.toggle('active', on);
      if (on) { p.classList.remove('panel-in'); void p.offsetWidth; p.classList.add('panel-in'); }
    });
    tabLinks.forEach(function (a) {
      var on = a.dataset.tab === id;
      if (on) { a.setAttribute('aria-current', 'page'); moveInk(a); } else a.removeAttribute('aria-current');
    });
    document.title = (id === 'home' ? '' : (tabName[id] || id) + ' · ') + 'Naga Pujitha Pitta · AI/ML Researcher & Software Engineer';
    if (id === 'home') layout();
    window.scrollTo(0, 0);
  }
  function go(id) {
    if (('#' + id) === location.hash) showTab(id);
    else location.hash = id;
  }
  function fromHash() {
    var h = location.hash.slice(1);
    if (!h || h === 'top') h = 'home';
    showTab(h);
  }
  window.addEventListener('hashchange', fromHash);
  window.addEventListener('resize', function () { moveInk($('.tab[aria-current="page"]')); });
  fromHash();
  /* Fonts change tab widths once they load */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { moveInk($('.tab[aria-current="page"]')); });

  /* ---------------- Deep links from old pages (?open=projects) ---------------- */
  var params = new URLSearchParams(location.search);
  if (params.get('open') && builders[params.get('open')]) openViewer(params.get('open'));
})();
