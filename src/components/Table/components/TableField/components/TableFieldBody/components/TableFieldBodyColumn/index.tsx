import { ReactNode } from "react";

import { Container } from "./styles";

interface ITableFieldBodyColumnProps {
  children: ReactNode;
}

export default function TableFieldBodyColumn({
  children,
}: ITableFieldBodyColumnProps) {
  return <Container>{children}</Container>;
}
