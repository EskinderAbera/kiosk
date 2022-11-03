import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Configure from './Configure';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Exit from './Exit';
import {contextAPI} from '../Context';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const {isSignedIn} = contextAPI();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      {isSignedIn ? (
        <>
          <Drawer.Screen name="Settings" component={Configure} />
          <Drawer.Screen name="Go to Start Url" component={Home} />
          <Drawer.Screen name="Logout" component={Logout} />
          <Drawer.Screen name="Exit" component={Exit} />
        </>
      ) : (
        <>
          <Drawer.Screen name="Go to Start Url" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default MyDrawer;
