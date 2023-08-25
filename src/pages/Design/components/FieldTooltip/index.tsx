/* eslint-disable no-alert */
import { useState } from "react";

import { Input, ButtonIcon } from "@/components";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

export default function FieldTooltip() {
  const [label, setLabel] = useState("Exemplo");

  return (
    <FieldContainer>
      <legend>Tooltip</legend>
      <FieldContent>
        <ButtonIcon.Root
          icon="delete"
          tooltip={label}
          onClick={() => alert("Botao apertado")}
        />
      </FieldContent>

      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-tooltip-label">
              <Input.Field.Label label="Label" />
              <Input.Field.Input
                name="label"
                value={label}
                setValue={(updateValue) => setLabel(updateValue)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
