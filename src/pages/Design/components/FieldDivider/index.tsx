import { useState } from "react";

import { Switch, Divider } from "@/components";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

export default function FieldDivider() {
  const [horizontal, setHorizontal] = useState<boolean>(true);

  return (
    <FieldContainer>
      <legend>Divider</legend>
      <FieldContent>
        <div
          style={{
            minHeight: "60%",
            minWidth: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: horizontal ? "center" : "stretch",
            backgroundColor: "var(--aliases-100)",
            padding: "1rem",
            borderRadius: "2rem",
          }}
        >
          <Divider.Root horizontal={horizontal} />
        </div>
      </FieldContent>

      <FieldInfo>
        <section>
          <Switch.Root
            id="field-divider-horizontal"
            label="Horizontal"
            checked={horizontal}
            setChecked={(value) => setHorizontal(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
