import { ReactNode, TableHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableFieldBodyRowProps
  extends TableHTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export default function TableFieldBodyRow({
  children,
  ...rest
}: ITableFieldBodyRowProps) {
  return <Container {...rest}>{children}</Container>;
}
