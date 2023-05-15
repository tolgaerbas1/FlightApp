import { ReactNode } from "react";
import { IFunctionalComponentProps } from ".";

export interface IModalProps extends IFunctionalComponentProps {
  children?: ReactNode;
  headerChildren?: ReactNode;
  onClose?: () => void;
  isVisible: boolean;
}