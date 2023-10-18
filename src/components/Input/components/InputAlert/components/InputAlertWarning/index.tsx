import { Container } from "./styles";

export interface IInputAlertWarningProps {
  warning: string;
  datatestid?: string;
}

export default function InputAlertWarning({
  warning,
  datatestid,
}: IInputAlertWarningProps) {
  return (
    <Container
      className="warning"
      data-testid={datatestid ? `${datatestid}-warning` : null}
    >
      {warning}
    </Container>
  );
}
