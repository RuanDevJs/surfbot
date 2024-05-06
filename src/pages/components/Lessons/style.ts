import { styled, keyframes } from "@/design";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const animate = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(0, -100px, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
  },
});

const ImageAnimation = keyframes({
  from: {
    opacity: 0.72,
    filter: "brightness(0.82)",
  },
  to: {
    opacity: 1,
    filter: "brightness(1)",
  },
});

export const Container = styled("section", {
  background: "#EFF4F9",
  paddingBottom: "1rem",

  ".description": {
    position: "relative",
    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$md",
    color: "$gray",
    textAlign: "center",

    cursor: "pointer",
    transition: "ease-in-out .32s",

    paddingBottom: "2rem",
  },

  "p > span": {
    display: "inline-block",
    fontWeight: "$nunito-bold",
    color: "$red",
  },
});

export const Heading = styled("section", {
  position: "relative",
  top: -30,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  h1: {
    fontFamily: "$alice",
    fontWeight: "$alice-regular",
    fontSize: "$xlg",
    color: "$gray",
    marginBottom: "1rem",
  },
});

export const Lessons = styled("div", {
  maxWidth: "92vw",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-around",
  gap: "2rem",
});
