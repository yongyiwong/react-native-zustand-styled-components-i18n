import React from 'react';
import {Container, ItemText, ItemTouch, ItemView} from './Component';
import {useTranslation} from 'react-i18next';

export default function LanguageScreen() {
  const {t, i18n} = useTranslation();

  return (
    <Container>
      <ItemTouch
        delayPressIn={0}
        onPress={() => {
          i18n.changeLanguage('en');
        }}>
        <ItemView>
          <ItemText>{t('english')}</ItemText>
        </ItemView>
      </ItemTouch>
      <ItemTouch
        delayPressIn={0}
        onPress={() => {
          i18n.changeLanguage('zh');
        }}>
        <ItemView>
          <ItemText>{t('chinese')}</ItemText>
        </ItemView>
      </ItemTouch>
    </Container>
  );
}
