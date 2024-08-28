//import { getLanguageCode } from '../i18n';


// describe('SearchBar component', () => {
//   test('returns default language code if userLocales is empty', () => {
//     const DEFAULT_LANGUAGE_CODE = 'sv';
//     const getLocales = jest.fn().mockReturnValue([]);
//     const SUPPORTED_LANGUAGE_CODES = ['en', 'es', 'fr'];
//     const result = getLanguageCode(
//       DEFAULT_LANGUAGE_CODE,
//       SUPPORTED_LANGUAGE_CODES,
//       getLocales
//     );

//     expect(result).toBe(DEFAULT_LANGUAGE_CODE);
//   });

//   test('returns default language code if none of the userLocales match the supported languages', () => {
//     const DEFAULT_LANGUAGE_CODE = 'sv';
//     const getLocales = jest
//       .fn()
//       .mockReturnValue([{ languageCode: 'de' }, { languageCode: 'it' }]);
//     const SUPPORTED_LANGUAGE_CODES = ['en', 'es', 'fr'];
//     const result = getLanguageCode(
//       DEFAULT_LANGUAGE_CODE,
//       SUPPORTED_LANGUAGE_CODES,
//       getLocales
//     );

//     expect(result).toBe(DEFAULT_LANGUAGE_CODE);
//   });

//   test('returns the matched language code if any of the userLocales match the supported languages', () => {
//     const DEFAULT_LANGUAGE_CODE = 'en';
//     const getLocales = jest
//       .fn()
//       .mockReturnValue([{ languageCode: 'en' }, { languageCode: 'sv' }]);
//     const SUPPORTED_LANGUAGE_CODES = ['en', 'sv'];
//     const result = getLanguageCode(
//       DEFAULT_LANGUAGE_CODE,
//       SUPPORTED_LANGUAGE_CODES,
//       getLocales
//     );

//     expect(result).toBe('sv');
//   });
// });
