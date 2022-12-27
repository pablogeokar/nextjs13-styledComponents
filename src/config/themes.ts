import { DefaultTheme } from "styled-components";
import { boxShadows } from "./layout";

export const light: DefaultTheme = {
  colors: {
    body: "#E4E9F7",
    black: "#1c1c1c",
    white: "#fff",
    gray: "#333",
    lightGray: "#ccc",
  },
  boxShadows,
};

export const dark: DefaultTheme = {
  colors: {
    body: "#1c1c1c",
    black: "#fff",
    white: "#1c1c1c",
    gray: "#E4E9F7",
    lightGray: "#ccc",
  },
  boxShadows,
};
