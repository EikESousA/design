import { ReactNode, TableHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableFieldHeadRootProps
  extends TableHTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export default function TableFieldHeadRoot({
  children,
  ...rest
}: ITableFieldHeadRootProps) {
  return <Container {...rest}>{children}</Container>;
}
