import { ReactNode } from "react";

import { Container } from "./styles";

interface ITableFieldBodyColumnProps {
  color?: string;
  children: ReactNode;
}

export default function TableFieldBodyColumn({
  color = "transparent",
  children,
}: ITableFieldBodyColumnProps) {
  return (
    <Container className={color ? "color" : ""} borderColor={color}>
      {children}
    </Container>
  );
}
