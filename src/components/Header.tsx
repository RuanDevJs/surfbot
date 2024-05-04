import * as Styled from "@/styles/Header";
import SVGImage from "@/assets/home/surfbot-logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Background>
        <Styled.Container>
          <Styled.Span>
            Aulas na Praia Mansa de Sexta à Domingo das 06:00 às 14:00
          </Styled.Span>
        </Styled.Container>
      </Styled.Background>
      <Styled.Heading>
        <Styled.Container>
          <Image
            src={SVGImage}
            alt="Surfbot - Escola de surf"
            width="100%"
            height={50}
            title="Surfbot - Escola de surf"
            draggable={false}
          />
          <Styled.Menu>
            <ul>
              <li>
                <a href="#beach">Praia</a>
              </li>
              <li>
                <a href="#lessons">Aulas</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <a href="#register">Matricule-se</a>
              </li>
            </ul>
          </Styled.Menu>
        </Styled.Container>
      </Styled.Heading>
    </Styled.Header>
  );
}
