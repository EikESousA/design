import { IMouseDTO } from "@/pages/Nodes/hooks/datas/dtos/IDatasDTO";

interface IProps {
  selectMouse: ({ x, y }: IMouseDTO) => void;
}

export default function onDragEnd({ selectMouse }: IProps) {
  selectMouse({
    x: 0,
    y: 0,
  });
}
