import { INodeDTO } from "@/pages/Nodes/dtos/INode";
import { IMouseDTO } from "@/pages/Nodes/hooks/datas/dtos/IDatasDTO";

interface IProps {
  node: INodeDTO;
  selectMouse: ({ x, y }: IMouseDTO) => void;
}

export default function onDragEnd({ node, selectMouse }: IProps) {
  const elemNode = document.getElementById(`node-root-${node.id}`);

  if (elemNode) {
    elemNode.style.height = `auto`;
    elemNode.classList.remove("over");
  }

  selectMouse({
    x: 0,
    y: 0,
  });
}
