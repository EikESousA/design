import { ReactNode } from "react";

import { Container } from "./styles";

interface ITableFieldBodyRootProps {
  children: ReactNode;
}

export default function TableFieldBodyRoot({
  children,
}: ITableFieldBodyRootProps) {
  return <Container>{children}</Container>;
}
