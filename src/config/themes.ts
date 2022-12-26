import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  colors: {
    body: "#E4E9F7",
    black: "#1c1c1c",
    white: "#fff",
    gray: "#333",
    lightGray: "#ccc",
  },
  boxShadows: {
    shadow01:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    shadow02: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
    shadow03:
      "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
    shadow04: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
    shadow05:
      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  },
};

export const dark: DefaultTheme = {
  colors: {
    body: "#1c1c1c",
    black: "#fff",
    white: "#1c1c1c",
    gray: "#E4E9F7",
    lightGray: "#ccc",
  },
  boxShadows: {
    shadow01:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    shadow02: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
    shadow03:
      "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
    shadow04: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
    shadow05:
      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  },
};
