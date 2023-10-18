import { Container } from "./styles";

export interface IInputAlertErrorProps {
  error: string;
  datatestid?: string;
}

export default function InputAlertError({
  error,
  datatestid,
}: IInputAlertErrorProps) {
  return (
    <Container
      className="error"
      data-testid={datatestid ? `${datatestid}-error` : null}
    >
      {error}
    </Container>
  );
}
