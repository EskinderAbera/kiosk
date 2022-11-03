import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ProvideContext} from './Context';
import MyDrawer from './components/MyDrawer';
import {BackHandler, StatusBar, AppState, Dimensions, View} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import SystemNavigationBar from 'react-native-system-navigation-bar';

export default function App() {
  const [appstate, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      return true;
    });
    hideNavigationBar();
  }, []);

  const handleAppStateChange = nextAppState => {
    if (appstate.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    } else {
      nextAppState == 'active';
      console.log('App has gone to the background!');
      // DevSettings.reload();
    }
    setAppState({appState: nextAppState});
  };

  useEffect(() => {
    SystemNavigationBar.navigationHide();
    console.log('hey', SystemNavigationBar.navigationHide());
  }, []);

  return (
    <NavigationContainer>
      <ProvideContext>
        <StatusBar hidden={true} />
        <MyDrawer />
      </ProvideContext>
    </NavigationContainer>
  );
}
