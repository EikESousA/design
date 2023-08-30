/* eslint-disable no-alert */
import { useState, useEffect } from "react";

import { ButtonDefault, ButtonIcon, Input, Switch, Table } from "@/components";

import { datas } from "./utils";
import { paginate, filter } from "./utils";

import { FieldContainer, CardUser } from "../../styles";

export default function FieldTable() {
  const [page, setPage] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <FieldContainer>
      <legend>Table</legend>

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
                    disabled={loading}
                  />
                  <Input.Field.RightIcon icon="search" />
                </Input.Field.Root>
              </Input.Root>
            </div>

            <ButtonDefault.Root
              onClick={() => alert("Botao apertado!")}
              disabled={loading}
            >
              <ButtonDefault.Label label="Cadastrar" />
            </ButtonDefault.Root>
          </div>
        </Table.Actions>
        <Table.Field.Root>
          <Table.Field.Head.Root>
            <Table.Field.Head.Row>
              <Table.Field.Head.Cell>Usuario</Table.Field.Head.Cell>
              <Table.Field.Head.Cell>E-mail</Table.Field.Head.Cell>
              <Table.Field.Head.Cell>Perfil</Table.Field.Head.Cell>
              <Table.Field.Head.Cell>Ativo</Table.Field.Head.Cell>
              <Table.Field.Head.Cell> </Table.Field.Head.Cell>
            </Table.Field.Head.Row>
          </Table.Field.Head.Root>
          <Table.Field.Body.Root>
            {loading ? (
              <Table.Field.Body.Loading colSpan={5} />
            ) : (
              <>
                {datasFilter.map((data) => (
                  <Table.Field.Body.Row key={`table-body-row-${data.id}`}>
                    <Table.Field.Body.Cell
                      datalabel="Nome"
                      style={{
                        borderLeft: `4px solid ${data.color || "transparent"}`,
                      }}
                    >
                      <CardUser>
                        <img
                          src={data.url}
                          alt={`Imagem do usuario ${data.name}`}
                        />
                        <p>{data.name}</p>
                      </CardUser>
                    </Table.Field.Body.Cell>
                    <Table.Field.Body.Cell datalabel="E-mail">
                      {data.email}
                    </Table.Field.Body.Cell>
                    <Table.Field.Body.Cell datalabel="Perfil">
                      {data.profile}
                    </Table.Field.Body.Cell>
                    <Table.Field.Body.Cell datalabel="Status">
                      <Switch.Root
                        checked={data.active}
                        setChecked={() => alert("Botao apertado!")}
                        label={data.active ? "Ativado" : "Desativado"}
                        color
                        size="sm"
                      />
                    </Table.Field.Body.Cell>
                    <Table.Field.Body.Cell datalabel="Ações">
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
                    </Table.Field.Body.Cell>
                  </Table.Field.Body.Row>
                ))}
              </>
            )}
          </Table.Field.Body.Root>
        </Table.Field.Root>
        <Table.Pagination
          page={page}
          setPage={(value: number) => setPage(value)}
          pages={6}
          loading={loading}
        />
      </Table.Root>
    </FieldContainer>
  );
}
