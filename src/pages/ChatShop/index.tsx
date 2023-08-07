import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function ChatShop() {
  return (
    <Container>
      <PageTitle.Root title="Chat Shop">
        <PageTitle.Subtitle subtitle="Pagina de todas as configurações de compras." />
      </PageTitle.Root>
    </Container>
  );
}
