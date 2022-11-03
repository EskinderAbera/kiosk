import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {contextAPI} from '../Context';

const MyModal = ({getUrl, title}) => {
  const {show, changeShow, changeUrl} = contextAPI();
  const [modalVisible, setModalVisible] = useState(show);
  const [url, setUrl] = useState('https://');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = value => {
    if (title == 'Start URL') {
      setUrl(value);
    } else if (title == 'Username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleSave = async () => {
    try {
      if (title == 'Start URL') {
        await AsyncStorage.setItem('url', url);
      } else if (title == 'Username') {
        await AsyncStorage.setItem('username', username);
      } else {
        await AsyncStorage.setItem('password', password);
      }
    } catch (e) {}
    changeShow(!modalVisible);
    setModalVisible(!modalVisible);
    if (title == 'Start URL') getUrl(url);
  };

  const handleCancel = () => {
    changeShow(!modalVisible);
    setModalVisible(!modalVisible);
  };

  const getData = async () => {
    try {
      const urlValue = await AsyncStorage.getItem('url');
      if (urlValue !== null) {
        setUrl(urlValue);
        // console.log(urlValue);
      }
      const userValue = await AsyncStorage.getItem('username');
      if (userValue !== null) {
        setUsername(userValue);
      }
      const passValue = await AsyncStorage.getItem('password');
      if (passValue !== null) {
        setPassword(passValue);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setModalVisible(show);
  }, [show]);

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        overFullScreen={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.headerText}> {title} </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange}
              value={
                title === 'Start URL'
                  ? url
                  : title === 'Username'
                  ? username
                  : password
              }
            />
            <View style={styles.actionHandlers}>
              <TouchableOpacity onPress={handleCancel}>
                <Text style={styles.textButton}> Cancel </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.textButton}> Ok </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    width: 300,
    height: 200,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textButton: {
    fontWeight: 'bold',
    padding: 10,
  },
  headerText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  actionHandlers: {
    marginTop: 20,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: '#242424',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    width: '100%',
    fontSize: 18,
  },
});

export default MyModal;
