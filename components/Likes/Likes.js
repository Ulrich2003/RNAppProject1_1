import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import LikeCard from '../LikeCard/LikeCard';

const Likes = props => {
  const [author, setAuthor] = useState([
    {
      avatarUri:
        'https://images.unsplash.com/profile-fb-1504702315-7d77d45d75e4.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
      authorName: 'Stanislav Rozhkov',
      msg: 'The Hope and others shared 22 photos.',
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-1649114834311-14e8724e7447image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
      authorName: 'Nahima Aparicio',
      msg: 'Karripe_chan started following you.',
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-1642872678414-cd8f92fb1a29image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
      authorName: 'Cate Brodersen',
      msg: 'Maria Engracia De Araneta, from your contacts, is on Instagram as maria_engracia_.',
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-1552315938459-ac0af7045038?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
      authorName: 'Cody Fitzgerald',
      msg: 'Cody Fitzgerald and others shared 23 photos.',
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-fb-1513824040-1c4f35fd4a44.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
      authorName: 'Hu Chen',
      msg: 'Since you follow Hu Chen, you might like Patrick Hendry.',
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-1543721941700-8be8bd4e8e54?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
      authorName: 'Patrick Hendry',
      msg: 'Cody Fitzgerald, Eugene Chystiakov Hireand others shared 23 photos.',
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-1543721941700-8be8bd4e8e54?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
      authorName: 'Md MahdiHire',
      msg: 'Md MahdiHire and others shared 22 photos.',
    },
  ]);
  return (
    <View>
      <Text style={styles.header}>Activity</Text>
      <ScrollView>
        <Text style={styles.littleTitle}>New</Text>
        <LikeCard author={author[0]} />
        <Text style={styles.littleTitle}>This Week</Text>
        <LikeCard author={author[1]} />
        <Text style={styles.littleTitle}>This Month</Text>
        <LikeCard author={author[2]} />
        <LikeCard author={author[3]} />
        <LikeCard author={author[4]} />
        <LikeCard author={author[5]} />
        <Text style={styles.littleTitle}>Earlier</Text>
        <LikeCard author={author[6]} />
      </ScrollView>
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    fontSize: 23,
    marginLeft: 13,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  littleTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 13,
    paddingBottom: 12,
  },
});
