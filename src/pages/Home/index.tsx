import { Page, Tags } from "@/components";

import test from "./test";

import { Container, Content } from "./styles";

export default function Home() {
  return (
    <Container>
      <Page.Root>
        <Page.Header.Root>
          <Page.Header.Title.Root title="Administração">
            <Page.Header.Title.Help />
          </Page.Header.Title.Root>
          <Page.Header.Subtitle subtitle="Personalize o seu chatbot de acordo com as suas preferências! Nesta seção, você tem acesso a uma variedade de recursos incríveis, como etiquetas, filas de atendimento, fluxo de conversa do chatbot, mensagens rápidas e muito mais. Aproveite ao máximo essas opções para criar a melhor experiência possível para os seus usuários!" />
        </Page.Header.Root>
        <Page.Main>
          <Content>
            <Tags.Root tags={test} type="tag" />
            <p>Texto do lado</p>
          </Content>
        </Page.Main>
      </Page.Root>
    </Container>
  );
}
