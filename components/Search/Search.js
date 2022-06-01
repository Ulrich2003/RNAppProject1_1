import React from 'react';
import {useState} from 'react';
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

const Search = () => {
  const [accountNumber, onChangeAccountNumber] = React.useState('Search');
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => onChangeAccountNumber(text)}
            value={accountNumber}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
          {/* 第1张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第2张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第3张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第4张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第5张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第6张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第7张图片 */}
          <Image
            style={styles.bigImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1477672680933-0287a151330e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNodXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
          <View style={styles.colImgBox}>
            {/* 第8张图片 */}
            <Image
              style={styles.smallImg}
              source={{
                uri: 'https://images.unsplash.com/photo-1629193886144-e7197ce691ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
              }}
            />
            {/* 第9张图片 */}
            <Image
              style={styles.smallImg}
              source={{
                uri: 'https://images.unsplash.com/photo-1556807215-f47c31a66ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
              }}
            />
          </View>
          {/* 第10张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第11张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1639416292376-695d1f7fb53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
          {/* 第12张图片 */}
          <Image
            style={styles.smallImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
            }}
          />
          <View style={styles.colImgBox}>
            {/* 第13张图片 */}
            <Image
              style={styles.smallImg}
              source={{
                uri: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDQzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
              }}
            />
            {/* 第14张图片 */}
            <Image
              style={styles.smallImg}
              source={{
                uri: 'https://images.unsplash.com/photo-1550300627-4ca6dccfd257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDU1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
              }}
            />
          </View>
          {/* 第15张图片 */}
          <Image
            style={styles.bigImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNodXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {marginTop: 60},
  inputBox: {
    width: '90%',
    backgroundColor: '#efefef',
    color: '#5f5f5e',
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 14,
    marginBottom: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 10,
    fontSize: 15,
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImg: {
    width: Dimensions.get('window').width * 0.3333333333333333333,
    height: Dimensions.get('window').width * 0.3333333333333333333,
    borderColor: 'white',
    borderWidth: 0.5,
  },
  bigImg: {
    width: Dimensions.get('window').width * 0.6666666666666666666,
    height: Dimensions.get('window').width * 0.6666666666666666666,
    borderColor: 'white',
    borderWidth: 0.5,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colImgBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  scrollView: {
    marginBottom: 110,
  },
});
