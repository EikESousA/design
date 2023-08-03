import { Container } from "./styles";

interface ICheckboxRootProps {
  name: string;
  checked: ICheckboxOptionsDTO[];
  setChecked: (value: ICheckboxOptionsDTO[]) => void;
  title?: string;
  disabled?: boolean;
  options: ICheckboxOptionsDTO[];
  msgEmpty?: string;
  horizontal?: boolean;
  required?: number;
  datatestid?: string;
}

export interface ICheckboxOptionsDTO {
  label: string;
  value: string;
  disabled?: boolean;
}

export default function CheckboxRoot({
  name,
  options,
  checked,
  setChecked,
  title,
  disabled = false,
  msgEmpty = "Não possui dados para selecionar!",
  horizontal = false,
  required = 0,
  datatestid,
}: ICheckboxRootProps) {
  function handleCheck(option: ICheckboxOptionsDTO) {
    const selectedIndex = checked.findIndex(
      (item) => item.value === option.value,
    );

    const updatedSelected = [...checked];

    if (selectedIndex >= 0) {
      updatedSelected.splice(selectedIndex, 1);
    } else {
      updatedSelected.push(option);
    }

    setChecked(updatedSelected);
  }

  return (
    <Container data-testid={datatestid}>
      {title ? <p className="title">{title}</p> : null}
      {options.length > 0 ? (
        <ul className={`${horizontal ? "horizontal" : "vertical"}`}>
          {options.map((option) => (
            <li key={option.value}>
              <label
                htmlFor={option.value}
                className={`${
                  checked.find((item) => item.value === option.value)
                    ? "checked"
                    : ""
                } ${option?.disabled ? "disabled" : ""}`}
                data-testid={
                  datatestid
                    ? `${datatestid}-label-${
                        disabled || option?.disabled ? "disabled" : "enabled"
                      }-${option.label}`
                    : null
                }
              >
                <input
                  type="checkbox"
                  id={option.value}
                  name={name}
                  value={option.value}
                  defaultChecked={
                    !!checked.find((item) => item.value === option.value) ||
                    false
                  }
                  disabled={disabled || option?.disabled}
                  onChange={() => handleCheck(option)}
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
        <p
          className="empty"
          data-testid={datatestid ? `${datatestid}-empty` : null}
        >
          {msgEmpty}
        </p>
      )}
      {required > 0 && checked.length < required ? (
        <p
          className="required"
          data-testid={datatestid ? `${datatestid}-required` : null}
        >{`Por favor selecione mais ${
          required - checked.length === 1
            ? `${required - checked.length} opção`
            : `${required - checked.length} opções`
        }`}</p>
      ) : null}
    </Container>
  );
}
