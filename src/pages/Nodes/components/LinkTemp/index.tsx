import { useMemo } from "react";

import { Container } from "./styles";

export default function LinkTemp() {
  function getPos() {
    return {
      x1: 172,
      x2: 227,
      y1: 65,
      y2: 153.59375,
    };
  }

  const pos = useMemo(() => getPos(), []);

  return (
    <Container id="flowchart-link-temporary">
      <line
        x1={pos.x1}
        x2={pos.x2}
        y1={pos.y1}
        y2={pos.y2}
        strokeDasharray="6,6"
        strokeWidth="4"
        stroke="black"
        fill="none"
      />
    </Container>
  );
}
