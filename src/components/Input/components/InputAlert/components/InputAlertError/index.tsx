export interface IInputAlertErrorProps {
  error: string;
  datatestid?: string;
}

export default function InputAlertError({
  error,
  datatestid,
}: IInputAlertErrorProps) {
  return (
    <p
      className="error"
      data-testid={datatestid ? `${datatestid}-error` : null}
    >
      {error}
    </p>
  );
}
