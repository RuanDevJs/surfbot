import Image from "next/image";
import * as Styled from "./style";

import Waves from "@/assets/home/ondas.svg";
import Lesson from "@/components/Lesson";

export default function Lessons() {
  const childrenContent = [
    "Público entre 5 e 15 anos",
    "Equipamentos fornecidos",
    "Horários de Sex. à Sab.",
    "2 horas seguidas de aula",
  ];
  const adultContent = [
    "Público entre 16 e 80 anos",
    "Equipamentos fornecidos",
    "Horários de Sex. à Sab.",
    "3 horas seguidas de aula",
  ];
  const profissionalContent = [
    "Experiência de 3 anos no surf",
    "Você deve trazer o equipamento",
    "Horários de Sex. à Sab.",
    "4 horas seguidas de aula",
  ];
  return (
    <Styled.Container>
      <Styled.Heading>
        <Image
          src={Waves}
          alt="Aulas"
          draggable={false}
          width={"100%"}
          height={"100%"}
        />
        <h1>Aulas</h1>
      </Styled.Heading>
      <Styled.Lessons>
        <Lesson
          iconQuantity={1}
          type="INFANTIL"
          price="49,00"
          content={childrenContent}
        />
        <Lesson
          iconQuantity={2}
          type="ADULTO"
          price="69,00"
          content={adultContent}
        />
        <Lesson
          iconQuantity={3}
          type="PROFISSIONAL"
          price="99,00"
          content={profissionalContent}
        />
      </Styled.Lessons>
      <p className="description">
        Possui um grupo com mais de <span>3 pessoas </span> ? <br />
        Entre em contato para um desconto personalizado.
      </p>
    </Styled.Container>
  );
}
