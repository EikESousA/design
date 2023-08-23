import { useNavigate } from "react-router-dom";

import { PageTitle } from "@/components";
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

import { Container } from "./styles";

export default function Administration() {
  const navigate = useNavigate();

  function handleSubmit(url: string) {
    navigate(url);
  }
  return (
    <Container>
      <PageTitle.Root title="Administração">
        <PageTitle.Subtitle subtitle="Personalize o seu chatbot de acordo com as suas preferências! Nesta seção, você tem acesso a uma variedade de recursos incríveis, como etiquetas, filas de atendimento, fluxo de conversa do chatbot, mensagens rápidas e muito mais. Aproveite ao máximo essas opções para criar a melhor experiência possível para os seus usuários!" />
      </PageTitle.Root>

      <main>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconQueues />
          <p>Fila</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconConnections />
          <p>Conexões</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconChatbot />
          <p>Chatbot</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconTags />
          <p>Etiquetas</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconFast />
          <p>Mensagens Rápidas</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconUsers />
          <p>Usuários</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconIntegrations />
          <p>Integrações</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconModules />
          <p>Módulos</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconSatisfaction />
          <p>Pesquisa de Satisfação</p>
        </button>
        <button type="button" onClick={() => handleSubmit("/home")}>
          <IconConfig />
          <p>Configurações Gerais</p>
        </button>
      </main>
    </Container>
  );
}
