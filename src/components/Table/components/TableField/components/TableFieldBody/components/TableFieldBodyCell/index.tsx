import { ReactNode, TdHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableFieldBodyCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  datalabel: string;
  children: ReactNode;
}

export default function TableFieldBodyCell({
  datalabel,
  children,
  ...rest
}: ITableFieldBodyCellProps) {
  return (
    <Container {...rest} data-label={datalabel}>
      {children}
    </Container>
  );
}
