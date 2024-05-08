import { styled, keyframes } from "@/design";

const animateArrow = keyframes({
  from: {
    transform: "translate3d(-10px, 0, 0)",
  },
  to: {
    transform: "translate3d(0px, 0, 0)",
  },
});

export const Container = styled("section", {
  margin: "3rem 0 3rem 0",
  textAlign: "center",

  h1: {
    fontFamily: "$alice",
    fontWeight: "$alice-regular",
    fontSize: "$xlg",
    color: "$gray",
  },
});

export const Form = styled("form", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  justifyContent: "center",
  alignItems: "flex-start",

  padding: "8px 16rem",
});

export const Wrap = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  borderRight: "4px solid #EFF4F9",
  paddingRight: "5rem",
});

export const Input = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  width: "100%",
  marginBottom: "1rem",

  "&:hover label": {
    color: "$blue !important",
  },

  "&:hover input": {
    boxShadow: "0px 0px 6px rgba(0,0,0,0.12)",
  },

  "&:hover textarea": {
    boxShadow: "0px 0px 6px rgba(0,0,0,0.12)",
  },

  label: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$dark_blue",

    marginBottom: "4px",
    transition: "ease-in-out .32s",
  },

  input: {
    width: "100%",
    padding: "16px 12px",
    background: "#EFF4F9",

    border: 0,
    borderRadius: 5,

    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$sm",
    color: "$dark_blue",

    outline: "1px solid #EFF4F9",
    transition: "ease-in-out .32s",

    "&:focus": {
      outline: "1px solid $blue",
    },
  },

  textArea: {
    width: "100%",
    height: "220px",
    padding: "16px 12px",
    background: "#EFF4F9",

    border: 0,
    borderRadius: 5,

    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$sm",
    color: "$dark_blue",

    lineHeight: "1.5rem",

    resize: "none",

    transition: "ease-in-out .32s",
    outline: "1px solid #EFF4F9",

    "&:focus": {
      outline: "1px solid $blue",
    },
  },
});

export const Contact = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  marginLeft: "4rem",

  ul: {
    width: "100%",
    marginBottom: "12px",
  },

  "ul h3": {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$gray",

    transition: "all .32s",

    "&:hover": {
      color: "$dark-blue",
    },
  },

  li: {
    width: "50%",
    textAlign: "left",
    marginBottom: "8px",
    paddingLeft: 15,
  },

  ".border-bottom": {
    paddingBottom: "1rem",
    borderBottom: "2px solid #EFF4F9",
  },

  span: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$sm",
    color: "$gray",

    transition: "all .32s",

    "&:hover": {
      color: "$blue",
    },
  },

  a: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$sm",
    color: "$gray",

    display: "flex",
    alignItems: "center",
    gap: "8px",

    transition: "all .32s",

    "&:hover": {
      color: "$red",
    },
  },
});

export const Button = styled("button", {
  border: 0,
  marginTop: "1rem",

  width: "220px",
  padding: "12px 4px",

  alignSelf: "flex-start",

  span: {
    fontFamily: "Nunito !important",
    fontWeight: 700,
    fontSize: "$md",
    color: "$white",
  },

  background: "$gray",

  borderRadius: 5,

  cursor: "pointer",
  transition: ".32s ease-in-out",

  "&:hover": {
    filter: "brightness(1.2)",
    boxShadow: "0px 0px 16px rgba(0,0,0,0.2)",
    background: "$dark_blue",
  },

  "&:hover svg": {
    animation: `${animateArrow} .32s infinite alternate`,
  },

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  gap: "4px",
});
