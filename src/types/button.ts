import { ViewStyle } from "react-native";
import { Arrayable, IFunctionalComponentProps } from ".";

export interface IButtonProps {
    text: string;
    style?: Arrayable<ViewStyle>;
    onPress: () => void;
    disabled?: boolean;
    isSecondaryButton?: boolean;
    loading?: boolean;
  }

  export interface ISwitcherProps {
    style?: ViewStyle | ViewStyle[];
    disabled?: boolean;
  }