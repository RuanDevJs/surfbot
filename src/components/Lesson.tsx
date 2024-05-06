import { ArrowRight } from "phosphor-react";
import Image from "next/image";

import * as Styled from "@/styles/Lesson";
import SurfbotIcon from "@/assets/home/surfbot-icon.svg";

export default function Lesson() {
  return (
    <Styled.Container>
      <Styled.Heading>
        <Image
          src={SurfbotIcon}
          width={"100%"}
          height={"100%"}
          alt="Surfbot - Logo"
        />
        <h2>Infantil</h2>
      </Styled.Heading>
      <Styled.Content>
        <ul>
          <li>
            <p>Público entre 5 e 15 anos</p>
          </li>
          <li>
            <p>Equipamentos fornecidos</p>
          </li>
          <li>
            <p>Horários de Sex. à Sab.</p>
          </li>
          <li>
            <p>2 horas seguidas de aula</p>
          </li>
        </ul>
        <h3>R$ 49,00 / Aula</h3>
        <Styled.Button>
          <span>MATRICULE-SE</span>{" "}
          <ArrowRight size={18} weight="bold" color="#fff" />
        </Styled.Button>
      </Styled.Content>
    </Styled.Container>
  );
}
