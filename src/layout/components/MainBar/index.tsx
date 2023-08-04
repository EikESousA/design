import { ReactNode } from "react";
import { Headerbar } from "..";
import { Container } from "./styles";

interface IProps {
  children: ReactNode;
}

export default function Mainbar({ children }: IProps) {
  return (
    <Container>
      <Headerbar />

      <main>{children}</main>

      <footer>
        <p> Copyright © 2023 - Greenchat. Todos os direitos reservados.</p>
      </footer>
    </Container>
  );
}
