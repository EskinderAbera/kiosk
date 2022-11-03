import React, {useContext, useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const APIContext = createContext();

export function ProvideContext({children}) {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('https://');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const getData = async () => {
    try {
      const urlValue = await AsyncStorage.getItem('url');
      if (urlValue !== null) {
        setUrl(urlValue);
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
  });

  const changeShow = value => {
    setShow(value);
  };

  const changeUrl = url => {
    setUrl(url);
  };

  const changeIsSignedIn = value => {
    setIsSignedIn(value);
  };

  return (
    <APIContext.Provider
      value={{
        show,
        url,
        username,
        password,
        isSignedIn,
        changeShow,
        changeUrl,
        changeIsSignedIn,
      }}>
      {children}
    </APIContext.Provider>
  );
}

export const contextAPI = () => {
  const context = useContext(APIContext);

  if (context === undefined) {
    throw new Error('Context must be used within a provider');
  }
  return context;
};
