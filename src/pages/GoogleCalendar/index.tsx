import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function GoogleCalendar() {
  return (
    <Container>
      <PageTitle.Root title="Google Agenda">
        <PageTitle.Subtitle subtitle="Pagina de todas as configurações do Google Agenda." />
      </PageTitle.Root>
    </Container>
  );
}
