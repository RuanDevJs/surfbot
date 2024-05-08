import Image from "next/image";
import * as Styled from "./style";

import GalleryPicture from "@/assets/home/foto-galeria.jpg";
import MapaPicture from "@/assets/home/mapa.jpg";

import FootSVG from "@/assets/home/sandalhas.svg";
import CoconutSVG from "@/assets/home/coco.svg";
import FloaterSVG from "@/assets/home/boia.svg";
import { ArrowRight } from "phosphor-react";

export default function Contact() {
  return (
    <Styled.Container>
      <h1>Contato</h1>
      <Styled.Form>
        <Styled.Wrap>
          <Styled.Input>
            <label>Nome Completo</label>
            <input type="text" placeholder="Qual seu nome completo ?" />
          </Styled.Input>
          <Styled.Input>
            <label>E-mail</label>
            <input type="email" placeholder="Qual seu e-mail ?" />
          </Styled.Input>
          <Styled.Input>
            <label>Mensagem</label>
            <textarea
              placeholder="Digite aqui sua mensagem"
              rows="4"
              cols="50"
            />
          </Styled.Input>
          <Styled.Button>
            <span>Enviar Mensagem</span> <ArrowRight size={18} color="#fff" />
          </Styled.Button>
        </Styled.Wrap>
        <Styled.Contact>
          <ul>
            <li>
              <h3>Endereço</h3>
            </li>
            <li>
              <span>Praia Mansa nº 47</span>
            </li>
            <li>
              <span>Rio de Janeiro - RJ</span>
            </li>
            <li>
              <span>Procure a barraca vermelha</span>
            </li>
            <li className="border-bottom">
              <a href="#">
                VER NO MAPA <ArrowRight size={18} color="#EE2211" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Email & Telefone</h3>
            </li>
            <li>
              <span>contato@surfbot.com</span>
            </li>
            <li className="border-bottom">
              <span>21 99999-9999</span>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Horário</h3>
            </li>
            <li>
              <span>De sexta à Sábado</span>
            </li>
            <li>
              <span>Das 06:00 às 14:00</span>
            </li>
          </ul>
        </Styled.Contact>
      </Styled.Form>
    </Styled.Container>
  );
}
