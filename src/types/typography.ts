
import { ReactNode } from "react";
import { TextProps, TextStyle, ViewStyle } from "react-native";
import { ITheme } from "./theme";
import { Arrayable, IFunctionalComponentProps } from ".";

export interface ITextProps extends TextProps {
  text: string | number;
  color?: string;
  style?: Arrayable<Arrayable<TextStyle | ViewStyle>>;
  onPress?: () => void;
}

export interface ITextStyleProps extends Omit<ITextProps, "text"> {
  theme: ITheme;
}

export interface IPartialPressablePart extends ITextProps {
  id: string;
  text: string;
  onPress: () => void;
}
export interface IPartialPressableText extends ITextProps {
  text: string;
  color?: string;
  style?: TextStyle | ViewStyle;
  pressables: Array<IPartialPressablePart>;
}

export interface ITextWithIconProps extends IFunctionalComponentProps {
  text: string;
  icon: ReactNode;
}
