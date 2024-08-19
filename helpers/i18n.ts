import { getLocales } from 'expo-localization';
import { Platform } from 'react-native';

const SUPPORTED_LANGUAGE_CODES = ['sv', 'en'];
const DEFAULT_LANGUAGE_CODE = 'sv';

export const getLanguageCode = () => {
  const userLocales = getLocales();

  // If userLocales is empty for some reason, make sure we return default language
  if (!userLocales.length) {
    return DEFAULT_LANGUAGE_CODE;
  }
  for (const locale of userLocales) {
    if (locale.languageCode && SUPPORTED_LANGUAGE_CODES.includes(locale.languageCode)) {
      return locale.languageCode;
    }
  }

  // Otherwise return default language
  return DEFAULT_LANGUAGE_CODE;
};

const SUPPORTED_REGION_CODES = ['SV', 'US', 'UK'];
const DEFAULT_REGION_CODE = 'SV';

export const getRegionCode = () => {
  const userLocales = getLocales();

  // If userLocales is empty for some reason, make sure we return default language
  if (!userLocales.length) {
    return DEFAULT_REGION_CODE;
  }

  for (const locale of userLocales) {
    if (locale.regionCode && SUPPORTED_REGION_CODES.includes(locale.regionCode)) {
      return locale.regionCode;
    }
  }

  // Otherwise return default language
  return DEFAULT_REGION_CODE;
};
