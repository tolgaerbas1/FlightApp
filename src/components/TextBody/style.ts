import { StyleSheet } from "react-native";
import { fontFamily } from "../../constants";
import { ITextStyleProps } from "../../types/typography";

const useStyles = ({
  theme: { colors },
  color: customColor
}: ITextStyleProps) =>
  StyleSheet.create({
    container: {
      fontFamily: fontFamily,
      color: customColor ?? colors?.tertiary.main
    }
  });

export default useStyles;
