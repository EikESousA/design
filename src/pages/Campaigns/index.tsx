import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function Campaigns() {
  return (
    <Container>
      <PageTitle.Root title="Campanhas">
        <PageTitle.Subtitle subtitle="Pagina de todas as campanhas." />
      </PageTitle.Root>
    </Container>
  );
}
