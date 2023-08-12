/* eslint-disable no-alert */
import { ReactNode } from "react";

import { Container } from "./styles";

interface INotificationRootProps {
  children: ReactNode;
}

export default function NotificationRoot({ children }: INotificationRootProps) {
  return <Container>{children}</Container>;
}
