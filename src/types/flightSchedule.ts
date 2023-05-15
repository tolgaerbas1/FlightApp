import { IFunctionalComponentProps } from "./index";

export interface IFlightSchedule extends IFunctionalComponentProps {
  flightImage: string;
  flightDeparture: string;
  flightDestination?: string;
  onPress?: () => void;
}