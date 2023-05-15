import { ColorSchemeName } from "react-native";
import { lightThemeColors } from "../constants/theme";

export interface IBaseTheme {
    colors: IColorPalette;
  }

  export interface IColorPalette {
    primary: IColorSet;
    secondary: IColorSet;
    tertiary: Partial<IColorSet>;
    positive: IColorSet;
    onboardingCircle: string;
    transparent: string;
  }

  export interface IColorSet {
    main: string;
    dark?: string;
  }


  export interface ITheme extends IBaseTheme {
    showLoading: () => void;
    hideLoading: () => void;
  }

  export const getTheme = (colorScheme: ColorSchemeName): ITheme => ({
    colors:
      colorScheme === "dark"
        ? lightThemeColors /* To be dark theme */
        : lightThemeColors,
    showLoading: noop,
    hideLoading: noop
  });

  export const noop = () => {};
