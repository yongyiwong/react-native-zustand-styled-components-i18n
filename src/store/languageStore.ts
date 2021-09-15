import create from 'zustand';
import {Element} from '../model/element';

interface LanguageState {
  currentLanguage: String;
  setCurrentLanguage: (language: String) => void;
}

export const useLanguageStore = create<LanguageState>(set => ({
  // initial state
  currentLanguage: 'en',
  // methods for manipulating state
  setCurrentLanguage: (language: String) => {
    set(state => ({
      currentLanguage: language,
    }));
  },
}));
