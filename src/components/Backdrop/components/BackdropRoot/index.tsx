/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "./styles";

interface IBackdropRootProps {
  onClick: (value: any) => void;
  datatestid?: string;
}

export default function BackdropRoot({
  onClick,
  datatestid,
}: IBackdropRootProps) {
  return (
    <Container
      data-testid={datatestid}
      onClick={(value: any) => onClick(value)}
    />
  );
}
