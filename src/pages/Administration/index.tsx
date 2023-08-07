import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function Administration() {
  return (
    <Container>
      <PageTitle.Root title="Administração">
        <PageTitle.Subtitle subtitle="Pagina de todas as configurações da administração." />
      </PageTitle.Root>
    </Container>
  );
}
