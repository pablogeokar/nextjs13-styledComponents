export interface IboxShadows {
  basic01: string;
  basic02: string;
  bold: string;
  skyblue: string;
  basic03: string;
  strong: string;
  top: string;
}

export interface ISizes {
  xsmall: string,
  small: string,
  normal: string,
  large: string,
  xlarge: string,
  xxlarge: string,
}

export interface IColors {
  color?: "black" | "body" | "gray" | "lightGray" | "primary" | "white";
}

export interface IShadows {
  shadow?: "basic01" | "basic02" | "basic03" | "bold" | "skyblue" | "strong" | "top";
}
