import { ReactNode, TdHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableFieldHeadCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export default function TableFieldHeadCell({
  children,
  ...rest
}: ITableFieldHeadCellProps) {
  return <Container {...rest}>{children}</Container>;
}
