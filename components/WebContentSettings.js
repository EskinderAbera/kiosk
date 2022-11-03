import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MyModal from './Modal';
import {contextAPI} from '../Context';

const WebContentSettings = ({title}) => {
  const {url, changeShow} = contextAPI();
  const [reviews, setReviews] = useState([
    {
      title: 'Start URL',
      body: url,
      key: '1',
    },
    {
      title: 'Username',
      body: 'Username for basic HTTP auth (optional)',
      key: '2',
    },
    {
      title: 'Password',
      body: 'Password for basic HTTP auth (optional)',
      key: '3',
    },
  ]);

  const [passtitle, setPassTitle] = useState('');

  const handleShow = item => {
    setPassTitle(item.title);
    changeShow(true);
  };

  const getUrl = url => {
    setReviews(
      reviews.map(review =>
        review.title === 'Start URL' ? {...review, body: url} : review,
      ),
    );
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
              onPress={() => handleShow(item)}>
              <Text style={Styles.titleText}>{item.title}</Text>
              <Text style={Styles.subtitleText}>{item.body}</Text>
            </TouchableOpacity>
          )}
        />

        <MyModal getUrl={getUrl} title={passtitle} />
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 14,
    color: '#333',
  },
});

export default WebContentSettings;
