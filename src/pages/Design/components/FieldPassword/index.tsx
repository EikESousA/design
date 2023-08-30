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
  const [variant, setVariant] = useState<IInputVariantDTO>("primary");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [required, setRequired] = useState<boolean>(false);
  const [strength, setStrength] = useState<boolean>(false);

  return (
    <FieldContainer>
      <legend>Entrada Senha</legend>
      <FieldContent>
        <form
          style={{
            width: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Password.Root
            id="field-password-main"
            name="main"
            variant={variant}
            value={value}
            setValue={(updateValue) => setValue(updateValue)}
            disabled={disabled}
            required={required}
            autoComplete="current-password"
          >
            {strength ? <Password.Level value={value} /> : null}
          </Password.Root>
        </form>
      </FieldContent>
      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-password-label">
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
          <Radio.Root
            name="field-password-variant"
            title="Variante"
            options={optionsVariant}
            checked={variant}
            setChecked={(updateValue) => setVariant(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-password-disabled"
            label="Desabilitado"
            checked={disabled}
            setChecked={(updateValue) => setDisabled(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-password-required"
            label="Obrigatorio"
            checked={required}
            setChecked={(updateValue) => setRequired(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-password-level"
            label="Força"
            checked={strength}
            setChecked={(updateValue) => setStrength(updateValue)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
