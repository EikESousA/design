export interface INodeDTO {
  id: string;
  title: string;
  pos: INodePosDTO;
  type: string;
  sons: INodeLinkDTO[];
  fathers: INodeLinkDTO[];
}

export interface INodePosDTO {
  x: number;
  y: number;
}

export interface INodeLinkDTO {
  id: string;
  label: string | null;
  subnode_id: string | null;
}
