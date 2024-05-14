import { styled } from "@/design";

export const Container = styled("footer", {
  background: "$blue",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",

  span: {
    fontFamily: "$nunito",
    fontWeight: "$nunito-bold",
    fontSize: "$md",
    color: "$white",
  },
});
