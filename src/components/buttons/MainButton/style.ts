import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { IButtonStyleProps } from "../../../types/button";

const useStyles = ({
  theme: { colors },
  isSecondaryButton,
  buttonColor
}: IButtonStyleProps) => {
  const style = useMemo(
    () =>
      StyleSheet.create({
        buttonOuterContainer: {
          overflow: "hidden",
          borderRadius: 10,
          ...(isSecondaryButton && {
            borderWidth: 1,
            borderColor: colors.tertiary.shades?.s550
          })
        },
        buttonInnerContainer: {
          padding: 12,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: buttonColor
        },
        buttonText: { fontSize: 18, fontWeight: "600" },
        pressedButton: { backgroundColor: colors.primary.main },
        disabledButton: { backgroundColor: colors.primary.main }
      }),
    [
      buttonColor,
      colors.primary.main,
      colors.tertiary.shades?.s550,
      isSecondaryButton
    ]
  );
  return style;
};

export default useStyles;
