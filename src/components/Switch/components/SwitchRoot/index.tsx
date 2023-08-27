/* eslint-disable no-alert */
import { Container } from "./styles";

interface ISwitchRootProps {
  id?: string;
  label: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
  disabled?: boolean;
  size?: ISwitchSizeDTO;
  color?: boolean;
  datatestid?: string;
}

export type ISwitchSizeDTO = "sm" | "md" | "lg";

export default function SwitchRoot({
  id = "switch-example",
  label,
  checked = false,
  setChecked = () => alert("Botao apertado"),
  disabled = false,
  size = "md",
  color = false,
  datatestid,
}: ISwitchRootProps) {
  return (
    <Container
      htmlFor={id}
      className={`${disabled ? "disabled" : ""} ${size} ${
        color ? "color" : ""
      }`}
      data-testid={datatestid}
    >
      <input
        id={id}
        type="checkbox"
        checked={!!checked}
        onChange={() => setChecked(!checked)}
        disabled={disabled}
        data-testid={datatestid ? `${datatestid}-input` : null}
      />
      <div />
      <p>{label}</p>
    </Container>
  );
}
