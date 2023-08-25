/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";

import { Container } from "./styles";

export interface IInputRootProps {
  children: ReactNode;
  variant?: IInputVariantDTO;
  datatestid?: string;
}

export type IInputVariantDTO = "primary" | "secondary" | "tertiary";

export default function InputRoot({
  variant = "primary",
  datatestid,
  children,
}: IInputRootProps) {
  return (
    <Container data-testid={datatestid}>
      {children
        ? Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child as ReactElement<any>, {
                  variant,
                })
              : null,
          )
        : null}
    </Container>
  );
}
