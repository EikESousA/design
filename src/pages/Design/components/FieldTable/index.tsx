/* eslint-disable no-alert */
import { useState } from "react";

import { ButtonDefault, ButtonIcon, Input, Switch, Table } from "@/components";

import { datas } from "./utils";
import { paginate, filter } from "./utils";

import { FieldContainer, FieldContent, CardUser } from "../../styles";

export default function FieldTable() {
  const [page, setPage] = useState<number>(1);

  const [name, setName] = useState<string>("");

  const datasFilter =
    datas.length > 0
      ? name.length > 0
        ? paginate({
            array: filter({
              array: datas,
              object: "name",
              search: name,
            }),
            page_number: page,
            page_size: 5,
          })
        : paginate({
            array: datas,
            page_number: page,
            page_size: 5,
          })
      : [];

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
            <Table.Actions>
              <div
                style={{
                  width: "100%",
                  padding: "0 1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "60%", maxWidth: "25rem" }}>
                  <Input.Root>
                    <Input.Field.Root id="table-search">
                      <Input.Field.Label label="Pesquise pelo nome ou e-mail" />
                      <Input.Field.Input
                        name="name"
                        value={name}
                        setValue={(value: string) => setName(value)}
                      />
                      <Input.Field.RightIcon icon="search" />
                    </Input.Field.Root>
                  </Input.Root>
                </div>

                <ButtonDefault.Root onClick={() => alert("Botao apertado!")}>
                  <ButtonDefault.Label label="Cadastrar" />
                </ButtonDefault.Root>
              </div>
            </Table.Actions>
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
                {datasFilter.map((data) => (
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
              pages={6}
            />
          </Table.Root>
        </div>
      </FieldContent>
    </FieldContainer>
  );
}
