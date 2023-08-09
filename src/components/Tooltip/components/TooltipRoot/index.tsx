import { RefObject, CSSProperties } from "react";

import { Container } from "./styles";

interface ITooltipRootProps {
  elRef: RefObject<HTMLDivElement>;
  label: string;
  visible: boolean;
  type: string;
  style: CSSProperties;
}

export default function TooltipRoot({
  elRef,
  label,
  visible,
  type,
  style,
}: ITooltipRootProps) {
  return (
    <Container
      ref={elRef}
      className={`${type} ${visible ? "on" : "off"}`}
      style={style}
    >
      <div className="arrow" />
      <p className="inner">{label}</p>
    </Container>
  );
}
