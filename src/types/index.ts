import { ReactNode } from "react";
import { LayoutChangeEvent, ViewStyle } from "react-native";

export interface IFunctionalComponentProps {
    children?: Arrayable<ReactNode>;
    style?: Arrayable<ViewStyle>;
  }

export type Arrayable<T> = T | Array<T>;
      
export interface ISvgIcon {
  size?: number;
  color?: string;
  style?: ViewStyle;
  fill?: string;
  onLayout?: (event: LayoutChangeEvent) => void;
  onClick?: () => void;
}
