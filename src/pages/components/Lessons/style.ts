import { styled, keyframes } from "@/design";

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
