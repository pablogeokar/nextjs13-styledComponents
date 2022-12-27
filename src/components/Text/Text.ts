import styled, { css } from "styled-components";
import { IColors } from "../../../types";
import { fontSizes } from "../../config/layout";

export interface TextProps extends IColors {  
  size?: keyof typeof fontSizes;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Text = styled("span").attrs<TextProps>(({ level }) => ({
  as: `${level ? "h" + level : "span"}`,
}))<TextProps>`
  ${({ color = "gray", size, fontWeight = 400, lineHeight = 1.2 }) => css`
    font-size: ${size && fontSizes[size]};
    color: ${({ theme }) => theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;
