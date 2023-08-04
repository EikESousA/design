import { DragEvent } from "react";

import { useDatas } from "../../hooks/datas";
import { onClick, onDragOver, onDrop } from "./functions";
import { Container } from "./styles";

import { Links, Node } from "..";

export default function Flow() {
  const {
    updateNodePosition,
    updateNodeLink,
    createNode,
    nodes,
    mouse,
    handleLink,
    linkSelected,
  } = useDatas();

  return (
    <Container>
      <div
        id="flowchart"
        onDrop={(event: DragEvent<HTMLDivElement>) =>
          onDrop({ event, mouse, updateNodePosition, createNode })
        }
        onDragOver={(event: DragEvent<HTMLDivElement>) => onDragOver({ event })}
        onClick={(event) =>
          onClick({ event, linkSelected, handleLink, updateNodeLink })
        }
      >
        {nodes.map((node) => (
          <Node.Root key={`flowchart-node-root-key-${node.id}`} node={node}>
            <Node.Link node={node} link_type="in" />
            <Node.Header node={node} />
            <Node.Main />
            <Node.Link node={node} link_type="out" />
          </Node.Root>
        ))}

        {/* <LinkTemp /> */}

        <Links />
      </div>
    </Container>
  );
}
