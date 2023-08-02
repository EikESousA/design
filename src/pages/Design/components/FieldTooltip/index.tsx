import { useState } from "react";

import { Input, ButtonIcon } from "@/components";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

export default function FieldTooltip() {
  const [label, setLabel] = useState("Exemplo");

  return (
    <FieldContainer>
      <legend>Tooltip</legend>
      <FieldContent>
        <ButtonIcon.Root icon="delete" tooltip={label} onClick={() => {}} />
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
      </FieldInfo>
    </FieldContainer>
  );
}
