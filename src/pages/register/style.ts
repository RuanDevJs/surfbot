import { styled, keyframes } from "@/design";

const animateUp = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(0, -20px, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
  },
});

const animateArrow = keyframes({
  from: {
    transform: "translate3d(-10px, 0, 0)",
  },
  to: {
    transform: "translate3d(0px, 0, 0)",
  },
});

const planAnimationTop = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(0, -50px, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
  },
});

const planAnimationBottom = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(0, 50px, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
  },
});

const planAnimationLeft = keyframes({
  from: {
    opacity: 0,
    transform: "translate3d(-50px, 0, 0)",
  },
  to: {
    opacity: 1,
    transform: "translate3d(0px, 0, 0)",
  },
});

export const Container = styled("section", {
  h1: {
    fontFamily: "$alice",
    fontWeight: "$alice-regular",
    fontSize: "$xlg",
    color: "$gray",

    background: "#EFF4F9",
    padding: "1rem",
    textAlign: "center",

    marginBottom: "1rem",
  },
});

export const Form = styled("div", {
  padding: "1rem 3rem ",

  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "start",
  gap: "2rem",

  h3: {
    padding: "12px 0 20px 0",
    borderBottom: "2px solid #EFF4F9",

    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$blue",
  },
});

export const Payment = styled("div", {
  opacity: 0,
  animation: `${animateUp} forwards .72s`,
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

  label: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$dark_blue",

    marginBottom: "5px",
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

export const Address = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",

  select: {
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

  option: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$sm",
    color: "$dark_blue",
  },
});

export const SelectArea = styled("div", {
  display: "flex",
  marginTop: "18px",
  gap: "1rem",
});

export const Select = styled("div", {
  width: "50%",
  background: "#BBCCDD",

  display: "flex",
  alignItems: "center",
  padding: "1rem",

  gap: "8px",
  borderRadius: 4,

  "&:nth-child(2)": {
    background: "#EFF4F9",
  },

  input: {
    border: "8px solid $blue",
  },

  span: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$gray",
  },
});

export const CreditCard = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
  alignItems: "start",
  marginTop: "20px",

  paddingBottom: "20px",
  borderBottom: "2px solid #EFF4F9",
});

export const CreditCardSelect = styled("div", {
  label: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$dark_blue",

    transition: "ease-in-out .32s",
  },

  select: {
    width: "50%",
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

  div: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "5px",
  },
});

export const Footer = styled("div", {
  padding: "30px 0",

  ".description": {
    fontFamily: "$nunito",
    fontWeight: "$nunito-regular",
    fontSize: "$sm",
    color: "$dark_blue",
  },
});

export const PaymentSecurity = styled("div", {
  display: "flex",
  marginTop: "1rem",
  gap: "8px",

  p: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$sm",
    color: "$gray",
  },
});

export const Button = styled("button", {
  border: 0,
  marginTop: "1rem",

  width: "280px",
  padding: "16px 8px",

  span: {
    fontFamily: "Nunito !important",
    fontWeight: 700,
    fontSize: "$sm",
    color: "$white",
    textAlign: "center",
  },

  background: "$blue",

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
  justifyContent: "center",
  alignItems: "center",

  gap: "1rem",
});

export const Plan = styled("div", {
  background: "#EFF4F9",
  borderRadius: 5,
  padding: "1rem",

  h2: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$dark_blue",

    marginBottom: "5px",
    transition: "ease-in-out .32s",
    padding: "1rem 0",
  },
});

export const Options = styled("div", {
  display: "flex",
});

export const Option = styled("div", {
  variants: {
    active: {
      true: {
        background: "#BBCCDD",
      },
      false: {
        background: "#fff",
      },
    },
  },
  padding: "1rem",
  width: "100%",

  display: "flex",
  alignItems: "center",
  gap: "8px",

  "&:nth-child(1)": {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRight: "2px solid #EFF4F9",
  },

  "&:nth-child(2)": {
    borderRight: "2px solid #EFF4F9",
  },

  "&:nth-child(3)": {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  transition: ".32s all",

  label: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$gray",
    cursor: "pointer",
  },
});

export const Lessons = styled("div", {
  margin: "4rem auto",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Lesson = styled("div", {
  h3: {
    textAlign: "center",
  },
  variants: {
    active: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },

  button: {
    display: "none",
  },

  p: {
    width: "100%",
  },

  "&.animate-top": {
    opacity: 0,
    animation: `${planAnimationTop} .42s forwards`,
  },

  "&.animate-bottom": {
    opacity: 0,
    animation: `${planAnimationBottom} .42s forwards`,
  },

  "&.animate-left": {
    opacity: 0,
    animation: `${planAnimationLeft} .42s forwards`,
  },
});
