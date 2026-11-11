/**
 * ============================================================================
 * MOONSAGE'S ATELIER (枕月仙人的小站) — CODE-LEVEL MODULAR CATALOG
 * ============================================================================
 * Add or update any product by editing `INITIAL_MODULES` below.
 *
 * Supported `kind` values:
 *   - 'desktop-app' : Direct OS installer split-button (.dmg / .zip / .exe / .apk)
 *                     + optional "Play in Browser" button when `webPreviewUrl` is set.
 *   - 'web-tool'    : Primary "Play in Browser" button linking to `webPreviewUrl`.
 *   - 'cli-script'  : Primary "Copy Spell" one-click clipboard button for `cliCommand`.
 *
 * Supported `span` values:
 *   - 'featured'    : 12-column wide diptych frame (ideal for flagship showcase)
 *   - 'standard'    : 6-column side-by-side gallery frame
 *   - 'compact'     : 12-column horizontal strip frame
 * ============================================================================
 */

export const STUDIO_PROFILE = {
  handle: 'MoonSage',
  githubProfileUrl: 'https://github.com/jayson-sheyue',
  feedbackFormUrl: 'https://kcn5wnrqs42a.feishu.cn/share/base/form/shrcnd2A59zev2zQ07SwflXJAgg',
  avatarImg: './assets/art/moonsage-portrait.jpg',
  catImg: './assets/art/sleeping-cat.jpg',
  name: {
    en: "MoonSage's Wonder House",
    ja: '枕月仙人のワンダーハウス · MoonSage',
    zh: '枕月仙人的妙妙屋 · MoonSage',
  },
};

export const CATALOG_CATEGORIES = [
  {
    id: 'language-reading',
    icon: '📚',
    i18n: {
      en: {
        title: 'Language, Reading & Audio Companions',
        desc: 'Graded fiction studios, always-on-top floating dictionaries, and two-host bilingual letter radio.',
      },
      ja: {
        title: '語学・読書・音声の相棒',
        desc: 'レベル別小説書斎、ページを離れない常駐フローティング辞書、2人のホストが語る英日お便りラジオ。',
      },
      zh: {
        title: '外语读写与声景伴侣',
        desc: '分级小说创作书房、桌面悬浮查词断句伴侣，以及双主播拆信畅聊的英日听力电台。',
      },
    },
  },
  {
    id: 'desktop-efficiency',
    icon: '🛠️',
    i18n: {
      en: {
        title: 'Desktop Efficiency & System Care',
        desc: 'Always-on-top screen pinners, text-aligned scrolling captures, and safe macOS storage slimming.',
      },
      ja: {
        title: 'デスクトップ効率化＆Macスリム整理',
        desc: '画面ピン留め＆スクロール長尺結合ツールと、安全境界を守るネイティブMacストレージ整理助手。',
      },
      zh: {
        title: '桌面提效与系统瘦身',
        desc: '免切窗置顶贴图与长截图拼接工具、严守安全边界的原生 Mac 更新残留与缓存瘦身助手。',
      },
    },
  },
  {
    id: 'creative-play',
    icon: '✨',
    i18n: {
      en: {
        title: 'Playful Experiments & Curios',
        desc: 'Whimsical mini-toys and creative experiments built under the crescent moon.',
      },
      ja: {
        title: '遊び心と実験の小箱',
        desc: '三日月の下で思いつくままに作ったユニークな実験作・おもちゃ箱。',
      },
      zh: {
        title: '奇思妙想与整活实验',
        desc: '灵光一现做出的趣味实验、创意玩具与自动化小脚本。',
      },
    },
  },
];

