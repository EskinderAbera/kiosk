import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import WebContentSettings from './WebContentSettings';
import WebBrowsingSettings from './WebBrowsingSettings';
import WebZoomScaling from './WebZoomScaling';
import Setting from './Setting';

const Stack = createStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="WebContentSettings" component={WebContentSettings} />
      <Stack.Screen
        name="WebBrowsingSettings"
        component={WebBrowsingSettings}
      />
      <Stack.Screen name="WebZoomandScaling" component={WebZoomScaling} />
    </Stack.Navigator>
  );
}

// const screens = {
//   Setting: {
//     screen: Setting,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
//   WebContentSettings: {
//     screen: WebContentSettings,
//     navigationOptions: {
//       title: 'Web Content Settings',
//     },
//   },
//   WebBrowsingSettings: {
//     screen: WebBrowsingSettings,
//     navigationOptions: {
//       title: 'Web Browsing Settings',
//     },
//   },
//   WebZoomScaling: {
//     screen: WebZoomScaling,
//     navigationOptions: {
//       title: 'Web Zoom and Scaling',
//     },
//   },
// };

// const SettingStack = createStackNavigator(screens);
// export default SettingStack;
// export default createAppContainer(SettingStack);
