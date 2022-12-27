import "styled-components";
import { boxShadows } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      black: string;
      white: string;
      gray: string;
      lightGray: string;
    };
    boxShadows: boxShadows
  }
}
