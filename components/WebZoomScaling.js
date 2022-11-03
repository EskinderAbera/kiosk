import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

const WebZoomScaling = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text style={styles.titleText}> Web Zoom and Scaling Settings </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
  },
});

export default WebZoomScaling;
