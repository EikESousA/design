import { Toast } from "..";

import { IToastMessageDTO } from "../..";

import { Container } from "./styles";

interface IToastsProps {
  messages: IToastMessageDTO[];
}

export default function Toasts({ messages }: IToastsProps) {
  return (
    <Container>
      {messages.map((item: IToastMessageDTO) => (
        <Toast key={item.id} message={item} />
      ))}
    </Container>
  );
}
