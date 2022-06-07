import React from 'react';

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

const LikeCard = props => {
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <Image
          style={styles.authorAvatar}
          source={{
            uri: props.author.avatarUri,
          }}
        />
        <Text style={styles.content}>{props.author.msg}</Text>
      </View>
    </View>
  );
};

export default LikeCard;

const styles = StyleSheet.create({
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 13,
  },
  main: {
    marginBottom: 8,
  },
  body: {
    paddingBottom: 8,
    borderBottomColor: '#dadadb80',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 10,
    width: 300,
  },
});
