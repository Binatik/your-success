import { breakpoints } from "./breakpoints";
import { fontStyle } from "./style";

export const theme = {
  colors: {
    primary: "#000",
    secondary: "#fff",
    surface: "#00CCFF",

    backgrounds: [], //Если фон разный.
  },

  grid: {
    col3: "33.333%",
    col2: "50%",
    col1: "100%",
  },

  desktopFirst: {
    phone: `(max-width: ${breakpoints.small}px)`,
    tablet: `(max-width: ${breakpoints.medium}px)`,
    desktop: `(max-width: ${breakpoints.hd}px)`,
  },

  fontStyle,
};
