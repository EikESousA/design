import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function Reports() {
  return (
    <Container>
      <PageTitle.Root title="Relatórios">
        <PageTitle.Subtitle subtitle="Pagina com todos os relatórios." />
      </PageTitle.Root>
    </Container>
  );
}
