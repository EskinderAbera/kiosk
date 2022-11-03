import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import {contextAPI} from '../Context';
import SystemNavigationBar from 'react-native-system-navigation-bar';
const Home = () => {
  const {url} = contextAPI();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const connection = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });

    return () => {
      connection();
    };
  }, []);

  useEffect(() => {
    // SystemNavigationBar.immersive();
    // console.log('hey', SystemNavigationBar.navigationHide());
    StatusBar.setHidden(true);
  }, []);

  const onLayOut = e => {
    const [screenWidth, SetScreenWidth] = useState(
      Dimensions.get('window').width,
    );
    const [screenHeight, SetScreenHeight] = useState(
      Dimensions.get('window').height,
    );
  };

  return (
    <>
      <StatusBar hidden={true} />
      {connected ? (
        <WebView
          onError={() =>
            alert('Page will reload when there is an internet connection')
          }
          source={{uri: url}}
        />
      ) : (
        <View style={styles.container} onLayout={onLayOut}>
          <Text style={styles.connectionText}> No Internet Connection </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionText: {
    fontSize: 18,
  },
});

export default Home;
