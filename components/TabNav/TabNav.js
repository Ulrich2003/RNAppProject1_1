import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from '../Index/Index';
import Likes from '../Likes/Likes';
import Search from '../Search/Search';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Index}
        options={{
          title: 'home',
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarIcon: ({focused, tintColor, size = 50}) => (
            <Image
              source={
                focused
                  ? {
                      uri: 'https://vichien-public.oss-cn-guangzhou.aliyuncs.com/other_web_items/unsgram/home_active.jpg',
                    }
                  : {
                      uri: 'https://vichien-public.oss-cn-guangzhou.aliyuncs.com/other_web_items/unsgram/home.jpg',
                    }
              }
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused, tintColor, size = 50}) => (
            <Image
              source={
                focused
                  ? {
                      uri: 'https://vichien-public.oss-cn-guangzhou.aliyuncs.com/other_web_items/unsgram/search_active.jpg',
                    }
                  : {
                      uri: 'https://vichien-public.oss-cn-guangzhou.aliyuncs.com/other_web_items/unsgram/search.jpg',
                    }
              }
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="likes"
        component={Likes}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused, tintColor, size}) => (
            <Image
              source={
                focused
                  ? {
                      uri: 'https://vichien-public.oss-cn-guangzhou.aliyuncs.com/other_web_items/unsgram/like_active.jpg',
                    }
                  : {
                      uri: 'https://vichien-public.oss-cn-guangzhou.aliyuncs.com/other_web_items/unsgram/like.jpg',
                    }
              }
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 28,
    height: 28,
  },
});
