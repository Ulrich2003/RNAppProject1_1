import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartPage from './components/StartPage/StartPage';
import {StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LogIn from './components/LogIn/LogIn';
import Index from './components/Index/Index';
import Likes from './components/Likes/Likes';
import Search from './components/Search/Search';
import Toast from 'react-native-toast-message';
import TabNav from './components/TabNav/TabNav';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tabNav"
          component={TabNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
  // return <StartPage />;
  // return <LogIn />;
  // return <Likes />;
  // return <Search />;
};

export default App;
