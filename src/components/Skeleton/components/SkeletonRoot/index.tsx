import { HtmlHTMLAttributes } from "react";

import { Container } from "./styles";

interface ISkeletonRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  type: "circle" | "rect" | "square";
  datatestid?: string;
}

export default function SkeletonRoot({ type, datatestid }: ISkeletonRootProps) {
  return <Container className={type} data-testid={datatestid} />;
}
