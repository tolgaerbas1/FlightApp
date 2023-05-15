import React, {useReducer} from 'react';
import LoadingOverlay from '../components/LoadingOverlay';
import {
  AppAction,
  AppPayload,
  IAction,
  IAppProvider,
  IAppState,
  IContext,
} from '../types/state';
import {noop} from '../types/theme';

const initialState: IContext<IAppState, AppAction, AppPayload> = {
  state: {},
  dispatch: noop,
};

const AppContext = React.createContext(initialState);

const AppProvider: React.FC<IAppProvider> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState.state);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <>
        {children}
        {state.loading ? <LoadingOverlay /> : null}
      </>
    </AppContext.Provider>
  );
};
const appReducer = (
  state: IAppState,
  {type, payload}: IAction<AppAction, AppPayload>,
): IAppState => {
  switch (type) {
    default:
      return state;
  }
};
export {AppContext, AppProvider};
