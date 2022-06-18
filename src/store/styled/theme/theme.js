import { breakpoints } from "./breakpoints";
import { fontStyle } from "./style";

export const theme = {
  colors: {
    background: "#00CCFF96",
    primary: "#000",
    secondary: "#90a4b4",
    surface: "#aa8270",

    backgrounds: [], //Если фон разный.
  },

  grid: {
    col3: "33.333%",
    col2: "50%",
    col1: "100%",
  },

  desktopFirst: {
    tablet: `(max-width: ${breakpoints.medium}px)`,
    desktop: `(max-width: ${breakpoints.large}px)`,
  },

  mobileFirst: {
    breakpoints: {},
  },

  fontStyle,
};
