import React from "react";
import { getTheme } from "../constants/theme";
import { ITheme } from "../types/theme";

export const ThemeContext = React.createContext<ITheme>(getTheme("light"));