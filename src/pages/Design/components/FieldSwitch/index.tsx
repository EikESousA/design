import { useState } from "react";

import { Switch, Input } from "@/components";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

export default function FieldSwitch() {
  const [label, setLabel] = useState<string>("Exemplo");
  const [checked, setChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

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
            disabled={disabled}
            setChecked={(value) => setChecked(value)}
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
      </FieldInfo>
    </FieldContainer>
  );
}
