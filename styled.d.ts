import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      black: string;
      white: string;
      gray: string,
      lightGray: string,
    };
  }
}
