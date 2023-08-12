import { Container } from "./styles";

interface INotificationTextProps {
  title: string;
  subtitle?: string;
}

export default function NotificationText({
  title,
  subtitle,
}: INotificationTextProps) {
  return (
    <Container>
      <p>{title}</p>
      {subtitle ? <span>{subtitle}</span> : null}
    </Container>
  );
}
