import * as React from 'react';
import {VirtualizedList, TouchableOpacity} from 'react-native';

import {Container, ItemText, ItemView} from './Component';
import {useTranslation} from 'react-i18next';
import {useItemStore} from './store/ItemStore';
import {Element} from './model/element';

export default function HomeScreen(props: any) {
  const {t, i18n} = useTranslation();
  const changeCurrentElement = useItemStore(
    state => state.changeCurrentElement,
  );
  const DATA: Element[] = [];

  const getItem = (data: Element, index: number) => ({
    id: Math.random().toString(12).substring(0),
    title: `${t('itemText')}${index + 1}`,
  });

  const getItemCount = (data: Element) => 50;

  const Item = ({item}: {item: Element}) => (
    <TouchableOpacity
      delayPressIn={0}
      onPress={() => {
        changeCurrentElement(item);
      }}>
      <ItemView>
        <ItemText color="black" fontSize={32}>
          {item.title}
        </ItemText>
      </ItemView>
    </TouchableOpacity>
  );

  return (
    <Container>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </Container>
  );
}
