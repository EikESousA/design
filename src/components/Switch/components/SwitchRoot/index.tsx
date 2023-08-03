import { Container } from "./styles";

interface ISwitchRootProps {
  id?: string;
  label: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
  disabled?: boolean;
  datatestid?: string;
}

export default function SwitchRoot({
  id = "switch-example",
  label,
  checked = false,
  setChecked = () => {},
  disabled = false,
  datatestid,
}: ISwitchRootProps) {
  return (
    <Container
      htmlFor={id}
      className={`${disabled ? "disabled" : ""}`}
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
      <div></div>
      <p>{label}</p>
    </Container>
  );
}
