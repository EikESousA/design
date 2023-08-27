import { useState } from "react";

import { Switch, Input, Radio } from "@/components";
import { ISwitchSizeDTO } from "@/components/Switch/components/SwitchRoot";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

const optionsSize = [
  {
    label: "pequeno",
    value: "sm",
  },
  {
    label: "medio",
    value: "md",
  },
  {
    label: "grande",
    value: "lg",
  },
];

export default function FieldSwitch() {
  const [label, setLabel] = useState<string>("Exemplo");
  const [checked, setChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [size, setSize] = useState<ISwitchSizeDTO>("sm");
  const [color, setColor] = useState<boolean>(false);

  return (
    <FieldContainer>
      <legend>Switch</legend>
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
          <Switch.Root
            id="field-switch-main"
            label={label}
            checked={checked}
            setChecked={(value) => setChecked(value)}
            disabled={disabled}
            size={size}
            color={color}
          />
        </div>
      </FieldContent>

      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-switch-label">
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
          <Switch.Root
            id="field-switch-disabled"
            label="Desabilitado"
            checked={disabled}
            setChecked={(value) => setDisabled(value)}
          />
        </section>
        <section>
          <Radio.Root
            name="field-switch-size"
            title="Tamanho"
            options={optionsSize}
            checked={size}
            setChecked={(value) => setSize(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-button-color"
            label="Com cor"
            checked={color}
            setChecked={(value) => setColor(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
