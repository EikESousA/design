/* eslint-disable @typescript-eslint/no-empty-function */
import { ButtonDefault, ButtonIcon, Card, Page, Switch } from "@/components";

import { CardContent, Container, Content } from "./styles";

export default function Chatbot() {
  return (
    <Container>
      <Page.Root>
        <Page.Header.Root>
          <Page.Header.Title.Root title="Chatbot">
            <Page.Header.Title.Help />
          </Page.Header.Title.Root>
          <Page.Header.Subtitle subtitle="Personalize o seu chatbot de acordo com as suas preferências! Nesta seção, você tem acesso a uma variedade de recursos incríveis, como etiquetas, filas de atendimento, fluxo de conversa do chatbot, mensagens rápidas e muito mais. Aproveite ao máximo essas opções para criar a melhor experiência possível para os seus usuários!" />
        </Page.Header.Root>
        <Page.Main>
          <Content>
            <Card.Root>
              <CardContent>
                <p>Chatbot Test</p>

                <Switch.Root
                  id="field-switch-main"
                  label="ativado"
                  checked
                  size="sm"
                  color
                  setChecked={() => {}}
                />

                <div className="buttons">
                  <ButtonDefault.Root onClick={() => {}}>
                    <ButtonDefault.LeftIcon icon="alert" />
                    <ButtonDefault.Label label="Fluxo de Atendimento" />
                  </ButtonDefault.Root>
                  <ButtonIcon.Root
                    variant="tertiary"
                    icon="edit"
                    onClick={() => {}}
                  />
                  <ButtonIcon.Root
                    variant="tertiary"
                    icon="delete"
                    onClick={() => {}}
                  />
                </div>
              </CardContent>
            </Card.Root>
          </Content>
        </Page.Main>
      </Page.Root>
    </Container>
  );
}
