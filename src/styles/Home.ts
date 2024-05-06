import { styled, keyframes } from "@/design";
import NextImage from "next/image";

const animate = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(0, 100px, 0)",
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

export const Main = styled("main", {
  position: "relative",
});

export const Image = styled("img", {
  opacity: 0.72,
  width: "100vw !important",

  animation: `${ImageAnimation} 0.72s forwards`,
  animationDelay: "0.15s",

  cursor: "pointer",
  objectFit: "cover",
});

export const Info = styled("div", {
  opacity: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "2rem",

  position: "absolute",
  top: "22vw",

  animation: `${animate} .72s forwards`,
  animationDelay: "0.15s",

  h1: {
    fontSize: "$xlg",
    color: "#fff",
    fontWeight: 400,
  },
});

export const Form = styled("form", {
  display: "flex",
});

export const Input = styled("input", {
  width: "270px",
  height: "45px",

  border: 0,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,

  padding: "0 16px",

  fontFamily: "Nunito !important",
  fontWeight: 700,
  fontSize: "$sm",
});

export const Button = styled("button", {
  border: 0,
  padding: "0 20px",

  fontFamily: "Nunito !important",
  fontWeight: 700,
  fontSize: "$sm",

  background: "#EE2211",
  color: "$white",

  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,

  cursor: "pointer",
  transition: ".32s ease-in-out",

  "&:hover": {
    filter: "brightness(1.12)",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "8px",
});

export const Quote = styled("div", {
  position: "relative",

  ".image-quote:hover": {
    position: "relative",
    opacity: "0 !important",
    zIndex: 100,
  },

  ".quote": {
    width: "100%",
    height: "100%",

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 1,
  },

  ".quote h2": {
    fontFamily: "$alice",
    fontWeight: "$alice-regular",
    fontSize: "$xlg",
    color: "$white",
    marginBottom: "1rem",
  },

  ".quote p": {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$white",
    marginBottom: "1rem",
  },
});
