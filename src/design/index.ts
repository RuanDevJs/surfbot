import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    fonts: {
      nunito: "Nunito !important",
      alice: "Alice !important",
    },
    fontWeights: {
      "nunito-regular": 400,
      "nunito-bold": 700,
      "alice-regular": 400,
      "alice-bold": 700,
    },
    fontSizes: {
      sm: "0.875rem", // Font size -> 14px
      md: "1.5rem", // Font size -> 24px
      lg: "1.125rem", // Font size -> 18px
      xlg: "4.5rem", // Font size -> 72px
    },
    colors: {
      white: "#FFFFFF",
      gray: "#445566",
      blue: "#1188EE",
      dark_blue: "#17222D",
      red: "#EE2211",
      green: "#16C70B",
    },
  },
});
