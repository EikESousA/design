import { ReactNode, HtmlHTMLAttributes } from "react";

import { Container } from "./styles";

interface ITableActionsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function TableActions({ children }: ITableActionsProps) {
  return <Container>{children}</Container>;
}
