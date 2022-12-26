import styled, { css } from "styled-components";
import { sizes } from "../../config/font";

export type TextProps = {
  color?: "white" | "black" | "gray" | "lightGray" | "body";
  size?: keyof typeof sizes;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Text = styled("span").attrs<TextProps>(({ level }) => ({
  as: `${level ? "h" + level : "span"}`,
}))<TextProps>`
  ${({ color = "gray", size, fontWeight = 400, lineHeight = 1.2 }) => css`
    font-size: ${size && sizes[size]};
    color: ${({ theme }) => theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;
