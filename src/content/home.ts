// The home page, /, /nb/ and /es/: the app itself, in English, Norwegian
// and Spanish. This file holds everything on it that changes with the
// language: the <head> (title, description, Open Graph, structured data,
// the language alternates) and the pre-hydration block that crawlers and
// slow connections see before the app mounts.
//
// index.html is the template: each such part is a <!--home:name-->
// placeholder there, and renderHome() fills it. vite.config.ts does that on
// the dev server for every request, and in the build, which also writes
// nb/index.html and es/index.html beside index.html for the service worker
// to precache. src/main.tsx starts the app in the language of /nb/ and /es/.
//
// Every sentence says what the app really does, and the translations say
// exactly what the English says. tests/home.test.ts holds the numbers to the
// catalogue, the titles to about 60 characters and the descriptions to
// about 155 (what search results show), and the three versions to the same
// structure. Terminology: docs/translations.md and the published glossary.
//
// vite.config.ts bundles this file, so it imports nothing heavier than
// staticRoutes and the quiet line to the advent calendar (adventLine.ts,
// which imports nothing more itself).
import type { Lang } from '../state/settings';
import { RATING_URL } from './staticRoutes';
import { seasonLine } from './adventLine';

export const SITE = 'https://sudokui.app';
const SOURCE = 'https://github.com/AImenes/sudokUI';

export const HOME_LANGS: Lang[] = ['en', 'nb', 'es', 'zh'];
const OG_LOCALE: Record<Lang, string> = { en: 'en_GB', nb: 'nb_NO', es: 'es_ES', zh: 'zh_Hant' };

/** the home page's path in a language: /, /nb/, /es/ (langRoot in i18n.ts) */
export const homePath = (lang: Lang) => (lang === 'en' ? '/' : `/${lang}/`);

/** the social preview card in a language (public/og-card*.png, made by scripts/og-card.ts) */
export const ogCard = (lang: Lang) => `${SITE}/og-card${lang === 'en' ? '' : `.${lang}`}.png`;

/** the language a home address stands for, /nb/ or /es/; null for / (langOfPath in i18n.ts) */
export function homeLangOfPath(path: string): Lang | null {
  const m = /^\/(nb|es|zh)\/?$/.exec(path);
  return m ? (m[1] as Lang) : null;
}

/**
 * The navigations the service worker may answer with the app shell: the
 * home page in every language, with or without a query string, and the
 * share addresses, /p/<puzzle>, /daily/<date> and a door of the advent
 * calendar's /advent/<year>/<door>, under every language root (share.ts,
 * dailies.ts, advent.ts). /nb/ and /es/ themselves are answered from
 * the precache with their own page; the shell is the offline fallback
 * when a query string keeps them from matching it. A share address is
 * the app too: the Worker renders it with a preview for crawlers and chat
 * apps, but a player with the app installed gets the shell at once,
 * offline as well, and the app reads the puzzle or the day from the path.
 * Everything else is a real document or a real 404.
 */
export const APP_NAVIGATION = /^\/(?:(?:nb|es|zh)\/)?(?:p\/[0-9.]{81}\/?|daily\/\d{4}-\d{2}-\d{2}\/?|advent\/\d{4}\/\d{1,2}\/?)?(?:\?.*)?$/;

/** a page under a language's prefix: /learn/ in English, /nb/learn/ in Norwegian */
const inLang = (lang: Lang, path: string) => (lang === 'en' ? path : `/${lang}${path}`);

/** where the links under the introduction go, in this order, each in the page's own language */
export const BOOT_LINKS = ['/learn/', RATING_URL, '/sudoku-solver/', '/daily-sudoku/', '/hodoku/', '/learn/glossary/'];

export interface HomeCopy {
  /** the tab, and the headline of a search result */
  title: string;
  /** the text of a search result */
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  /** structured data: what the app is, what it needs and what it does */
  appDescription: string;
  requirements: string;
  features: string[];
  /** the pre-hydration block */
  h1: string;
  intro: string;
  /** the labels of BOOT_LINKS, in its order */
  links: string[];
  loading: string;
  /** shown without JavaScript, followed by the link to the source */
  noscript: string;
}

