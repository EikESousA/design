import { formatDate } from "@/utils";

import { Container } from "./styles";

interface NotificationDateProps {
  date: string;
}

export default function NotificationDate({ date }: NotificationDateProps) {
  return (
    <Container>
      {formatDate({ date, format: "dd/MM/yyyy 'às' HH:mm" })}
    </Container>
  );
}
