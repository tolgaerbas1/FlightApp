import React, {useContext} from 'react';
import {TextProps, TextStyle, Text} from 'react-native';
import {ITextProps} from '../../types/typography';
import {ThemeContext} from '../../context/ThemeContext';
import useStyles from './style';

const TextBody = ({style, text, color, onPress, ...rest}: ITextProps) => {
  const theme = useContext(ThemeContext);
  const {container} = useStyles({theme, color});

  return (
    <Text
      suppressHighlighting
      onPress={onPress}
      style={[container, style]}
      {...rest}>
      {text}
    </Text>
  );
};

export default TextBody;
