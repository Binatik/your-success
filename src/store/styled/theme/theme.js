import { breakpoints } from "./breakpoints";
import { fontStyle } from "./style";

export const theme = {
  colors: {
    background: "#00CCFF",
    primary: "#000",
    secondary: "#fff",
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
