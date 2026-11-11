import { SUPPORTED_LOCALES, UI_STRINGS } from '../catalog/i18n.js?v=20261111b';
import { STUDIO_PROFILE, CATALOG_CATEGORIES, INITIAL_MODULES } from '../catalog/modules.js?v=20261111b';

const STORAGE_KEYS = {
  locale: 'moonsage_atelier_locale',
  theme: 'moonsage_atelier_theme_v3',
};

function detectVisitorOs() {
  const ua = (navigator.userAgent || navigator.platform || '').toLowerCase();
  if (ua.includes('android')) return 'android';
  if (ua.includes('win')) return 'windows';
  return 'macos';
}

function loadSavedLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.locale);
    if (saved && SUPPORTED_LOCALES.includes(saved)) return saved;
  } catch (_) {}
  return 'en';
}

function loadSavedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (_) {}
  return 'light';
}

const state = {
  locale: loadSavedLocale(),
  theme: loadSavedTheme(),
  detectedOs: detectVisitorOs(),
  kindFilter: 'all',
  platformFilter: 'all',
  searchQuery: '',
  heroSlideIndex: 0,
  cardSlideIndices: {},
  expandedCategories: new Set(),
  activeDrawerModuleId: null,
  activeDrawerTab: 'overview',
  lightboxModuleId: null,
  lightboxSlideIndex: 0,
  lightboxZoomed: false,
};

function t(key) {
  const dict = UI_STRINGS[state.locale] || UI_STRINGS.en;
  return dict[key] ?? UI_STRINGS.en[key] ?? key;
}

function getAllModules() {
  return INITIAL_MODULES;
}

