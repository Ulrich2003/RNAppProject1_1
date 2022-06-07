import React from 'react';
import Toast from 'react-native-toast-message';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const LogIn = ({navigation}) => {
  const [accountNumber, onChangeAccountNumber] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  function getAccount() {
    console.log(accountNumber);
  }
  function login() {
    if (accountNumber.length === 0 || password.length === 0) return;
    if (accountNumber === 'Admin' && password === '123456') {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Login successful ✅',
        visibilityTime: 1500,
      });
      navigation.navigate('tabNav');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'The username or password is incorrect 👋',
      });
    }
  }
  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <View style={styles.centerBox}>
          <View style={styles.bannerBox}>
            <Text style={styles.banner}>UnsGram</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => onChangeAccountNumber(text)}
            placeholder="Phone number, username or email"
            onBlur={getAccount}
            value={accountNumber}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={text => onChangePassword(text)}
            placeholder="Password"
            textContentType="password"
            value={password}
          />
        </View>

        <View style={styles.forgotPasswordBtnBox}>
          <Text style={styles.forgotPasswordBtn}>Forgot password?</Text>
        </View>

        <View style={styles.centerBox}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => login()}
            // onPressIn={() => this.activeEvent('按下')}
            // onPressOut={() => this.activeEvent('抬起')}
            // onLongPress={() => this.activeEvent('长按')}
            style={
              accountNumber.length !== 0 && password.length !== 0
                ? styles.logInButtonActive
                : styles.logInButtonDisable
            }>
            <Text style={styles.logInButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.signUpBox}>
          <Text style={styles.signUpBoxText}>Don't have an account?</Text>
          <Text style={styles.signUpBoxbtn}>Sign Up.</Text>
        </View>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  body: {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
  },
  centerBox: {
    display: 'flex',
    alignItems: 'center',
  },
  banner: {
    fontSize: 50,
    bottom: 30,
  },
  bannerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '90%',
    backgroundColor: '#fafafa',
    color: '#5f5f5e',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    marginBottom: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 10,
    fontSize: 15,
  },
  forgotPasswordBtnBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 22,
  },
  forgotPasswordBtn: {
    color: '#0090f4',
    fontWeight: 'bold',
  },
  logInButtonDisable: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 7,
    marginTop: 25,
    backgroundColor: '#78c8f9',
  },
  logInButtonActive: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 7,
    marginTop: 25,
    backgroundColor: '#0196f5',
  },
  logInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    height: '10%',
  },
  signUpBoxText: {
    color: '#7d7d7d',
    marginRight: 10,
  },
  signUpBoxbtn: {
    color: '#008df5',
    fontWeight: 'bold',
  },
  page: {
    backgroundColor: '#fff',
  },
});
