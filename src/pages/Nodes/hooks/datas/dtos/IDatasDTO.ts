export interface ICreateNodeProps {
  pos: IPosProps;
  type: string;
  title: string;
}

export interface IUpdateNodePositionProps {
  id: string;
  pos: IPosProps;
}

export interface IUpdateNodeLinkProps {
  input_node_id: string;
  output_node_id: string;
}

export interface IHandleLinkProps {
  active: boolean;
  input_node_id: string | null;
  output_node_id: string | null;
}

interface IPosProps {
  x: number;
  y: number;
}

export interface IMouseDTO {
  x: number;
  y: number;
}

export interface ILinkSelectedDTO {
  active: boolean;
  input_node_id: string | null;
  output_node_id: string | null;
}
