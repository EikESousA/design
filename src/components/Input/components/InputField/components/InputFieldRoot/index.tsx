/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
  useState,
} from "react";

import { IInputVariantDTO } from "../../../InputRoot";

import { Container } from "./styles";

export interface IInputFieldRootProps {
  id: string;
  children: ReactNode;
  // Clone
  variant?: IInputVariantDTO;
  // Test
  datatestid?: string;
}

export default function InputFieldRoot({
  id,
  children,
  variant,
  datatestid,
}: IInputFieldRootProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  return (
    <Container
      htmlFor={id}
      className={`${isFocused ? "focused" : ""} ${isFilled ? "filled" : ""} ${
        isRequired ? "required" : ""
      } ${variant}`}
      data-testid={datatestid ? `${datatestid}-field-root` : null}
    >
      {children
        ? Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child as ReactElement<any>, {
                  variant,
                  id,
                  setIsFilled,
                  setIsFocused,
                  setIsRequired,
                })
              : null,
          )
        : null}
    </Container>
  );
}
