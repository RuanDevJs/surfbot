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

export const Container = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  justifyContent: "center",
  alignItems: "flex-start",

  padding: "0 2rem",
  gap: "2rem",

  margin: "3rem 0 0 0",
});

export const Pictures = styled("div", {
  opacity: 0,

  animation: `${animate} .72s forwards`,
  animationDelay: "0.32s",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Locale = styled("div", {
  position: "relative",
  top: -120,

  cursor: "pointer",

  h2: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$sm",
    color: "$dark_blue",
    textTransform: "uppercase",

    display: "flex",
    alignItems: "center",
    gap: "4px",
  },

  "h2::before": {
    content: "",
    display: "block",
    width: 5,
    height: 5,
    borderRadius: 50,
    border: "2px solid $red",
  },

  ul: {
    marginTop: 10,
  },

  li: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "8px",
  },

  "li:before": {
    content: "",
    display: "inline-block",
    width: 16,
    height: 3,
    background: "$blue",
  },

  "li > span": {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$sm",
    color: "$dark_blue",
    textTransform: "capitalize",
  },

  "li > p": {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$sm",
    color: "$gray",
  },
});

export const Information = styled("div", {
  opacity: 0,
  animation: `${animate} .72s forwards`,
  animationDelay: "0.32s",

  h1: {
    fontFamily: "$alice",
    fontWeight: "$alice-regular",
    fontSize: "$xlg",

    span: {
      display: "inline",
      fontFamily: "$alice",
      fontWeight: "$alice-regular",
      fontSize: "$xlg",
      color: "$blue",
    },
  },

  p: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$md",
    color: "$dark_blue",
    marginBottom: "2rem",
    transition: "all .32s",
    lineHeight: "1.5rem",
    cursor: "pointer",
  },

  "p:hover": {
    color: "$blue",
  },
});

export const Details = styled("div", {
  margin: "2rem 0",

  "&:nth-child(2)": {
    borderBottom: "2px solid #EFF4F9",
  },
});

export const Detail = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  borderTop: "2px solid #EFF4F9",
  padding: "1rem 12px",

  cursor: "pointer",
  transition: "all .32s",

  h2: {
    fontFamily: "$nunito",
    fontWeight: "$alice-regular",
    fontSize: "$lg",
    color: "$dark_blue",

    transition: "all .32s",
  },

  "&:hover": {
    transform: "translateX(-20px)",
  },

  "&:hover h2": {
    color: "$blue",
  },
});
