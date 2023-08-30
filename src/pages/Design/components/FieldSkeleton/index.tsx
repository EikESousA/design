import { useState } from "react";

import { Input, Radio, Skeleton } from "@/components";
import { ISekeltonTypeDTO } from "@/components/Skeleton/components/SkeletonRoot";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

const optionsType = [
  {
    label: "Circulo",
    value: "circle",
  },
  {
    label: "Retangulo",
    value: "rect",
  },
  {
    label: "Quadrado",
    value: "square",
  },
];

export default function FieldSkeleton() {
  const [type, setType] = useState<ISekeltonTypeDTO>("rect");
  const [height, setHeight] = useState<string>("8rem");
  const [width, setWidth] = useState<string>("20rem");

  return (
    <FieldContainer>
      <legend>Card</legend>
      <FieldContent>
        <Skeleton.Root type={type} height={height} width={width} />
      </FieldContent>
      <FieldInfo>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-skeleton-height">
              <Input.Field.Label label="Altura" />
              <Input.Field.Input
                name="height"
                value={height}
                setValue={(value) => setHeight(value)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Input.Root variant="secondary">
            <Input.Field.Root id="field-skeleton-width">
              <Input.Field.Label label="Largura" />
              <Input.Field.Input
                name="width"
                value={width}
                setValue={(value) => setWidth(value)}
              />
            </Input.Field.Root>
          </Input.Root>
        </section>
        <section>
          <Radio.Root
            name="field-skeleton=type"
            title="Tipo"
            options={optionsType}
            checked={type}
            setChecked={(value) => setType(value)}
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
