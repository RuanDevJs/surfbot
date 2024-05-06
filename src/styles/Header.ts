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

const background = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(-100px, 0, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0px, 0, 0)",
  },
});

export const Header = styled("header", {
  img: {
    opacity: 0,
    animation: `${animate} forwards .72s`,
    animationDelay: ".12s",
  },
});

export const Container = styled("div", {
  maxWidth: "92vw",
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
});

export const Background = styled("div", {
  background: "#1188EE",
  padding: "8px 0",
});

export const Span = styled("span", {
  opacity: 0,
  animation: `${background} .72s forwards`,
  animationDelay: "0.32s",

  fontFamily: "Nunito !important",
  fontWeight: "bold",
  color: "$white",
});

export const Heading = styled("div", {
  background: "$dark_blue",
  padding: "1rem 0",
});

export const Menu = styled("div", {
  ul: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  li: {
    opacity: 0,
    "&:nth-child(1)": {
      animation: `${animate} forwards .72s`,
      animationDelay: ".32s",
    },
    "&:nth-child(2)": {
      animation: `${animate} forwards .72s`,
      animationDelay: ".52s",
    },
    "&:nth-child(3)": {
      animation: `${animate} forwards .72s`,
      animationDelay: ".72s",
    },
    "&:nth-child(4)": {
      animation: `${animate} forwards .72s`,
      animationDelay: ".92s",
    },
  },

  a: {
    fontFamily: "Nunito !important",
    fontWeight: "700",
    fontSize: "$md",
    color: "#fff",
    transition: ".3s  ease-in-out",

    "&:hover": {
      color: "#1188EE",
    },
  },
});
