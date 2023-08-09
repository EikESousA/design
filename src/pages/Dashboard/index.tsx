import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <PageTitle.Root title="Dashboard">
        <PageTitle.Subtitle subtitle="Pagina com todos os gráficos e teste e mais testes sem testes." />
      </PageTitle.Root>
    </Container>
  );
}
