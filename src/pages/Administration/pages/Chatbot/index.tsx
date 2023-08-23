import { PageTitle } from "@/components";

import { Container } from "./styles";

export default function Chatbot() {
  return (
    <Container>
      <PageTitle.Root title="Administração">
        <PageTitle.Subtitle subtitle="Personalize o seu chatbot de acordo com as suas preferências! Nesta seção, você tem acesso a uma variedade de recursos incríveis, como etiquetas, filas de atendimento, fluxo de conversa do chatbot, mensagens rápidas e muito mais. Aproveite ao máximo essas opções para criar a melhor experiência possível para os seus usuários!" />
      </PageTitle.Root>
    </Container>
  );
}