export const INITIAL_MODULES = [
  {
    id: 'leaflight',
    category: 'language-reading',
    pinned: true,
    pinnedRank: 1,
    pinnedTag: 'recommended',
    feedbackToolOption: 'Leaflight · 叶光书房',
    kind: 'desktop-app',
    span: 'standard',
    accent: 'sage',
    stamp: 'No. 01',
    icon: '🍃',
    version: 'v0.12.4',
    platforms: ['macos', 'windows', 'android', 'web'],
    githubRepo: 'jayson-sheyue/Leaflight',
    githubUrl: 'https://github.com/jayson-sheyue/Leaflight',
    webPreviewUrl: 'https://jayson-sheyue.github.io/Leaflight/',
    mediaGallery: [
      {
        type: 'image',
        src: {
          en: './assets/showcase/leaflight-slide1-en.png',
          ja: './assets/showcase/leaflight-slide1-ja.png',
          zh: './assets/showcase/leaflight-slide1-zh.png',
        },
        label: {
          en: 'I · Direct EPUB/TXT E-Book Import & No-Key Story Bookshelf',
          ja: 'I · 手持ちの EPUB / TXT 電子書籍を直接インポート＆共有書庫',
          zh: '壹 · 支持直接导入现成 EPUB / TXT 电子书当阅读器用 & 共享书池',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/leaflight-slide2-en.png',
          ja: './assets/showcase/leaflight-slide2-ja.png',
          zh: './assets/showcase/leaflight-slide2-zh.png',
        },
        label: {
          en: 'II · Tactile Graded Reader with Furigana & Chapter Bookmarks',
          ja: 'II · ふりがな・しおり付きのレベル別読書リーダー',
          zh: '贰 · 支持日语振假名与章节书签的拟真分级阅读器',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/leaflight-slide3-en.png',
          ja: './assets/showcase/leaflight-slide3-ja.png',
          zh: './assets/showcase/leaflight-slide3-zh.png',
        },
        label: {
          en: 'III · 184 Writing Prompts, IELTS Charts & 4D AI Coach',
          ja: 'III · 184題の作文演習・図表描画と4次元AI添削コーチ',
          zh: '叁 · 184 道英日写作题库、图表渲染与四维 AI 批改',
        },
      },
    ],
    downloads: {
      macos: [
        {
          label: 'macOS Apple Silicon (.dmg)',
          shortLabel: 'macOS .dmg',
          arch: 'arm64 · v0.12.4',
          url: 'https://github.com/jayson-sheyue/Leaflight/releases/download/v0.12.4/Leaflight-0.12.4-arm64.dmg',
        },
      ],
      windows: [
        {
          label: 'Windows Installer (.exe)',
          shortLabel: 'Windows .exe',
          arch: 'x64 · v0.12.4',
          url: 'https://github.com/jayson-sheyue/Leaflight/releases/download/v0.12.4/Leaflight-0.12.4-win-x64-setup.exe',
        },
      ],
      android: [
        {
          label: 'Android Pad Reader (.apk)',
          shortLabel: 'Android .apk',
          arch: 'v0.3.0-preview.9',
          url: 'https://github.com/jayson-sheyue/Leaflight/releases/download/android-v0.3.0-preview.9/Leaflight-Reader-0.3.0-preview.9-debug.apk',
        },
      ],
    },
    i18n: {
      en: {
        name: 'Leaflight · 叶光书房',
        tagline: 'Make stories fit who you are right now — a standalone EPUB/TXT e-book reader, local-first English (CEFR A2–C1) & Japanese (JLPT N5–N1) fiction studio, and 4D writing coach.',
        tags: ['macOS', 'Windows', 'Android Pad', 'EPUB Reader', 'CEFR A2–C1', 'JLPT N5–N1'],
        highlights: [
          'Direct EPUB & TXT Reader + Community Story Pool: import your own .epub / .txt e-books to use directly as a standalone tactile reader, or borrow preloaded English & Japanese novels — zero API key required',
          '10 tactile paper & glass themes, 8 realistic 3D page-turn animations, and 24 Science × Fantasy learning units',
          '184 original writing tasks (including visual IELTS charts & EJU prompts) with 4D qualitative AI feedback, stored locally in SQLite & Keychain',
        ],
        setupSteps: [
          {
            title: '1 · Import EPUB or Read Key-Free',
            detail: 'Download the macOS .dmg / Windows .exe / Android .apk to import your own .epub / .txt books directly as a standalone reader, or click "Open Web App" (portrait-ready on iPad).',
          },
          {
            title: '2 · macOS First Launch Tip',
            detail: 'If macOS blocks the unsigned app, click Done → System Settings → Privacy & Security → click "Open Anyway".',
          },
          {
            title: '3 · Optional Gemini API Key',
            detail: 'Reading imported EPUB/TXT books or the Community Story Pool is 100% key-free. Only paste a Google AI Studio key in Settings if you want AI story generation or essay review.',
          },
        ],
        usageGuide: [
          {
            badge: 'HOW TO USE 01',
            title: 'Import Existing EPUB / TXT Books as a Standalone Reader (Or Borrow Preloaded Novels)',
            bullets: [
              'Use directly as an EPUB reader (No API Key): Click "Import TXT / EPUB" at the top right of the Bookshelf to load your own .epub or .txt e-books — automatic chapter parsing, cover extraction, and instant paper-like reading.',
              'Borrow preloaded graded novels: Open "Community Pool" on the left sidebar to borrow ready-made English (CEFR A2–C1) and Japanese (JLPT N5–N1) novels offline without any API key.',
              'Generate custom stories (Optional Key): Open "Write a Story", pick your level, genre, or a "Science × Fantasy" unit, and generate illustrated chapters with audio.',
            ],
          },
          {
            badge: 'HOW TO USE 02',
            title: 'Read Like a Real Paper Book with One-Click Furigana & Bookmarks',
            bullets: [
              'Toggle Japanese Furigana: When reading Japanese stories, click the top toolbar button to show or hide kana readings above kanji at any time.',
              'Switch paper & page-turn styles: Pick from 10 warm paper / dark glass themes and 8 realistic page-flip animations (use ← / → arrow keys to turn pages).',
              'Bookmarks & Science Notes: Drop bookmarks on any page, and expand the end-of-chapter Science Note to review key concepts and vocabulary.',
            ],
          },
          {
            badge: 'HOW TO USE 03',
            title: 'Practice 184 English & Japanese Writing Prompts with 4D AI Review',
            bullets: [
              'Pick a prompt with real charts: Open "My Writing" to practice 184 English (IELTS / General) and Japanese (EJU / JLPT) tasks, complete with rendered bar/line charts.',
              'Auto-saved local drafts: Write in the left editor while checking prompt requirements and live word/character counts; all drafts save locally in SQLite.',
              'Get 4D sentence-by-sentence feedback: Click "Submit for Review" to receive structured scoring and rewrites across Task Response, Coherence, Lexical Resource, and Grammar.',
            ],
          },
        ],
      },
      ja: {
        name: 'Leaflight · 葉光書房',
        tagline: '今のあなたにぴったりの物語を —— 手持ちの EPUB / TXT をそのまま読める電子書籍リーダー、英日レベル別小説工房（CEFR A2–C1 / JLPT N5–N1）、4次元AI作文コーチ。',
        tags: ['macOS', 'Windows', 'Android Pad', 'EPUBリーダー', 'CEFR A2–C1', 'JLPT N5–N1'],
        highlights: [
          'EPUB / TXT 直接インポート＆共有ストーリープール：手持ちの .epub / .txt 電子書籍を読み込んでそのまま高機能リーダーとして使えるほか、英語・日本語（ふりがな付き）の既存小説もAPIキー不要で即読書',
          '10種類の紙質・ガラステーマ、8種類のページめくりアニメーション、24の「科学×ファンタジー」学習ユニット',
          '184問の英日ライティング課題（IELTS図表・EJU対応）と4次元AI添削、データは端末内SQLiteとKeychainに安全保存',
        ],
        setupSteps: [
          {
            title: '1 · EPUB読書もWeb試遊もキー不要',
            detail: 'macOS (.dmg) / Windows (.exe) / Android (.apk) 版で手持ちの .epub / .txt 本を直接読めるほか、「Web版を開く」（iPad縦画面対応）からすぐ試読できます。',
          },
          {
            title: '2 · macOS 初回起動時の許可',
            detail: '初回起動時に警告が出た場合は「完了」を押し、「システム設定 → プライバシーとセキュリティ → このまま開く」をクリックしてください。',
          },
          {
            title: '3 · AIキーは新規生成時のみ（任意）',
            detail: '手持ちのEPUB/TXT読書や共有プールの利用はキー不要です。新規小説生成やAI添削を使う場合のみ Google AI Studio キーを設定に入力します。',
          },
        ],
        usageGuide: [
          {
            badge: '使い方 01',
            title: '手持ちの EPUB / TXT 電子書籍を直接インポートしてそのまま読書器として使う',
            bullets: [
              '既存の EPUB 電子書籍リーダーとして即利用（キー不要）：本棚右上の「TXT / EPUB を読み込む」から手持ちの .epub / .txt 本を入れるだけで、自動章分け＆擬似ページめくりリーダーとしてそのまま使えます。',
              '共有ストーリープールから借りる（キー不要）：左メニュー「共有ストーリープール」から、英語（CEFR A2–C1）・日本語（JLPT N5–N1）の完成小説を借りてオフライン読書できます。',
              '自分専用の連載を生成（任意）：「物語を書く」でレベルやジャンル、「科学×ファンタジー」単元を選ぶと、音声付きの章を自動生成できます。',
            ],
          },
          {
            badge: '使い方 02',
            title: '紙の本のようにめくり、ふりがな表示やしおりを自在に切り替え',
            bullets: [
              'ふりがなON/OFF：日本語の物語では、上部ツールバーから漢字のふりがな（ルビ）をワンクリックで表示・非表示にできます。',
              '紙質テーマ＆めくり演出：目に優しい10種類の紙・暗色テーマと、8種類のリアルなページめくり効果（← / → キー対応）を選べます。',
              'しおり＆科学ノート：好きなページにしおりを挟めるほか、章末の「科学ノート」で物語に登場した知識や語彙を復習できます。',
            ],
          },
          {
            badge: '使い方 03',
            title: '図表付きの英日ライティング184題を書き、4次元AI添削を受ける',
            bullets: [
              '図表付き課題を選ぶ：左メニュー「マイライティング」から英語（IELTS等）・日本語（EJU/JLPT）の計184題を選択。グラフ課題も鮮明に表示されます。',
              '下書きを自動保存：文字数カウントと課題条件を確認しながら執筆でき、複数の下書き版が端末内SQLiteに自動保存されます。',
              '4次元で1文ずつ添削：書き終えたら「添削を提出」をクリック。課題達成度・一貫性・語彙・文法の4軸で具体的な改善案が返ってきます。',
            ],
          },
        ],
      },
      zh: {
        name: 'Leaflight · 叶光书房',
        tagline: '让故事适合此刻的你 —— 支持直接导入现成 EPUB / TXT 电子书当拟真翻页阅读器使用，同时内置英日分级小说工坊（CEFR A2–C1 / JLPT N5–N1）与四维 AI 写作教练。',
        tags: ['macOS', 'Windows', 'Android 平板', '直导 EPUB 阅读器', 'CEFR A2–C1', 'JLPT N5–N1'],
        highlights: [
          '直接导入 EPUB / TXT 电子书 + 内置共享书池：支持直接导入现成的 .epub / .txt 电子书当作高颜值拟真翻页阅读器使用，或免配 API Key 直接借阅内置英日分级小说',
          '10 套温润纸感与深海毛玻璃主题、8 种拟真翻页动效，独创 24 个「科学 × 奇幻」跨学科伴学单元与章节科学手记',
          '内置 184 道英日写作练习（含 IELTS 真实可视化图表与 EJU 题型）及四维 AI 批改，数据与密钥通过本地 SQLite + Keychain 加密保存',
        ],
        setupSteps: [
          {
            title: '① 直接导 EPUB 当阅读器 / 打开即读',
            detail: '支持 macOS (.dmg) / Windows (.exe) / Android (.apk) 客户端直接导入现成 .epub / .txt 电子书当阅读器用；iPad 或不想装软件可直接点「打开网页版」（已适配竖屏）。',
          },
          {
            title: '② macOS 首次打开提示',
            detail: '首次打开若提示未验证开发者，点「完成」，去「系统设置 → 隐私与安全性」底部点「仍要打开」即可。',
          },
          {
            title: '③ 按需填 Key（可选）',
            detail: '导入本地 EPUB/TXT 电子书与读「共享书池」完全免 Key；仅在生成新连载或用 AI 批改作文时，去设置粘贴免费 Google AI Studio Key。',
          },
        ],
        usageGuide: [
          {
            badge: '用法 01',
            title: '直接导入现成 EPUB / TXT 电子书当阅读器用，或免 Key 借阅内置小说',
            bullets: [
              '直接当作现成 EPUB 阅读器使用（免配 Key）：点书架右上角「导入 TXT / EPUB」，把你手头现成的 .epub 或 .txt 电子书拖进来，自动拆好章节目录，直接享受 10 套纸张主题与拟真翻页。',
              '直接借阅内置分级小说（免配 Key）：点左侧「共享书池」，无需任何 API Key 即可按英语（A2–C1）或日语（N5–N1）借阅现成小说，下载后断网也能读。',
              '按需定制专属连载（可选配 Key）：点左侧「写故事」，选好外语水平、小说流派或「科学 × 奇幻」主题单元，一键生成带朗读音频的专属章节。',
            ],
          },
          {
            badge: '用法 02',
            title: '像翻纸质书一样沉浸阅读，随时开关日语假名与书签',
            bullets: [
              '一键开关日语注音：读日语小说时，点阅读器顶部工具栏即可随时开启或隐藏汉字上方的振假名（Furigana）注音。',
              '换纸张主题与翻页手感：右上角可切换 10 套暖纸/深色毛玻璃主题，以及 8 种仿真翻页动效（支持键盘 ← → 方向键翻页）。',
              '随手夹书签与看手记：右上角可一键添加书签；读完每章还可展开底部「科学手记」，对照故事里的核心词汇与科普彩蛋。',
            ],
          },
          {
            badge: '用法 03',
            title: '刷 184 道英日写作题（含可视化图表），看四维逐句批改',
            bullets: [
              '选题开写（含真题图表）：点左侧「我的写作」，从 184 道英语（IELTS 图表/议论文）与日语（EJU/JLPT）题目中任选一道，内置高清柱状图与折线图。',
              '多版本草稿自动保存：在左侧编辑器写作，实时查看字数统计与审题要点，所有历史草稿自动保存在本机 SQLite。',
              '获取四维 AI 逐句批改：写完点右上角「提交批改」，AI 会从任务完成度、连贯衔接、词汇丰富度、语法准确性四维打分并给出逐句修改建议。',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'fuci',
    category: 'language-reading',
    pinned: true,
    pinnedRank: 2,
    pinnedTag: 'recommended',
    feedbackToolOption: 'Fuci · 浮词',
    kind: 'desktop-app',
    span: 'standard',
    accent: 'ochre',
    stamp: 'No. 02',
    icon: '🫧',
    version: 'v1.4.3',
    platforms: ['macos', 'windows'],
    githubRepo: 'jayson-sheyue/fuci',
    githubUrl: 'https://github.com/jayson-sheyue/fuci',
    mediaGallery: [
      {
        type: 'image',
        src: {
          en: './assets/showcase/fuci-slide1-en.png',
          ja: './assets/showcase/fuci-slide1-ja.png',
          zh: './assets/showcase/fuci-slide1-zh.png',
        },
        label: {
          en: 'I · English & Japanese Word Cards with Inflections & Furigana',
          ja: 'I · 活用形・ふりがな・音声付きの英日単語カード',
          zh: '壹 · 词形变化、日语振假名与真人语音单词卡片',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/fuci-slide2-en.png',
          ja: './assets/showcase/fuci-slide2-ja.png',
          zh: './assets/showcase/fuci-slide2-zh.png',
        },
        label: {
          en: 'II · Context-Aware Sentence Phrasing & Trilingual UI',
          ja: 'II · 意味の切れ目で読み解く文カードと三言語UI',
          zh: '贰 · 按自然停顿切分意群的查句卡片与三语独立界面',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/fuci-slide3-en.png',
          ja: './assets/showcase/fuci-slide3-ja.png',
          zh: './assets/showcase/fuci-slide3-zh.png',
        },
        label: {
          en: 'III · Double-Click to Collapse into Floating Orb, 7 Themes & 1-Min Setup',
          ja: 'III · ダブルクリックで半透明の玉に縮小・7色テーマ・1分設定',
          zh: '叁 · 双击放大镜缩成半透明悬浮球、7 款传统色主题与 1 分钟接入',
        },
      },
    ],
    downloads: {
      macos: [
        {
          label: 'macOS Apple Silicon (.dmg)',
          shortLabel: 'macOS .dmg',
          arch: 'arm64 · v1.4.3',
          url: 'https://github.com/jayson-sheyue/fuci/releases/download/v1.4.3/fuci-1.4.3-arm64.dmg',
        },
      ],
      windows: [
        {
          label: 'Windows Portable (.zip)',
          shortLabel: 'Windows .zip',
          arch: 'x64 · v1.4.3',
          url: 'https://github.com/jayson-sheyue/fuci/releases/download/v1.4.3/fuci-1.4.3-win-x64.zip',
        },
      ],
    },
    i18n: {
      en: {
        name: 'Fuci · 浮词',
        tagline: 'One word should not make you leave the page — an always-on-top floating dictionary & sentence phrasing companion that collapses into a translucent orb on double-click.',
        tags: ['macOS', 'Windows', 'Double-Click Orb', '⌘⇧Space', 'EN ↔ JA ↔ ZH'],
        highlights: [
          'Double-click the left magnifying glass to collapse the search bar into a tiny translucent floating orb (double-click orb to expand), or summon anywhere with ⌘⇧Space',
          'Smart Word vs. Sentence split: full inflections, furigana & audio for words; natural sense-group phrasing breakdown for sentences',
          'Two setup routes: 1-minute free Google AI Studio API key (Lite Mode) or Cloud Translation + Vertex AI + Cloud TTS (Full Mode)',
        ],
        setupSteps: [
          {
            title: '1 · Download for macOS or Windows',
            detail: 'Grab the macOS Apple Silicon .dmg or the portable Windows x64 .zip right from the card button.',
          },
          {
            title: '2 · 1-Minute API Key Setup',
            detail: 'Click ⚙ Settings → Lookup Account, and paste a free Gemini API key from Google AI Studio.',
          },
          {
            title: '3 · Double-Click to Orb or ⌘⇧Space',
            detail: 'Double-click the left magnifying glass to shrink into a floating orb (double-click orb to expand), or press ⌘⇧Space anywhere.',
          },
        ],
        usageGuide: [
          {
            badge: 'HOW TO USE 01',
            title: 'Double-Click into a Floating Orb or Press ⌘⇧Space Without Leaving Your Page',
            bullets: [
              'Double-click to shrink into an orb: Double-click the magnifying glass on the left of the search bar to collapse it into a tiny translucent orb; double-click the orb to expand it back (or press ⌘⇧Space / Esc).',
              'Cycle 6 language directions: Click the direction pill (EN→ZH, JA→ZH, EN→JA, etc.) on the left of the search bar to switch source and target languages.',
              'Rich word cards: See phonetics / Japanese Furigana, verb/adjective inflections, core meanings, and click 🔊 to hear spoken example sentences.',
            ],
          },
          {
            badge: 'HOW TO USE 02',
            title: 'Paste Long Sentences for Automatic Sense-Group Phrasing',
            bullets: [
              'Auto word vs. sentence split: Type a single word for a dictionary card, or paste a whole sentence to automatically trigger a phrasing card.',
              'Slash-segmented reading: Long English and Japanese sentences are split by "/" at natural pauses with aligned translations below each chunk.',
              'Instant local cache: Your last 400 lookups are cached locally on disk — re-checking a word or sentence is instant and uses zero tokens.',
            ],
          },
          {
            badge: 'HOW TO USE 03',
            title: 'Toggle Search Bar ↔ Floating Orb, Pick 7 Translucent Themes & 1-Minute Setup',
            bullets: [
              'Bar ↔ Floating Orb & 7 translucent themes: Double-click the left magnifier to toggle between search bar and floating orb, and switch across 7 traditional glass themes (Sky, Bamboo, Vermilion, etc.) in ⚙ Settings.',
              'AI Studio Lite Mode (Recommended): Just paste one free Gemini API key in "Lookup Account" — no credit card or gcloud CLI needed.',
              'GCP Full Mode (Optional): Connect Cloud Translation + Vertex AI + Cloud TTS for ultra-low latency and studio neural voices.',
            ],
          },
        ],
      },
      ja: {
        name: 'Fuci · 浮詞（フシ）',
        tagline: '一つの単語のために、読んでいるページを離れたくない —— ダブルクリックで半透明の小さな玉に縮まる macOS & Windows 常駐フローティング辞書・文節リーディング相棒。',
        tags: ['macOS', 'Windows', 'ダブルクリックで玉に縮小', '⌘⇧Space', '日↔英↔中'],
        highlights: [
          '検索枠左の虫眼鏡をダブルクリックすると半透明の小さな玉に縮小して画面の隅に待機（玉をダブルクリックで再展開）。⌘⇧Space でもいつでも呼び出せます',
          '単語と文を自動判別：単語は活用形・ふりがな・発音付きカード、長文は自然な意味の切れ目ごとに分解表示',
          '1分で完了する Google AI Studio キー（軽量モード）と GCP フルモードの両対応、直近400件をローカル高速キャッシュ',
        ],
        setupSteps: [
          {
            title: '1 · Mac (.dmg) / Win (.zip) を取得',
            detail: 'macOS 版（.dmg）または Windows ポータブル版（.zip）をダウンロードして起動します。',
          },
          {
            title: '2 · 1分でキーを設定',
            detail: '検索枠右側の「⚙ 設定 → 検索アカウント」を開き、Google AI Studio の無料 Gemini キーを貼り付けます。',
          },
          {
            title: '3 · ダブルクリックで玉に縮小 / ⌘⇧Space',
            detail: '左の虫眼鏡をダブルクリックすると小さな半透明の玉に縮まり、玉をダブルクリックすると元の検索枠に戻ります（⌘⇧Space でも呼び出し可能）。',
          },
        ],
        usageGuide: [
          {
            badge: '使い方 01',
            title: 'ダブルクリックで小さな玉に縮小・⌘⇧Space でページを離れず即検索',
            bullets: [
              'ダブルクリックで半透明の玉に縮小：検索枠左側の虫眼鏡をダブルクリックすると小さな玉に縮まって邪魔にならず、玉をダブルクリックすると再展開します（⌘⇧Space / Esc キーも対応）。',
              '6つの翻訳方向をワンクリック切替：検索枠左側の言語カプセル（英→中、日→中、英→日など）をクリックして翻訳方向を切り替えられます。',
              '活用形・ふりがな・音声付き：発音記号や漢字のふりがな、動詞・形容詞の活用形が一覧表示され、🔊 ボタンで例文音声も聴けます。',
            ],
          },
          {
            badge: '使い方 02',
            title: '長い文をそのまま貼り付けて、自然な意味の切れ目で読み解く',
            bullets: [
              '単語と長文を自動判別：1語なら「単語カード」、長い文を貼り付けると自動的に「文節リーディングカード」に切り替わります。',
              'スラッシュ（/）で文節分割：複雑な英文や日本語文を自然なポーズごとに「/」で区切り、塊ごとの意味を対照できます。',
              '直近400件をローカルキャッシュ：一度調べた単語や文は端末内に自動保存され、再検索時は待ち時間ゼロで開きます。',
            ],
          },
          {
            badge: '使い方 03',
            title: '検索枠⇔浮遊ボール切り替え・7色の半透明テーマ・1分設定',
            bullets: [
              '検索枠⇔小さな玉＆7つの伝統色テーマ：虫眼鏡のダブルクリックでいつでも小さな玉に縮小でき、「⚙ 設定」から晴空・青竹・朱砂・藤紫・琥珀・海棠・夜色の7テーマを切り替えられます。',
              '軽量モード（初心者おすすめ）：Google AI Studio の無料 Gemini キーを1つ貼り付けるだけで、1分ですぐ使い始められます。',
              'GCPフルモード（上級者向け）：Cloud Translation + Vertex AI + Cloud TTS を連携し、さらに高速な応答と高音質音声を利用することも可能です。',
            ],
          },
        ],
      },
      zh: {
        name: 'Fuci · 浮词',
        tagline: '查一个词，不该离开正在读的这一页 —— 双击可缩成半透明悬浮小球的 macOS 与 Windows 常驻桌面词典与断句伴侣。',
        tags: ['macOS', 'Windows', '双击缩成悬浮球', '⌘⇧Space', '中日英互译'],
        highlights: [
          '双击搜索框左侧放大镜即可压缩成一颗半透明悬浮小球安静停在桌面角落，双击小球再次展开；也可在任意全屏应用里按 ⌘⇧Space 随时呼出',
          '单词与句子自动分流：查单词给足音标/振假名、词形变化与例句朗读；查长句按自然停顿切开意群，一眼看清断句逻辑',
          '支持 1 分钟零门槛 AI Studio 轻量模式（仅需粘贴一个免费 Gemini Key）与 GCP 满血模式，最近 400 条查词本机秒开缓存',
        ],
        setupSteps: [
          {
            title: '① 下载并打开软件',
            detail: 'macOS 下载 .dmg 拖入应用程序；Windows 下载 .zip 解压后直接双击 浮词.exe 运行。',
          },
          {
            title: '② 1 分钟填好免费 Key',
            detail: '点搜索框右侧齿轮 ⚙ →「查词账号」，粘贴你在 Google AI Studio 免费创建的 Gemini API Key。',
          },
          {
            title: '③ 双击缩成小球 / ⌘⇧Space 呼出',
            detail: '双击搜索框左侧放大镜即可缩成一颗不挡字的半透明悬浮球，双击小球再展开；也可按 ⌘⇧Space 随时呼出。',
          },
        ],
        usageGuide: [
          {
            badge: '用法 01',
            title: '双击放大镜缩成桌面悬浮小球，或按 ⌘⇧Space 不切窗秒查生词',
            bullets: [
              '双击压缩成半透明小球：双击搜索框左侧的放大镜，它就会收成一颗半透明小球安静停在桌面角落，完全不挡阅读视线；需要查词时双击小球即可重新展开（也支持按 ⌘⇧Space 呼出、Esc 收起）。',
              '六个翻译方向秒切：点击搜索框左侧的语言胶囊（英→中、日→中、英→日等），一键循环切换互译方向。',
              '音标、振假名与词形全给齐：自动标出英语音标或日语汉字振假名、过去式/分词变化，点击小喇叭 🔊 即可听原声例句。',
            ],
          },
          {
            badge: '用法 02',
            title: '遇到读不懂的长难句，整句粘贴直接看「意群断句」',
            bullets: [
              '查词与查句自动分流：不用手动切换模式——输入单个词显示「词典卡」，粘贴一整句话会自动展开「长句断句卡」。',
              '按自然停顿斜杠切分：用「/」把长句切成符合阅读节奏的小意群，每一小块下方配对应释义，一眼看清句子主干。',
              '400 条本机秒开缓存：最近查过的单词和句子自动保存在本地，反复回看零延迟、不重复消耗额度。',
            ],
          },
          {
            badge: '用法 03',
            title: '搜索框与悬浮球自由切换、7 款半透明传统色主题与 1 分钟接入',
            bullets: [
              '双击切换悬浮球 + 7 款传统色毛玻璃：如左上方示意图，双击放大镜即可在「搜索条 ↔ 悬浮小球」间自由切换；点「⚙ 设置」还可换晴空、青竹、朱砂、藤紫、琥珀、海棠、夜色 7 款皮肤。',
              'AI Studio 轻量模式（最省心）：只需在「查词账号」里粘贴一个 Google AI Studio 免费 Key，免绑卡、免装命令行。',
              'GCP 满血模式（进阶可选）：也支持接入 Google Cloud Translation + Vertex AI + Cloud TTS，获得极速响应与高拟真语音。',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'diyfm',
    category: 'language-reading',
    pinned: true,
    pinnedRank: 3,
    pinnedTag: 'latest',
    feedbackToolOption: 'DIYFM · 来信电台',
    kind: 'desktop-app',
    span: 'standard',
    accent: 'gold',
    stamp: 'No. 03',
    icon: '📻',
    version: 'v2.4.1',
    platforms: ['macos', 'android', 'web'],
    githubRepo: 'jayson-sheyue/DIYFM',
    githubUrl: 'https://github.com/jayson-sheyue/DIYFM',
    webPreviewUrl: 'https://jayson-sheyue.github.io/DIYFM/',
    mediaGallery: [
      {
        type: 'image',
        src: {
          en: './assets/showcase/diyfm-slide1-en.png',
          ja: './assets/showcase/diyfm-slide1-ja.png',
          zh: './assets/showcase/diyfm-slide1-zh.png',
        },
        label: {
          en: 'I · Listen to a Fictional Letter in English or Japanese',
          ja: 'I · 英語・日本語で聴く「架空のお便りラジオ」',
          zh: '壹 · 拆开一封虚构来信：英日双语慢速陪伴电台',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/diyfm-slide2-en.png',
          ja: './assets/showcase/diyfm-slide2-ja.png',
          zh: './assets/showcase/diyfm-slide2-zh.png',
        },
        label: {
          en: 'II · Previewable Two-Host Voices & Lyria Background Music',
          ja: 'II · 2人のパーソナリティ音声とBGMの試聴・選択',
          zh: '贰 · 双主播声线试听与 Lyria 背景音乐混音合成',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/diyfm-slide3-en.png',
          ja: './assets/showcase/diyfm-slide3-ja.png',
          zh: './assets/showcase/diyfm-slide3-zh.png',
        },
        label: {
          en: 'III · "Discover" Page: Direct .ZIP Channel Package Import & No-Key Listening',
          ja: 'III · 「見つける」画面：他人が書き出した .zip 音源包を直接インポートして聴く',
          zh: '叁 · 「精选」页：直接导入别人导出的 .zip 音频包给自己免 Key 收听',
        },
      },
    ],
    downloads: {
      macos: [
        {
          label: 'macOS Universal (.dmg)',
          shortLabel: 'macOS .dmg',
          arch: 'Universal · v2.4.1',
          url: 'https://github.com/jayson-sheyue/DIYFM/releases/download/v2.4.1/DIYFM-2.4.1-mac-universal.dmg',
        },
        {
          label: 'macOS Universal Archive (.zip)',
          shortLabel: 'macOS .zip',
          arch: 'Universal · v2.4.1',
          url: 'https://github.com/jayson-sheyue/DIYFM/releases/download/v2.4.1/DIYFM-2.4.1-mac-universal.zip',
        },
      ],
      android: [
        {
          label: 'Android Client (.apk)',
          shortLabel: 'Android .apk',
          arch: 'Android 8+ · v2.4.1',
          url: 'https://github.com/jayson-sheyue/DIYFM/releases/download/v2.4.1/DIYFM-2.4.1-android.apk',
        },
      ],
    },
    i18n: {
      en: {
        name: 'DIYFM · 来信电台 (Letter Radio)',
        tagline: 'Listen to a letter, step into another language — an English & Japanese two-host letter radio with direct .zip channel sharing on Web, macOS, and Android.',
        tags: ['Web Radio', 'macOS Universal', 'Android APK', 'Direct .ZIP Import'],
        highlights: [
          'Two hosts open a self-contained fictional letter shaped around your wish (Beginner / Elementary / Advanced; 3 to 15 minutes)',
          'Full editorial pipeline: planning → Google Search verification → script review → two-host Gemini TTS speech → Lyria BGM mixing & MP3 download',
          'Direct .ZIP Sharing on "Discover" Page: import .zip channel packages exported by others (with mixed BGM audio & scripts) on the Discover tab to listen offline without any API key; your own key stays strictly in RAM',
        ],
        setupSteps: [
          {
            title: '1 · Open "Discover" to Import .ZIP (No Key)',
            detail: 'Want to listen right away without an API key? Open the "Discover" tab to add curated channels or click "Import channel package (.zip)" to load a .zip audio bundle shared by a friend.',
          },
          {
            title: '2 · Optional Session Key for New Shows',
            detail: 'Only paste a Google AI Studio key in Settings if you want to generate brand-new custom episodes (kept in RAM only and wiped on exit).',
          },
          {
            title: '3 · Write a Wish & Listen',
            detail: 'Pick English or Japanese, type a topic you want to hear, preview the two hosts & BGM, and generate or export your episode.',
          },
        ],
        usageGuide: [
          {
            badge: 'HOW TO USE 01',
            title: 'Choose English or Japanese & Write a Short Letter Prompt',
            bullets: [
              'Pick language, level & duration: Choose English or Japanese, select Beginner / Elementary / Advanced, and set a length from 3 to 15 minutes.',
              'Type a one-line wish: Write what kind of fictional listener letter you want to hear today (or click a preset inspiration chip).',
              'Relaxed two-host conversation: Two radio hosts read the fictional letter aloud and discuss it at a clear, learner-friendly pace.',
            ],
          },
          {
            badge: 'HOW TO USE 02',
            title: 'Preview Two-Host Voices & Lyria Background Music Before Mixing',
            bullets: [
              'Audition host voices: Click the preview button next to each host pair to hear their voices before generating your show.',
              'Mix with ambient BGM: Preview and pair your episode with cozy Lyria background music tracks that automatically duck under speech.',
              'Follow the bilingual script: Read along with the full transcript and key expression notes while the radio plays.',
            ],
          },
          {
            badge: 'HOW TO USE 03',
            title: 'Import Shared .ZIP Audio Packages on the "Discover" Page (Zero API Key Needed)',
            bullets: [
              'Direct .zip import on "Discover": Open "Discover" on the left sidebar and click "+ Import channel package (.zip)" at the top right to load any .zip channel bundle exported by others — complete with mixed BGM audio and full transcripts, no API key required.',
              'Export & share your own .zip packages: Package your favorite generated episodes into a portable .zip channel bundle (or single .mp3 files) to share with friends or move to your Android phone.',
              'Memory-only key privacy: When you do use an API key to generate new episodes, it stays strictly in runtime RAM and is wiped the moment you close the app.',
            ],
          },
        ],
      },
      ja: {
        name: 'DIYFM · お便りラジオ (Letter Radio)',
        tagline: '一通の手紙から、もうひとつの言葉へ —— 2人のホストが架空のお便りを読み、他人の .zip 番組包も直接インポートして聴ける英日ラジオ（Web / macOS / Android 対応）。',
        tags: ['Webラジオ', 'macOS Universal', 'Android APK', '.zip 番組インポート'],
        highlights: [
          '聴きたい気分をひとこと書くだけで、2人のパーソナリティが1話完結の架空のお便りを語り合います（初級〜上級・約3〜15分）',
          '企画 → 必要に応じたGoogle検索確認 → 台本推敲 → 2人の音声合成 → BGMミックスまで自動制作し、完成音源のMP3保存にも対応',
          '「見つける」ページで他人の .zip 番組包を直接インポート：他の人が生成・書き出した .zip チャンネル包（BGM合成済み音声＋台本）をAPIキー不要で読み込んで自分用に聴けます',
        ],
        setupSteps: [
          {
            title: '1 · 「見つける」から .zip 読み込み（キー不要）',
            detail: 'APIキーなしで聴きたい時は、左メニュー「見つける」から既存チャンネルを追加するか、「共有パッケージを読み込む (.zip)」で他の人が書き出した .zip 音源包を直接インポートして聴けます。',
          },
          {
            title: '2 · 新規番組を作る時のみキー入力（任意）',
            detail: '自分で新しいお便り番組を生成する場合のみ、設定画面に Google AI Studio キーを貼り付けます（メモリ内のみ保持・終了時消去）。',
          },
          {
            title: '3 · 気分を書いて番組を作成・書き出し',
            detail: '英語・日本語と難易度を選び、聴きたいテーマをひとこと書いてホスト音声とBGMを選べば番組が完成し、.zip や .mp3 で書き出せます。',
          },
        ],
        usageGuide: [
          {
            badge: '使い方 01',
            title: '英語・日本語と難易度を選び、聴きたいお便りのテーマを書く',
            bullets: [
              '言語・レベル・長さを選択：英語または日本語、初級・中級・上級、番組の長さ（3〜15分）を選びます。',
              'ひとことリクエストを入力：「雨の日の京都の古書店」など聴きたい気分を1行書くか、おすすめテーマから選びます。',
              '2人のホストが優しく語り合い：架空のリスナーから届いた手紙を2人のパーソナリティが読み上げ、聞き取りやすい速度で語り合います。',
            ],
          },
          {
            badge: '使い方 02',
            title: '2人のパーソナリティの声とBGMを事前に試聴してミックス',
            bullets: [
              'ホストの声を試聴：番組を作る前に、各パーソナリティの声サンプルを試聴して好みのペアを選べます。',
              '心地よいBGMを自動ミックス：カフェやアコースティックなどのBGMを試聴して組み合わせ、会話に合わせて音量を自動調整します。',
              '台本を見ながらリスニング：再生中は下に全文スクリプトと重要表現が表示され、聞き取れなかった箇所をすぐ確認できます。',
            ],
          },
          {
            badge: '使い方 03',
            title: '「見つける」画面で他人が書き出した .zip 音源包を直接インポートして聴く',
            bullets: [
              '他人の .zip 番組包を直接インポート（キー不要）：左メニュー「見つける」を開き、右上の「＋ 共有パッケージを読み込む (.zip)」から、友人や他のユーザーが生成・書き出した .zip ファイルを読み込むだけで、BGM付き完成音源と台本をすぐ自分の端末で聴けます。',
              '自分の番組も .zip や .mp3 で書き出し共有：自分が生成したお気に入り番組も、.zip チャンネル包や単体 .mp3 として書き出して友人にシェアしたりスマホへ移せます。',
              'メモリ限定の安全なキー管理：番組生成時に使うAPIキーは実行中のメモリにのみ置かれ、アプリやタブを閉じると即座に消去されます。',
            ],
          },
        ],
      },
      zh: {
        name: 'DIYFM · 来信电台 (Letter Radio)',
        tagline: '听一封来信，走进另一种语言 —— 双主播拆信畅聊的英日听力电台，支持在「精选」页直接导入别人导出的 .zip 音频包给自己听。',
        tags: ['网页即玩', 'macOS 通用包', 'Android 客户端', '支持导入 .zip 音频包'],
        highlights: [
          '选好英语或日语（入门 / 初级 / 进阶，3 至 15 分钟），写下一句你想听的心愿，两位电台主播就会为你拆开一封虚构来信娓娓道来',
          '完整采编流：选题策划 → 按需 Google 搜索核实 → 台本审校 → 双主播语音合成 → Lyria 背景音乐混音，支持一键导出含 BGM 的完整 MP3 与 .zip 频道包',
          '在「精选」页直接导入别人分享的 .zip 音频包：无需配置任何 API Key，打开左侧「精选」页点「导入频道包 (.zip)」，即可直接导入别人生成导出的 .zip 音频包（含混好 BGM 的成片与台本）给自己离线收听',
        ],
        setupSteps: [
          {
            title: '① 在「精选」页直接导 .zip 听（免 Key）',
            detail: '不填任何 API Key 也能听！点左侧「精选」，可直接添加现成频道，或点「导入频道包 (.zip)」直接导入别人生成导出的 .zip 音频包给自己听。',
          },
          {
            title: '② 自己生成新节目再填 Key（用完即焚）',
            detail: '只有当你想自己定制生成新来信节目时，才需去设置粘贴 Google AI Studio Key（纯内存驻留，关闭即清空）。',
          },
          {
            title: '③ 写一句心愿生成节目 / 导出分享',
            detail: '选好英语或日语、难度与时长，写一句想听的话题并挑好主播声线，生成后可导出单集 MP3 或 .zip 频道包。',
          },
        ],
        usageGuide: [
          {
            badge: '用法 01',
            title: '选好英语或日语频道，写一句你今天想听的来信话题',
            bullets: [
              '选语种、难度与时长：支持英语和日语两个频道，可选入门、初级、进阶三档难度，节目时长可选 3 到 15 分钟。',
              '一句话写下心愿：输入你想听的故事氛围（例如「在海边小站等一班晚点电车」），没灵感也可直接点预设话题签。',
              '双主播拆信慢聊：系统会生成一封虚构听众来信，由两位电台主播自然拆信朗读、一唱一和穿插讲解。',
            ],
          },
          {
            badge: '用法 02',
            title: '先试听两位主播声线与电台背景乐，再一键合成节目',
            bullets: [
              '试听挑选主播搭档：生成前可点击每位主播名字旁的试听按钮，挑一组你最顺耳的男女主播声线。',
              '搭配 Lyria 氛围背景乐：内置多首温暖电台背景音乐（BGM）供试听，合成时会自动在主播说话时压低背景乐音量。',
              '边听边对照完整台本：播放页面下方同步展示双主播逐句台本与重点表达，听不清的句子瞄一眼就能懂。',
            ],
          },
          {
            badge: '用法 03',
            title: '在「精选」页面直接导入别人导出的 .zip 音频包给自己听（免配 Key）',
            bullets: [
              '直接导入别人分享的 .zip 节目包：点左侧导航栏「精选」，再点右上角蓝色「+ 导入频道包 (.zip)」，选中别人生成并导出的 .zip 压缩包，即可预览节目单、自动校验音频并一键存进本地电台给自己听，全程无需任何 API Key。',
              '一键导出 .zip 频道包或独立 MP3：你自己生成的节目，既能导出为单集 .mp3，也能打包导出成完整 .zip 频道包（含混好 BGM 的音频与双语台本）发给朋友直接导入收听。',
              '密钥纯内存驻留零泄露：自己生成节目时填入的 API Key 仅留在当前运行内存，绝不写入硬盘或上传云端，关掉应用立刻清零。',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'pintool',
    category: 'desktop-efficiency',
    pinned: true,
    pinnedRank: 4,
    pinnedTag: 'latest',
    feedbackToolOption: 'PinTool · 钉图',
    kind: 'desktop-app',
    span: 'standard',
    accent: 'sage',
    stamp: 'No. 04',
    icon: '📌',
    version: 'v0.1.2',
    platforms: ['macos'],
    githubRepo: 'jayson-sheyue/PinTool',
    githubUrl: 'https://github.com/jayson-sheyue/PinTool',
    mediaGallery: [
      {
        type: 'image',
        src: {
          en: './assets/showcase/pintool-slide1-en.png',
          ja: './assets/showcase/pintool-slide1-ja.png',
          zh: './assets/showcase/pintool-slide1-zh.png',
        },
        label: {
          en: 'I · Pin Any Screen Region Always-on-Top Without Switching Windows',
          ja: 'I · 画面の一部を最前面にピン留め、ウィンドウ切り替え不要で対照',
          zh: '壹 · 把画面钉在所有窗口最前面，对照参考免来回切窗',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/pintool-slide2-en.png',
          ja: './assets/showcase/pintool-slide2-ja.png',
          zh: './assets/showcase/pintool-slide2-zh.png',
        },
        label: {
          en: 'II · Text-Aligned Manual-Scroll Long Screenshot (⌃⌥S)',
          ja: 'II · 文字揃え対応のスクロール長尺スクリーンショット（⌃⌥S）',
          zh: '贰 · 边滚边接长截图（⌃⌥S 按文字对齐拼接，左侧实时变长）',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/pintool-slide3-en.png',
          ja: './assets/showcase/pintool-slide3-ja.png',
          zh: './assets/showcase/pintool-slide3-zh.png',
        },
        label: {
          en: 'III · Minimal Region Overlay (⌃⌥A), Cursor Zoom & Memory-Only Privacy',
          ja: 'III · 最小限の選択オーバーレイ（⌃⌥A）・カーソル拡大・メモリ完結',
          zh: '叁 · 极简框选（⌃⌥A）、按光标滚轮缩放、⌘C 拷贝与纯内存零落盘',
        },
      },
    ],
    downloads: {
      macos: [
        {
          label: 'macOS Apple Silicon (.dmg)',
          shortLabel: 'macOS .dmg',
          arch: 'arm64 · macOS 15+ · v0.1.2',
          url: 'https://github.com/jayson-sheyue/PinTool/releases/download/v0.1.2/PinTool-0.1.2-arm64.dmg',
        },
      ],
    },
    i18n: {
      en: {
        name: 'PinTool · 钉图',
        tagline: 'Pin any screen region or scrolling long capture above all windows — a single-purpose macOS menu bar utility for side-by-side reference without window switching.',
        tags: ['macOS 15+', 'Apple Silicon', '⌃⌥A Pin', '⌃⌥S Long Capture'],
        highlights: [
          'Do one thing well: press ⌃⌥A to select & pin a region above every window across desktops, or press ⌃⌥S to stitch a scrolling long capture at your own pace',
          'Text-aligned long stitching & cursor-anchored zoom: scroll or pinch to zoom on any pinned card, Option-drag to pan, or press ⌘C to copy directly to clipboard',
          '100% memory-only & zero bloat: no annotations, no history files written to disk, no cloud uploads — everything vanishes cleanly when closed',
        ],
        setupSteps: [
          {
            title: '1 · Install .dmg (Apple Silicon, macOS 15+)',
            detail: 'Drag PinTool to Applications. On first launch, allow it in System Settings → Privacy & Security → Open Anyway.',
          },
          {
            title: '2 · Enable Screen Recording Once',
            detail: 'Click the menu bar pushpin icon 📌 → Open Settings, enable Screen Recording for PinTool, and click "Reopen PinTool".',
          },
          {
            title: '3 · Two Shortcuts: ⌃⌥A & ⌃⌥S',
            detail: 'Press ⌃⌥A to pin any screen region on top; press ⌃⌥S to stitch a scrolling long capture at your own pace.',
          },
        ],
        usageGuide: [
          {
            badge: 'HOW TO USE 01',
            title: 'Press ⌃⌥A to Pin Any Screen Region Above All Windows',
            bullets: [
              'Drag & pin instantly: Press ⌃⌥A (Ctrl+Opt+A) to frame a table, error log, or design spec — release the mouse and it floats above every window.',
              'Side-by-side without Cmd+Tab: Pinned cards follow you across spaces and you can pin multiple cards at once while typing in another window.',
              'Close with zero trace: Click the top-right × when done — everything stays in RAM and never clutters your Desktop with screenshot files.',
            ],
          },
          {
            badge: 'HOW TO USE 02',
            title: 'Press ⌃⌥S to Stitch a Scrolling Long Capture at Your Own Pace',
            bullets: [
              'Frame the scrollable area: Press ⌃⌥S (Ctrl+Opt+S) and drag a box around the webpage, long table, or chat thread you want to stitch.',
              'Scroll down at your own speed: Use your trackpad or mouse wheel to scroll down — the live preview on the left grows and aligns text automatically.',
              'Click ✓ to pin the long image: Click the green check ✓ (or press Return) when finished to pin the stitched long screenshot right on screen.',
            ],
          },
          {
            badge: 'HOW TO USE 03',
            title: 'Scroll to Zoom at Cursor, Option-Drag to Pan, ⌘C to Copy',
            bullets: [
              'Cursor-anchored zoom: Scroll or pinch on any pinned card to zoom in right where your pointer is pointing.',
              'Pan & one-click copy: Hold Option and drag to pan around a zoomed/long card, or press ⌘C (or right-click) to copy the image to your clipboard.',
              'Permission reset tip: After updating PinTool, if Screen Recording stops working, select PinTool in System Settings → Screen Recording, click "−" to remove it, then add it again.',
            ],
          },
        ],
      },
      ja: {
        name: 'PinTool · 釘図（ピンツール）',
        tagline: '画面の一部や長尺スクロールキャプチャをすべてのウィンドウの最前面にピン留め —— ウィンドウを切り替えずに対照作業ができる macOS メニューバー小道具。',
        tags: ['macOS 15+', 'Apple Silicon', '⌃⌥A ピン留め', '⌃⌥S 長尺結合'],
        highlights: [
          'ひとつのことだけに集中：⌃⌥A で範囲を最前面に固定、⌃⌥S で自分のペースでスクロールしながら文字位置を揃えて長尺画像をリアルタイム結合',
          'カーソル位置基準の拡大縮小・Optionドラッグ移動・⌘C でのクリップボード直接コピーに対応し、複数枚の同時ピン留めも可能',
          '100% メモリ完結・ディスク書き込みゼロ：履歴保存やクラウド送信は一切なく、閉じればその場で消える軽快設計',
        ],
        setupSteps: [
          {
            title: '1 · .dmg を導入（Apple Silicon / macOS 15+）',
            detail: 'アプリケーションへ入れ、初回は「システム設定 → プライバシーとセキュリティ → このまま開く」で許可します。',
          },
          {
            title: '2 · 画面収録をオンにして再起動',
            detail: 'メニューバー右上の画鋲アイコン 📌 から設定を開き、PinTool の画面収録を許可して「釘図を開き直す」を押します。',
          },
          {
            title: '3 · ⌃⌥A で固定 / ⌃⌥S で長尺結合',
            detail: '⌃⌥A で選んだ範囲を最前面にピン留め、⌃⌥S でスクロールしながら長尺キャプチャを結合できます。',
          },
        ],
        usageGuide: [
          {
            badge: '使い方 01',
            title: '⌃⌥A で参照したい画面を囲み、すべてのウィンドウの最前面に固定',
            bullets: [
              '囲んですぐ最前面固定：⌃⌥A（Ctrl+Opt+A）を押して表やエラー画面をドラッグすると、指を離した瞬間に最前面カードとして固定されます。',
              'ウィンドウ切替なしで対照作業：複数のカードを同時にピン留めでき、別の画面で原稿やコードを書きながらそのまま見比べられます。',
              '閉じれば跡形なく消去：見終わったら右上の「×」で閉じるだけ。メモリ上だけで動くため、デスクトップに不要な画像ファイルが溜まりません。',
            ],
          },
          {
            badge: '使い方 02',
            title: '⌃⌥S でスクロール範囲を囲み、自分のペースで長尺画像を結合',
            bullets: [
              'スクロール領域を指定：⌃⌥S（Ctrl+Opt+S）を押し、長いWebページや表のスクロール部分を枠で囲みます。',
              '下にスクロールして自動結合：自分のペースで下にスクロールすると、文字の行を自動認識して左側のプレビューがリアルタイムに伸びていきます。',
              '緑のチェック ✓ でピン留め：最後までスクロールしたら下部の緑の「✓」（またはReturnキー）を押すと、長尺画像としてそのまま最前面に固定されます。',
            ],
          },
          {
            badge: '使い方 03',
            title: 'ホイールでカーソル位置を拡大、Optionドラッグで移動、⌘C でコピー',
            bullets: [
              'カーソル中心の拡大・縮小：ピン留め画像の上でスクロール（またはピンチ）すると、マウスポインタの位置を中心に細かい文字まで拡大できます。',
              '移動＆ワンクリックコピー：Optionキーを押しながらドラッグして表示位置を動かせます。⌘C（または右クリック）でクリップボードへ即コピー可能。',
              '更新時の権限リセットのコツ：アップデート後に画面収録が効かない場合は、システム設定の画面収録リストで古いPinToolを「−」で一度削除してから再追加してください。',
            ],
          },
        ],
      },
      zh: {
        name: 'PinTool · 钉图',
        tagline: '把屏幕上的一块内容或长截图钉在所有窗口最前面 —— 专为对照另一个页面而生、免去来回切换窗口的 macOS 菜单栏办公提效小工具。',
        tags: ['macOS 15+', 'Apple Silicon', '⌃⌥A 框选即钉', '⌃⌥S 长截图'],
        highlights: [
          '纯粹克制、只做一件事：按 ⌃⌥A 拖出一块画面立刻钉在所有窗口最前面（支持跨桌面跟随与多张同钉）；按 ⌃⌥S 框住滚动区，由你自定速率向下滚，按文字精准对齐拼接长截图',
          '顺手交互细节：在钉图上滚动/捏合即可按光标位置放大细看，按住 Option 拖动整图，右键或按 ⌘C 直接将整张图拷入剪贴板',
          '100% 纯内存驻留、零落盘零打扰：没有繁杂标注、没有历史堆积、没有后台上传，关掉即消；菜单栏内置一键「拷贝诊断信息」方便排查权限状态',
        ],
        setupSteps: [
          {
            title: '① 安装并点「仍要打开」',
            detail: '支持 Apple Silicon + macOS 15+。拖入应用程序后，首次在「系统设置 → 隐私与安全性」底部点「仍要打开」。',
          },
          {
            title: '② 开启「屏幕录制」权限',
            detail: '点右上角菜单栏图钉图标 📌 →「打开设置」，勾选 PinTool 后点「重新打开钉图」即可生效。',
          },
          {
            title: '③ 记住两个快捷键即可',
            detail: '按 ⌃⌥A 框选任意区域钉在最前；按 ⌃⌥S 框住长页面边滚边接长截图。',
          },
        ],
        usageGuide: [
          {
            badge: '用法 01',
            title: '按 ⌃⌥A 框住要看的内容，钉在所有窗口最前面免切窗',
            bullets: [
              '框选松手即置顶：写稿、改代码或核对表格时，按 ⌃⌥A（Ctrl+Opt+A）拖出选区，松开鼠标立刻变成置顶小窗浮在最上面。',
              '多张同钉、跨桌面跟随：支持同时钉住多块参考画面，切去别的软件打字时再也不用按 ⌘Tab 来回翻找窗口。',
              '看完点 × 零残留：对照完点钉图右上角「×」即刻消失，100% 纯内存运行，绝不在桌面留下一堆废截图。',
            ],
          },
          {
            badge: '用法 02',
            title: '按 ⌃⌥S 框住滚动区，按你自己的节奏往下滚出长截图',
            bullets: [
              '框定要拼接的区域：按 ⌃⌥S（Ctrl+Opt+S），用虚线框圈住网页、长表格或文档的可滚动区域。',
              '自己往下滚、左侧实时接长：用滚轮或触控板按自己的快慢往下滚，软件会自动按文字行对齐拼接，左侧预览图实时变长。',
              '点绿勾 ✓ 完成并钉住：滚到底后点底部绿色对勾「✓」（或按回车键），整张长图立刻钉在最前面供你上下对照。',
            ],
          },
          {
            badge: '用法 03',
            title: '滚轮按鼠标位置放大、按住 Option 拖拽平移、⌘C 直接复制',
            bullets: [
              '指哪儿放大哪儿：鼠标停在钉图上滚动滚轮（或触控板双指捏合），会以光标为中心无级放大，再小的字也能看清。',
              '平移长图与一键复制：放大后按住 Option 键拖动可平移画面；按 ⌘C（或右键菜单）可直接把整张图复制进剪贴板发给别人。',
              '覆盖更新小贴士：若升级新版后截出的是桌面壁纸，去「系统设置 → 屏幕录制」选中旧 PinTool 点底部减号「−」删掉再重新添加即可。',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'mac-slim',
    category: 'desktop-efficiency',
    pinned: false,
    pinnedRank: 5,
    pinnedTag: 'latest',
    feedbackToolOption: 'MacSlim · Mac 瘦身助手',
    kind: 'desktop-app',
    span: 'standard',
    accent: 'ochre',
    stamp: 'No. 05',
    icon: '🧹',
    version: 'v1.1.1-beta.4',
    platforms: ['macos'],
    githubRepo: 'jayson-sheyue/mac-slim',
    githubUrl: 'https://github.com/jayson-sheyue/mac-slim',
    mediaGallery: [
      {
        type: 'image',
        src: {
          en: './assets/showcase/macslim-slide1-en.png',
          ja: './assets/showcase/macslim-slide1-ja.png',
          zh: './assets/showcase/macslim-slide1-zh.png',
        },
        label: {
          en: 'I · Itemized Scan of Auto-Update Leftovers, Caches & Historical Logs',
          ja: 'I · 更新残骸・キャッシュ・履歴ログの根拠付きスキャン一覧',
          zh: '壹 · 软件更新残留包、应用缓存与历史日志的透明清单扫描',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/macslim-slide2-en.png',
          ja: './assets/showcase/macslim-slide2-ja.png',
          zh: './assets/showcase/macslim-slide2-zh.png',
        },
        label: {
          en: 'II · Strict Safety Boundaries: Personal Data Protection & Inspection-Only Frameworks',
          ja: 'II · 個人データ自動保護と旧版フレームワークの検査専用モード',
          zh: '贰 · 严守安全边界：登录态与书签自动保护、旧版内核仅供检查不误删',
        },
      },
      {
        type: 'image',
        src: {
          en: './assets/showcase/macslim-slide3-en.png',
          ja: './assets/showcase/macslim-slide3-ja.png',
          zh: './assets/showcase/macslim-slide3-zh.png',
        },
        label: {
          en: 'III · Move-to-Trash by Default & One-Click Original Path Recovery',
          ja: 'III · デフォルトのゴミ箱移動と元の場所へのワンクリック復元',
          zh: '叁 · 默认移至废纸篓 + 清理记录一键原路恢复与 SHA-256 更新校验',
        },
      },
    ],
    downloads: {
      macos: [
        {
          label: 'macOS Universal Pre-release (.dmg)',
          shortLabel: 'macOS .dmg',
          arch: 'Universal (arm64 + Intel) · v1.1.1-beta.4',
          url: 'https://github.com/jayson-sheyue/mac-slim/releases/download/v1.1.1-beta.4/MacSlim-1.1.1-beta.4-Universal.dmg',
        },
        {
          label: 'macOS Universal Stable (.dmg)',
          shortLabel: 'Stable v1.0.0 .dmg',
          arch: 'Universal (arm64 + Intel) · v1.0.0',
          url: 'https://github.com/jayson-sheyue/mac-slim/releases/download/v1.0.0/MacSlim-1.0.0-Universal.dmg',
        },
      ],
    },
    i18n: {
      en: {
        name: 'MacSlim · Mac 瘦身助手',
        tagline: 'Tame apps that keep growing over time — a native Universal macOS storage cleaner that inspects leftover update packages, caches, and logs with strict safety boundaries.',
        tags: ['macOS 13+', 'Universal (Apple Silicon & Intel)', 'Trash Recovery', '100% Offline'],
        highlights: [
          'Targets the "unpacked shipping boxes" left behind by app updaters (ShipIt, Sparkle, UpdatePackages), stale logs, and dev caches (pip, Homebrew, node-gyp, unreferenced Playwright browsers)',
          'Strict safety boundaries: preserves files modified within 14 days, automatically protects Cookies/Bookmarks/Login Data, and marks legacy .framework versions as inspection-only so app signatures are never broken',
          'Moves items to Trash by default with pre-written content-fingerprint recovery records (recovery-v1.json) for one-click restoration to the original path',
        ],
        setupSteps: [
          {
            title: '1 · Install Universal .dmg (macOS 13+)',
            detail: 'Works on both Apple Silicon and Intel Macs. Drag to /Applications and allow in Privacy & Security → Open Anyway.',
          },
          {
            title: '2 · Click "Start Scan" (Recommended Mode)',
            detail: 'Keep the default "Recommended Mode" and click Start Scan to find safe-to-clean update leftovers and stale logs.',
          },
          {
            title: '3 · Clean to Trash & Restore Anytime',
            detail: 'Click "Clean Selected" to move items to Trash; use "Cleanup History" to restore any item to its exact original path.',
          },
        ],
        usageGuide: [
          {
            badge: 'HOW TO USE 01',
            title: 'Click "Start Scan" to Find Leftover Update Packages & Stale Caches',
            bullets: [
              'Target bloated updater leftovers: Scans for gigabytes of forgotten installer bundles (ShipIt, Sparkle, UpdatePackages), caches, and old logs.',
              'Transparent detection basis: Click "▾ Detection Basis" on any item to inspect its exact folder path, size, and why it was flagged.',
              'Two scan modes: Use "Recommended Mode" for safe everyday cleanup, or switch the top dropdown to "All Scannable Items" to inspect dev caches.',
            ],
          },
          {
            badge: 'HOW TO USE 02',
            title: 'Automatic Login/Bookmark Protection & Read-Only Framework Checks',
            bullets: [
              'Personal data stays untouched: Automatically excludes browser Cookies, login sessions, bookmarks, chat history, and files modified within 14 days.',
              'Never breaks app signatures: Old .framework versions inside installed .app bundles are marked "Inspect Only (Never Deleted)" so apps never break.',
              'Unverified caches stay unchecked: Dev caches (like Playwright browsers or Homebrew/pip archives) are left unchecked by default for your manual review.',
            ],
          },
          {
            badge: 'HOW TO USE 03',
            title: 'Move to Trash by Default & Restore to Original Path with One Click',
            bullets: [
              'Safe Move-to-Trash default: In Settings, "Move to Trash (Recommended)" is enabled by default so nothing is permanently erased behind your back.',
              'One-click original path recovery: Open "Cleanup History" at the top bar and click "Restore to Original Path" to put any cleaned item right back.',
              'Verified updates: Click "Check for Updates" in Settings to verify new GitHub Releases with SHA-256 checksums before upgrading.',
            ],
          },
        ],
      },
      ja: {
        name: 'MacSlim · Mac スリム助手',
        tagline: '使うほど肥大化するMacアプリを安全に整理 —— 更新残骸パッケージ、キャッシュ、古いログの根拠と影響を明示して整理するネイティブ macOS（Apple Silicon & Intel 対応）ツール。',
        tags: ['macOS 13+', 'Universal対応', 'ゴミ箱復元対応', '完全オフライン'],
        highlights: [
          'ShipIt や Sparkle などの自動更新後に残されたインストーラー残骸、古い診断ログ、開発キャッシュ（pip / Homebrew / node-gyp / 未使用のPlaywrightブラウザ）を構造的に検出',
          '厳格な安全境界：直近14日以内のファイルを保護し、Cookie・ブックマーク・ログイン情報を含む領域を自動除外。アプリ署名を守るため旧版フレームワークは「検査のみ（削除しない）」で表示',
          'デフォルトは「ゴミ箱へ移動」：実行前に復元台帳（recovery-v1.json）と内容ハッシュを記録し、「整理履歴」からいつでも元の場所へワンクリックで戻せます',
        ],
        setupSteps: [
          {
            title: '1 · Universal .dmg を導入（macOS 13+）',
            detail: 'Apple Silicon / Intel 両対応。アプリケーションへ入れ、初回は「プライバシーとセキュリティ → このまま開く」で許可します。',
          },
          {
            title: '2 · 「推奨モード」でスキャン開始',
            detail: '右上の「スキャン開始」を押すと、安全な更新残骸パッケージや古いログが自動で洗い出されます。',
          },
          {
            title: '3 · ゴミ箱へ移動＆いつでも元の場所へ復元',
            detail: 'デフォルトではゴミ箱へ移動するため安心です。「整理履歴」からワンクリックで元のパスへ戻せます。',
          },
        ],
        usageGuide: [
          {
            badge: '使い方 01',
            title: '「スキャン開始」を押し、溜まった更新残骸や古いキャッシュを一覧化',
            bullets: [
              '肥大化の原因をピンポイント検出：自動アップデート後に残された数GBの更新パッケージ（ShipIt / Sparkle等）、キャッシュ、古いログを検出します。',
              '検出根拠とパスを明示：各項目で「▾ 検出根拠」を開くと、正確なパス・容量・なぜ整理対象なのかをひと目で確認できます。',
              '2つのスキャンモード：普段は安全な項目だけを選ぶ「推奨モード」、開発キャッシュまで確認したい時は「すべての項目」に切り替えられます。',
            ],
          },
          {
            badge: '使い方 02',
            title: 'ログイン状態やブックマークを自動保護、旧版フレームワークは検査のみ',
            bullets: [
              '個人データは自動で除外：ブラウザのCookie・ログイン情報・ブックマークや直近14日以内のファイルは自動的に保護されます。',
              'アプリ署名を壊さない安全設計：アプリ内部の旧版フレームワークは「検査のみ（削除しない）」として表示され、起動不能を防ぎます。',
              '要確認キャッシュはデフォルト未選択：PlaywrightブラウザやHomebrew/pipキャッシュなどは未選択で表示され、自分で確認してから選べます。',
            ],
          },
          {
            badge: '使い方 03',
            title: 'デフォルトでゴミ箱へ移動、整理履歴からワンクリックで元の場所へ復元',
            bullets: [
              'いきなり完全削除しない安心設定：設定では「ゴミ箱へ移動（推奨）」が標準でオンになっており、誤って消してしまう心配がありません。',
              'ワンクリックで元の場所へ復元：上部の「整理履歴」を開き、「元の場所へ復元」を押すだけでいつでも元のフォルダへ戻せます。',
              'SHA-256検証付きアップデート：設定内の「アップデートを確認」から、GitHubの最新版を安全にチェック・更新できます。',
            ],
          },
        ],
      },
      zh: {
        name: 'MacSlim · Mac 瘦身助手',
        tagline: '专治 Mac 软件「越用越大」的原生轻量级瘦身小工具 —— 先列清单、讲清依据与影响，再帮你安全收拾更新残留包装箱、缓存与历史日志。',
        tags: ['macOS 13+', 'Apple Silicon & Intel 通用', '废纸篓一键恢复', '纯离线扫描'],
        highlights: [
          '专找「拆完快递没收走的纸箱」：精准识别 Electron (ShipIt)、Sparkle 等更新器留下的历史安装包副本、过期诊断日志，以及 pip / Homebrew / node-gyp 与未被引用的 Playwright 历史浏览器缓存',
          '克制而严密的安全边界：默认保留最近 14 天内修改的文件；检测到 Cookies / 书签 / 登录态自动保留并提示；决不修改已安装 .app 包或裁剪架构，旧版内核仅供查看位置绝不盲删',
          '默认「移至废纸篓」并预写恢复账本：清理前核对应用运行状态与分块内容指纹，写入 recovery-v1.json，随时可在「清理记录」里一键放回原位置',
        ],
        setupSteps: [
          {
            title: '① 下载安装（M 芯片 / Intel 通用）',
            detail: '拖入「应用程序」后打开；首次若提示未验证，去「系统设置 → 隐私与安全性」点「仍要打开」。',
          },
          {
            title: '② 保持「推荐模式」点开始扫描',
            detail: '直接点右上角「开始扫描」，会自动帮你勾选可以安全清理的软件更新残留包与过期日志。',
          },
          {
            title: '③ 默认移至废纸篓，随时一键恢复',
            detail: '点「清理选中项」默认只会移进废纸篓；若想找回，点顶部「清理记录 → 恢复到原位置」即可还原。',
          },
        ],
        usageGuide: [
          {
            badge: '用法 01',
            title: '点右上角「开始扫描」，揪出好几个 G 的软件更新残留包与旧日志',
            bullets: [
              '专治软件越用越肥：自动扫描常用软件升级后留在硬盘里的历史安装包副本（ShipIt / Sparkle / UpdatePackages）、缓存与旧诊断日志。',
              '每项都写明识别依据：点开任意条目的「▾ 识别依据」，都能清楚看到具体文件夹路径、占用体积，以及为什么可以安全清理。',
              '两种模式按需切换：日常用左上角默认的「推荐模式」最省心；想顺带查看开发缓存可切换为「全部可扫描项」。',
            ],
          },
          {
            badge: '用法 02',
            title: '自动保护登录态与书签，高风险旧内核只看不删、绝不把软件搞崩',
            bullets: [
              '个人数据自动绕开：自动保护最近 14 天内用过的文件，遇到包含登录态（Cookies）、书签、聊天记录的目录会自动保留并提示。',
              '不破坏已安装软件签名：针对WPS等应用包内部的旧版内核，仅标为「仅供检查（不执行删除）」，绝不破坏 Apple 代码签名。',
              '开发缓存默认不勾选：像 Playwright 旧浏览器内核、Homebrew/pip 历史下载归档统一标为「请先检查」且默认不勾选，由你拍板。',
            ],
          },
          {
            badge: '用法 03',
            title: '默认移至废纸篓留足后悔药，在「清理记录」里可一键原路恢复',
            bullets: [
              '默认先移入废纸篓：设置中默认开启「移至废纸篓（推荐）」，清理后先放进系统废纸篓，确认常用软件一切正常再清空。',
              '清理记录一键原路放回：点顶部「清理记录」，每次清理的原始路径都记在账本里，点「恢复到原位置」就能一键放回原处。',
              '内置 SHA-256 安全更新：在「设置」里可随时点「检查更新」，自动核对 GitHub Release 校验值安全升级。',
            ],
          },
        ],
      },
    },
  },
];
