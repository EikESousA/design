import { useState } from "react";

import { Input, Switch, Radio, Password } from "@/components";
import { IInputVariantDTO } from "@/components/Input/components/InputRoot";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

const optionsVariant = [
  {
    label: "primario",
    value: "primary",
  },
  {
    label: "secundario",
    value: "secondary",
  },
  {
    label: "terciario",
    value: "tertiary",
  },
];

export default function FieldPassword() {
  const [value, setValue] = useState<string>("");
  const [label, setLabel] = useState<string>("Exemplo");
  const [placeholder, setPlaceholder] = useState<string>("Exemplo Placeholder");
  const [variant, setVariant] = useState<IInputVariantDTO>("primary");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [required, setRequired] = useState<boolean>(false);

  return (
    <FieldContainer>
      <legend>Entrada Senha</legend>
      <FieldContent>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Password.Root
            id="field-input-main"
            name="main"
            variant={variant}
            value={value}
            setValue={(updateValue) => setValue(updateValue)}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
          >
            <Password.Level value={value} />
          </Password.Root>
        </div>
      </FieldContent>
      <FieldInfo>
        <section>
          <Input.Root
            id="field-input-label"
            name="label"
            variant="secondary"
            value={label}
            setValue={(updateValue) => setLabel(updateValue)}
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
          <Input.Root
            id="field-input-placeholder"
            name="placeholder"
            variant="secondary"
            value={placeholder}
            setValue={(updateValue) => setPlaceholder(updateValue)}
            disabled={false}
          >
            <Input.Label
              variant="secondary"
              label="Placeholder"
              placeholder="Placeholder"
            />
          </Input.Root>
        </section>
        <section>
          <Radio.Root
            name="field-input-variant"
            title="Variante"
            options={optionsVariant}
            checked={variant}
            setChecked={(updateValue) => setVariant(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-disabled"
            label="Desabilitado"
            checked={disabled}
            setChecked={(updateValue) => setDisabled(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-required"
            label="Obrigatorio"
            checked={required}
            setChecked={(updateValue) => setRequired(updateValue)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
