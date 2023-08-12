import { ReactNode } from "react";

import { Container } from "./styles";

interface INotificationButtonsProps {
  children: ReactNode;
}

export default function NotificationButtons({
  children,
}: INotificationButtonsProps) {
  return <Container>{children}</Container>;
}
