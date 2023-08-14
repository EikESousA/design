/* eslint-disable no-alert */

import { useMemo, useState, useEffect } from "react";

import { ButtonIcon } from "@/components";

import { Notification } from "..";

import { INotificationDTO } from "../../dtos/INotificationDTO";
import datasTest from "../../test/datas";

import { Container } from "./styles";

export default function Notifications() {
  const [selected, setSelected] = useState(0);

  const [datas, setDatas] = useState<INotificationDTO[]>([]);

  const datasFiltered = useMemo(() => {
    if (selected === 0) {
      return datas.filter(
        (item) => item.type === "ticket" && item.status === "open",
      );
    }

    if (selected === 1) {
      return datas.filter(
        (item) => item.type === "ticket" && item.status === "pending",
      );
    }

    if (selected === 2) {
      return datas.filter((item) => item.type === "group");
    }

    if (selected === 3) {
      return datas.filter((item) => item.type === "shop");
    }

    return [];
  }, [datas, selected]);

  const datasLength = useMemo(() => {
    return {
      open: datas.filter(
        (item) => item.type === "ticket" && item.status === "open",
      ).length,
      pending: datas.filter(
        (item) => item.type === "ticket" && item.status === "pending",
      ).length,
      group: datas.filter((item) => item.type === "group").length,
      shop: datas.filter((item) => item.type === "shop").length,
    };
  }, [datas]);

  function handleDelete(id: string) {
    const datasUpdated = [...datas];

    const findIndexData = datas.findIndex((item) => item.id === id);

    if (findIndexData >= 0) {
      datasUpdated.splice(findIndexData, 1);
      setDatas(datasUpdated);
    }
  }

  function handleDeleteAll() {
    setDatas([]);
  }

  useEffect(() => {
    setDatas(datasTest);
  }, []);

  return (
    <Container>
      <header>
        <p>Notificações</p>
        <button type="button" onClick={() => handleDeleteAll()}>
          Limpar todas as notificações
        </button>
      </header>
      <nav>
        <button
          className={selected === 0 ? "active" : "inactive"}
          type="button"
          onClick={() => setSelected(0)}
          disabled={selected === 0}
        >
          <p>Abertos</p>
          {datasLength.open > 0 ? <span>{datasLength.open}</span> : null}
        </button>
        <button
          className={selected === 1 ? "active" : "inactive"}
          type="button"
          onClick={() => setSelected(1)}
          disabled={selected === 1}
        >
          <p>Pendentes</p>
          {datasLength.pending > 0 ? <span>{datasLength.pending}</span> : null}
        </button>
        <button
          className={selected === 2 ? "active" : "inactive"}
          type="button"
          onClick={() => setSelected(2)}
          disabled={selected === 2}
        >
          <p>Grupos</p>
          {datasLength.group > 0 ? <span>{datasLength.group}</span> : null}
        </button>
        <button
          className={selected === 3 ? "active" : "inactive"}
          type="button"
          onClick={() => setSelected(3)}
          disabled={selected === 3}
        >
          <p>Shop</p>
          {datasLength.shop > 0 ? <span>{datasLength.shop}</span> : null}
        </button>
      </nav>
      <main>
        <ul>
          {datasFiltered.length > 0 ? (
            <ul>
              {datasFiltered.map((data) => (
                <Notification.Root key={`notification-${data.id}`}>
                  <Notification.Icon
                    icon={
                      data.type === "ticket"
                        ? "profile"
                        : data.type === "group"
                        ? "profilegroup"
                        : "request"
                    }
                    type={data.connection_type}
                  />
                  <Notification.Text
                    title={data.title}
                    subtitle={data.subtitle}
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
                      onClick={() => handleDelete(data.id)}
                    />
                  </Notification.Buttons>
                  <Notification.Date date={data.date} />
                </Notification.Root>
              ))}
            </ul>
          ) : null}
        </ul>
      </main>
    </Container>
  );
}
