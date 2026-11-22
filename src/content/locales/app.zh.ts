// Everything the app says in Traditional Chinese (Taiwan) outside the Learn
// section, fetched the first time the language is chosen (src/content/i18n.ts).
import type { AppLocale } from '../i18n';
import ui from './ui.zh';
import engine from './engine.zh';
import { techNames, levels, categoryLabels } from './names.zh';

const locale: AppLocale = { ui, engine, techNames, levels, categoryLabels };

export default locale;
