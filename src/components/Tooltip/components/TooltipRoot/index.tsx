import { Container } from "./styles";
import { RefObject, CSSProperties } from "react";

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
      <div className="arrow"></div>
      <p className="inner">{label}</p>
    </Container>
  );
}
