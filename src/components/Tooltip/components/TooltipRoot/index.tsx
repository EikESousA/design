import { RefObject, CSSProperties, ReactNode } from "react";

import { Container } from "./styles";

interface ITooltipRootProps {
  elRef: RefObject<HTMLDivElement>;
  visible: boolean;
  type: string;
  style: CSSProperties;
  children: ReactNode;
}

export default function TooltipRoot({
  elRef,
  visible,
  type,
  style,
  children,
}: ITooltipRootProps) {
  return (
    <Container
      ref={elRef}
      className={`${type} ${visible ? "on" : "off"}`}
      style={style}
    >
      <div className="arrow" />
      <p className="inner">{children}</p>
    </Container>
  );
}
