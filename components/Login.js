import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {contextAPI} from '../Context';

const Login = () => {
  const {isSignedIn, changeIsSignedIn, username, password} = contextAPI();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const IncorrectCredentials = type => {
    if (type === 'user') {
      ToastAndroid.showWithGravityAndOffset(
        'User does not exist!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Incorrect Password!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  const authenticate = () => {
    if (user === username) {
      if (pass === password) {
        changeIsSignedIn(true);
      } else {
        IncorrectCredentials('password');
      }
    } else {
      IncorrectCredentials('user');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> LOGIN </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Username</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={val => setUser(val)}
          value={user}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Password</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={val => setPass(val)}
          value={pass}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={authenticate}>
        <Text style={{color: '#fff'}}> LOGIN </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  inputContainer: {
    width: '85%',
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 15,
    marginBottom: 5,
  },
  loginInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 30,
    width: '85%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#00AEEF',
  },
});

export default Login;
