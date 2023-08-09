import { DragEvent } from "react";

import { INodeDTO } from "@/pages/Nodes/dtos/INode";
import { IMouseDTO } from "@/pages/Nodes/hooks/datas/dtos/IDatasDTO";

interface IProps {
  event: DragEvent<HTMLDivElement>;
  selectMouse: ({ x, y }: IMouseDTO) => void;
  node: INodeDTO;
}

export default function onDragStart({ event, selectMouse, node }: IProps) {
  const target = event.target as HTMLElement;

  event.dataTransfer.setData("move_node", node.id);

  const { x, y } = target.getBoundingClientRect();

  selectMouse({
    x: event.clientX - x,
    y: event.clientY - y,
  });

  const elemNode = document.getElementById(`node-root-${node.id}`);

  if (elemNode) {
    const { height } = elemNode.getBoundingClientRect();

    elemNode.style.height = `${height}px`;
    elemNode.classList.add("over");
  }
}
