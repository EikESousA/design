import { DragEvent } from "react";

interface IProps {
  event: DragEvent<HTMLDivElement>;
}

export default function onDragOver({ event }: IProps) {
  event.preventDefault();
}
