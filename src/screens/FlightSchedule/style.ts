import { StyleSheet } from "react-native";

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 8
    },
    infoContainer: {
      flex: 1,
      alignItems: "flex-start",
      marginLeft: 16
    }});

export default useStyles;
