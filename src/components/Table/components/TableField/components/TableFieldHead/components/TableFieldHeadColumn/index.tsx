import { ReactNode } from "react";

import { Container } from "./styles";

interface ITableFieldHeadColumnProps {
  children: ReactNode;
}

export default function TableFieldHeadColumn({
  children,
}: ITableFieldHeadColumnProps) {
  return <Container>{children}</Container>;
}
