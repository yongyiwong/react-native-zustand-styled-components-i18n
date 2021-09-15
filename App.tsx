import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import LanguageScreen from './src/Language';
import i18next from './src/locale';
import { initReactI18next, useTranslation } from 'react-i18next';

const initI18n = i18next;

function App() {

  const {t,i18n}=useTranslation(); 
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'help' : 'help';
            } else if (route.name === 'Language') {
              iconName = focused ? 'language' : 'language';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: t('homeMenu')}}/>
        <Tab.Screen name="Detail" component={DetailsScreen}  options={{ title: t('detailMenu')}}/>
        <Tab.Screen name="Language" component={LanguageScreen}  options={{ title: t('languageMenu')}}/>        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
