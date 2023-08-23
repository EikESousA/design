import { ReactNode } from "react";

import { Container } from "./styles";

interface ICardRootProps {
  children: ReactNode;
}

export default function CardRoot({ children }: ICardRootProps) {
  return <Container>{children}</Container>;
}
