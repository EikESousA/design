import { useState, useEffect, ChangeEvent, useMemo, ReactNode } from "react";

import { Container } from "./styles";

export interface IInputRootProps {
  id?: string;
  variant?: IInputVariantDTO;
  name: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  full?: boolean;
  type?: "text" | "password";
  datatestid?: string;
  children?: ReactNode[] | ReactNode;
}

export type IInputVariantDTO = "primary" | "secondary" | "tertiary";

export default function InputRoot({
  id,
  variant = "primary",
  name,
  placeholder = "",
  value,
  setValue,
  required = false,
  disabled = false,
  error,
  full = false,
  type = "text",
  datatestid,
  children,
}: IInputRootProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(value.length > 0);
  }

  useEffect(() => {
    setIsFilled(value.length > 0);
  }, [value.length]);

  const childrenComponents = useMemo(() => getChildrens(children), [children]);

  return (
    <Container
      htmlFor={id}
      className={`${variant} ${isFocused ? "focused" : ""} ${
        isFilled ? "filled" : ""
      } ${disabled ? "disabled" : ""}
      ${full ? "full" : ""}
      ${childrenComponents.lefticon ? "left-icon" : ""}
      ${childrenComponents.righticon ? "right-icon" : ""}`}
      data-testid={datatestid}
    >
      {childrenComponents.label}

      <div className="input">
        {childrenComponents.lefticon}

        <input
          id={id}
          type={type}
          value={value}
          name={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValue(event.currentTarget.value)
          }
          onFocus={() => handleInputFocus()}
          onBlur={() => handleInputBlur()}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          data-testid={datatestid ? `${datatestid}-input` : null}
        />

        {childrenComponents.righticon}
      </div>

      {error ? (
        <p
          className="error"
          data-testid={datatestid ? `${datatestid}-error` : null}
        >
          {error}
        </p>
      ) : null}

      {childrenComponents.button}
    </Container>
  );
}
