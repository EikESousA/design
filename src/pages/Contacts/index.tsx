import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function Contacts() {
  return (
    <Container>
      <PageTitle.Root title="Contatos">
        <PageTitle.Subtitle subtitle="Pagina de todas os contatos." />
      </PageTitle.Root>
    </Container>
  );
}
