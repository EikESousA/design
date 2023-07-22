import {
  ICreateNodeProps,
  IMouseDTO,
  IUpdateNodePositionProps,
} from "@/pages/Home/hooks/datas/dtos/IDatasDTO";
import { DragEvent } from "react";

interface IProps {
  event: DragEvent<HTMLDivElement>;
  mouse: IMouseDTO;
  updateNodePosition: (value: IUpdateNodePositionProps) => void;
  createNode: (value: ICreateNodeProps) => void;
}

export default function onDrop({
  event,
  mouse,
  updateNodePosition,
  createNode,
}: IProps) {
  event.preventDefault();

  const target = event.target as HTMLElement;

  const node_id_move = event.dataTransfer.getData("move_node");

  if (node_id_move) {
    updateNodePosition({
      id: node_id_move,
      pos: {
        x: event.clientX - target.offsetLeft - mouse.x,
        y: event.clientY - target.offsetTop - mouse.y,
      },
    });

    const elem = document.getElementById(`node-${node_id_move}`);

    if (elem) {
      elem.style.height = `auto`;
      elem.classList.remove("over");
    }

    return;
  }

  const node_data = event.dataTransfer.getData("create_node");

  const node_data_formatted = JSON.parse(node_data);

  if (node_data_formatted.id) {
    createNode({
      pos: {
        x: event.clientX - target.offsetLeft - mouse.x,
        y: event.clientY - target.offsetTop - mouse.y,
      },
      type: node_data_formatted.id,
      title: node_data_formatted.label,
    });

    const elem = document.getElementById(`node-${node_id_move}`);

    if (elem) {
      elem.style.height = `auto`;
      elem.classList.remove("over");
    }
  }
}
