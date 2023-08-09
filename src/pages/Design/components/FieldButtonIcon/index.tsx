/* eslint-disable no-alert */
import { useState } from "react";

import { ButtonIcon, Switch, Radio } from "@/components";
import {
  IButtonIconSizeDTO,
  IButtonIconVariantDTO,
} from "@/components/ButtonIcon/components/ButtonIconRoot";

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

export default function FieldButtonIcon() {
  const [variant, setVariant] = useState<IButtonIconVariantDTO>("primary");
  const [size, setSize] = useState<IButtonIconSizeDTO>("sm");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [full, setFull] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [badge, setBadge] = useState<boolean>(false);

  return (
    <FieldContainer>
      <legend>Botão Icone</legend>
      <FieldContent>
        <ButtonIcon.Root
          icon="delete"
          variant={variant}
          size={size}
          full={full}
          disabled={disabled}
          loading={loading}
          onClick={() => alert("Botao apertado")}
        >
          {badge ? <ButtonIcon.Badge number={1} /> : null}
        </ButtonIcon.Root>
      </FieldContent>

      <FieldInfo>
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
            id="field-button-badge"
            label="Medalha"
            checked={badge}
            setChecked={(value) => setBadge(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
