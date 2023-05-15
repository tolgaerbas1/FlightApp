import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {getTheme} from '../../constants/theme';
import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import useStyles from '../../styles';

const AppWrapper = () => {
  const colorScheme = useColorScheme();
  const {container, topSafeArea, topSafeAreaLoggedIn} = useStyles();
  const {
    state: {onboardingPassed},
  } = useContext(AppContext);
  const theme = getTheme(colorScheme);

  return (
    <>
      <SafeAreaView
        style={onboardingPassed ? topSafeAreaLoggedIn : topSafeArea}
      />
      <SafeAreaView style={container}>
        <StatusBar
          barStyle={onboardingPassed ? 'light-content' : 'dark-content'}
          backgroundColor={
            onboardingPassed
              ? theme.colors.primary.main
              : theme.colors.secondary.main
          }
        />
        <ThemeContext.Provider value={theme}></ThemeContext.Provider>
      </SafeAreaView>
    </>
  );
};

export default AppWrapper;