export const HOME: Record<Lang, HomeCopy> = {
  en: {
    title: 'Free sudoku online: play and learn the techniques | sudokUI',
    description:
      'Play free sudoku, rate the difficulty of any puzzle (HoDoKu-compatible scores) and practise 61 solving techniques with hints that explain every step.',
    ogTitle: 'sudokUI: free sudoku, technique trainer and difficulty rating',
    ogDescription:
      'Play sudoku, rate the difficulty of any puzzle with HoDoKu-compatible scores, and practise 61 solving techniques with hints that explain every step. Free, works offline, no ads.',
    ogImageAlt: 'sudokUI: play, practise and rate sudoku. A board with an X-Wing pattern highlighted.',
    appDescription:
      'Free open-source sudoku app that rates the difficulty of any puzzle with HoDoKu-compatible scores and teaches 61 named solving techniques with hints that explain every step.',
    requirements: 'Requires JavaScript',
    features: [
      'A HoDoKu rating for any sudoku, with HoDoKu’s five difficulty levels',
      '77 machine-verified solving techniques with step-by-step hints',
      'Practice mode for 61 named techniques, X-Wing to Death Blossom',
      'A step-by-step solver that names and explains every step',
      'A shared daily puzzle, identical worldwide',
      'Shareable puzzle and position links',
      'Offline play, no ads, no account'
    ],
    h1: 'sudokUI',
    intro:
      'A free, open-source sudoku app for playing, practising and rating puzzles. It rates the difficulty of any sudoku with HoDoKu-compatible scores, knows 77 solving techniques with hints that explain every step, and has a practice mode for 61 of them, from X-Wings to Death Blossoms. One shared daily puzzle, no ads, no account, works offline.',
    links: [
      'Sudoku solving techniques explained',
      'How the HoDoKu rating works',
      'A sudoku solver that explains every step',
      'Daily sudoku',
      'HoDoKu-compatible ratings in your browser',
      'Sudoku glossary'
    ],
    loading: 'Loading the board…',
    noscript: 'sudokUI needs JavaScript to run. The app is free and open source:'
  },
  nb: {
    title: 'Spill sudoku gratis på nett og lær teknikkene | sudokUI',
    description:
      'Spill sudoku gratis på nett, vurder vanskelighetsgraden til enhver oppgave med poeng som i HoDoKu, og øv på 61 teknikker med hint som forklarer hvert steg.',
    ogTitle: 'sudokUI: gratis sudoku, teknikktrening og vanskelighetsgrad',
    ogDescription:
      'Spill sudoku, vurder vanskelighetsgraden til enhver oppgave med poeng som i HoDoKu, og øv på 61 løsningsteknikker med hint som forklarer hvert steg. Gratis, virker uten nett, ingen reklame.',
    ogImageAlt: 'sudokUI: spill, øv på og vurder sudoku. Et brett der et X-Wing-mønster er uthevet.',
    appDescription:
      'Gratis sudokuapp med åpen kildekode som vurderer vanskelighetsgraden til enhver oppgave med poeng som i HoDoKu, og som lærer deg 61 navngitte løsningsteknikker med hint som forklarer hvert steg.',
    requirements: 'Krever JavaScript',
    features: [
      'HoDoKu-poengsum for enhver sudoku, med HoDoKus fem vanskelighetsnivåer',
      '77 maskinkontrollerte løsningsteknikker med hint steg for steg',
      'Øvingsmodus for 61 navngitte teknikker, fra X-Wing til Death Blossom',
      'En sudokuløser som går steg for steg og navngir og forklarer hvert steg',
      'Dagens sudoku, den samme for alle i hele verden',
      'Lenker til oppgaver og stillinger som kan deles',
      'Spill uten nett, ingen reklame, ingen konto'
    ],
    h1: 'sudokUI',
    intro:
      'En gratis sudokuapp med åpen kildekode for å spille, øve og vurdere oppgaver. Den vurderer vanskelighetsgraden til enhver sudoku med poeng som i HoDoKu, kan 77 løsningsteknikker med hint som forklarer hvert steg, og har øvingsmodus for 61 av dem, fra X-Wing til Death Blossom. Dagens sudoku er den samme for alle. Ingen reklame, ingen konto, og appen virker uten nett.',
    links: [
      'Teknikker for å løse sudoku, forklart',
      'Slik regnes HoDoKu-poengsummen ut',
      'En sudokuløser som forklarer hvert steg',
      'Dagens sudoku',
      'HoDoKu-kompatibel poengsum i nettleseren din',
      'Ordliste for sudoku'
    ],
    loading: 'Laster inn brettet…',
    noscript: 'sudokUI trenger JavaScript for å kjøre. Appen er gratis og har åpen kildekode:'
  },
  es: {
    title: 'Juega al sudoku gratis online y aprende técnicas | sudokUI',
    description:
      'Juega al sudoku gratis, mide la dificultad de cualquier sudoku (puntuaciones compatibles con HoDoKu) y practica 61 técnicas con pistas que explican cada paso.',
    ogTitle: 'sudokUI: sudoku gratis, entrenador de técnicas y puntuación de dificultad',
    ogDescription:
      'Juega al sudoku, mide la dificultad de cualquier sudoku con puntuaciones compatibles con HoDoKu y practica 61 técnicas de resolución con pistas que explican cada paso. Gratis, sin anuncios y funciona sin conexión.',
    ogImageAlt: 'sudokUI: juega, practica y puntúa sudokus. Un tablero con un patrón de X-Wing resaltado.',
    appDescription:
      'App de sudoku gratuita y de código abierto que mide la dificultad de cualquier sudoku con puntuaciones compatibles con HoDoKu y enseña 61 técnicas de resolución con nombre propio, con pistas que explican cada paso.',
    requirements: 'Requiere JavaScript',
    features: [
      'Puntuación HoDoKu de cualquier sudoku, con los cinco niveles de dificultad de HoDoKu',
      '77 técnicas de resolución verificadas automáticamente, con pistas paso a paso',
      'Modo de práctica para 61 técnicas con nombre propio, del X-Wing al Death Blossom',
      'Un resolvedor paso a paso que nombra y explica cada paso',
      'Un sudoku del día compartido, idéntico en todo el mundo',
      'Enlaces para compartir sudokus y posiciones',
      'Juego sin conexión, sin anuncios y sin cuenta'
    ],
    h1: 'sudokUI',
    intro:
      'Una app de sudoku gratuita y de código abierto para jugar, practicar y puntuar sudokus. Mide la dificultad de cualquier sudoku con puntuaciones compatibles con HoDoKu, conoce 77 técnicas de resolución con pistas que explican cada paso y tiene un modo de práctica para 61 de ellas, del X-Wing al Death Blossom. Un único sudoku del día, igual para todos. Sin anuncios, sin cuenta y funciona sin conexión.',
    links: [
      'Técnicas para resolver sudokus, explicadas',
      'Cómo funciona la puntuación HoDoKu',
      'Un resolvedor de sudokus que explica cada paso',
      'Sudoku diario',
      'Puntuaciones compatibles con HoDoKu en tu navegador',
      'Glosario de sudoku'
    ],
    loading: 'Cargando el tablero…',
    noscript: 'sudokUI necesita JavaScript para funcionar. La app es gratuita y de código abierto:'
  },
  zh: {
    title: '免費數獨線上玩：練習技巧、評定難度，並用提示逐步學會完整解法 | sudokUI',
    description:
      '免費線上玩數獨，以相容 HoDoKu 的評分判斷任何題目的難度，並透過逐步解說每一步的提示練習 61 種解題技巧。完全免費、沒有廣告、也不必註冊帳號；可離線遊玩，也能把題目與盤面連結分享給朋友一起挑戰與練習，適合新手到進階玩家的每日練習使用。',
    ogTitle: 'sudokUI：免費數獨、技巧訓練與難度評分',
    ogDescription:
      '玩數獨、以相容 HoDoKu 的評分判斷任何題目的難度，並透過逐步解說的提示練習 61 種解題技巧。免費、可離線使用且無廣告。',
    ogImageAlt: 'sudokUI：遊玩、練習並評定數獨難度。盤面上醒目標示一個 X-Wing 圖形。',
    appDescription:
      '免費開源的數獨應用程式，能以相容 HoDoKu 的評分判斷任何題目的難度，並用逐步解說的提示教你 61 種具名解題技巧。',
    requirements: '需要 JavaScript',
    features: [
      '為任何數獨提供 HoDoKu 評分，涵蓋 HoDoKu 的五個難度等級',
      '77 種經機器驗證的解題技巧，附逐步提示',
      '61 種具名技巧的練習模式，從 X-Wing 到 Death Blossom',
      '逐步指出並解釋每一步的數獨解題器',
      '全球相同的每日數獨',
      '可分享題目與盤面位置的連結',
      '可離線遊玩、無廣告、免帳號'
    ],
    h1: 'sudokUI',
    intro:
      '一款用來遊玩、練習並評定題目難度的免費開源數獨應用程式。它以相容 HoDoKu 的評分判斷任何數獨的難度，掌握 77 種解題技巧，並以提示逐步解釋；其中 61 種可在練習模式中訓練，從 X-Wing 到 Death Blossom。每天提供一道全球相同的每日數獨，無廣告、免帳號，也可離線使用。',
    links: [
      '數獨解題技巧詳解',
      'HoDoKu 評分如何運作',
      '逐步解釋的數獨解題器',
      '每日數獨',
      '在瀏覽器中取得相容 HoDoKu 的評分',
      '數獨詞彙表'
    ],
    loading: '正在載入盤面…',
    noscript: 'sudokUI 需要 JavaScript 才能執行。此應用程式免費且開源：'
  }
};

