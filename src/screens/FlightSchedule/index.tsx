import React, {useContext} from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import {noop} from '../../types/theme';
import useStyles from './style';

const FlightDeparture = () => {
  const {
    colors: {tertiary},
  } = useContext(ThemeContext);

  const {container} = useStyles();

  return (
    <View style={container}>
      <Text>Departure</Text>
      <Pressable onPress={noop}>
        <Text>SGN- Ho Chi Minh</Text>
      </Pressable>
      <Text>Destination</Text>
      <Pressable>
        <Text>Select your destination</Text>
      </Pressable>
    </View>
  );
};

export default FlightDeparture;
