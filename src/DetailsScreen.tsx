import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {useItemStore} from './store/ItemStore';
import {Container, ItemText, ItemView} from './Component';
import {Element} from './model/element';

export default function DetailsScreen() {
  const {t, i18n} = useTranslation();
  const currentElement = useItemStore(state => state.currentElement);
  const getNo = (item: Element) => {
    const title: String = item.title;
    const titleNo = title.match(/(\d+)/);
    return titleNo ? titleNo[0] : '';
  };

  return (
    <Container>
      <ItemView>
        <ItemText color="black" fontSize={32}>
          {t('detailText')}
        </ItemText>
        <ItemText color="black" fontSize={12}>{`${t(
          'detailTouchedItemHintText',
        )}${
          currentElement ? t('itemText') + getNo(currentElement) : ''
        }`}</ItemText>
      </ItemView>
    </Container>
  );
}
