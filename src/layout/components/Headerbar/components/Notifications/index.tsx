/* eslint-disable no-alert */

import { ButtonIcon } from "@/components";

import { Notification } from "..";

import { Container } from "./styles";

export default function Notifications() {
  return (
    <Container>
      <header>
        <p>Notificações</p>
        <button type="button" onClick={() => alert("Teste")}>
          Limpar todas as notificações
        </button>
      </header>
      <nav>
        <button className="active" type="button" onClick={() => alert("Teste")}>
          <p>Abertos</p>
          <span>2</span>
        </button>
        <button
          className="inactive"
          type="button"
          onClick={() => alert("Teste")}
        >
          <p>Pendentes</p>
          <span>+9</span>
        </button>
        <button
          className="inactive"
          type="button"
          onClick={() => alert("Teste")}
        >
          <p>Grupos</p>
        </button>
        <button
          className="inactive"
          type="button"
          onClick={() => alert("Teste")}
        >
          <p>Shop</p>
        </button>
      </nav>
      <main>
        <ul>
          <Notification.Root>
            <Notification.Icon icon="profile" />
            <Notification.Text
              title="EikE SousA"
              subtitle="Ola, meu nome e eike!"
            />
            <Notification.Buttons>
              <ButtonIcon.Root
                variant="secondary"
                icon="eye"
                size="sm"
                onClick={() => alert("123")}
              />
              <ButtonIcon.Root
                variant="danger"
                icon="delete"
                size="sm"
                onClick={() => alert("123")}
              />
            </Notification.Buttons>
            <Notification.Date date="2023-07-21T20:40:15.000Z" />
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon="profile" />
            <Notification.Text
              title="EikE SousAsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
              subtitle="Ola, meu nome e eikessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss!"
            />
            <Notification.Buttons>
              <ButtonIcon.Root
                variant="secondary"
                icon="eye"
                size="sm"
                onClick={() => alert("123")}
              />
              <ButtonIcon.Root
                variant="danger"
                icon="delete"
                size="sm"
                onClick={() => alert("123")}
              />
            </Notification.Buttons>
            <Notification.Date date="2023-07-21T20:40:15.000Z" />
          </Notification.Root>
        </ul>
      </main>
    </Container>
  );
}
