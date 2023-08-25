export interface IInputAlertWarningProps {
  warning: string;
  datatestid?: string;
}

export default function InputAlertWarning({
  warning,
  datatestid,
}: IInputAlertWarningProps) {
  return (
    <p
      className="warning"
      data-testid={datatestid ? `${datatestid}-warning` : null}
    >
      {warning}
    </p>
  );
}
