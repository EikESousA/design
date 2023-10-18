import { ReactNode } from "react";

export interface IInputAlertRootProps {
  children: ReactNode;
  datatestid?: string;
}

export default function InputAlertRoot({
  children,
  datatestid,
}: IInputAlertRootProps) {
  return (
    <div data-testid={datatestid ? `${datatestid}-root` : null}>{children}</div>
  );
}
