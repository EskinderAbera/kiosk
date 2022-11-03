import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Setting = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {
      title: 'Web Content Settings',
      body: ' Start URL, HTML features, file upload, whitelist/blacklist, PDF, video, other contents, custom error URL, etc.',
      page: 'WebContentSettings',
      key: '1',
    },
    {
      title: 'Web Browsing Settings',
      body: ' Pull-to-referesh, navigation options, click sound, back button, swipe tabs, search provider, NFC tags, etc.',
      page: 'WebBrowsingSettings',
      key: '2',
    },
    {
      title: 'Web Zoom and Scaling',
      body: ' Enable zooming, initial page/text scaling, overview mode, wide viewport, desktop mode',
      page: 'WebZoomScaling',
      key: '3',
    },
  ]);

  const handlePress = page => {
    navigation.navigate(page);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <View style={Styles.container}>
        <FlatList
          data={reviews}
          renderItem={({item}) => (
            <TouchableOpacity
              style={Styles.items}
              onPress={() => handlePress(item.page)}>
              <Text style={Styles.titleText}> {item.title}</Text>
              <Text style={Styles.subtitleText}>{item.body}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  items: {
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    padding: 20,
    width: '100%',
  },
  titleText: {
    fontSize: 18,
    color: '#333',
  },
  subtitleText: {
    fontSize: 10,
    color: '#333',
  },
});

export default Setting;
