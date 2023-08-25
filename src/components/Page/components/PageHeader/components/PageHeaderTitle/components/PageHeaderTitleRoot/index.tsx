import { ReactNode } from "react";

import { Container } from "./styles";

interface IPageHeaderTitleRootProps {
  title: string;
  children?: ReactNode;
  datatestid?: string;
}

export default function PageHeaderTitleRoot({
  title,
  children,
  datatestid,
}: IPageHeaderTitleRootProps) {
  return (
    <Container data-testid={datatestid}>
      <p>{title}</p>
      {children}
    </Container>
  );
}
