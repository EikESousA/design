import { useState } from "react";

import { Input, Switch, Checkbox } from "@/components";
import { ICheckboxOptionsDTO } from "@/components/Checkbox/components/CheckboxRoot";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

const optionsDefault = [
  {
    label: "Exemplo1",
    value: "exemplo1",
    disabled: false,
  },
  {
    label: "Exemplo2",
    value: "exemplo2",
    disabled: false,
  },
  {
    label: "Exemplo3",
    value: "exemplo3",
    disabled: false,
  },
] as ICheckboxOptionsDTO[];

export default function FieldCheckbox() {
  const [label, setLabel] = useState("");

  const [selected, setSelected] = useState<ICheckboxOptionsDTO[]>([]);
  const [required, setRequired] = useState<boolean>(false);

  const [options, setOptions] = useState(optionsDefault);

  function changeLabel(value: string) {
    const updatedOptions = [...options];

    updatedOptions[0].label = value;

    setOptions(updatedOptions);
  }

  function changeDisabled() {
    const updatedOptions = [...options];

    updatedOptions[0].disabled = !options[0].disabled;

    setOptions(updatedOptions);
  }

  return (
    <FieldContainer>
      <legend>Checkbox</legend>
      <FieldContent>
        <div
          style={{
            minWidth: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--aliases-100)",
            padding: "1rem",
            borderRadius: "2rem",
          }}
        >
          <Checkbox.Root
            name="field-checkbox-main"
            title={label}
            options={options}
            checked={selected}
            setChecked={(value) => setSelected(value)}
            required={required ? 2 : 0}
          />
        </div>
      </FieldContent>

      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-checkbox-label">
              <Input.Field.Label label="Label" />
              <Input.Field.Input
                name="label"
                value={label}
                setValue={(value) => setLabel(value)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-checkbox-label-0">
              <Input.Field.Label label="Label do item 1" />
              <Input.Field.Input
                name="labelitem"
                value={options[0].label}
                setValue={(value) => changeLabel(value)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Switch.Root
            id="field-checkbox-disabled-1"
            label="Desabilitado do item 1"
            checked={!!options[0].disabled}
            setChecked={() => changeDisabled()}
          />
        </section>
        <section>
          <Switch.Root
            id="field-checkbox-required"
            label="Obrigatorio selecionar"
            checked={required}
            setChecked={(value) => setRequired(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
