import Header from "@/components/Header";
import * as Styled from "@/styles/Home";

import { ArrowRight } from "phosphor-react";

import BackgroundImage from "../assets/home/bg-intro.jpg";
import Beach from "./components/Beach";
import Lessons from "./components/Lessons";

export default function Home() {
  return (
    <div>
      <Header />
      <Styled.Main>
        <Styled.Image src={BackgroundImage.src} draggable={false} />
        <Styled.Info>
          <h1>Escola de Surf</h1>
          <Styled.Form>
            <Styled.Input placeholder="Email" type="email" />
            <Styled.Button>
              MATRICULE-SE <ArrowRight size={18} />
            </Styled.Button>
          </Styled.Form>
        </Styled.Info>
      </Styled.Main>
      <Beach />
      <Lessons />
    </div>
  );
}
