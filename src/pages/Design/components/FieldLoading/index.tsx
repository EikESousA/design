import { useState } from "react";

import { Loading, Radio } from "@/components";
import { FieldContainer, FieldContent, FieldInfo } from "../../styles";
import {
  ILoadingSizeDTO,
  ILoadingVariantDTO,
} from "@/components/Loading/components/LoadingRoot";

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
    label: "perigo",
    value: "danger",
  },
];

const optionsSize = [
  {
    label: "muito pequeno",
    value: "xs",
  },
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

export default function FieldLoading() {
  const [variant, setVariant] = useState<ILoadingVariantDTO>("primary");
  const [size, setSize] = useState<ILoadingSizeDTO>("sm");

  return (
    <FieldContainer>
      <legend>Loading Spinner</legend>
      <FieldContent>
        <div>
          <Loading.Root variant={variant} size={size} />
        </div>
      </FieldContent>

      <FieldInfo>
        <section>
          <Radio.Root
            name="field-button-variant"
            title={"Variante"}
            options={optionsVariant}
            checked={variant}
            setChecked={(value) => setVariant(value)}
          />
        </section>
        <section>
          <Radio.Root
            name="field-button-size"
            title={"Tamanho"}
            options={optionsSize}
            checked={size}
            setChecked={(value) => setSize(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
