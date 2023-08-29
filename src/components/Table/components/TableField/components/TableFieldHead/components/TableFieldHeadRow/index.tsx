import { ReactNode, TableHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableFieldHeadRowProps
  extends TableHTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export default function TableFieldHeadRow({
  children,
  ...rest
}: ITableFieldHeadRowProps) {
  return <Container {...rest}>{children}</Container>;
}
