import { ReactNode } from "react";

import { Container } from "./styles";

interface IPageHeaderRootProps {
  children: ReactNode;
  datatestid?: string;
}

export default function PageHeaderRoot({
  children,
  datatestid,
}: IPageHeaderRootProps) {
  return <Container data-testid={datatestid}>{children}</Container>;
}
