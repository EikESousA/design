import { ReactNode } from "react";

import { Icon } from "@/components";

import { Container } from "./styles";

interface ITitleRootProps {
  title: string;
  help?: string;
  children?: ReactNode;
  datatestid?: string;
}

export default function TitleRoot({
  title,
  help,
  children,
  datatestid,
}: ITitleRootProps) {
  return (
    <Container data-testid={datatestid}>
      <section className="title">
        <p>{title}</p>
        {help ? <Icon.Root icon="help" /> : null}
      </section>
      {children}
    </Container>
  );
}
