import { ReactNode } from "react";

import { Container } from "./styles";

interface ITableFieldHeadRootProps {
  children: ReactNode;
}

export default function TableFieldHeadRoot({
  children,
}: ITableFieldHeadRootProps) {
  return <Container>{children}</Container>;
}
