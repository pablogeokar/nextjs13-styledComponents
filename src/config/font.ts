import { Poppins } from "@next/font/google";

// Font family from GoogleFonts
export const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Font sizes
export const sizes = {
  xsmall: ".8rem",
  small: ".9rem",
  normal: "1rem",
  large: "1.8rem",
  xlarge: "2.8rem",
  xxlarge: "3.6rem",
};