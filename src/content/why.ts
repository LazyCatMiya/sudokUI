// Why sudokUI?, in the owner's words (2 November 2026): what the app is for
// and what it promises, in the three languages. One copy, two places: the
// static page /why/ (and /nb/why/, /es/why/), which search engines read
// (src/content/learnPages.ts builds it, like the privacy page), and the
// dialog the app opens from its footer and its win screen
// (src/ui/SettingsInfo.tsx WhyDialog). Never shown on its own.
//
// {privacy} is the link to the privacy page, {feedback} the way to send
// feedback: a link to the app on the page, the report dialog in the app.
import type { Lang } from '../state/settings';
import { WHY_URL } from './staticRoutes';

export { WHY_URL };

export interface WhyCopy {
  /** the footers' word for it, and the dialog's title */
  name: string;
  /** the tab and a search result's headline */
  title: string;
  /** a search result's line: the teaching first */
  description: string;
  lead: string;
  sections: { heading: string; paragraphs: string[] }[];
  /** the words {privacy} and {feedback} stand for */
  privacyLink: string;
  feedbackLink: string;
}

export const WHY: Record<Lang, WhyCopy> = {
  en: {
    name: 'Why sudokUI?',
    title: 'Why sudokUI? A free sudoku app that teaches',
    description:
      'A free sudoku app whose hints draw each technique on your own grid and explain it. HoDoKu ratings, a learning path, and it works offline: no ads, no account.',
    lead:
      "sudokUI is for playing sudoku without the clutter, and for getting better at it. When you're stuck, a hint shows the technique on your own grid, one step at a time, and says why it works. Next time you'll see it yourself. Want to learn something specific? Pick a technique and you get a puzzle that needs it.",
    sections: [
      {
        heading: "What's in it",
        paragraphs: [
          'All the techniques human solvers use, found and rated the way HoDoKu does it (thanks to its author, Bernhard Hobiger). A learning path from your own games, a chain trainer, a daily puzzle and a guide to every technique. In English, Norwegian and Spanish.'
        ]
      },
      {
        heading: 'What stays true',
        paragraphs: [
          "Free: no ads, no paywall, no account. Your games stay on your device. We count games started and finished, with no ID and nothing that tells you apart ({privacy}). It's a web app you can install, and it works offline: load it once and it keeps working, even through a seven-hour flight. Only the website's articles and the daily's global times need a connection."
        ]
      },
      {
        heading: "What we're aiming for",
        paragraphs: [
          'The best solver engine and the best board to play on, on a phone, a tablet or a computer, with highlighting that shows what matters. Light and quick, and out of your way: no feeds, no followers, no streak guilt.'
        ]
      },
      {
        heading: 'Who makes it',
        paragraphs: [
          "AImenes on GitHub, with Claude. It's never finished, and every message gets read: tap “Looks wrong?” under a hint, or {feedback}."
        ]
      }
    ],
    privacyLink: 'see the privacy page',
    feedbackLink: 'send feedback from the app'
  },
  nb: {
    name: 'Hvorfor sudokUI?',
    title: 'Hvorfor sudokUI? En gratis sudoku-app som lærer deg',
    description:
      'En gratis sudoku-app der hintene tegner teknikken på ditt eget brett og forklarer den. HoDoKu-vurdering og læringssti, virker uten nett, uten reklame og konto.',
    lead:
      'sudokUI er for å spille sudoku uten rot og fyll, og for å bli bedre til det. Når du står fast, viser et hint teknikken på ditt eget brett, ett steg om gangen, og forklarer hvorfor den virker. Neste gang ser du den selv. Vil du lære noe bestemt? Velg en teknikk, så får du en oppgave som trenger den.',
    sections: [
      {
        heading: 'Hva du får',
        paragraphs: [
          'Alle teknikkene menneskelige løsere bruker, funnet og vurdert slik HoDoKu gjør det (takk til forfatteren, Bernhard Hobiger). En læringssti bygget på dine egne spill, en kjedetrener, dagens oppgave og en guide til hver teknikk. På engelsk, norsk og spansk.'
        ]
      },
      {
        heading: 'Det som alltid gjelder',
        paragraphs: [
          'Gratis: ingen reklame, ingen betalingsmur, ingen konto. Spillene dine blir på enheten din. Vi teller spill som startes og fullføres, uten ID og uten noe som skiller deg fra andre ({privacy}). Det er en nettapp du kan installere, og den virker uten nett: last den inn én gang, så fortsetter den å virke, også gjennom en flytur på sju timer. Bare artiklene på nettstedet og de globale tidene for dagens oppgave trenger nett.'
        ]
      },
      {
        heading: 'Det vi sikter mot',
        paragraphs: [
          'Den beste løsningsmotoren og det beste brettet å spille på, på mobil, nettbrett eller datamaskin, med markering som viser det som betyr noe. Lett og rask, og den står ikke i veien: ingen strømmer, ingen følgere, ingen dårlig samvittighet for en brutt rekke.'
        ]
      },
      {
        heading: 'Hvem som lager den',
        paragraphs: [
          'AImenes på GitHub, sammen med Claude. Den blir aldri ferdig, og hver melding blir lest: trykk «Ser det feil ut?» under et hint, eller {feedback}.'
        ]
      }
    ],
    privacyLink: 'se personvernsiden',
    feedbackLink: 'send en tilbakemelding fra appen'
  },
  es: {
    name: '¿Por qué sudokUI?',
    title: '¿Por qué sudokUI? Una app de sudoku gratis que enseña',
    description:
      'App de sudoku gratis cuyas pistas dibujan la técnica en tu tablero y la explican. Valoración HoDoKu, ruta de aprendizaje, sin conexión, sin anuncios ni cuenta.',
    lead:
      'sudokUI es para jugar al sudoku sin estorbos y para mejorar. Cuando te atascas, una pista muestra la técnica en tu propio tablero, paso a paso, y explica por qué funciona. La próxima vez la verás tú. ¿Quieres aprender algo concreto? Elige una técnica y tendrás un sudoku que la necesita.',
    sections: [
      {
        heading: 'Qué incluye',
        paragraphs: [
          'Todas las técnicas que usan los resolutores humanos, encontradas y valoradas como lo hace HoDoKu (gracias a su autor, Bernhard Hobiger). Un camino de aprendizaje a partir de tus propias partidas, un entrenador de cadenas, un sudoku diario y una guía de cada técnica. En inglés, noruego y español.'
        ]
      },
      {
        heading: 'Lo que no cambia',
        paragraphs: [
          'Gratis: sin anuncios, sin muro de pago, sin cuenta. Tus partidas se quedan en tu dispositivo. Contamos las partidas empezadas y terminadas, sin identificador y sin nada que te distinga ({privacy}). Es una aplicación web que puedes instalar y funciona sin conexión: cárgala una vez y sigue funcionando, incluso durante un vuelo de siete horas. Solo los artículos de la web y los tiempos globales del diario necesitan conexión.'
        ]
      },
      {
        heading: 'A qué aspiramos',
        paragraphs: [
          'El mejor motor de resolución y el mejor tablero para jugar, en el móvil, la tableta o el ordenador, con un resaltado que muestra lo que importa. Ligera, rápida y sin estorbar: sin muros de publicaciones, sin seguidores, sin la culpa de romper una racha.'
        ]
      },
      {
        heading: 'Quién la hace',
        paragraphs: [
          'AImenes en GitHub, con Claude. Nunca está terminada y leemos cada mensaje: toca «¿Parece incorrecta?» bajo una pista o {feedback}.'
        ]
      }
    ],
    privacyLink: 'consulta la página de privacidad',
    feedbackLink: 'envía tus comentarios desde la app'
  },
  zh: {
    name: '為什麼選擇 sudokUI？',
    title: '為什麼選擇 sudokUI？免費又能教你的數獨應用程式',
    description:
      '免費數獨應用程式，提示會在你的棋盤上畫出並解釋技巧。提供 HoDoKu 評分與學習路徑，可離線使用，無廣告且免帳號。',
    lead:
      'sudokUI 讓你不受雜亂干擾地玩數獨，也幫助你精進解題能力。卡關時，提示會在你自己的棋盤上逐步顯示技巧，並解釋其原理，讓你下次能自行看出來。想學特定技巧嗎？選擇一種技巧，就會取得需要用到它的題目。',
    sections: [
      {
        heading: '包含哪些內容',
        paragraphs: [
          '人類解題者使用的所有技巧，均依 HoDoKu 的方式找出並評分（感謝其作者 Bernhard Hobiger）。另有依你自己的遊戲建立的學習路徑、鏈技巧訓練器、每日數獨，以及每種技巧的指南。提供英文、挪威文、西班牙文與繁體中文。'
        ]
      },
      {
        heading: '始終不變的原則',
        paragraphs: [
          '免費：無廣告、無付費牆、免帳號。你的遊戲資料留在裝置上。我們會統計開始與完成的遊戲，但不含識別碼，也沒有任何能區分你的資料（{privacy}）。這是一款可安裝的網頁應用程式，也能離線運作：只要載入一次，即使搭乘七小時的班機也能繼續使用。只有網站文章與每日數獨的全球時間需要網路連線。'
        ]
      },
      {
        heading: '我們的目標',
        paragraphs: [
          '在手機、平板電腦或電腦上提供最好的解題引擎與遊玩棋盤，並以醒目標示呈現重要資訊。輕巧、快速且不打擾你：沒有動態消息、沒有追蹤者，也不會因中斷連續紀錄而令人內疚。'
        ]
      },
      {
        heading: '製作者',
        paragraphs: [
          '由 GitHub 上的 AImenes 與 Claude 共同製作。它永遠都在持續改進，我們會閱讀每一則訊息：點選提示下方的「看起來不對嗎？」，或{feedback}。'
        ]
      }
    ],
    privacyLink: '查看隱私權頁面',
    feedbackLink: '從應用程式傳送意見'
  }
};
