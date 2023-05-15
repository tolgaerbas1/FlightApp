import React, {useContext} from 'react';
import {View, Pressable, ActivityIndicator} from 'react-native';
import {ThemeContext} from '../../../context/ThemeContext';
import {IButtonProps} from '../../../types/button';
import {noop} from '../../../types/theme';
import TextBody from '../../TextBody';
import useStyles from './style';

const MainButton = ({
  text,
  style,
  onPress,
  disabled = false,
  isSecondaryButton,
  loading = false,
}: IButtonProps) => {
  const theme = useContext(ThemeContext);
  const {colors} = theme;

  const textColor = isSecondaryButton
    ? colors.tertiary.main
    : disabled
    ? colors.tertiary.main
    : colors.secondary.main;

  const buttonColor = isSecondaryButton
    ? colors.secondary.main
    : disabled
    ? colors.tertiary.main
    : colors.primary.main;

  const {buttonOuterContainer, buttonInnerContainer, buttonText} = useStyles({
    theme,
    buttonColor,
    isSecondaryButton,
  });

  return (
    <View style={[buttonOuterContainer, style]}>
      <Pressable onPress={loading ? noop : onPress} disabled={disabled}>
        <View style={[buttonInnerContainer]}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.secondary.main} />
          ) : (
            <TextBody text={text} color={textColor} style={buttonText} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default MainButton;
