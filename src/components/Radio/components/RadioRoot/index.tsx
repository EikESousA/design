import { Container } from "./styles";

interface IRadioRootProps {
  name?: string;
  checked: string;
  setChecked: (value: any) => void;
  title?: string | null;
  disabled?: boolean;
  options: IRadioOptionsDTO[];
  msgEmpty?: string;
  horizontal?: boolean;
  datatestid?: string;
}

export interface IRadioOptionsDTO {
  label: string;
  value: string;
  disabled?: boolean;
}

export default function RadioRoot({
  name = "radio-example",
  checked = "",
  setChecked,
  title = null,
  disabled = false,
  options = [],
  msgEmpty = "Não possui dados para selecionar!",
  horizontal = false,
  datatestid,
}: IRadioRootProps) {
  return (
    <Container data-testid={datatestid}>
      {title ? <p className="title">{title}</p> : null}
      {options.length > 0 ? (
        <ul className={`${horizontal ? "horizontal" : "vertical"}`}>
          {options.map((option) => (
            <li key={option.value}>
              <label
                htmlFor={option.value}
                className={`${option.value === checked ? "checked" : ""} ${
                  option?.disabled ? "disabled" : ""
                }`}
                data-testid={
                  datatestid
                    ? `${datatestid}-label-${
                        disabled || option?.disabled ? "disabled" : "enabled"
                      }-${option.label}`
                    : null
                }
              >
                <input
                  type="radio"
                  id={option.value}
                  name={name}
                  value={option.value}
                  defaultChecked={option.value === checked}
                  disabled={disabled || option?.disabled}
                  onChange={(event) => setChecked(event.currentTarget.value)}
                  autoComplete="off"
                  data-testid={
                    datatestid
                      ? `${datatestid}-input-${
                          disabled || option?.disabled ? "disabled" : "enabled"
                        }-${option.label}`
                      : null
                  }
                />
                <p>{option.label}</p>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">{msgEmpty} </p>
      )}
    </Container>
  );
}
