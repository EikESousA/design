import { HtmlHTMLAttributes } from "react";

import { Container } from "./styles";

interface ISkeletonRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  type: ISekeltonTypeDTO;
  height?: string;
  width?: string;
  datatestid?: string;
}

export type ISekeltonTypeDTO = "circle" | "rect" | "square";

export default function SkeletonRoot({
  height = "100%",
  width = "100%",
  type,
  datatestid,
}: ISkeletonRootProps) {
  return (
    <Container
      className={type}
      style={{
        height,
        width: type === "circle" || type === "square" ? height : width,
      }}
      data-testid={datatestid}
    />
  );
}
