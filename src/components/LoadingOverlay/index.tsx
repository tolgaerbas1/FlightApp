import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './style';

const LoadingOverlay = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingOverlay;
