/* eslint-disable no-alert */
import { useState } from "react";

import { Input, Switch, Radio } from "@/components";
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

export default function FieldInput() {
  const [value, setValue] = useState<string>("");
  const [label, setLabel] = useState<string>("Exemplo");
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
            minWidth: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input.Root variant={variant}>
            <Input.Field.Root id="field-input">
              {label ? <Input.Field.Label label={label} /> : null}
              {leftIcon ? <Input.Field.LeftIcon icon="profile" /> : null}
              <Input.Field.Input
                name="menu"
                value={value}
                setValue={(valueUpdate) => setValue(valueUpdate)}
                disabled={disabled}
                required={required}
              />
              {rightIcon ? <Input.Field.RightIcon icon="search" /> : null}
              {button ? (
                <Input.Field.Button
                  onClick={() => alert("Botao apertado")}
                  icon="send"
                  label={buttonLabel}
                  disabled={buttonDisabled}
                  loading={buttonLoading}
                />
              ) : null}
            </Input.Field.Root>
          </Input.Root>
        </div>
      </FieldContent>
      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-input-label">
              <Input.Field.Label label="Label" />
              <Input.Field.Input
                name="label"
                value={label}
                setValue={(updateValue) => setLabel(updateValue)}
                disabled={false}
              />
            </Input.Field.Root>
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
        <section>
          <Switch.Root
            id="field-input-leftIcon"
            label="Icone Esquerda"
            checked={leftIcon}
            setChecked={(updateValue) => setLeftIcon(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-rightIcon"
            label="Icone Direita"
            checked={rightIcon}
            setChecked={(updateValue) => setRightIcon(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-button"
            label="Botao"
            checked={button}
            setChecked={(updateValue) => setButton(updateValue)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-button-icon"
            label="Icone do Botao"
            checked={buttonIcon}
            setChecked={(updateValue) => setButtonIcon(updateValue)}
            disabled={!button}
          />
        </section>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-input-label-button">
              <Input.Field.Label label="Label do Botao" />
              <Input.Field.Input
                name="buttonLabel"
                value={buttonLabel}
                setValue={(updateValue) => setButtonLabel(updateValue)}
                disabled={!button}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Switch.Root
            id="field-input-button-disabled"
            label="Botao desabilitado"
            checked={buttonDisabled}
            setChecked={(updateValue) => setButtonDisabled(updateValue)}
            disabled={!button}
          />
        </section>
        <section>
          <Switch.Root
            id="field-input-button-loading"
            label="Botao carregando"
            checked={buttonLoading}
            setChecked={(updateValue) => setButtonLoading(updateValue)}
            disabled={!button}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
