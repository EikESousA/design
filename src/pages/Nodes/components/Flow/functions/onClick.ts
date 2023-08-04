import {
  IHandleLinkProps,
  ILinkSelectedDTO,
  IUpdateNodeLinkProps,
} from "@/pages/Home/hooks/datas/dtos/IDatasDTO";
import { MouseEvent } from "react";

interface IProps {
  event: MouseEvent<HTMLDivElement>;
  linkSelected: ILinkSelectedDTO;
  handleLink: ({
    active,
    input_node_id,
    output_node_id,
  }: IHandleLinkProps) => void;
  updateNodeLink: ({
    input_node_id,
    output_node_id,
  }: IUpdateNodeLinkProps) => void;
}

export default function onDragOver({
  event,
  linkSelected,
  handleLink,
  updateNodeLink,
}: IProps) {
  const target = event.target as HTMLElement;

  if (!target.id) {
    return;
  }

  if (target.id && target.id.split("node-link-").length === 1) {
    handleLink({
      active: false,
      input_node_id: null,
      output_node_id: null,
    });

    return;
  }

  const link = target.id.split("node-link-")[1];

  const [id, type] = link.split("#");

  if (
    (type === "in" && linkSelected.input_node_id === id) ||
    (type === "in" && linkSelected.output_node_id === id) ||
    (type === "out" && linkSelected.output_node_id === id) ||
    (type === "out" && linkSelected.input_node_id === id)
  ) {
    return;
  }

  if (type === "in" && linkSelected.output_node_id) {
    updateNodeLink({
      input_node_id: id,
      output_node_id: linkSelected.output_node_id,
    });

    handleLink({
      active: false,
      input_node_id: null,
      output_node_id: null,
    });

    return;
  }

  if (type === "out" && linkSelected.input_node_id) {
    updateNodeLink({
      input_node_id: linkSelected.input_node_id,
      output_node_id: id,
    });

    handleLink({
      active: false,
      input_node_id: null,
      output_node_id: null,
    });

    return;
  }

  handleLink({
    active: true,
    input_node_id: type === "in" ? id : linkSelected.input_node_id,
    output_node_id: type === "out" ? id : linkSelected.output_node_id,
  });
}
