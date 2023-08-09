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
            minWidth: "60%",
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
          <Input.Root
            id="field-switch-label"
            name="label"
            variant="secondary"
            value={label}
            setValue={(value) => setLabel(value)}
            disabled={false}
          >
            <Input.Label
              variant="secondary"
              label="Label"
              placeholder="Label"
            />
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
