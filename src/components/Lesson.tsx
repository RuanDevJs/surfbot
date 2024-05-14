import { ArrowRight } from "phosphor-react";
import Image from "next/image";

import SurfbotIcon from "@/assets/home/surfbot-icon.svg";
import * as Styled from "@/styles/Lesson";

interface IProps {
  iconQuantity: number;
  type: "INFANTIL" | "ADULTO" | "PROFISSIONAL";
  content: string[];
  price: string;
}

//let teste = Object.keys(new Array(3).fill(null))

export default function Lesson({ iconQuantity, type, content, price }: IProps) {
  const length = Object.keys(new Array(iconQuantity).fill(null));

  return (
    <Styled.Container>
      <Styled.Heading>
        <Styled.Icons>
          {length.map((icon) => {
            return (
              <Image
                key={icon}
                src={SurfbotIcon}
                width={"100%"}
                height={"100%"}
                alt="Surfbot - Logo"
                className="surfbot-icon"
              />
            );
          })}
        </Styled.Icons>

        <h2>{type}</h2>
      </Styled.Heading>
      <Styled.Content>
        <ul>
          {content.map((contentValue, index) => {
            return (
              <li key={index}>
                <p>{contentValue}</p>
              </li>
            );
          })}
        </ul>
        <h3>R$ {price} / Aula</h3>
        <Styled.Button>
          <span>MATRICULE-SE</span>{" "}
          <ArrowRight size={18} weight="bold" color="#fff" />
        </Styled.Button>
      </Styled.Content>
    </Styled.Container>
  );
}
