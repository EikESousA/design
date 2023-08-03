import { IInputVariantDTO } from "../InputRoot";
import { Container } from "./styles";

interface IInputLabelProps {
  variant?: IInputVariantDTO;
  label: string;
  placeholder?: string;
  required?: boolean;
  datatestid?: string;
}

export default function InputLabel({
  variant = "primary",
  label = "",
  placeholder = "",
  required = false,
  datatestid,
}: IInputLabelProps) {
  if (variant === "secondary" && label) {
    return (
      <Container data-testid={datatestid ? `${datatestid}-label` : null}>
        {label} {required ? <strong>*</strong> : null}
      </Container>
    );
  }

  if (variant !== "secondary" && (label || placeholder)) {
    return (
      <Container data-testid={datatestid ? `${datatestid}-label` : null}>
        {label} {required ? <strong>*</strong> : null}
      </Container>
    );
  }

  return <></>;
}
