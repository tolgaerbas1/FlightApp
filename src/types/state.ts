import { ReactNode } from "react";

export type AppAction ={}

export interface IAppState {
  loading?: boolean;
  onboardingPassed?: boolean;
}

export type AppPayload =
  | boolean
  | number
  | undefined;

export interface IAction<T, P> {
  type: T;
  payload?: P;
}

export interface IContext<S, T, P> {
  state: S;
  dispatch: React.Dispatch<IAction<T, P>>;
}

export interface IAppProvider {
  children: ReactNode;
}
