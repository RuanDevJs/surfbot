import Image from "next/image";

import SurfbotIcon from "@/assets/home/surfbot-logo.svg";
import * as Styled from "@/styles/Footer";

export default function Footer() {
  return (
    <Styled.Container>
      <span>Surfnet 2021 - Alguns direitos reservados.</span>
      <Image
        src={SurfbotIcon}
        width={"100%"}
        height={"100%"}
        alt="Surfbot"
        draggable={false}
      />
    </Styled.Container>
  );
}