function getModuleLocaleData(mod) {
  if (!mod.i18n) return { name: mod.id, tagline: '', tags: [], highlights: [], setupSteps: [] };
  return mod.i18n[state.locale] || mod.i18n.en || Object.values(mod.i18n)[0];
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getAllInstallers(mod) {
  const list = [];
  if (!mod.downloads) return list;
  for (const [osKey, items] of Object.entries(mod.downloads)) {
    if (Array.isArray(items)) {
      for (const item of items) {
        list.push({ osKey, ...item });
      }
    }
  }
  return list;
}

function getPreferredInstaller(mod) {
  const all = getAllInstallers(mod);
  if (!all.length) return null;
  return all.find((item) => item.osKey === state.detectedOs) || all[0];
}

function getVisitorOsFormLabel() {
  if (state.detectedOs === 'windows') return 'Windows';
  if (state.detectedOs === 'android') return 'Android';
  return 'macOS';
}

function buildFeedbackUrl(mod = null, feedbackType = '') {
  const base = STUDIO_PROFILE.feedbackFormUrl || 'https://github.com/jayson-sheyue';
  const params = new URLSearchParams();
  if (mod) {
    const toolOption = mod.feedbackToolOption || mod.i18n?.zh?.name || mod.i18n?.en?.name || mod.id;
    params.set('prefill_所属工具', toolOption);
  }
  if (feedbackType) {
    params.set('prefill_反馈类型', feedbackType);
  }
  params.set('prefill_设备与系统', getVisitorOsFormLabel());
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

function getSlideLabel(slide, idx) {
  if (!slide?.label) return `0${idx + 1}`;
  if (typeof slide.label === 'string') return slide.label;
  return slide.label[state.locale] || slide.label.en || `0${idx + 1}`;
}

function getSlideSrc(slide) {
  let raw = './assets/showcase/leaflight-slide1.png';
  if (slide?.src) {
    raw =
      typeof slide.src === 'string'
        ? slide.src
        : slide.src[state.locale] || slide.src.en || slide.src.zh || Object.values(slide.src)[0];
  }
  return raw.includes('?') ? raw : `${raw}?v=20261110f`;
}

function renderMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const modules = getAllModules();
  const baseItems = [
    ...modules.map((mod) => {
      const loc = getModuleLocaleData(mod);
      return {
        id: mod.id,
        icon: mod.icon || '☾',
        name: loc.name || mod.id,
      };
    }),
    {
      id: '__coming_soon__',
      icon: '🧪',
      name: t('marqueeComingSoon'),
    },
  ];
  // Repeat an even number of times (6x = two identical 3x halves) so translateX(-50%) loops seamlessly
  const repeated = [
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
    ...baseItems,
  ];
  track.innerHTML = repeated
    .map(
      (item) => `
      <a href="#catalog-section" class="marquee-item" data-marquee-module="${escapeHtml(item.id)}">
        <span class="marquee-item-icon">${escapeHtml(item.icon)}</span>
        <span>${escapeHtml(item.name)}</span>
      </a>
    `,
    )
    .join('');
}

function renderHeroEasel() {
  const container = document.getElementById('hero-slides-container');
  const modules = getAllModules();
  if (!container || !modules.length) return;

  const total = modules.length;
  state.heroSlideIndex = ((state.heroSlideIndex % total) + total) % total;

  container.innerHTML = modules
    .map((mod, idx) => {
      const loc = getModuleLocaleData(mod);
      const firstSlide = getSlideSrc(mod.mediaGallery && mod.mediaGallery[0]);
      return `
        <img
          src="${escapeHtml(firstSlide)}"
          alt="${escapeHtml(loc.name)}"
          class="hero-slide-img ${idx === state.heroSlideIndex ? 'is-active' : ''}"
          data-hero-slide="${idx}"
          data-hero-module="${escapeHtml(mod.id)}"
          style="cursor: pointer;"
        />
      `;
    })
    .join('');

  updateHeroCurrentPill();
}

function updateHeroCurrentPill() {
  const pill = document.getElementById('hero-current-pill');
  const modules = getAllModules();
  if (!pill || !modules.length) return;
  const total = modules.length;
  const idx = ((state.heroSlideIndex % total) + total) % total;
  const mod = modules[idx];
  const loc = getModuleLocaleData(mod);
  const numStr = `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  pill.textContent = `${numStr} · ${mod.icon || '☾'} ${loc.name}`;
  pill.setAttribute('data-hero-current-module', mod.id);
}

function applyThemeAndLocaleChrome() {
  document.documentElement.lang = state.locale === 'zh' ? 'zh-CN' : state.locale;
  document.documentElement.setAttribute('data-theme', state.theme);

  const brandNameEl = document.getElementById('brand-name');
  if (brandNameEl) {
    brandNameEl.textContent = STUDIO_PROFILE.name[state.locale] || STUDIO_PROFILE.name.en;
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');

  const osLabel =
    state.detectedOs === 'windows'
      ? 'Windows'
      : state.detectedOs === 'android'
        ? 'Android'
        : 'macOS';
  const osPill = document.getElementById('detected-os-pill');
  if (osPill) osPill.textContent = `${t('DetectedOsPrefix')} ${osLabel}`;

  const generalFeedbackUrl = buildFeedbackUrl();
  const navFb = document.getElementById('nav-feedback-link');
  if (navFb) navFb.href = generalFeedbackUrl;
  const footerFb = document.getElementById('footer-feedback-link');
  if (footerFb) footerFb.href = generalFeedbackUrl;

  document.querySelectorAll('[data-locale-btn]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-locale-btn') === state.locale));
  });

  document.querySelectorAll('[data-theme-btn]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-theme-btn') === state.theme));
  });

  renderMarquee();
  renderHeroEasel();
}

function filterModules() {
  const q = state.searchQuery.trim().toLowerCase();
  return getAllModules().filter((mod) => {
    if (state.kindFilter !== 'all' && mod.kind !== state.kindFilter) return false;
    if (state.platformFilter !== 'all' && !(mod.platforms || []).includes(state.platformFilter)) {
      return false;
    }
    if (!q) return true;
    const loc = getModuleLocaleData(mod);
    const haystack = [mod.id, loc.name, loc.tagline, ...(loc.tags || [])].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

function renderCardVisualStage(mod) {
  const slides = Array.isArray(mod.mediaGallery) && mod.mediaGallery.length
    ? mod.mediaGallery
    : [{ type: 'image', src: './assets/showcase/leaflight-slide1.png', label: { en: 'I · Sketch Plate' } }];

  const activeIdx = (state.cardSlideIndices[mod.id] || 0) % slides.length;
  const activeSlide = slides[activeIdx];

  const imgsHtml = slides
    .map(
      (s, idx) => `
      <img
        src="${escapeHtml(getSlideSrc(s))}"
        alt="${escapeHtml(getSlideLabel(s, idx))}"
        class="stage-slide ${idx === activeIdx ? 'is-active' : ''}"
        data-slide-idx="${idx}"
      />
    `,
    )
    .join('');

  const storyBarsHtml = slides
    .map(
      (_, idx) => `
      <button
        type="button"
        class="story-bar ${idx === activeIdx ? 'is-active' : ''}"
        data-select-slide="${idx}"
        aria-label="Plate ${idx + 1}"
      >
        <span class="story-bar-fill"></span>
      </button>
    `,
    )
    .join('');

  const dotsHtml =
    slides.length > 1
      ? `<div class="slide-dots">
          ${slides
            .map(
              (_, idx) => `
              <button
                type="button"
                class="slide-dot-btn ${idx === activeIdx ? 'is-active' : ''}"
                data-select-slide="${idx}"
              >
                0${idx + 1}
              </button>
            `,
            )
            .join('')}
        </div>`
      : '';

  return `
    <div class="card-visual-stage" data-stage-module="${escapeHtml(mod.id)}">
      ${imgsHtml}
      <div class="stage-top-chrome">
        <div class="story-bars">${storyBarsHtml}</div>
        <button
          type="button"
          class="stage-zoom-pill"
          data-open-lightbox="${escapeHtml(mod.id)}"
          title="${escapeHtml(t('galleryZoom'))}"
        >
          ⤢
        </button>
      </div>
      <div class="stage-bottom-pills">
        <span class="slide-caption-pill" data-slide-caption="${escapeHtml(mod.id)}">
          ${escapeHtml(getSlideLabel(activeSlide, activeIdx))}
        </span>
        ${dotsHtml}
      </div>
    </div>
  `;
}

function renderPrimaryAction(mod, instanceKey = mod.id) {
  if (mod.kind === 'cli-script' && mod.cliCommand) {
    return `
      <button type="button" class="split-main-btn single-radius" data-copy-cli="${escapeHtml(mod.cliCommand)}">
        <span>✒</span>
        <span>${escapeHtml(t('cardCopyCli'))}</span>
      </button>
    `;
  }

  if (mod.kind === 'web-tool' && mod.webPreviewUrl) {
    return `
      <a
        href="${escapeHtml(mod.webPreviewUrl)}"
        target="_blank"
        rel="noopener noreferrer"
        class="split-main-btn single-radius"
      >
        <span>✦</span>
        <span>${escapeHtml(t('cardWebLaunch'))}</span>
      </a>
    `;
  }

  const allInstallers = getAllInstallers(mod);
  const preferred = getPreferredInstaller(mod);
  if (!preferred) return '';

  const hasMultiple = allInstallers.length > 1;
  const menuItems = allInstallers
    .map(
      (inst) => `
      <a
        href="${escapeHtml(inst.url)}"
        target="_blank"
        rel="noopener noreferrer"
        class="download-menu-item"
      >
        <span>↓ ${escapeHtml(inst.label)}</span>
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted);">${escapeHtml(inst.arch || inst.osKey)}</span>
      </a>
    `,
    )
    .join('');

  return `
    <div class="split-download" data-dropdown-container="${escapeHtml(instanceKey)}">
      <a
        href="${escapeHtml(preferred.url)}"
        target="_blank"
        rel="noopener noreferrer"
        class="split-main-btn ${hasMultiple ? '' : 'single-radius'}"
      >
        <span>↓</span>
        <span>${escapeHtml(preferred.shortLabel || preferred.label)}</span>
      </a>
      ${
        hasMultiple
          ? `
        <button
          type="button"
          class="split-toggle-btn"
          aria-label="${escapeHtml(t('cardOtherPlatforms'))}"
          data-dropdown-toggle="${escapeHtml(instanceKey)}"
        >
          ▾
        </button>
        <div class="download-menu" id="dl-menu-${escapeHtml(instanceKey)}" hidden>
          <div class="download-menu-title">${escapeHtml(t('cardOtherPlatforms'))}</div>
          ${menuItems}
        </div>
      `
          : ''
      }
    </div>
  `;
}

function renderModuleCard(mod, instancePrefix = 'card', showPinnedBadge = false) {
  const loc = getModuleLocaleData(mod);
  const instanceKey = `${instancePrefix}-${mod.id}`;
  const webBtnHtml =
    mod.kind === 'desktop-app' && mod.webPreviewUrl
      ? `<a
          href="${escapeHtml(mod.webPreviewUrl)}"
          target="_blank"
          rel="noopener noreferrer"
          class="card-btn-ghost"
        >
          <span>✦</span>
          <span>${escapeHtml(t('cardWebLaunch'))}</span>
        </a>`
      : '';

  const stampLabel = `${mod.stamp || 'Curio'} · ${mod.version || 'v1.0'}`;
  const pinnedLabelText =
    mod.pinnedTag === 'latest' ? t('pinnedTagLatest') : t('pinnedTagRecommended');
  const pinnedBadgeClass =
    mod.pinnedTag === 'latest' ? 'badge badge-pinned-latest' : 'badge badge-pinned';
  const pinnedBadgeHtml = showPinnedBadge
    ? `<span class="${pinnedBadgeClass}">${escapeHtml(pinnedLabelText)}</span>`
    : '';

  return `
    <article
      class="module-card"
      data-span="${escapeHtml(mod.span || 'standard')}"
      data-module-id="${escapeHtml(mod.id)}"
      data-card-instance="${escapeHtml(instanceKey)}"
    >
      ${renderCardVisualStage(mod)}
      <div class="card-footer-bar">
        <div class="card-identity">
          <span class="card-app-icon">${escapeHtml(mod.icon || '☾')}</span>
          <div>
            <div class="card-title-row">
              <h2 class="card-title">${escapeHtml(loc.name)}</h2>
              <span class="badge">${escapeHtml(stampLabel)}</span>
              ${pinnedBadgeHtml}
            </div>
            <p class="card-tagline">${escapeHtml(loc.tagline)}</p>
          </div>
        </div>

        <div class="action-cluster">
          ${renderPrimaryAction(mod, instanceKey)}
          ${webBtnHtml}
          <button type="button" class="card-btn-ghost" data-open-drawer="${escapeHtml(mod.id)}">
            <span>${escapeHtml(t('cardInspect'))}</span>
          </button>
          <a
            href="${escapeHtml(buildFeedbackUrl(mod))}"
            target="_blank"
            rel="noopener noreferrer"
            class="card-btn-ghost"
          >
            <span>${escapeHtml(t('cardFeedback'))} ↗</span>
          </a>
          <a
            href="${escapeHtml(mod.githubUrl || `https://github.com/${mod.githubRepo || ''}`)}"
            target="_blank"
            rel="noopener noreferrer"
            class="card-btn-ghost"
          >
            <span>${escapeHtml(t('cardGithub'))} ↗</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

function getCategoryLocaleData(cat) {
  if (!cat.i18n) return { title: cat.id, desc: '' };
  return cat.i18n[state.locale] || cat.i18n.en || Object.values(cat.i18n)[0];
}

function renderCatalog() {
  const filtered = filterModules();
  const grid = document.getElementById('catalog-grid');
  const emptyState = document.getElementById('empty-state');

  if (!filtered.length) {
    grid.innerHTML = '';
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  // 1. Pinned Top 4 Section (Creator's Picks & Latest Releases)
  const pinnedList = filtered
    .filter((mod) => mod.pinned)
    .sort((a, b) => (a.pinnedRank || 99) - (b.pinnedRank || 99))
    .slice(0, 4);

  const viewAllCategoriesLabel = `${t('pinnedViewAllPrefix')} ${filtered.length} ${t('pinnedViewAllSuffix')}`;

  const pinnedSectionHtml = pinnedList.length
    ? `
      <div class="catalog-block" id="pinned-showcase-block">
        <div class="section-head-bar">
          <div>
            <div class="hero-badge">${escapeHtml(t('pinnedSectionBadge'))}</div>
            <h2 class="section-head-title">${escapeHtml(t('pinnedSectionTitle'))}</h2>
            <p class="section-head-desc">${escapeHtml(t('pinnedSectionDesc'))}</p>
          </div>
          <button
            type="button"
            class="btn btn-secondary"
            data-jump-all-categories="true"
          >
            <span>${escapeHtml(viewAllCategoriesLabel)}</span>
          </button>
        </div>
        <div class="bento-grid">
          ${pinnedList.map((mod) => renderModuleCard(mod, 'pinned', true)).join('')}
        </div>
      </div>
    `
    : '';

  // 2. Collapsible Category Drawers
  const populatedCategories = CATALOG_CATEGORIES.map((cat) => {
    const items = filtered.filter((mod) => (mod.category || 'language-reading') === cat.id);
    return { cat, items };
  }).filter((entry) => entry.items.length > 0);

  const allExpanded =
    populatedCategories.length > 0 &&
    populatedCategories.every(({ cat }) => state.expandedCategories.has(cat.id));
  const anyExpanded = populatedCategories.some(({ cat }) => state.expandedCategories.has(cat.id));

  const categoryDrawersHtml = populatedCategories
    .map(({ cat, items }) => {
      const catLoc = getCategoryLocaleData(cat);
      const isOpen = state.expandedCategories.has(cat.id);
      const countLabel = `${items.length} ${t('categoryCountSuffix')}`;

      const toolPillsHtml = items
        .map((mod) => {
          const mLoc = getModuleLocaleData(mod);
          return `
            <button
              type="button"
              class="category-tool-pill"
              data-jump-category="${escapeHtml(cat.id)}"
              data-jump-category-tool="${escapeHtml(mod.id)}"
            >
              <span>${escapeHtml(mod.icon || '☾')}</span>
              <span>${escapeHtml(mLoc.name)}</span>
            </button>
          `;
        })
        .join('');

      return `
        <div class="category-drawer ${isOpen ? 'is-open' : ''}" data-category-drawer="${escapeHtml(cat.id)}">
          <div class="category-drawer-header" data-toggle-category="${escapeHtml(cat.id)}">
            <div class="category-drawer-info">
              <span class="category-drawer-icon">${escapeHtml(cat.icon || '🗂️')}</span>
              <div>
                <div class="category-drawer-title-row">
                  <h3 class="category-drawer-title">${escapeHtml(catLoc.title)}</h3>
                  <span class="badge">${escapeHtml(countLabel)}</span>
                </div>
                <p class="category-drawer-desc">${escapeHtml(catLoc.desc)}</p>
              </div>
            </div>

            <div class="category-drawer-right">
              <div class="category-tool-pills">
                ${toolPillsHtml}
              </div>
              <button
                type="button"
                class="category-toggle-btn"
                data-toggle-category="${escapeHtml(cat.id)}"
                aria-expanded="${isOpen ? 'true' : 'false'}"
              >
                <span>${escapeHtml(isOpen ? t('categoryCollapseBtn') : t('categoryExpandBtn'))}</span>
              </button>
            </div>
          </div>

          <div class="category-drawer-body" ${isOpen ? '' : 'hidden'}>
            <div class="bento-grid">
              ${items.map((mod) => renderModuleCard(mod, `cat-${cat.id}`, false)).join('')}
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  const wishNewToolUrl = buildFeedbackUrl(null, '功能许愿与建议（Feature）');
  const comingSoonStripHtml = `
    <div class="coming-soon-strip" id="coming-soon-strip">
      <div style="flex: 1 1 320px;">
        <div class="hero-badge" style="margin-bottom: 8px;">${escapeHtml(t('comingSoonBadge'))}</div>
        <h3 class="card-title" style="font-size: 19px; margin-bottom: 6px;">${escapeHtml(t('comingSoonTitle'))}</h3>
        <p class="card-tagline" style="margin: 0;">${escapeHtml(t('comingSoonDesc'))}</p>
      </div>
      <div class="action-cluster">
        <a
          href="${escapeHtml(wishNewToolUrl)}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          ${escapeHtml(t('comingSoonWishBtn'))}
        </a>
      </div>
    </div>
  `;

  const categorySectionHtml = populatedCategories.length
    ? `
      <div class="catalog-block" id="category-drawers-block">
        <div class="section-head-bar">
          <div>
            <div class="hero-badge">${escapeHtml(t('categorySectionBadge'))}</div>
            <h2 class="section-head-title">${escapeHtml(t('categorySectionTitle'))}</h2>
            <p class="section-head-desc">${escapeHtml(t('categorySectionDesc'))}</p>
          </div>
          <div class="action-cluster">
            <button
              type="button"
              class="card-btn-ghost"
              data-toggle-all-categories="expand"
              ${allExpanded ? 'disabled' : ''}
            >
              <span>${escapeHtml(t('categoryExpandAll'))}</span>
            </button>
            <button
              type="button"
              class="card-btn-ghost"
              data-toggle-all-categories="collapse"
              ${!anyExpanded ? 'disabled' : ''}
            >
              <span>${escapeHtml(t('categoryCollapseAll'))}</span>
            </button>
          </div>
        </div>
        <div class="category-stack">
          ${categoryDrawersHtml}
        </div>
        ${comingSoonStripHtml}
      </div>
    `
    : '';

  grid.innerHTML = `${pinnedSectionHtml}${categorySectionHtml}`;
}

function updateSingleCardSlide(moduleId, nextIdx) {
  const mod = getAllModules().find((m) => m.id === moduleId);
  if (!mod || !Array.isArray(mod.mediaGallery) || !mod.mediaGallery.length) return;
  const total = mod.mediaGallery.length;
  const idx = ((nextIdx % total) + total) % total;
  state.cardSlideIndices[moduleId] = idx;

  const cards = document.querySelectorAll(`.module-card[data-module-id="${CSS.escape(moduleId)}"]`);
  cards.forEach((card) => {
    card.querySelectorAll('.stage-slide').forEach((img, i) => {
      img.classList.toggle('is-active', i === idx);
    });
    card.querySelectorAll('.story-bar').forEach((bar, i) => {
      bar.classList.toggle('is-active', i === idx);
    });
    card.querySelectorAll('.slide-dot-btn').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === idx);
    });
    const cap = card.querySelector(`[data-slide-caption="${CSS.escape(moduleId)}"]`);
    if (cap) {
      cap.textContent = getSlideLabel(mod.mediaGallery[idx], idx);
    }
  });
}

function formatUsageBullet(rawText) {
  const text = String(rawText || '');
  let lead = '';
  let rest = text;
  const fullColonIdx = text.indexOf('：');
  const halfColonIdx = text.indexOf(': ');
  if (fullColonIdx > 0 && fullColonIdx < 24) {
    lead = text.slice(0, fullColonIdx + 1);
    rest = text.slice(fullColonIdx + 1);
  } else if (halfColonIdx > 0 && halfColonIdx < 34) {
    lead = text.slice(0, halfColonIdx + 1);
    rest = text.slice(halfColonIdx + 1);
  }

  const decorateShortcuts = (str) =>
    escapeHtml(str).replace(
      /(⌘⇧Space|Ctrl\+Shift\+Space|⌃⌥A|⌃⌥S|Ctrl\+Opt\+A|Ctrl\+Opt\+S|⌘C|⌘Tab|Option|Return|Esc|←\s*\/?\s*→)/g,
      '<kbd class="usage-kbd">$1</kbd>',
    );

  if (lead) {
    return `<strong class="usage-bullet-lead">${escapeHtml(lead)}</strong>${decorateShortcuts(rest)}`;
  }
  return decorateShortcuts(text);
}

function renderDrawer() {
  const drawer = document.getElementById('detail-drawer');
  if (!state.activeDrawerModuleId) {
    drawer.hidden = true;
    return;
  }
  const mod = getAllModules().find((m) => m.id === state.activeDrawerModuleId);
  if (!mod) {
    drawer.hidden = true;
    return;
  }

  drawer.hidden = false;
  const loc = getModuleLocaleData(mod);
  document.getElementById('drawer-title').textContent = loc.name;
  document.getElementById('drawer-tagline').textContent = loc.tagline;
  document.getElementById('drawer-badges').innerHTML = `
    <span class="badge">${escapeHtml(mod.stamp || 'Curio')}</span>
    <span class="badge badge-neutral">${escapeHtml(mod.version || 'v1.0')}</span>
  `;

  // Populate quick actions in drawer header
  const quickActionsEl = document.getElementById('drawer-quick-actions');
  if (quickActionsEl) {
    const installers = getAllInstallers(mod);
    const matchedPkg =
      installers.find((i) => i.osKey === state.detectedOs) || installers[0] || null;
    const dlHtml = matchedPkg
      ? `<a href="${escapeHtml(matchedPkg.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 8px 14px; font-size: 13px;">↓ ${escapeHtml(matchedPkg.shortLabel || matchedPkg.label)}</a>`
      : '';
    const webHtml = mod.webPreviewUrl
      ? `<a href="${escapeHtml(mod.webPreviewUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 8px 14px; font-size: 13px;">✦ ${escapeHtml(t('cardWebLaunch'))}</a>`
      : '';
    quickActionsEl.innerHTML = `${dlHtml}${webHtml}`;
  }

  document.querySelectorAll('[data-drawer-tab]').forEach((tabBtn) => {
    tabBtn.setAttribute('aria-selected', String(tabBtn.getAttribute('data-drawer-tab') === state.activeDrawerTab));
  });

  const body = document.getElementById('drawer-body');
  const slides = mod.mediaGallery || [];

  const repoUrl = mod.githubUrl || `https://github.com/${mod.githubRepo || ''}`;
  const releasesUrl = mod.githubRepo ? `https://github.com/${mod.githubRepo}/releases` : repoUrl;
  const issuesUrl = mod.githubRepo ? `https://github.com/${mod.githubRepo}/issues/new` : repoUrl;
  const bugFormUrl = buildFeedbackUrl(mod, '报错与故障（Bug 报修）');
  const wishFormUrl = buildFeedbackUrl(mod, '功能许愿与建议（Feature）');

  const supportBannerHtml = `
    <div class="arch-step-card" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-top: 8px;">
      <div style="flex: 1 1 280px;">
        <h3>${escapeHtml(t('drawerSupportTitle'))}</h3>
        <p>${escapeHtml(t('drawerSupportDesc'))}</p>
      </div>
      <div class="action-cluster">
        <a href="${escapeHtml(bugFormUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          ${escapeHtml(t('drawerBugBtn'))}
        </a>
        <a href="${escapeHtml(wishFormUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          ${escapeHtml(t('drawerWishBtn'))}
        </a>
        <a href="${escapeHtml(issuesUrl)}" target="_blank" rel="noopener noreferrer" class="card-btn-ghost">
          ${escapeHtml(t('drawerGithubIssueBtn'))}
        </a>
      </div>
    </div>
  `;

  if (state.activeDrawerTab === 'overview') {
    const quickStepsHtml = (loc.setupSteps || [])
      .map(
        (step) => `
        <div class="drawer-quickstart-card">
          <div class="drawer-quickstart-title">${escapeHtml(step.title)}</div>
          <div class="drawer-quickstart-detail">${formatUsageBullet(step.detail)}</div>
        </div>
      `,
      )
      .join('');

    const guideItems = loc.usageGuide && loc.usageGuide.length
      ? loc.usageGuide
      : slides.map((s, i) => ({
          badge: `STEP 0${i + 1}`,
          title: getSlideLabel(s, i),
          bullets: loc.highlights ? [loc.highlights[i] || ''] : [],
        }));

    const usageRowsHtml = guideItems
      .map((guide, idx) => {
        const slide = slides[idx] || slides[0] || { src: './assets/showcase/leaflight-slide1.png' };
        const bulletsHtml = (guide.bullets || [])
          .filter(Boolean)
          .map((b) => `<li>${formatUsageBullet(b)}</li>`)
          .join('');
        return `
          <article class="usage-guide-row">
            <div class="usage-guide-media" data-drawer-lightbox="${idx}" title="${escapeHtml(t('drawerZoomHint'))}">
              <img src="${escapeHtml(getSlideSrc(slide))}" alt="${escapeHtml(guide.title)}" loading="lazy" />
              <span class="usage-zoom-pill">${escapeHtml(t('drawerZoomHint'))}</span>
            </div>
            <div class="usage-guide-copy">
              <div class="usage-step-badge">${escapeHtml(guide.badge || `STEP 0${idx + 1}`)}</div>
              <h4 class="usage-step-title">${escapeHtml(guide.title)}</h4>
              <ul class="usage-bullet-list">${bulletsHtml}</ul>
            </div>
          </article>
        `;
      })
      .join('');

    body.innerHTML = `
      <section class="drawer-manual-section">
        <div class="drawer-section-label">${escapeHtml(t('drawerQuickStartTitle'))}</div>
        <div class="drawer-quickstart-grid">${quickStepsHtml}</div>
      </section>
      <section class="drawer-manual-section">
        <div class="drawer-section-label">${escapeHtml(t('drawerUsageSectionTitle'))}</div>
        <div class="usage-guide-stack">${usageRowsHtml}</div>
      </section>
      ${supportBannerHtml}
    `;
  } else {
    const installers = getAllInstallers(mod);
    const pkgCards = installers
      .map(
        (inst) => `
        <div class="release-pkg-card">
          <div>
            <span class="badge badge-neutral" style="margin-bottom: 8px;">${escapeHtml(inst.osKey.toUpperCase())} · ${escapeHtml(inst.arch || '')}</span>
            <div style="font-family: var(--font-serif); font-weight: 700; font-size: 15.5px;">${escapeHtml(inst.label)}</div>
          </div>
          <a
            href="${escapeHtml(inst.url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
            style="width: 100%;"
          >
            ↓ ${escapeHtml(inst.shortLabel || inst.label)}
          </a>
        </div>
      `,
      )
      .join('');

    body.innerHTML = `
      <div>
        <h3 class="card-title" style="font-size: 18px; margin-bottom: 6px;">${escapeHtml(t('drawerDirectInstallTitle'))}</h3>
        <p class="card-tagline" style="margin-bottom: 14px;">${escapeHtml(t('drawerDirectInstallDesc'))}</p>
        ${pkgCards ? `<div class="release-package-grid">${pkgCards}</div>` : ''}
      </div>
      ${supportBannerHtml}
      <div class="arch-step-card" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
        <div>
          <h3>${escapeHtml(t('drawerGithubCardTitle'))}</h3>
          <p>${escapeHtml(t('drawerGithubCardDesc'))}</p>
        </div>
        <div class="action-cluster">
          <a href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            ${escapeHtml(t('drawerGithubBtn'))}
          </a>
          <a href="${escapeHtml(releasesUrl)}" target="_blank" rel="noopener noreferrer" class="card-btn-ghost">
            ${escapeHtml(t('drawerReleasePageBtn'))}
          </a>
        </div>
      </div>
    `;
  }
}

function openLightbox(moduleId, slideIdx = 0) {
  const mod = getAllModules().find((m) => m.id === moduleId);
  if (!mod || !Array.isArray(mod.mediaGallery) || !mod.mediaGallery.length) return;
  state.lightboxModuleId = moduleId;
  state.lightboxSlideIndex = ((slideIdx % mod.mediaGallery.length) + mod.mediaGallery.length) % mod.mediaGallery.length;
  state.lightboxZoomed = false;
  renderLightbox();
}

function renderLightbox() {
  const lb = document.getElementById('media-lightbox');
  if (!state.lightboxModuleId) {
    lb.hidden = true;
    return;
  }
  const mod = getAllModules().find((m) => m.id === state.lightboxModuleId);
  if (!mod) {
    lb.hidden = true;
    return;
  }
  const slides = mod.mediaGallery || [];
  const slide = slides[state.lightboxSlideIndex] || slides[0];
  lb.hidden = false;

  const stage = document.getElementById('lightbox-stage');
  stage.classList.toggle('is-zoomed', state.lightboxZoomed);
  document.getElementById('lightbox-img').src = getSlideSrc(slide);
  document.getElementById('lightbox-caption').textContent = `${getSlideLabel(slide, state.lightboxSlideIndex)} (${state.lightboxSlideIndex + 1} / ${slides.length})`;
  document.getElementById('lightbox-zoom-btn').textContent = state.lightboxZoomed ? t('lightboxFit') : t('lightboxActual');
}

function setHeroSlide(idx) {
  const slides = document.querySelectorAll('[data-hero-slide]');
  const total = slides.length || 1;
  state.heroSlideIndex = ((idx % total) + total) % total;
  slides.forEach((img, i) => {
    img.classList.toggle('is-active', i === state.heroSlideIndex);
  });
  updateHeroCurrentPill();
}

function scrollToModuleCard(modId) {
  if (modId === '__coming_soon__') {
    const strip = document.getElementById('coming-soon-strip');
    if (strip) strip.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const mod = getAllModules().find((m) => m.id === modId);
  let card = document.querySelector(`#pinned-showcase-block .module-card[data-module-id="${CSS.escape(modId)}"]`);
  if (!card && mod && mod.category) {
    state.expandedCategories.add(mod.category);
    renderCatalog();
    card = document.querySelector(`#category-drawers-block .module-card[data-module-id="${CSS.escape(modId)}"]`);
  }
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function bindEvents() {
  // Hero Easel prev / next / current pill / image click
  const heroPrevBtn = document.getElementById('hero-prev-btn');
  const heroNextBtn = document.getElementById('hero-next-btn');
  const heroCurrentPill = document.getElementById('hero-current-pill');
  const heroSlidesContainer = document.getElementById('hero-slides-container');

  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setHeroSlide(state.heroSlideIndex - 1);
    });
  }
  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setHeroSlide(state.heroSlideIndex + 1);
    });
  }
  if (heroCurrentPill) {
    heroCurrentPill.addEventListener('click', (e) => {
      e.stopPropagation();
      const modId = heroCurrentPill.getAttribute('data-hero-current-module');
      if (modId) scrollToModuleCard(modId);
    });
  }
  if (heroSlidesContainer) {
    heroSlidesContainer.addEventListener('click', (e) => {
      const activeImg = e.target.closest('[data-hero-module]');
      if (activeImg) {
        openLightbox(activeImg.getAttribute('data-hero-module'), 0);
      }
    });
  }

  // Marquee tool item click -> scroll to that tool card (unfolding category if needed)
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) {
    marqueeTrack.addEventListener('click', (e) => {
      const item = e.target.closest('[data-marquee-module]');
      if (!item) return;
      e.preventDefault();
      const modId = item.getAttribute('data-marquee-module');
      scrollToModuleCard(modId);
    });
  }

  // Auto-advance Hero easel & Curio cabinet carousels
  setInterval(() => {
    setHeroSlide(state.heroSlideIndex + 1);
    getAllModules().forEach((mod) => {
      if (Array.isArray(mod.mediaGallery) && mod.mediaGallery.length > 1) {
        const cur = state.cardSlideIndices[mod.id] || 0;
        updateSingleCardSlide(mod.id, cur + 1);
      }
    });
  }, 4400);

  // Locale switcher
  document.querySelectorAll('[data-locale-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-locale-btn');
      if (!SUPPORTED_LOCALES.includes(next)) return;
      state.locale = next;
      try {
        localStorage.setItem(STORAGE_KEYS.locale, next);
      } catch (_) {}
      applyThemeAndLocaleChrome();
      renderCatalog();
      renderDrawer();
      renderLightbox();
    });
  });

  // Theme switcher
  document.querySelectorAll('[data-theme-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.theme = btn.getAttribute('data-theme-btn') === 'dark' ? 'dark' : 'light';
      try {
        localStorage.setItem(STORAGE_KEYS.theme, state.theme);
      } catch (_) {}
      applyThemeAndLocaleChrome();
    });
  });

  // Filters
  document.querySelectorAll('[data-platform-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.platformFilter = btn.getAttribute('data-platform-filter');
      document.querySelectorAll('[data-platform-filter]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      renderCatalog();
    });
  });

  const searchInput = document.getElementById('catalog-search');
  const clearBtn = document.getElementById('search-clear-btn');
  searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    clearBtn.hidden = !state.searchQuery;
    if (state.searchQuery.trim()) {
      CATALOG_CATEGORIES.forEach((c) => state.expandedCategories.add(c.id));
    }
    renderCatalog();
  });

  clearBtn.addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    clearBtn.hidden = true;
    renderCatalog();
  });

  document.getElementById('empty-reset-btn').addEventListener('click', () => {
    state.kindFilter = 'all';
    state.platformFilter = 'all';
    state.searchQuery = '';
    searchInput.value = '';
    clearBtn.hidden = true;
    renderCatalog();
  });

  // Delegated clicks inside Curio Cabinet
  document.getElementById('catalog-grid').addEventListener('click', async (e) => {
    const jumpAllBtn = e.target.closest('[data-jump-all-categories]');
    if (jumpAllBtn) {
      e.stopPropagation();
      CATALOG_CATEGORIES.forEach((c) => state.expandedCategories.add(c.id));
      renderCatalog();
      const catBlock = document.getElementById('category-drawers-block');
      if (catBlock) {
        catBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const jumpPill = e.target.closest('[data-jump-category-tool]');
    if (jumpPill) {
      e.stopPropagation();
      const catId = jumpPill.getAttribute('data-jump-category');
      const modId = jumpPill.getAttribute('data-jump-category-tool');
      if (catId) {
        state.expandedCategories.add(catId);
        renderCatalog();
        const targetCard = document.querySelector(
          `[data-category-drawer="${CSS.escape(catId)}"] .module-card[data-module-id="${CSS.escape(modId)}"]`,
        );
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      return;
    }

    const toggleAllBtn = e.target.closest('[data-toggle-all-categories]');
    if (toggleAllBtn) {
      e.stopPropagation();
      const mode = toggleAllBtn.getAttribute('data-toggle-all-categories');
      if (mode === 'expand') {
        CATALOG_CATEGORIES.forEach((c) => state.expandedCategories.add(c.id));
      } else {
        state.expandedCategories.clear();
      }
      renderCatalog();
      return;
    }

    const toggleCatEl = e.target.closest('[data-toggle-category]');
    if (toggleCatEl) {
      e.stopPropagation();
      const catId = toggleCatEl.getAttribute('data-toggle-category');
      if (state.expandedCategories.has(catId)) {
        state.expandedCategories.delete(catId);
      } else {
        state.expandedCategories.add(catId);
      }
      renderCatalog();
      return;
    }

    const slideBtn = e.target.closest('[data-select-slide]');
    if (slideBtn) {
      e.stopPropagation();
      const card = slideBtn.closest('[data-module-id]');
      if (card) {
        updateSingleCardSlide(card.getAttribute('data-module-id'), Number(slideBtn.getAttribute('data-select-slide')));
      }
      return;
    }

    const zoomBtn = e.target.closest('[data-open-lightbox]');
    if (zoomBtn) {
      e.stopPropagation();
      const modId = zoomBtn.getAttribute('data-open-lightbox');
      openLightbox(modId, state.cardSlideIndices[modId] || 0);
      return;
    }

    const stageEl = e.target.closest('[data-stage-module]');
    if (stageEl) {
      const modId = stageEl.getAttribute('data-stage-module');
      openLightbox(modId, state.cardSlideIndices[modId] || 0);
      return;
    }

    const toggleBtn = e.target.closest('[data-dropdown-toggle]');
    if (toggleBtn) {
      e.stopPropagation();
      const id = toggleBtn.getAttribute('data-dropdown-toggle');
      const menu = document.getElementById(`dl-menu-${id}`);
      if (!menu) return;
      const isHidden = menu.hidden;
      document.querySelectorAll('.download-menu').forEach((m) => (m.hidden = true));
      document.querySelectorAll('.module-card.has-open-menu').forEach((c) => c.classList.remove('has-open-menu'));
      menu.hidden = !isHidden;
      const parentCard = toggleBtn.closest('.module-card');
      if (parentCard && !menu.hidden) {
        parentCard.classList.add('has-open-menu');
      }
      return;
    }

    const copyBtn = e.target.closest('[data-copy-cli]');
    if (copyBtn) {
      const cmd = copyBtn.getAttribute('data-copy-cli');
      try {
        await navigator.clipboard.writeText(cmd);
      } catch (_) {}
      const labelSpan = copyBtn.querySelector('span:last-child');
      const prev = labelSpan.textContent;
      labelSpan.textContent = t('cardCopied');
      setTimeout(() => (labelSpan.textContent = prev), 1400);
      return;
    }

    const openDrawerBtn = e.target.closest('[data-open-drawer]');
    if (openDrawerBtn) {
      state.activeDrawerModuleId = openDrawerBtn.getAttribute('data-open-drawer');
      state.activeDrawerTab = 'overview';
      renderDrawer();
      return;
    }
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.download-menu').forEach((m) => (m.hidden = true));
    document.querySelectorAll('.module-card.has-open-menu').forEach((c) => c.classList.remove('has-open-menu'));
  });

  // Detail Drawer
  document.querySelectorAll('[data-drawer-tab]').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      state.activeDrawerTab = tabBtn.getAttribute('data-drawer-tab');
      renderDrawer();
    });
  });

  document.getElementById('drawer-close-btn').addEventListener('click', () => {
    state.activeDrawerModuleId = null;
    renderDrawer();
  });

  document.getElementById('detail-drawer').addEventListener('click', (e) => {
    const lbTrigger = e.target.closest('[data-drawer-lightbox]');
    if (lbTrigger && state.activeDrawerModuleId) {
      openLightbox(state.activeDrawerModuleId, Number(lbTrigger.getAttribute('data-drawer-lightbox') || 0));
      return;
    }
    if (e.target.id === 'detail-drawer') {
      state.activeDrawerModuleId = null;
      renderDrawer();
    }
  });

  // Lightbox events
  document.getElementById('lightbox-close-btn').addEventListener('click', () => {
    state.lightboxModuleId = null;
    renderLightbox();
  });
  document.getElementById('media-lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'media-lightbox') {
      state.lightboxModuleId = null;
      renderLightbox();
    }
  });
  document.getElementById('lightbox-prev-btn').addEventListener('click', () => {
    if (!state.lightboxModuleId) return;
    openLightbox(state.lightboxModuleId, state.lightboxSlideIndex - 1);
  });
  document.getElementById('lightbox-next-btn').addEventListener('click', () => {
    if (!state.lightboxModuleId) return;
    openLightbox(state.lightboxModuleId, state.lightboxSlideIndex + 1);
  });
  document.getElementById('lightbox-zoom-btn').addEventListener('click', () => {
    state.lightboxZoomed = !state.lightboxZoomed;
    renderLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('media-lightbox').hidden) {
      if (e.key === 'ArrowLeft') openLightbox(state.lightboxModuleId, state.lightboxSlideIndex - 1);
      if (e.key === 'ArrowRight') openLightbox(state.lightboxModuleId, state.lightboxSlideIndex + 1);
      if (e.key === 'Escape') {
        state.lightboxModuleId = null;
        renderLightbox();
      }
      return;
    }
    if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape') {
      document.querySelectorAll('.download-menu').forEach((m) => (m.hidden = true));
      if (state.activeDrawerModuleId) {
        state.activeDrawerModuleId = null;
        renderDrawer();
      }
    }
  });
}

applyThemeAndLocaleChrome();
renderCatalog();
bindEvents();
