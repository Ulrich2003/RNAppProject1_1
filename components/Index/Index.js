import React from 'react';
import {useState} from 'react';
import PictureCard from '../PictureCard/PictureCard';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from 'react-native';

const Index = () => {
  const [author, setAuthor] = useState([
    {
      avatarUri:
        'https://images.unsplash.com/profile-fb-1504702315-7d77d45d75e4.jpg?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
      authorName: 'Stanislav Rozhkov',
      image:
        'https://images.unsplash.com/photo-1651146220117-edce81331ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3175&q=80',
      likes: '1,199 likes',
      opinionContent: 'milk shake time',
      commnetNums: 6,
      uploadTime: 11,
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-1649114834311-14e8724e7447image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
      authorName: 'Nahima Aparicio',
      image:
        'https://images.unsplash.com/photo-1651170022381-aa0c4a9dea80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      likes: '1,021 likes',
      opinionContent: 'nice flowers, nice day',
      commnetNums: 1,
      uploadTime: 14,
    },
    {
      avatarUri:
        'https://images.unsplash.com/profile-1642872678414-cd8f92fb1a29image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
      authorName: 'Cate Brodersen',
      image:
        'https://images.unsplash.com/photo-1651244139103-8dbd551e0223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      likes: '2,491 likes',
      opinionContent: 'This picture was taken from my new camera',
      commnetNums: 12,
      uploadTime: 15,
    },
  ]);
  const [user, setUser] = useState({
    avatarUri:
      'https://images.unsplash.com/profile-fb-1504702315-7d77d45d75e4.jpg?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  });
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerLogo}>UnsGram</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <PictureCard author={author[0]} user={user} />
        <PictureCard author={author[1]} user={user} />
        <PictureCard author={author[2]} user={user} />
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    borderBottomColor: '#dbdada',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  headerLogo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  scrollView: {
    marginBottom: 100,
  },
});
