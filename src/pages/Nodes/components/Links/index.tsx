import Xarrow from "react-xarrows";

import { useDatas } from "../../hooks/datas";
import Label from "./components/Label";

import { Container } from "./styles";

export default function Links() {
  const { links } = useDatas();

  return (
    <Container>
      {links.length > 0 ? (
        <>
          {links.map((link) => (
            <Xarrow
              key={`flowchart-link-arrow-${link.id}`}
              start={link.start}
              end={link.end}
              strokeWidth={2}
              gridBreak="50%"
              path="grid"
              endAnchor="top"
              startAnchor="bottom"
              labels={<Label />}
            />
          ))}
        </>
      ) : null}
    </Container>
  );
}