// ---- rendering --------------------------------------------------------------

/** text as HTML; the ellipsis written as index.html always had it */
const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/…/g, '&hellip;');

/** running text in lines of at most 68 characters, as index.html has always been laid out */
function wrap(text: string, width = 68): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if (line && line.length + 1 + word.length > width) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * JSON laid out as index.html has always had it: two spaces a level, and a
 * list or object of plain values on one line when that line is short.
 * "<" is escaped, so no string can close the script element.
 */
function layoutJson(value: unknown, indent = ''): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value).replace(/</g, '\\u003c');
  const list = Array.isArray(value);
  const entries: [string | null, unknown][] = list
    ? (value as unknown[]).map((v) => [null, v])
    : Object.entries(value as Record<string, unknown>);
  const show = ([key, v]: [string | null, unknown], at: string) =>
    (key === null ? '' : `${JSON.stringify(key)}: `) + layoutJson(v, at);
  if (entries.every(([, v]) => v === null || typeof v !== 'object')) {
    const inner = entries.map((e) => show(e, indent)).join(', ');
    const flat = list ? `[${inner}]` : `{ ${inner} }`;
    if (flat.length <= 64) return flat;
  }
  const at = indent + '  ';
  return `${list ? '[' : '{'}\n${entries.map((e) => at + show(e, at)).join(',\n')}\n${indent}${list ? ']' : '}'}`;
}

