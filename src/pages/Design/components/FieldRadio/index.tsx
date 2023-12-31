import { useState } from "react";

import { Radio, Input, Switch } from "@/components";

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
];

export default function FieldRadio() {
  const [label, setLabel] = useState<string>("");
  const [value, setValue] = useState<string>("exemplo1");

  const [options, setOptions] = useState(optionsDefault);

  function changeLabel(updateValue: string) {
    const updatedOptions = [...options];

    updatedOptions[0].label = updateValue;

    setOptions(updatedOptions);
  }

  function changeDisabled() {
    const updatedOptions = [...options];

    updatedOptions[0].disabled = !options[0].disabled;

    setOptions(updatedOptions);
  }

  return (
    <FieldContainer>
      <legend>Radio</legend>
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
          <Radio.Root
            name="field-radio-main"
            title={label}
            options={options}
            checked={value}
            setChecked={(updateValue) => setValue(updateValue)}
          />
        </div>
      </FieldContent>

      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-radio-label">
              <Input.Field.Label label="Label" />
              <Input.Field.Input
                name="label"
                value={label}
                setValue={(updateValue) => setLabel(updateValue)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-radio-label-1">
              <Input.Field.Label label="Label do item 1" />
              <Input.Field.Input
                name="labelitem"
                value={options[0].label}
                setValue={(updateValue) => changeLabel(updateValue)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Switch.Root
            id="field-radio-disabled-1"
            label="Desabilitado do item 1"
            checked={options[0].disabled}
            setChecked={() => changeDisabled()}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
