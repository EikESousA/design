import { ReactNode } from "react";

import { INodeDTO } from "../../../../dtos/INode";

import { Container } from "./styles";

interface IProps {
  node: INodeDTO;
  children: ReactNode;
}

export default function NodeRoot({ node, children }: IProps) {
  return (
    <Container
      id={`node-root-${node.id}`}
      className={`flowchart-node-root ${node.type}`}
      style={{ top: node.pos.y, left: node.pos.x }}
    >
      {children}
    </Container>
  );
}
