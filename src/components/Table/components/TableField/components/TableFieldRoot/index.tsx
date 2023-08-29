import { ReactNode } from "react";

import { Container } from "./styles";

interface ITableFieldRootProps {
  children: ReactNode;
}

export default function TableFieldRoot({ children }: ITableFieldRootProps) {
  return (
    <Container>
      <table>{children}</table>
    </Container>
  );
}
