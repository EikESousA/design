import { IInputVariantDTO } from "../../../InputRoot";

import { Container } from "./styles";

export interface IInputFieldLabelProps {
  label: string;
  // Options
  required?: boolean;
  // Clone
  variant?: IInputVariantDTO;
  // Test
  datatestid?: string;
}

export default function InputFieldLabel({
  label,
  // Options
  required = false,
  // Clone
  variant,
  // Test
  datatestid,
}: IInputFieldLabelProps) {
  return (
    <Container
      className={`label ${variant}`}
      data-testid={datatestid ? `${datatestid}-label` : null}
    >
      {label} {required ? <strong>*</strong> : null}
    </Container>
  );
}
