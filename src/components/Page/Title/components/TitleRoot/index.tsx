import { ReactNode } from "react";

import { Container } from "./styles";
import { Icon } from "@/components";

interface ITitleRootProps {
  title: string;
  children?: ReactNode;
  datatestid?: string;
}

export default function TitleRoot({
  title,
  children,
  datatestid,
}: ITitleRootProps) {
  return (
    <Container data-testid={datatestid}>
      <section className="title">
        <p>{title}</p>
        <Icon.Root icon="help" />
      </section>
      {children}
    </Container>
  );
}
