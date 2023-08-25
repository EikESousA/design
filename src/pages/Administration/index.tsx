import { useNavigate } from "react-router-dom";

import { Page } from "@/components";
import {
  IconChatbot,
  IconConfig,
  IconConnections,
  IconFast,
  IconIntegrations,
  IconModules,
  IconQueues,
  IconSatisfaction,
  IconTags,
  IconUsers,
} from "@/components/Icon/svgs";

import { Container, Content } from "./styles";

export default function Administration() {
  const navigate = useNavigate();

  function handleSubmit(url: string) {
    navigate(url);
  }
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
            <button
              type="button"
              onClick={() => handleSubmit("/administration/queues")}
            >
              <IconQueues />
              <p>Fila</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/connections")}
            >
              <IconConnections />
              <p>Conexões</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/chatbot")}
            >
              <IconChatbot />
              <p>Chatbot</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/tags")}
            >
              <IconTags />
              <p>Etiquetas</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/fast")}
            >
              <IconFast />
              <p>Mensagens Rápidas</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/users")}
            >
              <IconUsers />
              <p>Usuários</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/integrations")}
            >
              <IconIntegrations />
              <p>Integrações</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/modules")}
            >
              <IconModules />
              <p>Módulos</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/satisfaction")}
            >
              <IconSatisfaction />
              <p>Pesquisa de Satisfação</p>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("/administration/configs")}
            >
              <IconConfig />
              <p>Configurações Gerais</p>
            </button>
          </Content>
        </Page.Main>
      </Page.Root>
    </Container>
  );
}
