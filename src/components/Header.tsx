import { MouseEvent, MouseEventHandler, useEffect, useRef } from "react";
import SVGImage from "@/assets/home/surfbot-logo.svg";

import Image from "next/image";
import * as Styled from "@/styles/Header";
import Link from "next/link";

export default function Header() {
  const navigationElement = useRef<HTMLDivElement>(null);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (navigationElement.current && navigationElement.current !== null) {
      event.preventDefault();

      const href = event.currentTarget.getAttribute("href")!;
      const getSectionById = document.getElementById(href.replace("#", ""));

      const distanceFromTop = getSectionById?.offsetTop!;
      window.scrollTo({
        top: distanceFromTop - 220,
        behavior: "smooth",
      });
    }
  }

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
          <Link href="/">
            <Image
              src={SVGImage}
              alt="Surfbot - Escola de surf"
              width="100%"
              height={50}
              title="Surfbot - Escola de surf"
              draggable={false}
            />
          </Link>
          <Styled.Menu ref={navigationElement}>
            <ul>
              <li>
                <a href="#beach" onClick={(event) => handleClick(event)}>
                  Praia
                </a>
              </li>
              <li>
                <a href="#lessons" onClick={(event) => handleClick(event)}>
                  Aulas
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(event) => handleClick(event)}>
                  Contato
                </a>
              </li>
              <li>
                <Link href="/register">Matricule-se</Link>
              </li>
            </ul>
          </Styled.Menu>
        </Styled.Container>
      </Styled.Heading>
    </Styled.Header>
  );
}
