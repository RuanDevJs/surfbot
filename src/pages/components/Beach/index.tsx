import Image from "next/image";
import * as Styled from "./style";

import GalleryPicture from "@/assets/home/foto-galeria.jpg";
import MapaPicture from "@/assets/home/mapa.jpg";

import FootSVG from "@/assets/home/sandalhas.svg";
import CoconutSVG from "@/assets/home/coco.svg";
import FloaterSVG from "@/assets/home/boia.svg";

export default function Beach() {
  return (
    <Styled.Container>
      <Styled.Pictures>
        <Image
          src={GalleryPicture}
          width={"100%"}
          height={"100%"}
          alt="Galeria de Imagens"
          draggable={false}
        />
        <Styled.Locale>
          <Image
            src={MapaPicture}
            width={"100%"}
            height={"100%"}
            alt="Galeria de Imagens"
            draggable={false}
          />
          <h2>Como chegar</h2>
          <ul>
            <li>
              <span>Carro</span>
              <p>pela via Lúcio Costa sentido Barra</p>
            </li>
            <li>
              <span>Ônibus</span>
              <p>linhas 2333, 138, 189 e 170</p>
            </li>
            <li>
              <span>Metrô</span>
              <p>linha azul sentido Zona Sul</p>
            </li>
          </ul>
        </Styled.Locale>
      </Styled.Pictures>
      <Styled.Information>
        <h1>
          <span>Aulas</span> em uma das melhores praias do <span>Rio</span>
        </h1>
        <Styled.Details>
          <Styled.Detail>
            <Image
              src={FootSVG}
              width={"100%"}
              height={"100%"}
              alt="8km de costa"
              title="8km de costa"
              draggable={false}
            />
            <h2>8km de costa</h2>
          </Styled.Detail>
          <Styled.Detail>
            <Image
              src={CoconutSVG}
              width={"100%"}
              height={"100%"}
              alt="Restaurantes à beira mar"
              title="Restaurantes à beira mar"
              draggable={false}
            />
            <h2>8km de costa</h2>
          </Styled.Detail>
          <Styled.Detail>
            <Image
              src={FloaterSVG}
              width={"100%"}
              height={"100%"}
              alt="Salva-vidas a cada 300m"
              title="Salva-vidas a cada 300m"
              draggable={false}
            />
            <h2>Salva-vidas a cada 300m</h2>
          </Styled.Detail>
        </Styled.Details>
        <p>
          Como cidade capital, abriga na zona chamada Plateau, promontório à
          beira-mar, edifícios públicos e outras construções de importância,
          como o Palácio Presidencial, construído no fim do século XIX para ser
          a residência do governador português.
        </p>
        <p>
          Como cidade capital, abriga na zona chamada Plateau, promontório à
          beira-mar, edifícios públicos e outras construções de importância,
          como o Palácio Presidencial, construído no fim do século XIX para ser
          a residência do governador português.
        </p>
      </Styled.Information>
    </Styled.Container>
  );
}
