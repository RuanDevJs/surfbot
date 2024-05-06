import Image from "next/image";
import * as Styled from "./style";

import Waves from "@/assets/home/ondas.svg";
import Lesson from "@/components/Lesson";

export default function Lessons() {
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
        <Lesson />
        <Lesson />
        <Lesson />
      </Styled.Lessons>
    </Styled.Container>
  );
}
