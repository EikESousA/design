import { useState } from "react";

import { Input, Switch, Radio } from "@/components";
import { FieldContainer, FieldContent, FieldInfo } from "../../styles";
import { IInputVariantDTO } from "@/components/Input/components/InputRoot";

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

export default function FieldInput() {
  const [value, setValue] = useState<string>("");
  const [label, setLabel] = useState<string>("Exemplo");
  const [placeholder, setPlaceholder] = useState<string>("Exemplo Placeholder");
  const [variant, setVariant] = useState<IInputVariantDTO>("primary");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [required, setRequired] = useState<boolean>(false);

  const [leftIcon, setLeftIcon] = useState<boolean>(false);
  const [rightIcon, setRightIcon] = useState<boolean>(false);

  const [button, setButton] = useState<boolean>(false);
  const [buttonIcon, setButtonIcon] = useState<boolean>(false);
  const [buttonLabel, setButtonLabel] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  return (
    <FieldContainer>
      <legend>Entrada Texto</legend>
      <FieldContent>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input.Root
            id="field-input-main"
            name="main"
            variant={variant}
            value={value}
            setValue={(value) => setValue(value)}
            disabled={disabled}
            required={required}
          >
            <Input.Label
              variant={variant}
              label={label}
              placeholder={placeholder}
            />

            {leftIcon ? <Input.LeftIcon icon="profile" /> : null}
            {rightIcon ? <Input.RightIcon icon="search" /> : null}

            {button ? (
              <Input.Button
                onClick={() => {}}
                icon="send"
                label={buttonLabel}
                disabled={buttonDisabled}
                loading={buttonLoading}
              />
            ) : null}
          </Input.Root>
        </div>
      </FieldContent>
      <FieldInfo>
        <section>
          <Input.Root
            id="field-input-label"
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
          <Input.Root
            id="field-input-placeholder"
            name="placeholder"
            variant="secondary"
            value={placeholder}
            setValue={(value) => setPlaceholder(value)}
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
            title={"Variante"}
            options={optionsVariant}
            checked={variant}
            setChecked={(value) => setVariant(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-disabled"
            label="Desabilitado"
            checked={disabled}
            setChecked={(value) => setDisabled(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-required"
            label="Obrigatorio"
            checked={required}
            setChecked={(value) => setRequired(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-leftIcon"
            label="Icone Esquerda"
            checked={leftIcon}
            setChecked={(value) => setLeftIcon(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-rightIcon"
            label="Icone Direita"
            checked={rightIcon}
            setChecked={(value) => setRightIcon(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-button"
            label="Botao"
            checked={button}
            setChecked={(value) => setButton(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-button-icon"
            label="Icone do Botao"
            checked={buttonIcon}
            setChecked={(value) => setButtonIcon(value)}
            disabled={!button}
          />
        </section>
        <section>
          <Input.Root
            id="field-input-label-button"
            name="buttonLabel"
            variant="secondary"
            value={buttonLabel}
            setValue={(value) => setButtonLabel(value)}
            disabled={!button}
          >
            <Input.Label
              variant="secondary"
              label="Label do Botao"
              placeholder="Label do Botao"
            />
          </Input.Root>
        </section>
        <section>
          <Switch.Root
            id="field-input-button-disabled"
            label="Botao desabilitado"
            checked={buttonDisabled}
            setChecked={(value) => setButtonDisabled(value)}
            disabled={!button}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-button-loading"
            label="Botao carregando"
            checked={buttonLoading}
            setChecked={(value) => setButtonLoading(value)}
            disabled={!button}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
