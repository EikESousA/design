/* eslint-disable no-alert */
import { useState } from "react";

import { ButtonDefault, Switch, Radio, Input } from "@/components";
import {
  IButtonDefaultSizeDTO,
  IButtonDefaultVariantDTO,
} from "@/components/ButtonDefault/components/ButtonDefaultRoot";

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
  {
    label: "perigo",
    value: "danger",
  },
];

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
];

export default function FieldButtonDefault() {
  const [label, setLabel] = useState<string>("Exemplo");
  const [variant, setVariant] = useState<IButtonDefaultVariantDTO>("primary");
  const [size, setSize] = useState<IButtonDefaultSizeDTO>("sm");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [full, setFull] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [leftIcon, setLeftIcon] = useState<boolean>(false);
  const [rightIcon, setRightIcon] = useState<boolean>(false);

  return (
    <FieldContainer>
      <legend>Botão</legend>
      <FieldContent>
        <ButtonDefault.Root
          variant={variant}
          size={size}
          disabled={disabled}
          full={full}
          loading={loading}
          onClick={() => alert("Botao apertado")}
        >
          {leftIcon ? <ButtonDefault.LeftIcon icon="attachfile" /> : null}
          <ButtonDefault.Label
            label={label}
            loading={loading}
            variant={variant}
          />
          {rightIcon ? <ButtonDefault.RightIcon icon="delete" /> : null}
        </ButtonDefault.Root>
      </FieldContent>

      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-button-label">
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
          <Radio.Root
            name="field-button-variant"
            title="Variante"
            options={optionsVariant}
            checked={variant}
            setChecked={(value) => setVariant(value)}
          />
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
            id="field-button-disabled"
            label="Desabilitado"
            checked={disabled}
            setChecked={(value) => setDisabled(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-button-full"
            label="Completo"
            checked={full}
            setChecked={(value) => setFull(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-button-loading"
            label="Carregando"
            checked={loading}
            setChecked={(value) => setLoading(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-button-leftIcon"
            label="Icone Esquerda"
            checked={leftIcon}
            setChecked={(value) => setLeftIcon(value)}
          />
        </section>
        <section>
          <Switch.Root
            id="field-button-rightIcon"
            label="Icone Direita"
            checked={rightIcon}
            setChecked={(value) => setRightIcon(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
