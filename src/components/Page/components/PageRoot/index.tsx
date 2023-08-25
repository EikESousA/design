import { ReactNode } from "react";

import { Container } from "./styles";

interface IPageRootProps {
  children: ReactNode;
  datatestid?: string;
}

export default function PageRoot({ children, datatestid }: IPageRootProps) {
  return <Container data-testid={datatestid}>{children}</Container>;
}
