import { useDatas } from "../../hooks/datas";
import { Container } from "./styles";
import Xarrow from "react-xarrows";

export default function Links() {
  const { links } = useDatas();

  return (
    <Container>
      {links.length > 0 ? (
        <>
          {links.map((link) => (
            <Xarrow
              start={link.start}
              end={link.end}
              strokeWidth={2}
              curveness={0.5}
              gridBreak="50%"
              path="grid"
            />
          ))}
        </>
      ) : null}
    </Container>
  );
}
