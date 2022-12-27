import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  colors: {
    //body: "#E4E9F7",
    body: "#fff",
    black: "#1c1c1c",
    white: "#fff",
    gray: "#333",
    lightGray: "#ccc",
    primary: 'rgba(3, 102, 214)'
  },
};

export const dark: DefaultTheme = {
  colors: {
    body: "#1c1c1c",
    black: "#fff",
    white: "#1c1c1c",
    gray: "#E4E9F7",
    lightGray: "#ccc",
    primary: 'rgba(3, 102, 214, 0.3)'
  },
};
