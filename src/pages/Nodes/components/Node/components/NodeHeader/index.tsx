import { DragEvent } from "react";

import { INodeDTO } from "../../../../dtos/INode";
import { useDatas } from "../../../../hooks/datas";
import { onDragEnd, onDragOver, onDragStart } from "../../functions";
import { Container } from "./styles";
import { Icon } from "@/components";

interface IProps {
  node: INodeDTO;
}

export default function NodeHeader({ node }: IProps) {
  const { selectMouse, removeNode } = useDatas();

  return (
    <Container
      id={`node-header-${node.id}`}
      className="flowchart-node-header"
      draggable
      onDragStart={(event: DragEvent<HTMLDivElement>) =>
        onDragStart({ event, selectMouse, node })
      }
      onDragOver={(event: DragEvent<HTMLDivElement>) => onDragOver({ event })}
      onDragEnd={() => onDragEnd({ node, selectMouse })}
    >
      <div></div>
      <p>{node.title}</p>
      <button type="button" onClick={() => removeNode(node.id)}>
        <Icon.Root icon="delete" />
      </button>
    </Container>
  );
}
