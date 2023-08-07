import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function Tickets() {
  return (
    <Container>
      <PageTitle.Root title="Atendimentos">
        <PageTitle.Subtitle subtitle="Pagina com todos os atendimentos." />
      </PageTitle.Root>
    </Container>
  );
}
