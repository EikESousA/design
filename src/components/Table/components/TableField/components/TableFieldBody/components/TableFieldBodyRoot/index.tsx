import { ReactNode, TableHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableFieldBodyRootProps
  extends TableHTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export default function TableFieldBodyRoot({
  children,
  ...rest
}: ITableFieldBodyRootProps) {
  return <Container {...rest}>{children}</Container>;
}
