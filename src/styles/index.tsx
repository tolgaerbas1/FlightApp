import {useContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);
  const style = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.secondary.main,
        },
        topSafeArea: {
          flex: 0,
          backgroundColor: colors.secondary.main,
        },
        topSafeAreaLoggedIn: {
          flex: 0,
          backgroundColor: colors.primary.main,
        },

        headerStyle: {
          height: 50,
          backgroundColor: colors.primary.main,
        },
        headerLeftButton: {
          flex: 1,
          justifyContent: 'center',
          aspectRatio: 1,
          alignItems: 'flex-start',
          marginHorizontal: 24,
        },
      }),
    [colors.primary.main, colors.secondary.main],
  );

  return style;
};

export default useStyles;
