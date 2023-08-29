import { ReactNode, TableHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableFieldRootProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export default function TableFieldRoot({
  children,
  ...rest
}: ITableFieldRootProps) {
  return (
    <Container>
      <table {...rest}>{children}</table>
    </Container>
  );
}
