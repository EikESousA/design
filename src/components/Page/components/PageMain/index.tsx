import { ReactNode } from "react";

import { Container } from "./styles";

interface IPageMainProps {
  children: ReactNode;
  datatestid?: string;
}

export default function PageMain({ children, datatestid }: IPageMainProps) {
  return <Container data-testid={datatestid}>{children}</Container>;
}
