/* eslint-disable no-alert */
import { useState } from "react";

import { ButtonDefault, ButtonIcon, Switch, Table } from "@/components";

import { datas } from "./utils";

import { FieldContainer, FieldContent, CardUser } from "../../styles";

export default function FieldTable() {
  const [page, setPage] = useState<number>(1);

  return (
    <FieldContainer>
      <legend>Table</legend>
      <FieldContent>
        <div
          style={{
            height: "calc(100vh - 18rem)",
            width: "calc(100vw - 45rem)",
            backgroundColor: "var(--aliases-100)",
            padding: "1rem",
            borderRadius: "2rem",
          }}
        >
          <Table.Root>
            <Table.Field.Root>
              <Table.Field.Head.Root>
                <Table.Field.Head.Row>
                  <Table.Field.Head.Column>Usuario</Table.Field.Head.Column>
                  <Table.Field.Head.Column>E-mail</Table.Field.Head.Column>
                  <Table.Field.Head.Column>Perfil</Table.Field.Head.Column>
                  <Table.Field.Head.Column>Ativo</Table.Field.Head.Column>
                  <Table.Field.Head.Column> </Table.Field.Head.Column>
                </Table.Field.Head.Row>
              </Table.Field.Head.Root>
              <Table.Field.Body.Root>
                {datas.map((data) => (
                  <Table.Field.Body.Row
                    key={`table-body-row-${data.id}`}
                    color={data.color}
                  >
                    <Table.Field.Body.Column>
                      <CardUser>
                        <img
                          src={data.url}
                          alt={`Imagem do usuario ${data.name}`}
                        />
                        <p>{data.name}</p>
                      </CardUser>
                    </Table.Field.Body.Column>
                    <Table.Field.Body.Column>
                      {data.email}
                    </Table.Field.Body.Column>
                    <Table.Field.Body.Column>
                      {data.profile}
                    </Table.Field.Body.Column>
                    <Table.Field.Body.Column>
                      <Switch.Root
                        checked={data.active}
                        setChecked={() => alert("Botao apertado!")}
                        label={data.active ? "Ativado" : "Desativado"}
                        color
                        size="sm"
                      />
                    </Table.Field.Body.Column>
                    <Table.Field.Body.Column>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: "1rem",
                        }}
                      >
                        <ButtonDefault.Root
                          size="sm"
                          onClick={() => alert("Botao apertado!")}
                        >
                          <ButtonDefault.Label label="Gerenciar" />
                        </ButtonDefault.Root>
                        <ButtonIcon.Root
                          icon="delete"
                          size="sm"
                          variant="secondary"
                          onClick={() => alert("Botao apertado!")}
                        />
                      </div>
                    </Table.Field.Body.Column>
                  </Table.Field.Body.Row>
                ))}
              </Table.Field.Body.Root>
            </Table.Field.Root>
            <Table.Pagination
              page={page}
              setPage={(value: number) => setPage(value)}
              pages={7}
            />
          </Table.Root>
        </div>
      </FieldContent>
    </FieldContainer>
  );
}
