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
    boxShadows:{
      shadow01: string,
      shadow02: string,
      shadow03: string,
      shadow04: string,
      shadow05: string
    }
  }
}
