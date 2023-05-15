import { StyleSheet } from "react-native";
import { lightThemeColors } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightThemeColors.tertiary.main,
    opacity: 0.6,
    zIndex: 10
  }
});

export default styles;
