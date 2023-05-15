/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment} from 'react';
import AppWrapper from './src/components/AppWrapper';
import {AppProvider} from './src/context/AppContext';

const App = () => (
  <Fragment>
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  </Fragment>
);

export default App;
