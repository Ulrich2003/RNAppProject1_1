import React from 'react';

import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

const LogIn = () => {
  const [accountNumber, onChangeAccountNumber] = React.useState(
    'Phone number, username or email',
  );
  const [password, onChangePassword] = React.useState('Password');
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.centerBox}>
          <View style={styles.bannerBox}>
            <Text style={styles.banner}>UnsGram</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => onChangeAccountNumber(text)}
            value={accountNumber}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={text => onChangePassword(text)}
            value={password}
          />
        </View>

        <View style={styles.forgotPasswordBtnBox}>
          <Text style={styles.forgotPasswordBtn}>Forgot password?</Text>
        </View>

        <View style={styles.centerBox}>
          <View style={styles.logInButton}>
            <Text style={styles.logInButtonText}>Log In</Text>
          </View>
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
  logInButton: {
    backgroundColor: '#78c8f9',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 7,
    marginTop: 25,
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
});
