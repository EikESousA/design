import { ReactNode } from "react";

import { Container } from "./styles";

interface ITableActionsProps {
  children: ReactNode;
}

export default function TableActions({ children }: ITableActionsProps) {
  return <Container>{children}</Container>;
}
