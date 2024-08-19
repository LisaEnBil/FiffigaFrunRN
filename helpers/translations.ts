import { getLanguageCode, getRegionCode } from './i18n';

const languageCode = getLanguageCode();
const regionCode = getRegionCode();

export const tips =
  languageCode === 'sv'
    ? require('../data/data-sv.json')
    : require('../data/data-en.json');

export const app =
  languageCode === 'sv'
    ? require('../locales/sv.json')
    : require('../locales/en.json');

export const appTitle =
  regionCode === 'SV'
    ? require('../locales/app-title.sv.json')
    : require('../locales/app-title.en.json');
