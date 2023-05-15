import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.tertiary.main,
      padding: 20,
      width: "100%"
    }
  });

  return style;
};

export default useStyles;
