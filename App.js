import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDisplay from './src/components/ImageDisplay'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ImageDisplay />
      </View>
    );
  }
}
