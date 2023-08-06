import { IInputVariantDTO } from "../InputRoot";

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
      <p
        className="label"
        data-testid={datatestid ? `${datatestid}-label` : null}
      >
        {label} {required ? <strong>*</strong> : null}
      </p>
    );
  }

  if (variant !== "secondary" && (label || placeholder)) {
    return (
      <p
        className="label"
        data-testid={datatestid ? `${datatestid}-label` : null}
      >
        {label} {required ? <strong>*</strong> : null}
      </p>
    );
  }

  return <></>;
}
