import { useState } from "react";

import { Switch, Input, Link, Radio } from "@/components";

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
  {
    label: "muito grande",
    value: "xl",
  },
];

export default function FieldLink() {
  const [label, setLabel] = useState<string>("Login");
  const [url, setUrl] = useState<string>("/");
  const [size, setSize] = useState<string>("md");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [newTab, setNewTab] = useState<boolean>(false);

  return (
    <FieldContainer>
      <legend>Link</legend>
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
          <Link.Root
            label={label}
            url={url}
            size={size}
            newTab={newTab}
            disabled={disabled}
          />
        </div>
      </FieldContent>

      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-link-label">
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
            <Input.Field.Root id="field-link-url">
              <Input.Field.Label label="URL" />
              <Input.Field.Input
                name="url"
                value={url}
                setValue={(value) => setUrl(value)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Radio.Root
            name="field-button-size"
            title="Tamanho"
            options={optionsSize}
            checked={size}
            setChecked={(value) => setSize(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-link-newTab"
            label="Abrir nova aba"
            checked={newTab}
            setChecked={(value) => setNewTab(value)}
          />
        </section>

        <section>
          <Switch.Root
            id="field-link-disabled"
            label="Desabilitado"
            checked={disabled}
            setChecked={(value) => setDisabled(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
