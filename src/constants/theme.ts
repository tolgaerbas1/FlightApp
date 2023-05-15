import { ColorSchemeName } from "react-native/types";
import { IColorPalette, ITheme, noop } from "../types/theme";

export const lightThemeColors: IColorPalette = {
    primary: {
      main: "#FFFFFF",
      dark: "#505050"
    },
    secondary: {
      main: "#FFFFFF"
    },
    tertiary: {
      main: "#000000"
    },
    positive: {
      main: "#52C357",
    },
    onboardingCircle: "#ffbac6",
    transparent: "transparent"
  };

  export const getTheme = (colorScheme: ColorSchemeName): ITheme => ({
    colors:
      colorScheme === "dark"
        ? lightThemeColors /* To be dark theme */
        : lightThemeColors,
    showLoading: noop,
    hideLoading: noop,
 
  });
  