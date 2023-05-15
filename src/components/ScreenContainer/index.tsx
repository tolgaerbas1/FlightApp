import React from 'react';
import {View} from 'react-native';
import {IFunctionalComponentProps} from '../../types';
import useStyles from './style';

const ScreenContainer = ({children, style}: IFunctionalComponentProps) => {
  const styles = useStyles();

  return <View style={[styles.container, style]}>{children}</View>;
};
export default ScreenContainer;
