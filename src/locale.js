import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          /*Menu*/
          homeMenu:'Home',
          detailMenu:'Detail',
          languageMenu:'Language',          

          /*Home Screen*/          
          itemText: 'Item',

          /*Detail Screen*/
          detailText: 'Detail Screen',
          detailTouchedItemHintText:'The last item you tapped is ',

          /*Language Screen*/          
          english:'English',
          chinese:'Chinese',
        },
      },
      zh: {
        translation: {
          /*Menu*/
          homeMenu:'首页',
          detailMenu:'详细页面',
          languageMenu:'语言',

          /*Home Screen*/
          itemText: '项目',

          /*Detail Screen*/
          detailText: '详细页面',
          detailTouchedItemHintText:'您点的最后项目是',

          /*Language Screen*/          
          english:'英文',
          chinese:'中文',
        },
      },
    },
  });

  export default i18next;