import React from 'react';
import StartPage from './components/StartPage/StartPage';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LogIn from './components/LogIn/LogIn';
import Index from './components/Index/Index';
import Likes from './components/Likes/Likes';
import Search from './components/Search/Search';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // return <StartPage />;
  // return <LogIn />;
  // return <Index />;
  // return <Likes />;
  return <Search />;
};

export default App;
