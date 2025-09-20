import { getConstant } from './get-constant';
import { LANGUAGES, LANG_DOCS } from './languages';
import * as lang from './languages';

jest.mock('./en_US/docs', () => ({
  __esModule: true,
  DOCS: {
    HELLO_WORLD_SUMMARY: 'english summary',
    HELLO_WORLD_DESCRIPTION: 'english description',
  },
}));

jest.mock('./pt_BR/docs', () => ({
  __esModule: true,
  DOCS: {
    HELLO_WORLD_SUMMARY: 'portuguese summary',
    HELLO_WORLD_DESCRIPTION: 'portuguese description',
  },
}));

describe('getConstant', () => {
  describe('English tests', () => {
    it('should return "portuguese summary" when the key is HELLO_WORLD_SUMMARY and the lang is not passed', () => {
      expect(getConstant().DOCS.HELLO_WORLD_SUMMARY).toBe('portuguese summary');
    });

    it('should return "portuguese summary" when the key is HELLO_WORLD_SUMMARY and the lang passed is en_US', () => {
      expect(getConstant(LANGUAGES.EN_US).DOCS.HELLO_WORLD_SUMMARY).toBe('english summary');
    });

    it('should return "portuguese description" when the key is HELLO_WORLD_DESCRIPTION and the lang is noy passed', () => {
      expect(getConstant().DOCS.HELLO_WORLD_DESCRIPTION).toBe('portuguese description');
    });

    it('should return "english description" when the key is HELLO_WORLD_DESCRIPTION and the lang passed is en_US', () => {
      expect(getConstant(LANGUAGES.EN_US).DOCS.HELLO_WORLD_DESCRIPTION).toBe('english description');
    });
  });

  describe('Portuguese tests', () => {
    it('should return "portuguese summary" when the key is HELLO_WORLD_SUMMARY and the lang passed is pt_BR', () => {
      expect(getConstant(LANGUAGES.PT_BR).DOCS.HELLO_WORLD_SUMMARY).toBe('portuguese summary');
    });

    it('should return "portuguese description" when the key is HELLO_WORLD_DESCRIPTION and the lang passed is pt_BR', () => {
      expect(getConstant(LANGUAGES.PT_BR).DOCS.HELLO_WORLD_DESCRIPTION).toBe('portuguese description');
    });
  });

  describe('when getConstant has been called and getLanguage return LANG_DOCS', () => {
    it('then language should be set to LANGUAGES.PT_BR', () => {
      jest.spyOn(lang, 'getLanguage').mockReturnValue(LANG_DOCS);
      expect(getConstant(LANGUAGES.EN_US).DOCS.HELLO_WORLD_SUMMARY).toBe('portuguese summary');
    });
  });
});
