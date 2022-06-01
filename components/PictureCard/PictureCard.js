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

const PictureCard = props => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.information}>
          <Image
            style={styles.authorAvatar}
            source={{
              uri: props.author.avatarUri,
            }}
          />
          <Text style={styles.authorName}>{props.author.authorName}</Text>
        </View>

        <View style={styles.moreBtnBox}>
          <Image
            style={styles.moreBtn}
            source={require('../../public/more.png')}
          />
        </View>
      </View>

      <View style={styles.body}>
        <Image
          style={styles.image}
          source={{
            uri: props.author.image,
          }}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonGroupLeft}>
            <Image
              style={styles.buttonGroupBtn}
              source={require('../../public/like.jpg')}
            />
            <Image
              style={styles.buttonGroupBtn}
              source={require('../../public/comment.jpg')}
            />
            <Image
              style={styles.buttonGroupBtn}
              source={require('../../public/send.jpg')}
            />
          </View>
          <View style={styles.buttonGroupRight}>
            <Image
              style={styles.buttonGroupBtn}
              source={require('../../public/collect.jpg')}
            />
          </View>
        </View>
        <Text style={styles.likesNum}>{props.author.likes}</Text>
        <View style={styles.commnet}>
          <Text style={styles.commnetAuthorName}>
            {props.author.authorName} -
          </Text>
          <Text style={styles.opinionContent}>
            {props.author.opinionContent}
          </Text>
          <Text style={styles.commnetNums}>
            View all {props.author.commnetNums} comments
          </Text>
          <View style={styles.commentBox}>
            <View style={styles.commentBoxLeft}>
              <Image
                style={styles.userAvatar}
                source={{
                  uri: props.user.avatarUri,
                }}
              />
              <Text style={styles.userName}>Add a comment...</Text>
            </View>
            <View style={styles.commentBoxRight}>
              <Text style={styles.quickEmoji}>❤️</Text>
              <Text style={styles.quickEmoji}>😍</Text>
              <Text style={styles.quickEmoji}>🙏</Text>
            </View>
          </View>
          <Text style={styles.uploadTime}>
            {props.author.uploadTime} hours ago
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PictureCard;

const styles = StyleSheet.create({
  authorAvatar: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginLeft: 7,
  },
  userAvatar: {
    width: 26,
    height: 26,
    borderRadius: 100,
    marginLeft: 18,
  },
  information: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentBox: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorName: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  moreBtn: {
    width: 22,
    height: 22,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#dbdada',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  moreBtnBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  image: {
    // 设置宽度
    width: Dimensions.get('window').width,
    // 设置高度
    height: 260,
    // 设置图片填充模式
    resizeMode: 'cover',
  },
  buttonGroup: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonGroupLeft: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
  },
  buttonGroupRight: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  buttonGroupBtn: {
    width: 35,
    height: 35,
    marginLeft: 4,
  },
  likesNum: {
    fontSize: 14,
    marginTop: 12,
    marginLeft: 18,
    fontWeight: '500',
  },
  commnetAuthorName: {
    marginLeft: 18,
    fontWeight: '500',
    marginTop: 5,
  },
  opinionContent: {
    marginLeft: 18,
    marginTop: 5,
  },
  commnetNums: {
    marginLeft: 18,
    marginTop: 5,
    color: '#727373',
    fontSize: 15,
  },
  uploadTime: {
    marginLeft: 18,
    marginTop: 8,
    color: '#727373',
  },
  userName: {
    color: '#727373',
    fontSize: 15,
    marginLeft: 8,
  },
  commentBoxLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentBoxRight: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 18,
  },
  quickEmoji: {
    marginLeft: 8,
  },
  footer: {
    marginBottom: 10,
  },
});
