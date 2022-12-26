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
    shadow02: "box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;",
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
    shadow02: "box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;",
  },
};
