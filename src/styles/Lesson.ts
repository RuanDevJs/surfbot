import { styled, keyframes } from "@/design";

const animateArrow = keyframes({
  from: {
    transform: "translate3d(-10px, 0, 0)",
  },
  to: {
    transform: "translate3d(0px, 0, 0)",
  },
});

export const Container = styled("div", {
  padding: "2rem",
  background: "$white",

  width: "32vw",
  marginBottom: "2rem",

  borderRadius: 5,
  cursor: "pointer",

  transition: "all .32s",

  boxShadow: "0px 0px 16px rgba(0,0,0,0.12)",

  "&:hover": {
    transform: "translate3d(0, -25px, 0)",
    boxShadow: "0px 0px 16px rgba(0,0,0,0.24)",
  },

  "&:hover button": {
    background: "$blue",
  },
});

export const Heading = styled("div", {
  width: "230px",
  margin: "-50px auto 0 auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  h2: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$lg",
    color: "$gray",
    textTransform: "uppercase",

    marginTop: "12px",
    paddingBottom: "1rem",
  },

  borderBottom: "3px solid #EFF4F9",
});

export const Content = styled("div", {
  width: "230px",
  margin: "16px auto 0 auto",

  ul: {
    borderBottom: "3px solid #EFF4F9",
  },

  li: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom: "1rem",
    marginLeft: 15,
  },

  "li:before": {
    content: "",
    display: "block",
    width: 5,
    height: 5,
    background: "$white",
    border: "2px solid $red",
    borderRadius: 50,
  },

  p: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$sm",
    color: "$gray",
    cursor: "pointer",
    transition: ".25s ease-in-out",
  },

  "p:hover": {
    color: "$blue",
  },

  h3: {
    marginTop: "1rem",

    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$blue",
    cursor: "pointer",
    transition: ".25s ease-in-out",
  },
});

export const Button = styled("button", {
  border: 0,
  marginTop: "1rem",

  width: "100%",
  padding: "12px 4px",

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
  },

  "&:hover svg": {
    animation: `${animateArrow} .32s infinite alternate`,
  },

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  gap: "8px",
});
