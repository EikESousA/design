import { INodeDTO } from "../../../../dtos/INode";
import { useDatas } from "../../../../hooks/datas";
import { Container } from "./styles";

interface IProps {
  node: INodeDTO;
  link_type: "in" | "out";
}

export default function NodeLink({ node, link_type }: IProps) {
  const { linkSelected } = useDatas();

  return (
    <Container
      id={`node-link-${node.id}#${link_type}`}
      className={`flowchart-node-link flowchart-node-link-${link_type} ${
        link_type === "in" && linkSelected.input_node_id === node.id
          ? "active"
          : ""
      } ${
        link_type === "out" && linkSelected.output_node_id === node.id
          ? "active"
          : ""
      } ${link_type === "in" && node.fathers.length === 0 ? "show" : ""}
      ${link_type === "out" && node.sons.length === 0 ? "show" : ""}`}
      aria-label={`flowchart-node-link-${link_type}`}
    />
  );
}
