import "styled-components";
import { IboxShadows, ISizes } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      body: string;
      gray: string;
      lightGray: string;
      primary: string;
      white: string;
    };
    boxShadows?: IboxShadows;
    fontSizes?: ISizes;
  }
}
