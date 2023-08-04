import { DragEvent } from "react";

import { IMouseDTO } from "@/pages/Nodes/hooks/datas/dtos/IDatasDTO";
import { IMenuDTO } from "@/pages/Nodes/dtos/IMenu";

interface IProps {
  event: DragEvent<HTMLDivElement>;
  nodeType: IMenuDTO;
  selectMouse: ({ x, y }: IMouseDTO) => void;
}

export default function onDragStart({ event, nodeType, selectMouse }: IProps) {
  const target = event.target as HTMLElement;

  event.dataTransfer.setData("create_node", JSON.stringify(nodeType));

  const { x, y } = target.getBoundingClientRect();

  selectMouse({
    x: event.clientX - x,
    y: event.clientY - y,
  });
}
