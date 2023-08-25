import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Icon, Input } from "@/components";

import { IFieldDTO } from "../../dtos/IFieldDTO";
import { fields } from "../../utils";

import { Container } from "./styles";

interface IProps {
  openComponents: boolean;
  setOpenComponents: (value: boolean) => void;
}

export default function MenuComponents({
  openComponents,
  setOpenComponents,
}: IProps) {
  const navigate = useNavigate();
  const { component } = useParams();

  const [value, setValue] = useState("");

  const fieldsFiltered =
    value.length === 0
      ? fields
      : fields.filter((field) =>
          field.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
        );

  function handleSelect(field: IFieldDTO) {
    if (component === field.name) {
      navigate(`/design`);
      setOpenComponents(false);
    } else {
      navigate(`/design/${field.name}`);
      setOpenComponents(false);
    }
  }

  return (
    <Container className={openComponents ? "opened" : "closed"}>
      <Input.Root variant="tertiary">
        <Input.Field.Root id="field-input-menu">
          <Input.Field.Label label="Pesquise o nome do componente" />
          <Input.Field.Input
            name="menu"
            value={value}
            setValue={(valueUpdate) => setValue(valueUpdate)}
          />
          <Input.Field.RightIcon icon="search" />
        </Input.Field.Root>
      </Input.Root>

      {fieldsFiltered.map((field) => (
        <button
          key={field.name}
          className={`${component === field.name ? "selected" : ""}`}
          type="button"
          onClick={() => handleSelect(field)}
        >
          {field.component ? (
            <Icon.Root
              icon="check"
              fill={component === field.name ? "white" : "green"}
            />
          ) : (
            <Icon.Root icon="close" fill="red" />
          )}

          {field.test ? (
            <Icon.Root
              icon="check"
              fill={component === field.name ? "white" : "green"}
            />
          ) : (
            <Icon.Root icon="close" fill="red" />
          )}

          {field.responsive ? (
            <Icon.Root
              icon="check"
              fill={component === field.name ? "white" : "green"}
            />
          ) : (
            <Icon.Root icon="close" fill="red" />
          )}

          {field.dark ? (
            <Icon.Root
              icon="check"
              fill={component === field.name ? "white" : "green"}
            />
          ) : (
            <Icon.Root icon="close" fill="red" />
          )}

          <p>{field.name}</p>
        </button>
      ))}
    </Container>
  );
}