/** the schema.org description of the page: the site in this language, and the app */
export function structuredData(lang: Lang) {
  const c = HOME[lang];
  const url = SITE + homePath(lang);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        name: 'sudokUI',
        alternateName: ['sudokui'],
        url,
        inLanguage: lang
      },
      {
        '@type': 'WebApplication',
        name: 'sudokUI',
        url,
        applicationCategory: 'GameApplication',
        operatingSystem: 'Any',
        browserRequirements: c.requirements,
        isAccessibleForFree: true,
        inLanguage: lang,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        sameAs: [SOURCE],
        isPartOf: { '@id': `${url}#website` },
        featureList: c.features,
        description: c.appDescription
      }
    ]
  };
}

/** the placeholders' contents in a language; a part that spans lines is indented relative to its first line */
function parts(lang: Lang): Record<string, string> {
  const c = HOME[lang];
  const url = SITE + homePath(lang);
  return {
    lang,
    title: esc(c.title),
    description: esc(c.description),
    // the page itself, the same page in every language, and the one for
    // everyone else (English)
    links: [
      `<link rel="canonical" href="${url}" />`,
      ...HOME_LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE}${homePath(l)}" />`),
      `<link rel="alternate" hreflang="x-default" href="${SITE}${homePath('en')}" />`
    ].join('\n'),
    'og-title': esc(c.ogTitle),
    'og-description': esc(c.ogDescription),
    url,
    'og-locale': [
      `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
      ...HOME_LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`)
    ].join('\n'),
    'og-image': ogCard(lang),
    'og-image-alt': esc(c.ogImageAlt),
    'json-ld': layoutJson(structuredData(lang)),
    boot: [
      `<h1>${esc(c.h1)}</h1>`,
      '<p>',
      ...wrap(esc(c.intro)).map((l) => `  ${l}`),
      '</p>',
      '<ul>',
      ...BOOT_LINKS.map((path, i) => `  <li><a href="${inLang(lang, path)}">${esc(c.links[i])}</a></li>`),
      '</ul>',
      // the advent calendar's page, a quiet line in November and December (adventLine.ts)
      ...seasonLine(lang),
      `<p>${esc(c.loading)}</p>`,
      '<noscript>',
      '  <p>',
      ...wrap(esc(c.noscript)).map((l) => `    ${l}`),
      `    <a href="${SOURCE}">${SOURCE.replace('https://', '')}</a>`,
      '  </p>',
      '</noscript>'
    ].join('\n')
  };
}

/**
 * A template with every <!--home:name--> placeholder filled. A part that
 * spans lines takes the indentation of the line it starts on, and the
 * template's line endings. Throws on a placeholder it does not know and
 * on one the template lacks, so the template and the fill cannot drift.
 * The home pages fill index.html this way, and so does the share page
 * (share.ts), from the built copy of it the build keeps as share.tpl.
 */
export function fillTemplate(template: string, fill: Record<string, string>): string {
  const newline = template.includes('\r\n') ? '\r\n' : '\n';
  const used = new Set<string>();
  const html = template.replace(/<!--home:([\w-]+)-->/g, (_, name: string, offset: number) => {
    if (!(name in fill)) throw new Error(`index.html: unknown placeholder <!--home:${name}-->`);
    used.add(name);
    const indent = /^[ \t]*/.exec(template.slice(template.lastIndexOf('\n', offset) + 1))![0];
    return fill[name].replace(/\n/g, newline + indent);
  });
  const missing = Object.keys(fill).filter((name) => !used.has(name));
  if (missing.length) throw new Error(`index.html lacks ${missing.map((m) => `<!--home:${m}-->`).join(', ')}`);
  return html;
}

/** index.html in a language */
export const renderHome = (template: string, lang: Lang): string => fillTemplate(template, parts(lang));
